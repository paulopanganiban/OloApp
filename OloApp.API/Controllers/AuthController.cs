using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using OloApp.API.Data;
using OloApp.API.DTOs;
using OloApp.API.Models;

namespace OloApp.API.Controllers
{
    [Route("api/[controller]")]
    //api/auth
    [ApiController]
    public class AuthController : ControllerBase
    {
        // inject AuthRepo service
        // 11.1
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo,

        IConfiguration config)
        {
            _config = config;
            _repo = repo;
        }
        [HttpPost("register")]
        //api/auth/register para ma call tong PostMethod
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            // validate request
            // username to lower.
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            if (await _repo.UserExists(userForRegisterDto.Username))
                return BadRequest("Username already exists!");

            // pag available na, create ze user
            var userToCreate = new User
            {
                Username = userForRegisterDto.Username
            };
            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);
            //
            return StatusCode(201);
        }
        [HttpPost("login")]
        //api/auth/login
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            // check if user exists
            var oloUserFromRepo = await _repo.
            Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);
            if (userForLoginDto == null)
            {
                return Unauthorized();
            }
            // build a JWT TOKEN
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, oloUserFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, oloUserFromRepo.Username)
            };
            var key = new SymmetricSecurityKey(
                Encoding.UTF8
            .GetBytes(
                _config.GetSection("AppSettings:Token").Value
            ));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);
            // Returning token as an object
            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}