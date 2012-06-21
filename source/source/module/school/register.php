<?php

/**
 * {0}
 *  
 * @author ${user}
 * @version 
 */
	
// mod file can not access directly
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}


// 游客不能申请
if(!$_G['uid']) {
	showmessage('抱歉，您尚未登录，无法进行此操作', '', array(), array('login' => 1));
}

if(submitcheck('submit')) {
	$data = array();
	//$message = cutstr(dhtmlspecialchars(stripslashes($_GET['message'])), 150, ''); //截取150个字节的内容
	$data['fullname'] = $_GET['fullname'];
	$data['shortname'] = $_GET['shortname'];
	$data['province'] = $_GET['province'];
	$data['city'] = $_GET['city'];
	
	$service = '000000';
	if ( $_GET['kindergarten'] == '1' )
		$service = substr_replace($service, '1', 0 , 1);
	if ( $_GET['prischool'] == '1' )
		$service = substr_replace($service, '1', 1 , 1);
	if ( $_GET['highschool'] == '1' )
		$service = substr_replace($service, '1', 2 , 1);
	if ( $_GET['expand'] == '1' )
		$service = substr_replace($service, '1', 3 , 1);
	if ( $_GET['training'] == '1' )
		$service = substr_replace($service, '1', 4 , 1);
	if ( $_GET['afterschool'] == '1' )
		$service = substr_replace($service, '1', 5 , 1);

	$data['service'] = $service;
	$data['address'] = $_GET['address'];
	$data['applicant'] = $_GET['applicant'];
	$data['telephone'] = $_GET['telephone'];
	$data['email'] = $_GET['email'];
	$data['summary'] = $_GET['summary'];
	$data['uid'] = $_G['uid'];
	$data['dateline'] = TIMESTAMP;
	
	C::t('school_school')->insert($data);
	
	showmessage('已申请成功，请耐心等待管理的审核。', 'school.php?mod=list');
}

include_once template("school/register");

?>