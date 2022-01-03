const modalOverlay = document.querySelector('.modal-overlay');
const footer = document.querySelector('.container_fourth');

const cards = document.querySelectorAll('.card');

const recipes = document.querySelectorAll('.content_recipes');

const hideRecipe = document.querySelectorAll('.hide_recipe');

for(let card of cards){
    card.addEventListener("click", function(){
        const imageId = card.getAttribute("id")
        const recipeName = this.querySelector('h2').textContent;
        const recipeAuthor = this.querySelector('p').textContent;

        modalOverlay.classList.add('active')
        footer.classList.add('active')
        modalOverlay.querySelector("img").src = `${imageId}`;
        modalOverlay.querySelector(".modal__recipeName").innerHTML = `${recipeName}`;
        modalOverlay.querySelector(".modal__recipeAuthor").innerHTML = `${recipeAuthor}`;

    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove('active');
    footer.classList.remove('active');

})


function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  

