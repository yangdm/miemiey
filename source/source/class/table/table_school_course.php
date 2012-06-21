<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_course.php  $
 *      $author: heavenlaker $
 *      $for: 课程的持久化和常用查询方法   $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_course extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_course';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * 用途：取某个教育机构下的课程
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid, $orderby) {
		$ordersql = $orderby ? $orderby :  ' ORDER BY t.code ' ;
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql");
	}

}

?>