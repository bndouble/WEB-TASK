function addStudent(){

	var fn = document.getElementById("name").value;
	var fsn = document.getElementById("surname").value;
	var fac = document.getElementById("faculty").value;


	if(fn==""){
		document.getElementById("name").style.border = "3px double red";
		return;
	}
	document.getElementById("name").style.border = "";

	if(fsn==""){
		document.getElementById("surname").style.border = "3px double red";
		return;
	}
	document.getElementById("surname").style.border = "";

	if(fac==-1){
		return;
	}
	document.getElementById("name").value="";
	document.getElementById("surname").value="";
	document.getElementById("faculty").value="-1";
	var z = document.createElement('tr');
	var x = document.createElement('td');
	var y = document.createElement('td');
	var v = document.createElement('td');
	x.innerHTML = fn;
	y.innerHTML = fsn;
	v.innerHTML = fac;
	z.appendChild(x);
	z.appendChild(y);
	z.appendChild(v);
	var table = document.getElementById('students');
	table.appendChild(z);
	}
document.getElementById("addStudent").addEventListener('click',addStudent);
