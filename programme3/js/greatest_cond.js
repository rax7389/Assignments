function findGreatest(){
				var s_input1 = Number(document.getElementById("input_string1").value);
				var s_input2 = Number(document.getElementById("input_string2").value);
				var s_input3 = Number(document.getElementById("input_string3").value);
				var res = (s_input1 > s_input2) ? ((s_input1 > s_input3) ? "A is greatest" : "C is greatest") : ((s_input2 > s_input3) ? "B is greatest" : "C is greatest"); 
				document.getElementById("show_result").innerHTML = res;
			}