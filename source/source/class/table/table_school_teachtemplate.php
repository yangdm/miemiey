<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_teachtemplate.php  $
 *      $author: heavenlaker $
 *      $for: 教学模板持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_teachtemplate extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_teachtemplate';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个教育机构下的班级
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid,$valid=-1, $start=0, $limit=30) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid'" 
				. ( ($valid>=0)? " AND valid = '$valid' " : ' ' )
				.DB::limit($start, $limit));
	}
	
}

?>