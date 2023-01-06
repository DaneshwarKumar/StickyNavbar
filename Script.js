
window.addEventListener('scroll' , function() {

    let menubar = this.document.getElementById('menu-bar');

    if(window.pageYOffset >= 200){
        menubar.classList.add('sticky');
    }
    else{
        menubar.classList.remove('sticky');
    }

});


