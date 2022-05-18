<?php
$password = "";
$user = "root";
$db = "gptalcoholgel";
try {
    return new PDO("mysql:host=localhost;dbname=" . $db, $user, $password);
} catch (Exception $e) {
    echo "Problemas: " . $e->getMessage();
}