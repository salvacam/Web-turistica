window.addEventListener("load", function(){
    var enlaces = document.querySelectorAll(".link");
    for(var i = 0; i < enlaces.length; i++){
        enlaces[i].addEventListener("click", activar);
    }
    
    function activar(){
        for(var i = 0; i < enlaces.length; i++){
            enlaces[i].setAttribute("class", "link");
        }
        this.setAttribute("class", "activo link");
    }
});