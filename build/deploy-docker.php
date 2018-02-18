<?php
$user_id = "1";
$docker_build_cmd = "docker build -t ".$user_id."-bot-worker .";
$docker_run_bot_cmd = "docker run -d ".$user_id."-bot-worker";
exec($docker_build_cmd." && ".$docker_run_bot_cmd);