<?php

$recepient = "marisgrupp@yandex.ru";
$sitename = "Услуги аутсорсинга в Москве и Московской области";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $message";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");