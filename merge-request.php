<?php

$target_url = 'http://localhost:3000/mergepdf';

$fPdf = curl_file_create("1.pdf");
$sPdf = curl_file_create("2.pdf");

$post = array('pdf1' => $fPdf, 'pdf2' => $sPdf);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $target_url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
$fp = fopen('merged.pdf', 'wb');
curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_exec($ch);
curl_close($ch);
fclose($fp);

?>