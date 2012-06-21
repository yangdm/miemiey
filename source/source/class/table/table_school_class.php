<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_class.php  $
 *      $author: heavenlaker $
 *      $for: 课程实体的持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_class extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_class';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * 用途：取某个教育机构下的班级
	 * @param
	 *
	 */
	public function fetch_all_by_school($sid) {
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s ", array($this->_table, $sid));
	}
	
	/**
	 * 用途：取某个教育机构下的某种状态的班级
	 * @param
	 *
	 */
	public function fetch_all_by_schoolandstatus($sid, $status='正常') {
		$status = in_array( $status,array('正常','未开班','关闭') ) ? $status : '正常';
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s and status = %s ", array($this->_table, $sid ,$status));
	}
	
}

?>