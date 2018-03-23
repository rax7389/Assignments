$(document).ready(function(){
	var count=1;
	$("#btn1").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn1").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn2").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn2").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn3").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn3").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn4").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn4").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn5").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		$("#btn5").off("click");
		count++;
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn6").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn6").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn7").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn7").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn8").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn8").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	$("#btn9").click(function(){
		if(count % 2 != 0){
			mark_x(this);
		}
		else{
			mark_o(this);
		}
		count++;
		$("#btn9").off("click");
		x_wins_check();
		o_wins_check();
		draw_check();
	});
	function x_wins_check(){
		if($("#btn1").text()=='X' && $("#btn2").text()=='X' && $("#btn3").text()=='X' ||
			$("#btn1").text()=='X' && $("#btn4").text()=='X' && $("#btn7").text()=='X' ||
			$("#btn1").text()=='X' && $("#btn5").text()=='X' && $("#btn9").text()=='X' ||
			$("#btn3").text()=='X' && $("#btn6").text()=='X' && $("#btn9").text()=='X' ||
			$("#btn4").text()=='X' && $("#btn5").text()=='X' && $("#btn6").text()=='X' ||
			$("#btn7").text()=='X' && $("#btn8").text()=='X' && $("#btn9").text()=='X' ||
			$("#btn2").text()=='X' && $("#btn5").text()=='X' && $("#btn8").text()=='X' ||
			$("#btn3").text()=='X' && $("#btn5").text()=='X' && $("#btn7").text()=='X'){
				$("#win").text("X wins");
				$("#lose").text("O lost");
				disable_xo();
		}
	}
	function o_wins_check(){
		if($("#btn1").text()=='O' && $("#btn2").text()=='O' && $("#btn3").text()=='O' ||
			$("#btn1").text()=='O' && $("#btn4").text()=='O' && $("#btn7").text()=='O' ||
			$("#btn1").text()=='O' && $("#btn5").text()=='O' && $("#btn9").text()=='O' ||
			$("#btn3").text()=='O' && $("#btn6").text()=='O' && $("#btn9").text()=='O' ||
			$("#btn4").text()=='O' && $("#btn5").text()=='O' && $("#btn6").text()=='O' ||
			$("#btn7").text()=='O' && $("#btn8").text()=='O' && $("#btn9").text()=='O' ||
			$("#btn2").text()=='O' && $("#btn5").text()=='O' && $("#btn8").text()=='O' ||
			$("#btn3").text()=='O' && $("#btn5").text()=='O' && $("#btn7").text()=='O'){
				$("#win").text("O wins");
				$("#lose").text("X lost");
				disable_xo();
		}
	}
	function draw_check(){
		if(count>9){
			alert("Draw");
			location.reload();
		}
	}
	$("#btn_res").click(function(){
		location.reload();
	});
	function mark_x(x){
		$(x).addClass("btn-primary");
		$(x).text("X");
	}
	function mark_o(o){
		$(o).addClass("btn-info");
		$(o).text("O");
	}
	function disable_xo(){
		$("#btn1").off("click");
		$("#btn2").off("click");
		$("#btn3").off("click");
		$("#btn4").off("click");
		$("#btn5").off("click");
		$("#btn6").off("click");
		$("#btn7").off("click");
		$("#btn8").off("click");
		$("#btn9").off("click");
	}
});

