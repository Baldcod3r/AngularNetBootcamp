using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entidades
{
    public class Empleado
    {
        [Key]
        public int IdEmpleado { get; set; }

        public string Apellido { get; set; }
        public string Nombre { get; set; }
        public string  Cargo { get; set; }
        
        public int IdCompania { get; set; }

    [ForeignKey("IdCompania")]
        public Compania Compania { get; set; }
    }
}