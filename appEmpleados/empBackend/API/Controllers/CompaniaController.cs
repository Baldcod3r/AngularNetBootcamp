using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Dtos;
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

        private ResponseDto _response;
        public CompaniaController(ApplicationDbContext db)
        {
            _db = db;
            _response = new ResponseDto();
            
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Compania>>> GetCompanias() {
            
            var lista = await _db.Compania.ToListAsync();
            _response.Resultado = lista;
            _response.Mensaje = "Listado de Compania";

            return  Ok(_response);
        }

        [HttpGet("{id}", Name = "GetCompania")]
        public async Task<ActionResult<Compania>> GetCompania(int id) 
        {
            var comp = await _db.Compania.FindAsync(id);
            _response.Resultado = comp;
            _response.Mensaje = "Datos de la Compania" + comp .IdCompania;
            
            return Ok(_response);
        }

        [HttpPost]

        public async Task<ActionResult<Compania>> PostCompania([FromBody] Compania compania)
        {
            await _db.Compania.AddAsync(compania);
            await _db.SaveChangesAsync();

            return CreatedAtRoute("GetCompania", new { id = compania.IdCompania }, compania);//Status code 201
        }


        [HttpPut]

        public async Task<ActionResult<Compania>> UpdateCompania(int id, [FromBody] Compania compania) {
            if (id != compania.IdCompania)
            {
                return BadRequest("El id de compania no coincide");
            }
            
            _db.Update(compania);

            await _db.SaveChangesAsync();

            return Ok(compania);
        }


        [HttpDelete]

        public async Task<ActionResult> DeleteCompania(int id) 
        {

            var comp = await _db.Compania.FindAsync(id);

            if(comp == null){
                return NotFound();
            }

            _db.Compania.Remove(comp);

            await _db.SaveChangesAsync();
            return NoContent();
        }

    }
}