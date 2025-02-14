using Microsoft.AspNetCore.Mvc;
using EventListingAPI.Data;
using EventListingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EventListingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly EventContext _context;

        public EventsController(EventContext context)
        {
            _context = context;
        }

        // GET: api/events
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            return await _context.Events.ToListAsync();
        }

        // POST: api/events
        [HttpPost]
        public IActionResult AddEvent([FromBody] Event newEvent)
        {
            if (newEvent == null)
            {
                return BadRequest("Event data is required.");
            }

            _context.Events.Add(newEvent);
            _context.SaveChanges(); // This ensures data is saved to the database permanently
            return Ok(newEvent);
        }

        // DELETE: api/events/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var eventToDelete = await _context.Events.FindAsync(id);
            if (eventToDelete == null)
            {
                return NotFound("Event not found.");
            }

            _context.Events.Remove(eventToDelete);
            await _context.SaveChangesAsync(); // Save changes to the database

            return NoContent(); // Return success response
        }


    }
}
