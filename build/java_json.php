<?php
$postData = file_get_contents("php://input");
error_log($postData, 3, "php-logs/java-state.json");