<?php
/**
 * wp-page-cache-control Test Bootstrap
 */

/**
 * Visit {@see https://mantle.alley.co/testing/test-framework.html} to learn more.
 */
\Mantle\Testing\manager()
	->maybe_rsync_plugin()
	->with_sqlite()
	// Load the main file of the plugin.
	->loaded( fn () => require_once __DIR__ . '/../wp-page-cache-control.php' )
	->install();
