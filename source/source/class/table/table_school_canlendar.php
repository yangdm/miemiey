<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_canlendar.php  $
 *      $author: heavenlaker $
 *      $for: 校历的持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_canlendar extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_canlendar';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个教育机构下的所有日历
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30, $orderby='ORDER BY 1') {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid'" 
				.DB::limit($start, $limit));
	}
	
	/**
	 * 用途：取某个教育机构下的默认日历
	 * @param
	 *
	 */
	public function fetch_default($sid, $start=0, $limit=30, $orderby='ORDER BY 1') {
		return DB::fetch_first('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' AND `valide`='1' ");
	}
	
}

?>