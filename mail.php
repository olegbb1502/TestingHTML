<?php

$recepient = "bolobanoleg@gmail.com";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$address = trim($_POST["address"]);
$address2 = trim($_POST["address2"]);
$zipcode = trim($_POST["zipcode"]);
$country = trim($_POST["country"]);
$message = "Name: $name \nE-Mail: $email \nAddress: $address \nAddress2: $address2 \n zipcode: $zipcode \nCountry: $country \n";

$pagetitle = "Новая заявка с сайта";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");