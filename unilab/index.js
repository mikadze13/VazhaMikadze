var none=document.querySelector(".burger__mother_item1")
var burg=document.querySelector(".burger_mother")
var menu=document.querySelector(".container_img")

menu.addEventListener("click",function(){ 
    burg.style.position="fixed" 
    burg.style.display="flex"
}) 
none.addEventListener("click",function(){ 
    burg.style.display="none" 
})
