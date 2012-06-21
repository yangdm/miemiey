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

// 加载 业务逻辑代码文件
// require_once libfile('function/group');

// ${TODO} get page argument  such as:$page = empty($_GET['page'])?1:intval($_GET['page']);

$page = empty($_GET['page'])?1:intval($_GET['page']);
if($page<1) $page=1;

//分页
$perpage = 20;
$start = ($page-1)*$perpage;



// ${TODO} get Business data 
$arealist = C::t('school_area')->fetch_territoryarea();

// ${TODO} out put by template ,such as : include_once template("{0}/list");
include_once template("school/list");

?>