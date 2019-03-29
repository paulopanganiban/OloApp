using System.Threading.Tasks;
using OloApp.API.Models;

namespace OloApp.API.Data
{
    public interface IAuthRepository
    {
         // (1) register of the user
         // (2) method to login in our api
         // ()
         Task<User> Register (User user, string password);
         Task<User> Login (string username, string password);
         Task<bool> UserExists(string username);

         // Sa interface, dito mo gagawin yung parang model? LOL.
         // then gawa ng concrete repository.
         // new c# class
    }
}