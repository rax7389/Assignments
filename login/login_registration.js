function login_user(){
	var user_id = document.getElementById("username").value;
	var user_pass = document.getElementById("password").value;
	if(user_id==localStorage['username'] && user_pass==localStorage['password']){
		localStorage.setItem( 'uid', user_id );
		window.open("to_do_list.html","_self");
	}else if(user_id=="" && user_pass==""){
		alert("Enter UserId & Password");
		username.focus();
	}else{
		alert("Wrong User ID & Password");
		username.focus();
	}
}

function registration_user(){
	var user_id = document.getElementById("username").value;
	var user_pass = document.getElementById("password").value;
	var user_repass = document.getElementById("repassword").value;
	var user_email = document.getElementById("email").value;
	var u_len = user_id.length;
	var p_len = user_pass.length;
	var rp_len = user_repass.length;
	var e_len = user_email.length;
	var upper = 0,lower = 0,num = 0;
	for (var i = 0; i < p_len; i++) {
		if(user_pass.charAt(i) >= 'A' && user_pass.charAt(i)<='Z')
			upper++;
		if(user_pass.charAt(i) >= 'a' && user_pass.charAt(i)<='z')
			lower++;
		if(user_pass.charAt(i) >= '0' && user_pass.charAt(i)<='9')
			num++;
	}
	if(u_len < 6){
		username.focus();
		document.getElementById("em1").innerHTML = "Username is too small";
		return false;		
	}
	else {
		document.getElementById("em1").innerHTML = "";
		var atpos = user_email.indexOf("@");
	    var dotpos = user_email.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+6 || dotpos + 2 >= user_email.length) {
	        document.getElementById("em2").innerHTML = "Email id is not valid";
	        email.focus();
	        return false;
	    }
	    else{
	    	 document.getElementById("em2").innerHTML = "";
	    	if(p_len < 6 || (upper == 0 || lower == 0 || num == 0)){
				password.focus();
				document.getElementById("em3").innerHTML = "Password is not valid";
				return false;
			}
			else{
				document.getElementById("em3").innerHTML = "";
				if(user_pass != user_repass){
					repassword.focus();
					document.getElementById("em4").innerHTML = "Password do not match";
					return false;
				}
				else{
					localStorage.setItem( 'username', user_id );
					localStorage.setItem( 'password', user_pass );
					localStorage.setItem( 'email', user_email);
					localStorage.setItem( 'repassword', user_repass);
					window.open("login.html","-self");
					return true;
				}
				return true;	
			}
			return true;	
	    }
		return true;
	}
	return true;
}
