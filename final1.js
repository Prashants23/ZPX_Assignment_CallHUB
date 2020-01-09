"use strict"

    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
        
      } else {
        x.className = "topnav";
      }
    }
     
     var a=document.querySelector('html');
     var bodyTag=document.querySelector('body');
     var myNav=document.querySelector('#myTopnav');
     var myElem=document.querySelector('#myTopNav a');
    
     let scrolled = () =>{
       let dec=scrollY / (bodyTag.scrollHeight-innerHeight);
       return Math.floor(dec*100);
     }
     addEventListener('scroll',()=>{
       myNav.style.setproperty('background', scrolled()>50 ? "var(--color)" : "var(--color1)")
     })
     
     
     


    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
