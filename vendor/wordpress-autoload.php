<?php
/* Composer WordPress Autoloader @generated by alleyinteractive/composer-wordpress-autoloader */
$autoload = require_once __DIR__ . '/autoload.php';

$vendorDir = __DIR__;
$baseDir = dirname($vendorDir);

\ComposerWordPressAutoloader\AutoloadFactory::registerFromRules(array(
    'Mantle\\Contracts' => array($vendorDir . '/mantle-framework/contracts'),
    'Mantle\\Support' => array($vendorDir . '/mantle-framework/support'),
    'Alley\\WP\\WP_Page_Cache_Control' => array($baseDir . '/src'),
));

return $autoload;
