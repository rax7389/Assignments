$(document).ready(function(){
				$("#btn").click(function(){
					var u_input = parseInt($("#input_string").val());
					var rem, even = 0,even_mul = 1, odd = 0, odd_mul = 1, diff = 0;
					while(u_input > 0){
						rem = u_input % 10;
						if(rem % 2 == 0){
							even += rem * even_mul;
							even_mul *= 10; 
						}
						else {
							odd += rem * odd_mul;
							odd_mul *= 10; 
						}
						u_input = parseInt(u_input/10);
					}
					if(odd > even)
						diff = odd - even;
					else
						diff = even - odd;
					$("#show_result").text(diff);
				});
			});