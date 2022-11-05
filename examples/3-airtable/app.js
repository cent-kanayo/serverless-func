const result = document.querySelector('.result');
const fetchProducts = async () => {
  try {
    const { data } = await axios.get('/api/3-airtable');
    console.log(data);
    const products = data.map(
      (data) =>
        ` <a href='product.html?id=${data.id}' class="product">
                <img
                    src=${data.url}
                    alt=${data.name}
                />
                <div class="info">
                    <h5>${data.name}</h5>
                    <h5 class="price">${data.price}</h5>
                </div>
        </a> `
    );
    result.innerHTML = products.join('');
  } catch (error) {
    console.log(error.response.data);
    result.innerHTML = `<h3>There was an error. Please try again later</h3>`;
  }
};

fetchProducts();
