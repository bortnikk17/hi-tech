var link=document.getElementsByClassName("nav-link");
var header=document.querySelector(".header-container");
var logo=document.querySelector(".logo");
var home= document.getElementById("home");
var about= document.getElementById("about");
var products= document.getElementById("products");
var pricing= document.getElementById("pricing");
var work= document.getElementById("work");
var service= document.getElementById("service");
var contact= document.getElementById("contact");
var aindex=about.offsetTop -409;
var pindex=products.offsetTop -409;
var prindex=pricing.offsetTop -409;
var windex=work.offsetTop -409;
var sindex=service.offsetTop -409;
var cindex=contact.offsetTop -409;
 	window.onscroll=function (){
 		if(window.pageYOffset<=home.offsetTop){
 			n=0;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}if(window.pageYOffset>home.offsetTop){
  		header.classList.add("header-fixed");
        logo.classList.add("logo-fixed");
        for(var i=0; i<link.length; i++){
  				link[i].classList.add("nav-fixed");
  			}
  		}if(window.pageYOffset==0){
  		header.classList.remove("header-fixed");
        logo.classList.remove("logo-fixed");
         for(var i=0; i<link.length; i++){
  				link[i].classList.remove("nav-fixed");
  			}
  		}if(window.pageYOffset>aindex){
  			n=1;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}if (window.pageYOffset>pindex){
  			n=2;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}
  		if (window.pageYOffset>prindex){
  			n=3;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}
  		if (window.pageYOffset>windex){
  			n=4;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}
  		if (window.pageYOffset>sindex){
  			n=5;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}
  		if (window.pageYOffset>cindex){
  			n=6;
  			for(var i=0;i<link.length;i++){
  				link[i].classList.remove("nav-active");
  			}
  			link[n].classList.add("nav-active");
  		}
  	}