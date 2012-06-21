<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_student.php  $
 *      $author: heavenlaker $
 *      $for: 学生实体的持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_student extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_student';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * 用途：分页取某个教育机构下的学生
	 * @param $sid:教育机构ID
	 * @param $status:学生类型，空表示所有类型
	 * 
	 */
	public function fetch_all_by_school($sid,$status, $start=0, $limit=30,$order=' ORDER BY `code`') {
		
		return DB::fetch_all('SELECT * FROM %t WHERE sid =%s '.($status?" and status=$status":' ') .$order .DB::limit($start, $limit), array($this->_table, $sid));
	}
	
	/**
	 * 用途：按条件查找某个教育机构下的学生
	 * @param $sid:教育机构ID
	 * @param $code:学号，空表示不受学号限制
	 * @param $name:学生姓名，空表示不受姓名限制
	 * @param $class:班级，空表示不受班级限制
	 * @param $grade:年级，空表示不受年级限制
	 *
	 */
	public function fetch_all_by_condition($sid,$code,$name,$classid,$foundyear,$status, $start=0, $limit=30,$order=' ORDER BY `code`') {
	
		return DB::fetch_all('SELECT * FROM %t WHERE sid =%s '
				.($code ?" and `code`='$code'":' ')
				.($name ?" and `name`='$name'":' ')
				.($classid ?" and `classid`='$classid'":' ')
				.($foundyear ?" and `foundyear`='$foundyear'":' ')
				.($status?" and status='$status'":' ')
				.$order 
				.DB::limit($start, $limit)
				, array($this->_table, $sid));
	}
	
	/**
	 * 用途：分页取某个教育机构下的在读学生
	 * @param
	 *
	 */
	public function fetch_all_by_school_in($sid,$order=' ORDER BY `code`', $start=0, $limit=30) {
	
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s  and status IN ('在读','试读') " .$order .DB::limit($start, $limit), array($this->_table, $sid));
	}
	
	/**
	 * 用途：分页取某个教育机构下的退学学生
	 * @param
	 *
	 */
	public function fetch_all_by_school_out($sid,$order=' ORDER BY `code`', $start=0, $limit=30) {
	
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s  and status IN ('毕业','退学') " .$order .DB::limit($start, $limit), array($this->_table, $sid));
	}
	
	/**
	 * 用途：取某个教育机构下的某种状态的学生
	 * @param
	 *
	 */
	public function fetch_all_by_schoolandstatus($sid, $status='正常') {
		// $status = in_array( $status,array('正常','未开班','关闭') ) ? $status : '正常';
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s and status = %s ", array($this->_table, $sid ,$status));
	}
	
}

?>