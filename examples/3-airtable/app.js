const result = document.querySelector('.result');
const fetchProducts = async () => {
  try {
    const { data } = await axios.get(
      'https://centserverless.netlify.app/.netlify/functions/3-airtable'
    );
    const products = data.map(
      (data) =>
        ` <article class="product">
                <img
                    src=${data.url}
                    alt=${data.name}
                />
                <div class="info">
                    <h5>${data.name}</h5>
                    <h5 class="price">${data.price}</h5>
                </div>
        </article> `
    );
    result.innerHTML = products.join('');
  } catch (error) {
    console.log(error.response.data);
    result.innerHTML = `<h3>There was an error. Please try again later</h3>`;
  }
};

fetchProducts();
