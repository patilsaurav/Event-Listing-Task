using Microsoft.EntityFrameworkCore;
using EventListingAPI.Models;

namespace EventListingAPI.Data
{
    public class EventContext : DbContext
    {
        public EventContext(DbContextOptions<EventContext> options) : base(options)
        {
        }

        public DbSet<Event> Events { get; set; } // Maps to the SQL table
    }
}
