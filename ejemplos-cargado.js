

async function cargarTextoAsync() {

    let userObjects;

    userObjects = await fetch("http://localhost:4000/users", {mode: 'no-cors'});

    userObjects = await userObjects.json()

    for( userObject of userObjects ) {


        let newUserBox = document.createElement('div');

        let fullName = document.createElement('h1')
        let image = document.createElement('img')

        fullName.innerHTML = userObject.first_names + " " + userObject.last_names;

        image.setAttribute('src', userObject.profile_picture)


        newUserBox.append(fullName)
        newUserBox.append(image)

        document.getElementById("contents").append(newUserBox)

    }


}

function cargarTextoFetch() {

    let promesa = fetch("http://localhost:4000/users");

    promesa
    .then( respuesta => {

        let promesa2 = respuesta.json()
        .then( valor => console.log(valor) )
        .catch(err => console.error(err))
        
    })
    .catch(err=>console.error(err))

}


function cargarTextoAjax() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("contenido").innerHTML = this.responseText;
    }
  };
  
  xhttp.open("GET", "https://gist.githubusercontent.com/furenku/d31f10e774b17ac80cea78f239fa861d/raw/170c4ca43d71133cb37ce6d9c41d89e46d7c5ad2/texto.txt", true);


  
//   xhttp.open("GET", "http://localhost:8080/texto.txt", true);

  xhttp.send();

  
}





let varGlobal = "algo..."

function cambiarVariable() {
    varGlobal = "estoSi";        
}

let nuevaPromesa = new Promise ( (resolve, reject) => {
    setTimeout( () => {
    
        cambiarVariable()
        if( varGlobal == "estoNo" ) {
            reject( "hola no debería ser válido" )
        } else {
            resolve( varGlobal )
        }
        
    }, 2000 )
})

nuevaPromesa
.then( respuesta => console.log(respuesta) )
.catch(err => console.error(err) )


