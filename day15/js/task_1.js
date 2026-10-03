`use strict`;
let loadBtn = document.querySelector("#load-btn");
let productContainer = document.querySelector("#product-container");
let allProducts = [];
let searchInput = document.querySelector("#search-input");

let displayProducts = (products) => {
    productContainer.innerHTML = "";
    products.forEach((product) => {
        let productElement = document.createElement("div");
        productElement.classList.add("col-md-4", "mb-4");
        productElement.innerHTML = `
            <div class="card">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
};

let getProducts = async () => {
    try {
        let response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let products = data.products;
        allProducts = products; // Store the fetched products for searching
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

searchInput.addEventListener("input", () => {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

loadBtn.addEventListener("click", getProducts);
getProducts();