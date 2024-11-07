var elemc = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-img")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


var left = document.querySelector(".ji")
var right = document.querySelector(".right1")
left.addEventListener("mouseenter",function(){
    right.style.display = "block"
})
left.addEventListener("mouseleave",function(){
    right.style.display = "none"
})
var hi = document.querySelectorAll("#hi")
hi.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("man.webp")
        right.style.backgroundImage = `url(${"cons.webp"})`
    })
})