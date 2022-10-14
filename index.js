import { posts } from "./Data.js";
const mainEl = document.getElementById("results");
let html = "";
for (let i = 0; i < posts.length; i++) {
    html += `
         <li class="name">
                <label> <img src=${posts[i].img} />
                    <p class="person">${posts[i].name}</p>
                    <button class="info"> ⮟ </button>   </label> 
         </li>

        <div class="info-box">
                <p> <a href=  ${posts[i].linkedin}   ><i class="fa-brands fa-linkedin"></i>&nbsp Linked-In</a>
                    <a href=  ${posts[i].twitter}    ><i class="fa-brands fa-twitter"></i>&nbsp Twitter</a>
                    <a href=   ${posts[i].github}    ><i class="fa-brands fa-github"></i>&nbsp Git-hub</a>
                </p>
        </div> `;
}
mainEl.innerHTML = html;

// GET THE INPUT OF WHAT USER TYPES
let inputEl = document.getElementById("searchInput");

inputEl.addEventListener("keyup", function (event) {
    let typedInput = event.target.value.toLowerCase();
    //    console.log(typedInput)

    //  GET THE LIST OF INPUTS THAT YOU HAVE
    let NamesCollection = document.getElementsByClassName("name");

    for (let counter = 0; counter < NamesCollection.length; counter++) {
        let listName = NamesCollection[counter].textContent.toLowerCase();
        let infoDivs1 = document.getElementsByClassName("info-box");
        //
        // MATCH BOTH OF THEM .....
        // SET THE BLOCK DISPLY OF THOSE WHO ARE MATCHING
        // AND DISPLAY NONE FOR NOT MATCHINGS.. RIGHTAWAY
        if (listName.includes(typedInput)) {
            NamesCollection[counter].style.display = "block";

            if (typedInput === "") {
                NamesCollection[counter].style.display = "none";
                infoDivs1[counter].style.display = "none";
            }
        } else {
            NamesCollection[counter].style.display = "none";
        }
    }
});

let list = document.getElementsByClassName("info");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        //  console.log("works")

        let infoDivs2 = document.getElementsByClassName("info-box");
        if (infoDivs2[i].style.display === "none") {
            infoDivs2[i].style.display = "block";
        } else {
            infoDivs2[i].style.display = "none";
        }
    });
}
