<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_absent.php  $
 *      $author: heavenlaker $
 *      $for: 缺勤记录表持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_absent extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_absent';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个教育机构下的缺勤记录
	 * @param  $sid 教育机构ID
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30,$orderby='ORDER BY 1') {
		$ordersql = $orderby ? 'ORDER BY t.dateline desc' : '';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql ".DB::limit($start, $limit));
	}
	
	/**
	 * 用途：按条件查询缺勤记录
	 * @param  $sid：教育机构ID
	 * @param  $classid：班级ID
	 * @param  $stname：学生姓名
	 * @param  $stno： 学号
	 * @param  $datestart：开始日期
	 * @param  $dateend：截止日期  
	 *
	 */
	public function fetch_all_by_condition($sid,$classid=0,$stname='',$stno='',$datestart=0,$dateend=0, $start=0, $limit=30,$order='') {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)
				." t WHERE t.sid='$sid'"
				.($classid ?" and `code`='$classid'":' ')
				.($stname ?" and `name`='$stname'":' ')
				.($stno ?" and `classid`='$stno'":' ')
				.(($datestart>0 && $dateend >0 )?" and `absentday` between '$datestart' and '$dateend' ":' ')
				.($order?"ORDER BY t.dateline desc " :'')
				.DB::limit($start, $limit)
				, array($this->_table, $sid)); 
	}
	
}

?>