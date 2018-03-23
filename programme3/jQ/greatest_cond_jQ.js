	$(document).ready(function(){
				$("#btn").click(function(){
					var s_input1 = Number($("#input_string1").val());
					var s_input2 = Number($("#input_string2").val());
					var s_input3 = Number($("#input_string3").val());
					var res = (s_input1 > s_input2) ? ((s_input1 > s_input3) ? "A is greatest" : "C is greatest") : ((s_input2 > s_input3) ? "B is greatest" : "C is greatest"); 
					$("#show_result").text(res);
				});
			});