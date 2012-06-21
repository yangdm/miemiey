<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_admissions.php  $
 *      $author: heavenlaker $
 *      $for: 招生培训实体的持久化和常用查询方法 $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_admissions extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_admissions';
		$this->_pk    = 'tid';

		parent::__construct();
	}

	/**
	 * 用途：取某个教育机构下的r招生培训信息
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid,$valid=1, $start=0, $limit=30, $orderby='ORDER BY 1') {
		$ordersql = $orderby ? 'ORDER BY t.`starttime` desc' : '';
		
		return DB::fetch_all("SELECT a.*, t.* FROM ".DB::table($this->_table)." a INNER JOIN "
				.DB::table('forum_thread')." t ON  t.tid=a.tid	WHERE t.displayorder>'-1' "
				.( $valid ? " AND `expiration` > UNIX_TIMESTAMP(NOW()) ":'')
				. $ordersql
				.DB::limit($start, $limit));
	}
	
}

?>