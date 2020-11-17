var img= document.getElementsByClassName("modal");
var close=document.getElementById("close-btn");
var modal= document.getElementById("modal-window");

img[0].onclick= function(){
	modal.style.display="block";
}
img[1].onclick= function(){
	modal.style.display="block";
}
img[2].onclick= function(){
	modal.style.display="block";
}
img[3].onclick= function(){
	modal.style.display="block";
}
img[4].onclick= function(){
	modal.style.display="block";
}
close.onclick=function(){
	modal.style.display="none";
}

window.onclick=function(event){
	if(event.target==modal){
		modal.style.display="none";
	}
}