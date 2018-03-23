$(document).ready(function(){
	var user_input1 = 0,txt = "", user_input2 = 0,check1 = true,op = "";
	$("#input_9").click(function(){
		txt +="9";
		$("#input_field").val(txt);
	});
	$("#input_8").click(function(){
		txt +="8";
		$("#input_field").val(txt);
	});
	$("#input_7").click(function(){
		txt +="7";
		$("#input_field").val(txt);
	});
	$("#input_6").click(function(){
		txt +="6";
		$("#input_field").val(txt);
	});
	$("#input_4").click(function(){
		txt +="4";
		$("#input_field").val(txt);
	});
	$("#input_3").click(function(){
		txt +="3";
		$("#input_field").val(txt);
	});
	$("#input_2").click(function(){
		txt +="2";
		$("#input_field").val(txt);
	});
	$("#input_1").click(function(){
		txt +="1";
		$("#input_field").val(txt);
	});
	$("#input_0").click(function(){
		txt +="0";
		$("#input_field").val(txt);
	});
	$("#input_5").click(function(){
		txt +="5";
		$("#input_field").val(txt);
	});
	$("#op_add").click(function(){
		op = "+";
		if(check){
			check = false;
			user_input1 = Number($("#input_field").val());
			txt = " ";
		}
	});
	$("#op_sub").click(function(){
		op = "-";
		if(check){
			check = false;
			user_input1 = Number($("#input_field").val());
			txt = " ";
		}
	});
	$("#op_mul").click(function(){
		op = "*";
		if(check){
			check = false;
			user_input1 = Number($("#input_field").val());
			txt = " ";
		}
	});
	$("#op_div").click(function(){
		op = "/";
		if(check){
			check = false;
			user_input1 = Number($("#input_field").val());
			txt = " ";
		}
	});
	$("#input_C").click(function(){
		txt = " ";
		op = " ";
		check = true;
		$("#input_field").val("0");
	});
	$("#input_dot").click(function(){
		txt += ".";
		$("#input_field").val(txt);
	});
	$("#input_equal").click(function(){
		if(!check)
			user_input2 = Number($("#input_field").val());
		switch(op){
			case "+": result = user_input1 + user_input2;
			break;
			case "-": result = user_input1 - user_input2;
			break;
			case "*": result = user_input1 * user_input2;
			break;
			case "/": result = user_input1 / user_input2;
			break;
		}
		txt = "";
		op = "";
		check = true;
		$("#input_field").val(result);
	});
});