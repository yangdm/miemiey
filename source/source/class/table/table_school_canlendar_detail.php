<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_canlendar_detail.php  $
 *      $author: heavenlaker $
 *      $for: 日历明细的持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_canlendar_detail extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_canlendar_detail';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个工作日历的日期
	 * @param  
	 * 
	 */
	public function fetch_all_by_calender($cid,$year,$month, $start=0, $limit=30, $orderby=' ORDER BY `day`') {
		$ordersql = $orderby ? $orderby : 'ORDER BY `day` ';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.canlendarid='$cid'" 
				. $ordersql 
				.DB::limit($start, $limit));
	}
	
}

?>