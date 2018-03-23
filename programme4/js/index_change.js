function transform(){
				var s_input = parseInt(document.getElementById("input_string").value);
				var ar = [],i=0;
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
					document.getElementById("show_result").innerHTML += ar[i];
				}
			}