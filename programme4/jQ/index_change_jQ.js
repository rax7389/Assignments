$(document).ready(function(){
				$("#btn").click(function(){
					var s_input = parseInt($("#input_string").val());
					var ar = [],i = 0,res = " ";
					while(s_input != 0){
						ar[i] = s_input % 10;
						s_input = parseInt(s_input / 10);
						i++
					}
					for(i = 0 ;i < (ar.length/2) ; i++){
						temp = ar[i];
						ar[i] = ar[ar.length - i -1];
						ar[ar.length - i -1] = temp;
					}
					for( i = 0 ; i < ar.length ; i++ ){
						if(i==1){
							temp = ar[i];
							ar[i] = ar[ar.length - i -1];
							ar[ar.length - i -1] = temp;
						}
					}
					for(i = 0 ;i < ar.length ; i++){
						res += ar[i]+"";
					}
					$("#show_result").text(res);
				});
			});