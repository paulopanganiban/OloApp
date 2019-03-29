using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OloApp.API.Models;

namespace OloApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _db;
        public AuthRepository(DataContext db)
        {
            this._db = db;

        }
        public async Task<User> Login(string username, string password)
        {
            // FirstOrDefault async takes an expression.
            // kung ano hinahanap. lambda expression
            var user = await _db.Users.
            FirstOrDefaultAsync(varOLOToStore => varOLOToStore.Username == username);
            if (user == null)
                return null;
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            //
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                // it matches.
                return true;
            };
        }

        public async Task<User> Register(User user, string password)
        {

            byte[] passwordHash, passwordSalt;
            // out dahil naka reference yung password hash and password salt.
            // pag naupdate password hash sa CreatePasswordHash(),
            // mag update din yung pwHash, pwSalt sa taas. ok cool.
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            // Add Async is adding it to the database. which is 
            // the user parameter.
            await _db.Users.AddAsync(user);
            // save changes back to database.
            await _db.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            // System Security Class.

            // HMACSHA512 creates a random key.
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            };
            // dahil naka out siya kaya hindi need ng return. 
        }

        public async Task<bool> UserExists(string username)
        {
            // AnyAsync compare parameters inside database.
            // create a lambda expression
            if (await _db.Users.AnyAsync(varOLO => varOLO.Username == username))
            {
                // because UserExists ba? 
                // return true which is oo meron!
                return true;
            }
            return false;
        }
    }
}