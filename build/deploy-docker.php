<?php
$user_id = "1";
$docker_build_cmd = "docker build -t ".$user_id."-bot-worker .";
$docker_run_bot_cmd = "docker run -d ".$user_id."-bot-worker";
$result = exec($docker_build_cmd." && ".$docker_run_bot_cmd);

// error_log($result, 3, "php-logs/docker-build.log");