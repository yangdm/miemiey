<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_feeitem.php  $
 *      $author: heavenlaker $
 *      $for: XXX持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_feeitem extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_feeitem';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * 用途：取某个费用类型下的所有费用项目
	 * @param  
	 * 
	 */
	public function fetch_all_by_feetype($ftid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.ftid='$ftid'");
	}
	
}

?>