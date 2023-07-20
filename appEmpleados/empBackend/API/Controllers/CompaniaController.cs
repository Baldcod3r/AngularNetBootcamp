using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entidades;
using Infraestructura.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompaniaController : ControllerBase
    {


        private readonly ApplicationDbContext _db;
        public CompaniaController(ApplicationDbContext db)
        {
            _db = db;
            
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Compania>>> GetCompanias() {
            
            var lista = await _db.Compania.ToListAsync();

            return  Ok(lista);
        }

        



    }
}