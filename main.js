const posts = [
    {
        // class="like-button" data-postid = "1"
        id: 1,
        // class = "post__text"
        content:
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        // class = "post__image"
        media: "https://unsplash.it/600/300?image=171",
        author: {
            // class = "post-meta__author"
            name: "Phil Mangione",
            // class = "profile-pic"
            image: "https://unsplash.it/300/300?image=15",
        },
        // class = "js-likes-counter"
        likes: 80,
        // class = "post-meta__time"
        created: "2021-06-25",
    },
    {
        id: 2,
        content:
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10",
        },
        likes: 120,
        created: "2021-09-03",
    },
    {
        id: 3,
        content:
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20",
        },
        likes: 78,
        created: "2021-05-15",
    },
    {
        id: 4,
        content:
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null,
        },
        likes: 56,
        created: "2021-04-03",
    },
    {
        id: 5,
        content:
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29",
        },
        likes: 95,
        created: "2021-03-05",
    },
];

// class="like-button" data-postid = "1"
// class = "post__text"
// class = "post__image"
// class = "post-meta__author"
// class = "profile-pic"
// class = "js-likes-counter"
// class = "post-meta__time"

// class conteniroe della post list
let postList = document.getElementsByClassName("posts-list")[0];

let likeButton = document.getElementsByClassName("like-button");
let postText = document.getElementsByClassName("post__text");
let postImage = document.getElementsByClassName("post__image");
let postAuthor = document.getElementsByClassName("post-meta__author");
let profilePic = document.getElementsByClassName("profile-pic");
let likesCounter = document.getElementsByClassName("js-likes-counter");
let postTime = document.getElementsByClassName("post-meta__time");

for (let i = 0; i < posts.length; i++) {
    postList.innerHTML += `
        <div class="post">
        <div class="post__header">
        <div class="post-meta">
        <div class="post-meta__icon">
        <img class="profile-pic" src="${posts[i]["author"]["image"]}" alt="Phil Mangione">
        </div>
        <div class="post-meta__data">
        <div class="post-meta__author">${posts[i]["author"]["name"]}</div>
        <div class="post-meta__time">${posts[i]["created"]}</div>
        </div>
        </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
        <img class="post__image_img" src="${posts[i]["media"]}" alt="">
        </div >
        <div class="post__footer">
        <div class="likes js-likes">
        <div class="likes__cta">
        <a class="like-button  js-like-button" href="#" data-postid="${posts[i]["id"]}">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
        </a>
        </div>
        <div class="likes__counter">
        Piace a <b id="like-counter-${posts[i]["id"]}" class="js-likes-counter">${posts[i]["likes"]}</b> persone
        </div>
        </div>
        </div>
        </div >
        `;
}



let likeButtons = document.querySelectorAll(".js-like-button");
let likeCounters = document.querySelectorAll(".js-likes-counter");

for (let i = 0; i < posts.length; i++) {
    likeButtons[i].addEventListener("click", function (event) {
        event.preventDefault();

        if (!this.classList.contains('like-button--liked')) {

            this.classList.add('like-button--liked');

            let contatore = likeCounters[i];

            let contatorePiu = parseInt(contatore.innerText);
            contatore.innerText = contatorePiu + 1;

        } else {

            this.classList.remove('like-button--liked');

            let contatore = likeCounters[i];

            let contatorePiu = parseInt(contatore.innerText);
            contatore.innerText = contatorePiu - 1;

        }
    });
}

// let parola1 = prompt('inserisci una parola1');
// let parola2 = prompt('inserisci una parola2');
// 
    // swagChekDelleParoleInseriteDallUtenteInPrompt(parola1,parola2);
// 
    // function swagChekDelleParoleInseriteDallUtenteInPrompt(swag1, swag2) {
        //     if (swag1.length === swag2.length) {
            //         console.log(`le parole hanno la stessa lunghezza"${swag1}" e "${swag2}"`);
            //     } else {
                //         if (swag1.length > swag2.length) {
                    //             console.log(`---------------------------------------------------------`);
                    //             console.log(`e' piu' lungo la prima parola "${swag1}"`);
                    //             let differenza = swag1.length - swag2.length;
                    //             console.log(`---------------------------------------------------------`);
                    //             console.log("la prima parola e' piu lunga della secconda di " + differenza);
                    //             console.log(`---------------------------------------------------------`);
                    //             console.log(`e' piu' corto "${swag2}"`);
                    //             console.log(`---------------------------------------------------------`);
                    //         } else {
                        //             console.log(`---------------------------------------------------------`);
                        //             console.log(`e' piu' lungo la seconda parola "${swag2}"`);
                        //             let differenza = swag2.length - swag1.length;
                        //             console.log(`---------------------------------------------------------`);
                        //             console.log("la prima parola e' piu lunga della secconda di " + differenza);
                        //             console.log(`---------------------------------------------------------`);
                        //             console.log(`e' piu' corto "${swag1}"`);
                        //             console.log(`---------------------------------------------------------`);
                        // 
                            //         }
                //     }
        // }










