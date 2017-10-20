function img() {
  var c = event.currentTarget;
  var d = c.src;
  document.getElementById("bigImage").src = d;
	
};
document.querySelector("#q").addEventListener('click',img);
document.querySelector("#w").addEventListener('click',img);
document.querySelector("#e").addEventListener('click',img);
document.querySelector("#a").addEventListener('click',img);
document.querySelector("#s").addEventListener('click',img);
