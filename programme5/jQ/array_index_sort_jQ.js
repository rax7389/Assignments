$(document).ready(function(){
				$("#btn").click(function(){
					var input_array = document.getElementById("user_input").value.split("");
					var array_index = [];
					var res =" "
					for(i = 0 ; i < input_array.length ; i++)
						array_index[i] = i + 1;
					for(i = 0 ;i < array_index.length ; i++){
						for( j = i+1; j<array_index.length; j++){
							if(input_array[i]>input_array[j]){
								temp = input_array[i];
								input_array[i] = input_array[j];
								input_array[j] = temp;

								temp = array_index[i];
								array_index[i] = array_index[j];
								array_index[j] = temp;
							}
						}
					}
					for(i = 0 ; i < array_index.length ; i++)
						res += array_index[i];
					$("#show_result").text(res);
			});
});