window.onload = function(){
  document.getElementById("logout").innerHTML += " "+localStorage['uid'];
};


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function add_element(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var inputdate = document.getElementById("myDate").value;
	var inputdesc = document.getElementsByTagName("textarea")[0].value;
	var d = new Date(inputdate);
	var curdate = new Date();
	if(inputValue.length < 3){
			alert("TaskName is too small");
			return false;
	}
	if(curdate > d){
		alert("Date is not valid");
		return false;
	}
	if(inputdesc == ''){
		alert("Description is empty");
		return false;
	}
	if(inputdesc > 50){
		alert("Description is too much");
		return false;
	}
	
	var t = document.createTextNode("Task: "+inputValue +" Date: " +inputdate+" Description: "+inputdesc);
	li.appendChild(t);
	if (inputValue === '') {
	  alert("You must write something!");
	} else {
		 document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";
	document.getElementById("myDate").value = "";
	document.getElementsByTagName("textarea")[0].value = "";
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}

}