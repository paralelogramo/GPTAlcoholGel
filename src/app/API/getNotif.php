<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$db = include_once "db.php";
$query = $db->query("SELECT")