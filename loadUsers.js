async function loadUsersAsync() {

    let userObjects;

    userObjects = await fetch("http://localhost:4000/users");
    
    console.log(userObjects);
    userObjects = await userObjects.json()

    for( userObject of userObjects ) {


        let newUserBox = document.createElement('div');

        let fullName = document.createElement('h1')
        let image = document.createElement('img')

        fullName.innerHTML = userObject.first_names + " " + userObject.last_names;

        image.setAttribute('src', userObject.profile_picture)


        newUserBox.append(fullName)
        newUserBox.append(image)

        document.getElementById("content").append(newUserBox)

    }


}