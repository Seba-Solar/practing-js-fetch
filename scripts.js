
function getProducts(done) {
    const results = fetch("https://musicpro.bemtorres.win/api/v1/bodega/producto");

    results.then(response => response.json())
    .then(data => {
        done(data)
    })
}

getProducts(data => {

    data.results.forEach(productos =>{

        const produ = document.createRange().createContextualFragment(
            <article class="product">
                <div class="image-container">
                    <img src="${product.asset}" alt="Producto"></img>
                </div>
                <h3>${productos.nombre}</h3>
                <h4>${productos.precio}</h4>
            </article>

        );

        const main = document.querySelector("product-container");
        main.append(produ);
    })
}

)