export const productos = [
    {
        id: 1,
        nombre: "The Legend of Zelda: Breath of the Wild",
        precio: 59.99,
        categoria: "Aventura",
        descripcion: "Un mundo abierto lleno de exploración, acertijos y aventuras épicas."
    },
    {
        id: 2,
        nombre: "God of War",
        precio: 49.99,
        categoria: "Acción",
        descripcion: "Acompaña a Kratos en su viaje a través de la mitología nórdica."
    },
    {
        id: 3,
        nombre: "Animal Crossing: New Horizons",
        precio: 59.99,
        categoria: "Simulación",
        descripcion: "Crea y personaliza tu isla en este encantador simulador de vida."
    },
    {
        id: 4,
        nombre: "Call of Duty: Modern Warfare",
        precio: 69.99,
        categoria: "Shooter",
        descripcion: "Experiencia de combate realista en este shooter en primera persona."
    },
    {
        id: 5,
        nombre: "FIFA 23",
        precio: 59.99,
        categoria: "Deportes",
        descripcion: "Disfruta del fútbol con gráficos realistas y nuevas mecánicas de juego."
    },
    {
        id: 6,
        nombre: "Final Fantasy VII Remake",
        precio: 39.99,
        categoria: "RPG",
        descripcion: "Una reinvención del clásico juego de rol con gráficos impresionantes y una nueva narrativa."
    },
    {
        id: 7,
        nombre: "Minecraft",
        precio: 29.99,
        categoria: "Sandbox",
        descripcion: "Crea, explora y sobrevive en un mundo de bloques ilimitado."
    },
    {
        id: 8,
        nombre: "Red Dead Redemption 2",
        precio: 59.99,
        categoria: "Acción",
        descripcion: "Una historia épica de la vida en el Viejo Oeste con un mundo inmersivo."
    },
    {
        id: 9,
        nombre: "Overwatch",
        precio: 39.99,
        categoria: "Shooter",
        descripcion: "Juego de disparos en equipo con héroes únicos y dinámicas de juego emocionantes."
    },
    {
        id: 10,
        nombre: "Hades",
        precio: 24.99,
        categoria: "Roguelike",
        descripcion: "Un roguelike en el que escapas del inframundo mientras enfrentas a diversos enemigos mitológicos."
    }
];


const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);

    
});

export default getProducts

