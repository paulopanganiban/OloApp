using System.ComponentModel.DataAnnotations;

namespace OloApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4,
        ErrorMessage = "You must specifiy password 4-8 characters")]
        public string Password { get; set; }
    }
}