using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.Clases
{
    public class Libro : Publicacion
    {
        

        //Propiedad solo de lectura
        //public string Descripcion { get => $"Libro: {this.Titulo} escrito por {this.Autor}";}


        //Base hace referencia al constructor del padre 
        public Libro( string titulo, string autor, int paginas ) : base( titulo, autor, paginas)
        {
            
        }


        //Override permite que el metodo virtual en padre puede modificar su comportamiento en el hijo
        public override string ObtenerDescripcion() {
            return $"Libro {this.Titulo} escrito por {this.Autor} y contiene {this.Paginas} paginas."; 
        }

    }
}