using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.Clases
{
    public class Revista : Publicacion
    {
        public double Precio { get; set; }


        public Revista(string titulo, string autor, int paginas, double precio) : base(titulo, autor, paginas)
        {
            this.Precio = precio;
        }


        public override string ObtenerDescripcion() {
            return $"Revista {this.Titulo} escrito por {this.Autor} con {this.Paginas} paginas con precio {this.Precio}";
        }
    }
}