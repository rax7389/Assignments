function find(){
	var input_array = document.getElementById("user_input").value.split("");
				var array_index = [];
				for(i = 0 ; i < input_array.length ; i++)
					array_index[i] = i + 1;
				for(i = 0 ;i < input_array.length ; i++){
					for( j = i+1; j<input_array.length; j++){
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
					document.getElementById("show_result").innerHTML += array_index[i];
}