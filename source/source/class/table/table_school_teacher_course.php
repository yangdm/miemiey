<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_teacher_course.php  $
 *      $author: heavenlaker $
 *      $for: 教师任课信息持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_teacher_course extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_teacher_course';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个教育机构下的教师任课情况
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30, $orderby='ORDER BY `classid`') {
		$ordersql = $orderby ? 'ORDER BY `classid`' : $orderby;
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql ".DB::limit($start, $limit));
	}
	
	/**
	 * 用途：取某个教师的任课情况
	 * @param $teacherid:教师ID
	 *
	 */
	public function fetch_all_by_teacher( $teacherid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)
				." t WHERE t.`teacherid` = '$teacherid' order by `classid` "
				);
	}
	
	/**
	 * 用途：取某个班级的任课老师
	 * @param $classid:班级ID
	 *
	 */
	public function fetch_all_by_class( $classid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)
				." t WHERE t.`classid` = '$classid'  order by `teacherid` "
				);
	}
	
}

?>