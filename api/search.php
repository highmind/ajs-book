<?php
 header("Content-Type: text/html; charset=UTF-8");
 $str = $_GET['callback'];
 $q = $_GET['q'];
 $url = 'https://api.douban.com/v2/book/search?q='.$q;
 $content = file_get_contents($url);
 
 echo($str.'('. $content .')');

?>