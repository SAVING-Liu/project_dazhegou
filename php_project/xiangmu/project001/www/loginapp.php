<?php


//$u_name = $_GET["username"];
//$u_pass = $_GET["password"];

//if($u_name == "admin" && $u_pass == "admin")
//{header("location:http://127.0.0.1:8020/project001/www/index.html#/tab/home");}
//else{
//	//header("location:http://127.0.0.1:8020/project001/www/index.html#/tab/center");
//	 echo "<h1>您的输入有误，请检查后重新输入</h1>";
//	}



$u_name=$_POST['username'];
$u_pass=$_POST['passwd'];


$conn = new mysqli("localhost", "root", "root" ,"login",3308);

$sql = "select * from logindata where userName='$u_name'and userPass='$u_pass'";

$res = $conn->query($sql);

if($res->num_rows==1){
    echo '{"login":true,"msg":"登陆成功"}';
}else{
    echo '{"login":false,"msg":"登陆失败"}';
}