<?php

//error_reporting(E_ALL | E_STRICT);
error_reporting(E_ERROR | E_WARNING | E_PARSE);
//ini_set('display_errors', 0);

// change the following paths if necessary
$yii=dirname(__FILE__).'/framework/yii.php';
$globalFunctions=dirname(__FILE__).'/protected/globalfunctions.php';
$config=dirname(__FILE__).'/protected/config/main.php';

// remove the following lines when in production mode
defined('YII_DEBUG') or define('YII_DEBUG',1);
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);

require_once($yii);
require_once($globalFunctions);// 2
Yii::createWebApplication($config)->run();
