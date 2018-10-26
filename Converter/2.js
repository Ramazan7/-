var selected = "Километры";
main();
function selectchange(){
	var select = document.getElementById('selectid');
	if(select.value == "Километры"){
		selected ="Километры";
	}
	if(select.value == "Метры"){
		selected ="Метры";
	}
	if(select.value == "Сантиметры"){
		selected ="Сантиметры";
	}
	inputchange(); 
}

function inputchange(){
	var value = document.getElementById('inputid').value;
	operations(value);

	if(value.length == 0){
		var divvalues = document.getElementById('divvalueid');
		divvalues.innerHTML = "";
	}
	else
		if(value.length > 10){
			alert("Не стоит");
		} 
}



function operations(value){

	if(selected == "Километры"){
		var divvalues = document.getElementById('divvalueid');
		var m,sm;
		m = value * 1000;
		sm = value * 100000;
		divvalues.innerHTML= "<h1>Метры: "+m+"м </h1>" + "<h1>Сантиметры: "+sm+"см </h1>";
	}
	if(selected == "Метры"){
		var divvalues = document.getElementById('divvalueid');
		var km,sm;
		km = value / 1000;
		sm = value * 100;
		divvalues.innerHTML= "<h1>Километры: "+km+"км </h1>" + "<h1>Сантиметры: "+sm+"см </h1>";
	}
	if(selected == "Сантиметры"){
		var divvalues = document.getElementById('divvalueid');
		var km,m;
		m = value / 100;
		km = value / 100000;
		divvalues.innerHTML= "<h1>Километры: "+km+"км </h1>" + "<h1>Метры: "+m+"см </h1>";
	}

}

