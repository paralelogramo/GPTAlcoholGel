<?php
$password = "";
$user = "";
$db = "";
try {
    return new PDO("mysql:host=localhost;dbname" . $db, $user, $password);
} catch (Exception $e) {
    echo "Problemas: " . $e->getMessage();
}