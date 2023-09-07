using System.ComponentModel.DataAnnotations;

namespace BookApp.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Cover { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public int Pages { get; set; }
        public Book() 
        {
            Cover = "https://img.freepik.com/darmowe-wektory/nowoczesny-znak-zapytania-dla-strony-pomocy-i-wsparcia_1017-27395.jpg?w=2000";
            Title = "Title";
            Author = "Author";
            Description = "Description";
            Pages = 0;
        }
    }
}
