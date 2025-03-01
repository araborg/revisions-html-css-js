const cartBtn = document.getElementById("cart-btn");
const showCart = document.getElementById("show-hide-cart");

const cartContainer = document.getElementById("cart-container");

const clearCartBtn = document.getElementById("clear-cart-btn");

const productContainer = document.getElementById("products-container");

const totalItems = document.getElementById("total-items");
const subTotal = document.getElementById("subtotal");
const taxes = document.getElementById("taxes");
const total = document.getElementById("total");

const dessertCardContainer = document.getElementById("dessert-card-container");

const products = [
    {
        id: 1,
        name: "Vanilla Cupcakes (6 Pack)",
        price: 12.99,
        category: "Cupcake",
    },

    {
        id: 2,
        name: "French Macaron",
        price: 3.99,
        category: "Macaron",
    },

    {
        id: 3,
        name: "Pumpkin Cupcake",
        price: 3.99,
        category: "Cupcake",
    },

    {
        id: 4,
        name: "Chocolate Cupcake",
        price: 5.99,
        category: "Cupcake",
    },

    {
        id: 5,
        name: "Chocolate Pretzels (4 Pack)",
        price: 10.99,
        category: "Pretzel",
    },

    {
        id: 6,
        name: "Strawberry Ice Cream",
        price: 2.99,
        category: "Ice Cream",
    },

    {
        id: 7,
        name: "Chocolate Macarons (4 Pack)",
        price: 9.99,
        category: "Macaron",
    },

    {
        id: 8,
        name: "Strawberry Pretzel",
        price: 4.99,
        category: "Pretzel",
    },

    {
        id: 9,
        name: "Butter Pecan Ice Cream",
        price: 2.99,
        category: "Ice Cream",
    },

    {
        id: 10,
        name: "Rocky Road Ice Cream",
        price: 2.99,
        category: "Ice Cream",
    },

    {
        id: 11,
        name: "Vanilla Macarons (5 Pack)",
        price: 11.99,
        category: "Macaron",
    },

    {
        id: 12,
        name: "Lemon Cupcakes (4 Pack)",
        price: 12.99,
        category: "Cupcake",
    },
];

products.forEach(({ id, name, price, category }) => {
    dessertCardContainer.innerHTML += `
        <div class="dessert-card">
            <h3>${name}</h3>

            <p class="dessert-price">Price: $${price}</p>

            <p>Category: ${category}</p>

            <button id=${id} class="btn add-to-cart-btn">
                Add To Cart
            </button>
        </div>
    `;
});

class ShoppingCart {
    constructor() {
        this.items = [];
        this.taxes = 8.3;
        this.total = 0;
    }

    addItem(id, products) {
        const product = products.find((product) => product.id === id);

        const { name, price } = product;

        this.items.push(product);

        const productCount = {};

        const willItWork = this.items.forEach((item) => {
            productCount[item.id] = (productCount[item.id] || 0) + 1;
        });

        console.log(willItWork, productCount);
    }
}

const cart = new ShoppingCart();

// console.log(cart.addItem())
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

// console.log(addToCartBtns);

[...addToCartBtns].forEach((btn) => {
    btn.addEventListener("click", (event) => {
        cart.addItem(parseInt(event.target.id), products);
    });
});
