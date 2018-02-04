<?php	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "https://etherscan.io/find-similiar-contracts?a=0x2Fa0ac498D01632f959D3C18E38f4390B005e200");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
	$output = curl_exec($ch); 
	curl_close($ch);
	
	$out = fopen("scamlistrip.js", "w"); //i was too lazy to actually remove the scraper, so i just changed its output file xd
	fwrite($out,'var scams=["0x2Fa0ac498D01632f959D3C18E38f4390B005e200"');
	
	$minval=9999999;
	$minadr='';
	
	$oldfile=file_get_contents("scamlist.js");
	
	while(true){
		$pos=strpos($output,"Exact [100]");
		if($pos==false)break;
		$output=substr($output,$pos);
		
		$pos=strpos($output,"/address/0x");
		if($pos==false)break;
		$output=substr($output,$pos);
		
		$adr=substr($output,9,42);
		fwrite($out,',');
		fwrite($out,'"'.$adr.'"');
		
		$pos=strpos($output,"<td>");
		if($pos==false)break;
		$output=substr($output,$pos);
		$end=strpos($output," Ether");
		
		$value=substr($output,4,$end-4);
		$value=str_replace('<b>','',$value);
		$value=str_replace('</b>','',$value);
		
		if(strpos($oldfile,$adr)!=false&&floatval($value)<$minval){
			$minval=floatval($value);
			$minadr=(string)$adr;
		}		
	
		$output=substr($output,$pos);
	}
	fwrite($out,"];");
	fclose($out);
	
	$lastpump = trim(file_get_contents('lastpump'));
	if(time()-$lastpump>3600){
		$out = fopen("pump", "w");
		fwrite($out,$minadr);
		fwrite($out," ".(time()+3600));
		fclose($out);
		
		file_put_contents("lastpump",time());
	}
?>