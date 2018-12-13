<?php
	header("Content-type:text/html;charset=utf-8");
	
	$username = $_GET['username'];
	$userpass = $_GET['userpass'];
	
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("lovodb",$conn);
		
		$sqlstr="select * from user where username='$username'";
		$result = mysql_query($sqlstr,$conn);
		$rows=mysql_num_rows($result);
		
		if($rows==0){
			$sqlstr="insert into user(username,userpass) 
			values('$username','$userpass')";
			$result = mysql_query($sqlstr,$conn);
			
			mysql_close($conn);
			if($result==1){
				echo '1';
			}else{
				echo '0';
			}
		}else{
			echo '2';
		}
		
	}
?>