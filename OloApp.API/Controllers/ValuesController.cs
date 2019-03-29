using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OloApp.API.Data;

namespace OloApp.API.Controllers
{
    //For the use of JWT Token
    [Authorize]
    // http://localhost:5000/api/values
    [Route("api/[controller]")]
    [ApiController]
    // What is ApiController
    // Kailangan ispecify yung Route.

    public class ValuesController : ControllerBase 
    // ControllerBase kasi View natin ay yung angular.
    {
        // 3.1
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
           _context = context;

        }
        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            // create a var
            // _context.Values.ToList() returns a list.
            var values = await _context.Values.ToListAsync();
            return Ok(values);
            // return to the client var values.
        }

        // GET api/values/5
        [HttpGet("{idParameter}")]
        public async Task<IActionResult> GetValue(int idParameter)
        {
            // getting a specific value FirstOrDefault
            //
            var value = await _context.Values.FirstOrDefaultAsync(valueToReturn => valueToReturn.Id == idParameter);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
