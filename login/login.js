function login_user(){
	var user_id = document.getElementById("username").value;
	var user_pass = document.getElementById("password").value;
	if(user_id=="rahul" && user_pass=="123456"){
		localStorage.setItem( 'username', user_id );
		window.open("to_do_list.html");
	}else if(user_id=="" && user_pass==""){
		alert("Enter UserId & Password");
		username.focus();
	}else{
		alert("Wrong User ID & Password");
		username.focus();
	}
}