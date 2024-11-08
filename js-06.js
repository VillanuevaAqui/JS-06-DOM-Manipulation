
//Constantes globales y array con los datos de usuario

    const users = [
        {
            id: 1,
            user_name: 'User1',
            description: 'lorem ipsum',
            age: '46',
            fav_music: {
                bands: [
                    'Band 1', 'Band 2', 'Band 3', 'Band 4'
                ]
            }
        },
        {
            id: 2,
            user_name: 'User LastName',
            description: 'Lorem lorem lorem',
            age: '23',
            fav_music: {
                bands: [
                   'Band 1', 'Band 2', 'Band 3', 'Band 4'
                ]
            }
        }];
    
    const IMAGE_URL = 'https://placehold.co/200x200';
    const CARD_CONTAINER = document.getElementById('container');

    //Boton que modifica el style.visibility con un operador ternario, Hace que sea visible/invisible las cards creadas con javascript
    
    document.getElementById('btn-hide').addEventListener('click', e => {
        CARD_CONTAINER.style.visibility = (CARD_CONTAINER.style.visibility === 'hidden') ? 'visible' : 'hidden';
    });
    
    // Funciones que crean los elementos en el html
    
    function createContainer () {
    
        const card = document.createElement("div");
        card.classList.add("card-container");
        return card
    
    }
    
    function createContainerImg(){
    
        return document.createElement("div");
    
    }
    
    function createImage() {
    
        const image = document.createElement("img");
        image.src = IMAGE_URL;
        image.alt = "Placeholder user photo";
        return image;
        
    }
    
    function createUserName(){
    
        return document.createElement("h3");
    }
    
    function createDescription (){
    
        return document.createElement("p");
    
    }
    
    function createAge () {
    
        return document.createElement("p");
        
    }
    
    function createBands (){
    
        return document.createElement("ul");
    }
    
    function createBandsList(user){
        const bandsList = user.fav_music.bands.map((band) => {
            const list = document.createElement("li");
            list.textContent = band;
            return list;
        })
    
        return bandsList;
    }
    
    //Funcion donde se asignan los valores de "users" a los elementos creados del html

    function callcard (users){
    
        for (const user of users){
    
            const card = createContainer();
            const imgContainer = createContainerImg();
            const image = createImage();
            const userName = createUserName();
            const description = createDescription();
            const age = createAge();
            const bands = createBands();
    
            userName.textContent = user.user_name;
            description.textContent = user.description;
            age.textContent = user.age;
            imgContainer.append(image);
            bands.append(...createBandsList(user));
            card.append(imgContainer, userName, description, age, bands);

            console.log(card);

            // Asignamos la card creada al div "container" del html lo cual hace visible las cards creadas en el html    

            CARD_CONTAINER.appendChild(card);
    
        }
    
    }
    
    callcard(users);
    
    