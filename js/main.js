((d) => {
    const btnsNav = d.querySelectorAll(".nav-btn");
    const nav = d.querySelector(".nav-links");
    const modal = d.querySelector(".modal");
    const links = d.querySelectorAll(".link");
    for(let i = 0; i < btnsNav.length; i++) {
        btnsNav[i].addEventListener("click",()=>{
            nav.classList.toggle("active");
        })
    }


    modal.addEventListener("click",()=>{
        location.hash = "#";
        nav.classList.remove("active")

    })
    
})(document);
