<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_feeitem.php  $
 *      $author: heavenlaker $
 *      $for: XXX�־û��ͳ��ò�ѯ���� $
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
	 * ��;��ȡĳ�����������µ����з�����Ŀ
	 * @param  
	 * 
	 */
	public function fetch_all_by_feetype($ftid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.ftid='$ftid'");
	}
	
}

?>