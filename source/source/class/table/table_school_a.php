<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_XXX.php  $
 *      $author: heavenlaker $
 *      $for: XXX持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_XXX extends discuz_table
{
	public function __construct() {

		$this->_table = 'XXX';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个教育机构下的班级
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30, $orderby='ORDER BY 1') {
		$ordersql = $orderby ? 'ORDER BY t.dateline desc' : '';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid'" 
				. $ordersql 
				.DB::limit($start, $limit));
	}
	
}

?>