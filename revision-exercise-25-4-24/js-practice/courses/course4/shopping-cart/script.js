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

/*
    methods: 
    addItem(id, products), 
    getCounts(), 
    calculateTaxes(amount), 
    calculateTotal(), 
    clearCart()
*/

const cartBtn = document.getElementById("cart-btn");
const showOrHideCart = document.getElementById("show-hide-cart");
const numOfItems = document.getElementById("number-of-items");

const cartContainer = document.getElementById("cart-container");

const clearCartBtn = document.getElementById("clear-cart-btn");

const productContainer = document.getElementById("products-container");

const totalItems = document.getElementById("total-items");
const subTotalEl = document.getElementById("subtotal");
const taxes = document.getElementById("taxes");
const totalEl = document.getElementById("total");

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
