<?php
	file_put_contents("txlog.txt",$_GET['tx']."\r\n",FILE_APPEND);
?>