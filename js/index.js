fetch("https://api.escuelajs.co/api/v1/categories")
    .then(response => response.json()) //Convertir la data a JSON
    .then(data => {
        let fila = '<tr><th>Nombre</th><th>Imagen</th></tr>'
        for (let usuario of data) {
            fila += `<tr><td>${usuario.name}</td>
                     <td><div class="card mb-2" style="width: 6rem;">
                     <img src="${usuario.image}" class="card-img-top" alt="Avatar"></td></tr>`
        }
        document.getElementById("tabla").innerHTML = fila
    })