$(document).ready(function(){
	$("#login").click(function(){
		var user_id = $("#username").val();
		var user_pass = $("#password").val();
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
	});

	$("#submit").click(function(){
		var user_id = $("#username").val();
		var user_pass = $("#password").val();
		var user_email = $("#email").val();
		var user_repass = $("#repassword").val();
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
			$("#em1").text("Username is too small").show().fadeOut(3000);
			return false;		
		}
		else {
			var atpos = user_email.indexOf("@");
		    var dotpos = user_email.lastIndexOf(".");
		    if (atpos<1 || dotpos<atpos+6 || dotpos + 2 >= user_email.length) {
		        $("#em2").text("Email id is not valid").show().fadeOut(3000);
		        email.focus();
		        return false;
		    }
		    else{
		    	if(p_len < 6 || (upper == 0 || lower == 0 || num == 0)){
					password.focus();
					$("#em3").text("Password is not valid").show().fadeOut(3000);
					return false;
				}
				else{
					if(user_pass != user_repass){
						repassword.focus();
						$("#em4").text("Password do not match").show().fadeOut(3000);
						return false;
					}
					else{
						localStorage.setItem( 'username', user_id );
						localStorage.setItem( 'password', user_pass );
						localStorage.setItem( 'email', user_email);
						localStorage.setItem( 'repassword', user_repass);
						window.open("login.html","_self");
						return true;
					}
					return true;	
				}
				return true;	
		    }
			return true;
		}
		return true;
	});
});
