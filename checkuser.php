<?php
	header("Content-type:text/html;charset=utf-8");
	$username = $_GET['username'];
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("lovodb",$conn);
		$sqlstr = "select * from user where username='$username'";
		$result = mysql_query($sqlstr,$conn);
		
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>