const APIURL = "https://musicpro.bemtorres.win/api/v1/bodega/producto"

function getApi(APIURL){
    const response = fetch(APIURL)
    .then(response => response.json())
    .then(data => {show(data.productos);})
}

getApi(APIURL);

function show(data){
    let tab = 
    `<tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Descripcion</th>
        <th id="imagen-tabla"></th>
    </tr>`;
    for (let r of data){
        tab += `<tr>
        <th>${r.nombre}</th>
        <th>${r.precio}</th>
        <th>${r.descripcion}</th>
        <th><img src=${r.asset} width=100px></th>
        </tr>`;
    }
    document.getElementById("products").innerHTML = tab;
}
