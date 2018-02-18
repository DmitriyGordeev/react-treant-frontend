<?php
/**
 * Created by PhpStorm.
 * User: weekend
 * Date: 18.02.18
 * Time: 3:41
 */

include_once "setup-database.php";
$postData = file_get_contents("php://input");

// write to file for deploying docker
file_put_contents("java-bot-tree.json", $postData);

// base64 encode because of escape charachers inside $postData
$postData = base64_encode($postData);
// error_log($postData, 3, "php-logs/backend.json");
$query_string = "update users set bot_tree_backend='".$postData."' where id='1'";
$mysqli->query($query_string);