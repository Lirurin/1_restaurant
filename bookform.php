<?
	if ((isset($_POST['fname']) && $_POST['fname'] != "") && (isset($_POST['fdate']) && $_POST['fdate'] != "") && (isset($_POST['fmail']) && $_POST['fmail'] != "") && (isset($_POST['fparty']) && $_POST['fparty'] != "")) {
		$to = 'shteben.tan@mail.ru'; 
		$subject = 'Table book'; 
		$message = '
			<p>Name: '.$_POST['fname'].'</p>
			<p>Date: '.$_POST['fdate'].'</p>
			<p>E-mail: '.$_POST['fmail'].'</p>
			<p>'.$_POST['fparty'].'</p>';
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: shteben@symphony.kl.com.ua";
		mail($to, $subject, $message, $headers);
	}
?>