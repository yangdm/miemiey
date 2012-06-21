<?php
	if(!defined('IN_DISCUZ') || !defined('IN_ADMINCP')) {
		exit('Access Denied');
	}
	
	//$menu['school'] = array('menu_school', 'header_school');
	
	//$menu['school'][] = array('menu_school_Audit', 'school_Audit');
	
	$menu['global'][] = array('menu_school_Audit', 'school_Audit');
	
	
?>