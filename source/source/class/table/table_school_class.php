<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_class.php  $
 *      $author: heavenlaker $
 *      $for: �γ�ʵ��ĳ־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_class extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_class';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * ��;��ȡĳ�����������µİ༶
	 * @param
	 *
	 */
	public function fetch_all_by_school($sid) {
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s ", array($this->_table, $sid));
	}
	
	/**
	 * ��;��ȡĳ�����������µ�ĳ��״̬�İ༶
	 * @param
	 *
	 */
	public function fetch_all_by_schoolandstatus($sid, $status='����') {
		$status = in_array( $status,array('����','δ����','�ر�') ) ? $status : '����';
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s and status = %s ", array($this->_table, $sid ,$status));
	}
	
}

?>