// See https://aka.ms/new-console-template for more information
using bases;


var persona = new Persona();

persona.Id = 1;
persona.Nombres = "Agustin";
persona.Apellidos = " Barrale";
persona.Edad = 29;

System.Console.WriteLine($"Persona {persona.Nombres} {persona.Apellidos}");


var personas = new List<Persona>();

