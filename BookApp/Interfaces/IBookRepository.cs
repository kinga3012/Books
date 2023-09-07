using BookApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookApp.Interfaces
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAll();
    }
}
