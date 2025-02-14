using System.ComponentModel.DataAnnotations;

namespace EventListingAPI.Models
{
    public class Event
    {
        [Key] // Primary Key
        public int Id { get; set; }

        [Required]
        [MaxLength(30)] // Matches nvarchar(30) in SQL
        public string Title { get; set; }

        [Required]
        public DateTime Date { get; set; } // Matches datetime in SQL

        [Required]
        [MaxLength(50)] // Matches nvarchar(50) in SQL
        public string Location { get; set; }
    }
}
