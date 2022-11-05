const result = document.querySelector('.result');
const fetchProducts = async () => {
  result.innerHTML = `<h2>Loading...</h2>`;
  const id = window.location.search;
  try {
    const {
      data: { fields },
    } = await axios.get(`/api/3-z-product${id}`);
    const { name, price, desc, image } = fields;
    result.innerHTML = `
      <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="utopia sofa"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
    <p class="desc">${desc}</p>
    </div>
  </article>
    `;
  } catch (error) {
    console.log(error.response.data);
    result.innerHTML = `<h3>There was an error. Please try again later</h3>`;
  }
};

fetchProducts();
