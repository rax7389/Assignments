$(document).ready(function(){
				$("#btn").click(function(){
					var s_input = $("#input_string").val();
					var a = s_input.split(" ");
					var txt = " ",str;
					for(i=0;i<a.length;i++){
						for(j=0;j<a[i].length;j++){
							if((j==1 || j==a[i].length-1) && a[i].length>1){
									str = a[i].charAt(j);
									txt += str.toUpperCase();
							}
							else
								txt += a[i].charAt(j);
						}
						txt += " ";
					}
					$("#show_result").text(txt);
				});
			});