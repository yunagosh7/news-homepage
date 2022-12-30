(() => {
    const btnsNav = document.querySelectorAll(".nav-btn");
    const nav = document.querySelector(".nav-links")
    btnsNav.forEach(btn=> {
        btn.addEventListener("click",()=> {
            nav.classList.toggle("active")
        })
    })
    
})();
