// Acá nos falta nuestra fuente de datos
const datos = [
    {
    id: 0,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos ",
    precio: "U$S 65.50",
    imagen : "../public/images/Carpaccio-de-salmon.jpg"
    },
    {
        id: 1,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra ",
        precio: "U$S 47.00",
        imagen : "../public/images/Risotto-berenjena-queso-cabra.jpg"
        },
        {
            id: 2,
            nombre: "Mousse de arroz",
            descripcion: "Mousse de arroz con leche y aroma de azahar ",
            precio: "U$S 27.50",
            imagen : "../public/images/Mousse-de-arroz-con-leche.jpg"
            },
            {
                id: 3,
                nombre: "Esparragos blancos",
                descripcion: "Esparragos blancos con vinagreta de verduras y jamón ibérico",
                precio: "U$S 37.50",
                imagen : "../public/images/esparragos.jpg"
            }  
]
// Acá nos falta un objeto literal con las acciones para cada ruta
const controlador = {
    index: (req, res) => {
        res.render ("index" , {"datos" : datos})
    }
}
// Acá exportamos el resultado
module.exports=controlador;