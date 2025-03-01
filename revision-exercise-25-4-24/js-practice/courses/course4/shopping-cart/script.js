const cartBtn = document.getElementById("cart-btn");
const showOrHideCart = document.getElementById("show-hide-cart");
const numOfItems = document.getElementById("number-of-items");

const cartContainer = document.getElementById("cart-container");

const clearCartBtn = document.getElementById("clear-cart-btn");

const productContainer = document.getElementById("products-container");

const totalItems = document.getElementById("total-items");
const subTotal = document.getElementById("subtotal");
const taxes = document.getElementById("taxes");
const total = document.getElementById("total");

const dessertCardContainer = document.getElementById("dessert-card-container");
let isCartShowing = false;

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

            <p class="product-category">Category: ${category}</p>

            <button id=${id} class="btn add-to-cart-btn">
                Add To Cart
            </button>
        </div>
    `;
});

/*
    methods: 
    addItem(id, products), 
    getCounts(), 
    calculateTaxes(amount), 
    calculateTotal(), 
    clearCart()
*/

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

        // ------------------------
        const productCount = {};
        this.items.forEach((item) => {
            productCount[item.id] = (productCount[item.id] || 0) + 1;
        });

        const currentProductCount = productCount[product.id];
        // ------------------------

        const addedItemSpan = document.getElementById(`cart-product-id-${id}`);

        currentProductCount > 1
            ? (addedItemSpan.textContent = `${currentProductCount}x`)
            : (productContainer.innerHTML += `

            <div>
                <p>
                    <span id="cart-product-id-${id}">
                        
                    </span>

                    ${name}
                </p>

                <p>${price}</p>

            </div>
        `);
    }

    getCounts() {
        return this.items.length;
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

cartBtn.addEventListener("click", () => {
    isCartShowing = !isCartShowing;

    showOrHideCart.textContent = isCartShowing ? "Hide" : "Show";

    showOrHideCart.textContent += `${cart.getCounts()}`;

    console.log(cart.getCounts());

    cartContainer.style.display = isCartShowing ? "block" : "none";
});

/*
1 ctn: CardioCap = #30,300 * 12 = #363,600 
1 ctn: Nerveron = #39,390 * 12 = #472,680
2 boxes Renoaid = 54,540 * 2 = #109,080
4 boxes Fibronil = #42,420 * 4 = #169,680
2 boxes BPCap = #42,420 * 2 = #84,840
1 box Co-Q10 = #48,480 * 1 = #48,480

Total = #1,248,360
Amount paid by Kunleara = #1,249,140
*/
