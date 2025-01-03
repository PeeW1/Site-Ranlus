const containerMenuhamburguer = document.querySelector(".container-header-menu");
const containerCarrocelHeader = document.querySelector(".container-carrocel-header")
const menuDropdown = document.querySelector(".menu-dropdown");
const containerHeader = document.querySelector(".container-header")
const dropdownDiv = document.querySelector(".dropdown-div")
const dropdownDivItens = document.querySelectorAll(".dropdown-li-itens")
const dropdownLi = document.querySelectorAll(".dropdown-li")
const containerHeaderUser = document.querySelector(".container-header-user")
const containerHeaderUserDropdown = document.querySelector(".header-user-dropdown")

containerMenuhamburguer.addEventListener("click", (e) => {
    containerCarrocelHeader.classList.toggle('hidden')
    menuDropdown.classList.toggle('hidden')
    containerHeader.classList.toggle('no-overflow')
})


dropdownLi.forEach(liItens => {
    liItens.addEventListener('click', (e) => {
        const relatedDropdownItems = liItens.nextElementSibling
        const arrowIcon = liItens.querySelector("img")

        if (relatedDropdownItems && relatedDropdownItems.classList.contains('dropdown-itens')) {
            relatedDropdownItems.classList.toggle('hidden');
        }

        // Alterna a rotação da seta
        if (arrowIcon) {
            arrowIcon.classList.toggle('rotate');
        }
    })
});

containerHeaderUser.addEventListener('click', (e) => {
    containerHeaderUserDropdown.classList.toggle('hidden')
})


let lastScroll = window.scrollY;
window.addEventListener("scroll", (e) => {
    const currentScroll = window.scrollY;
    console.log(currentScroll)
    if(currentScroll > lastScroll) {
        containerHeader.style.top = "-80px"
    }else {
        containerHeader.style.top = "0"
    }
        lastScroll = currentScroll;
})
