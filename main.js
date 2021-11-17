function getAllBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(dogbreeddata => {
            randomBreed = Object.keys(dogbreeddata.message)[Math.floor(Math.random() * Object.keys(dogbreeddata.message).length)];
            const header = document.querySelector("header");
            const paragraph = document.createElement("p"); 
            header.appendChild(paragraph);
            paragraph.innerText = randomBreed.toUpperCase();

            function getRandomImage(){
                fetch('https://dog.ceo/api/breed/'+ randomBreed +'/images/random')
                    .then(response => response.json())
                    .then(dog1data => {
                        const randomimage = document.createElement("img"); 
                        randomimage.src = dog1data.message;
                        
                        const article = document.querySelector("section");
                        article.appendChild(randomimage);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
                getRandomImage();
            })
            
        .catch((error) => {
            console.log(error);
        });
    }

setTimeout("location.reload(true);",2000)
getAllBreeds()
