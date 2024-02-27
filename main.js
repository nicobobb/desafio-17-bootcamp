const menus = [
    {
        id: 0,
        name: "Milanesa Napolitana",
        description:
            "Milanesa de ternera cubierta con salsa de tomate y queso mozzarella.",
        price: 5800,
        img: "./assets/milanesa.jpg",
    },
    {
        id: 1,
        name: "Omelette",
        description: "Batido de huevo relleno de jamón y queso.",
        price: 4200,
        img: "./assets/omelette.jpg",
    },
    {
        id: 2,
        name: "Rigatoni con salsa boloñesa",
        description: "Fideos Rigatoni con la mejor salsa boloñesa.",
        price: 4400,
        img: "./assets/rigatoni.jpg",
    },
    {
        id: 3,
        name: "Paella de marisco",
        description: "Arroz con pescado, mariscos, ave, carne y verduras.",
        price: 6300,
        img: "./assets/paella.jpg",
    },
    {
        id: 4,
        name: "Espagueti con camarones",
        description: "Ideal para los amantes de la cocina mediterránea.",
        price: 6800,
        img: "./assets/espagueti-camarones.jpg",
    },
    {
        id: 5,
        name: "Solomillo de cerdo",
        description: "Lomo de cerdo al horno con papas.",
        price: 6100,
        img: "./assets/solomillo.jpg",
    },
    {
        id: 6,
        name: "Coleslaw",
        description:
            "Repollo blanco, zanahoria y aderezo con mayonesa y mostaza.",
        price: 5100,
        img: "./assets/coleslaw.jpg",
    },
    {
        id: 7,
        name: "Macarrones con queso",
        description: "Macarrones con salsa de queso al estilo americano.",
        price: 4600,
        img: "./assets/macarrones.jpg",
    },
    {
        id: 8,
        name: "Torta Matilda",
        description: "La torta de chocolate más conocida en el mundo.",
        price: 5100,
        img: "./assets/torta.jpg",
    },
    {
        id: 9,
        name: "Isla Flotante",
        description: "Merengue sobre crema inglesa.",
        price: 3000,
        img: "./assets/isla-flotante.jpg",
    },
];

const productContainer = document.getElementById("productContainer");
const cartNumber = document.getElementById("cartNumber");
localStorage.clear("menusAddCart");

const menuToHtml = (id, name, description, price, img) => {
    return `
        <div class="product__item">
        <div class="product__imageContainer">
            <img
                class="product__image"
                src="${img}"
                alt=""
            />
        </div>
        <div class="product__info">
            <h2 class="product__h2">${name}</h2>
            <p class="product__description">
            ${description}
            </p>
            <p class="product__price">$${price}</p>
            <button class="add__cartButton" onclick="addMenu(${id})">
                Agregar al carrito
            </button>
        </div>
    </div>
    `;
};

let allMenusHtml = "";

menus.forEach((e) => {
    allMenusHtml += menuToHtml(e.id, e.name, e.description, e.price, e.img);
});

productContainer.innerHTML = allMenusHtml;

let menusAddCart = [];

const addMenu = (id) => {
    cartNumber.innerHTML = menusAddCart.length + 1;
    menusAddCart.push(menus[id]);
    localStorage.setItem("menusAddCart", JSON.stringify(menusAddCart));
};
