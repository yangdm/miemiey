<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_teachtemplate.php  $
 *      $author: heavenlaker $
 *      $for: ��ѧģ��־û��ͳ��ò�ѯ���� $
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
	 * ��;��ȡĳ�����������µİ༶
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