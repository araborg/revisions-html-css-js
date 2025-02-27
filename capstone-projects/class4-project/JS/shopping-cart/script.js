const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");

const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");

const showHideCartSpan = document.getElementById("show-hide-cart");
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
    dessertCards.innerHTML += `
        <div class='dessert-card'>
            <h2>${name}</h2>

            <p class='dessert-price'>Price: $${price}</p>
            <p class="product-category">Category: ${category}</p>
            
            <button id=${id} class="btn add-to-cart-btn">Add to cart</button>
        </div>
    `;
});

// OOP Class
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.taxRate = 8.25;
    }

    // add item to cart method
    addItem(id, products) {
        const product = products.find((product) => product.id === id);

        const { name, price } = product;

        this.items.push(product);

        const totalCountPerProduct = {};

        this.items.forEach((dessert) => {
            totalCountPerProduct[dessert.id] =
                (totalCountPerProduct[dessert.id] || 0) + 1;
        });

        const currentProductCount = totalCountPerProduct[product.id];

        // ds is pre-selecting the span b4 d name of d item added to d cart
        const currentProductCountSpan = document.getElementById(
            `product-count-for-id${id}`
        );

        currentProductCount > 1
            ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
            : (productsContainer.innerHTML += `
                    <div class="product" id="dessert${id}">
                        <p>
                            <span class="product-count" id="product-count-for-id${id}"></span>

                            ${name}
                        </p>
                    </div>
                `);
    }

    // get number of items in cart method
    getCounts() {
        return this.items.length;
    }

    // cal taxes method
    calculateTaxes(amount) {
        return parseInt(
            //
            ((this.taxRate / 100) * amount) //
                .toFixed(2)
        );
    }

    // cal total method
    calculateTotal() {
        const subTotal = this.items.reduce(
            (total, item) => total + item.price,
            0
        );

        const tax = this.calculateTaxes(subTotal);

        this.total = subTotal + tax;

        cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
        cartTaxes.textContent = `$${tax.toFixed(2)}`;
        cartTotal.textContent = `$${this.total.toFixed(2)}`;

        return this.total;
    }

    // clear cart method
    clearCart() {
        if (!this.items.length) {
            alert("Your shopping cart is already empty");

            return;
        }

        const isCartCleared = confirm(
            "Are you sure you want to clear all items from your shopping cart?"
        );

        if (isCartCleared) {
            this.items = [];
            this.total = 0;

            productsContainer.innerHTML = ``;

            totalNumberOfItems.textContent = 0;
            cartSubTotal.textContent = 0;
            cartTaxes.textContent = 0;
            cartTotal.textContent = 0;
        }
    }
}

const cart = new ShoppingCart();

const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach((btn) => {
    btn.addEventListener("click", (event) => {
        cart.addItem(Number(event.target.id), products);

        cart.calculateTotal();
    });
});

cartBtn.addEventListener("click", () => {
    // wn d cart btn is clicked isCartShowing = false
    isCartShowing = !isCartShowing; // !false = true

    showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";

    cartContainer.style.display = isCartShowing ? "block" : "none";

    totalNumberOfItems.textContent = cart.getCounts();
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
