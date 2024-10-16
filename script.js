const containerMenuhamburguer = document.querySelector(".container-header-menu");
const containerCarrocelHeader = document.querySelector(".container-carrocel-header")
const menuDropdown = document.querySelector(".menu-dropdown");
const containerHeader = document.querySelector(".container-header")


containerMenuhamburguer.addEventListener("click", (e) => {
    containerCarrocelHeader.classList.toggle('hidden')
    menuDropdown.classList.toggle('hidden')
    containerHeader.classList.toggle('no-overflow')
})