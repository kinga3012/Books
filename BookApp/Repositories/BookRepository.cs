using BookApp.Data;
using BookApp.Interfaces;
using BookApp.Models;
using Microsoft.EntityFrameworkCore;

namespace BookApp.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly ApplicationDbContext _context;
        public BookRepository(ApplicationDbContext context)
        {
            this._context = context;
        }
        public async Task<IEnumerable<Book>> GetAll()
        {
            return await _context.Books.ToArrayAsync();
        }
    }
}
