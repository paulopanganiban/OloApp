using Microsoft.EntityFrameworkCore;
using OloApp.API.Models;

namespace OloApp.API.Data
{
    public class DataContext : DbContext
    {
        // 2.1
        public DataContext(DbContextOptions<DataContext> options) :
        base(options)
        { }
        // 2.2
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}