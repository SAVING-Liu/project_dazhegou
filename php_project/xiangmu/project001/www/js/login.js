
//function onbtn(){
//	var _uname = document.getElementById("username").value;
//	var _passwd = document.getElementById("password").value;
//	console.log(_uname);
//	console.log(_passwd);
//	var http;
//	if(window.XMLHttpRequest){
//		http = new XMLHttpRequest();
//	}else{
//		http = new ActiveXObject("Microsoft.XMLHTTP");
//	}
//	http.onreadystatechange = function(){
//		if(http.readyState == 4 && http.status == 200){
//			//TODO
//			console.log(http.responseText);
//		}
//	}
//	http.open('POST',"loginapp.php",true);
//	http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//	http.send("username="+_uname+"&passwd="+_passwd);
//}
