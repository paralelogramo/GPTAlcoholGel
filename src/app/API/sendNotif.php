<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
$jsonNotification = json_decode(file_get_contents("php://input"));

$db = include_once "db.php";
$query = $db->prepare("INSERT INTO notification(fecha, sala) VALUES(now(), ?);");
$result = $query->execute([$jsonNotification->room]);

echo json_encode([
    "resultado" => $result,
]);