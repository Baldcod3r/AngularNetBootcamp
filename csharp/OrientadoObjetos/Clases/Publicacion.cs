using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.Clases
{
    public class Publicacion
    {
        public string Titulo { get; set; }   
        public string Autor { get; set; }
        public int Paginas { get; set; }


        public Publicacion(string titulo, string autor, int paginas)
        {
            this.Titulo = titulo;
            this.Autor = autor;
            this.Paginas = paginas;
            
        }

//Las clases hijas cambian el comportamiento original del metodo mediante un override
        public virtual string ObtenerDescripcion() {
            return $"{this.Titulo} autor {this.Autor}";
        }
    }
}