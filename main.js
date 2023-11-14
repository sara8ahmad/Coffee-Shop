const navbar = document.querySelector(".navbar");
const toggle =document.querySelector(".toggle");
const links = document.querySelectorAll(".link");
console.log(links);

toggle.addEventListener( "click",
    ()=>{
        navbar.classList.toggle("active");
    }
)

links.forEach(link => link.addEventListener( "click",
()=>{
    navbar.classList.remove("active");
}
));

