<?php
    $tmp=file_get_contents("main.tpl");
    $preloader=file_get_contents("preloader.html");
    $header=file_get_contents("header.html");
    $slide1=file_get_contents("slide1.html");
    $slide2=file_get_contents("slide2.html");
    $slide3=file_get_contents("slide3.html");
    $slide4=file_get_contents("slide4.html");
    $slide5=file_get_contents("slide5.html");
    $tmp = str_replace("{preloader}", $preloader, $tmp);
    $tmp = str_replace("{header}", $header, $tmp);
    $tmp = str_replace("{slide1}", $slide1, $tmp);
    $tmp = str_replace("{slide2}", $slide2, $tmp);
    $tmp = str_replace("{slide3}", $slide3, $tmp);
    $tmp = str_replace("{slide4}", $slide4, $tmp);
    $tmp = str_replace("{slide5}", $slide5, $tmp);
    echo $tmp;
?>
