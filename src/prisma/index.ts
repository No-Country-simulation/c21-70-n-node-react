// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {PrismaClient} from "@prisma/client" //PrismaClient es una clase que nos permite interactuar con la base de datos en pocas palabras esta es la conexion a la base de datos

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prisma = new PrismaClient() // este objeto prisma es el que nos va a permitir hacer consultas a la base de datos sin tener que escribir SQL

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function main(){
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const NewUser = await prisma.usuarios.create(
        {
            data:{
                Nombres: "Julian Andres",
                Apellidos: "Caracas Sanchez",
                Correo: "andresprueba23@gmail.com",
                TipoDocumento: "CC",
                NumeroDocumento: "123456789",
                FechaNacimiento: new Date("1990-01-01"),
                FechaExpedicion: new Date("2010-01-01"),
                NumeroTelefono: "3043432942",
                NumeroPin: 1234,
            }
        })
        console.log(NewUser)
}


main()