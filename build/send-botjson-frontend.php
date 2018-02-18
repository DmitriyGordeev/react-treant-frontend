<?php
/**
 * Created by PhpStorm.
 * User: weekend
 * Date: 18.02.18
 * Time: 2:49
 */

include_once "setup-database.php";
$postData = file_get_contents("php://input");
$query_string = "update users set bot_tree_frontend='".$postData."' where id='1'";
$mysqli->query($query_string);