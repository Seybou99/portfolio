/*toggle*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelectorAll("i").classList.toggle("fa-sun");
//     dayNight.querySelectorAll("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelectorAll("i").classList.add("fa-sun");
//     }
//     else
//     {
//         dayNight.querySelectorAll("i").classList.add("fa-moon");
//     }
// })