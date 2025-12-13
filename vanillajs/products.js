document.addEventListener("DOMContentLoaded", async () => {
  const res = await getProducts();
  renderProducts(res);
});

async function getProducts() {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();

  return result;
}

function renderProducts(products) {
  const productsList = document.getElementById("products-list");

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";

    productItem.innerHTML = `
      <img class="product-img" src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <div>
        <p>Price: $${product.price}</p>
        <button id="add-to-card">Add to cart</button>
      </div>
    `;

    const button = productItem.querySelector("#add-to-card");
    button.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("add-to-cart", { detail: product }));
    });

    productsList.appendChild(productItem);
  });
}
