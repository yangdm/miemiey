<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_student.php  $
 *      $author: heavenlaker $
 *      $for: ѧ��ʵ��ĳ־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_student extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_student';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * ��;����ҳȡĳ�����������µ�ѧ��
	 * @param $sid:��������ID
	 * @param $status:ѧ�����ͣ��ձ�ʾ��������
	 * 
	 */
	public function fetch_all_by_school($sid,$status, $start=0, $limit=30,$order=' ORDER BY `code`') {
		
		return DB::fetch_all('SELECT * FROM %t WHERE sid =%s '.($status?" and status=$status":' ') .$order .DB::limit($start, $limit), array($this->_table, $sid));
	}
	
	/**
	 * ��;������������ĳ�����������µ�ѧ��
	 * @param $sid:��������ID
	 * @param $code:ѧ�ţ��ձ�ʾ����ѧ������
	 * @param $name:ѧ���������ձ�ʾ������������
	 * @param $class:�༶���ձ�ʾ���ܰ༶����
	 * @param $grade:�꼶���ձ�ʾ�����꼶����
	 *
	 */
	public function fetch_all_by_condition($sid,$code,$name,$classid,$foundyear,$status, $start=0, $limit=30,$order=' ORDER BY `code`') {
	
		return DB::fetch_all('SELECT * FROM %t WHERE sid =%s '
				.($code ?" and `code`='$code'":' ')
				.($name ?" and `name`='$name'":' ')
				.($classid ?" and `classid`='$classid'":' ')
				.($foundyear ?" and `foundyear`='$foundyear'":' ')
				.($status?" and status='$status'":' ')
				.$order 
				.DB::limit($start, $limit)
				, array($this->_table, $sid));
	}
	
	/**
	 * ��;����ҳȡĳ�����������µ��ڶ�ѧ��
	 * @param
	 *
	 */
	public function fetch_all_by_school_in($sid,$order=' ORDER BY `code`', $start=0, $limit=30) {
	
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s  and status IN ('�ڶ�','�Զ�') " .$order .DB::limit($start, $limit), array($this->_table, $sid));
	}
	
	/**
	 * ��;����ҳȡĳ�����������µ���ѧѧ��
	 * @param
	 *
	 */
	public function fetch_all_by_school_out($sid,$order=' ORDER BY `code`', $start=0, $limit=30) {
	
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s  and status IN ('��ҵ','��ѧ') " .$order .DB::limit($start, $limit), array($this->_table, $sid));
	}
	
	/**
	 * ��;��ȡĳ�����������µ�ĳ��״̬��ѧ��
	 * @param
	 *
	 */
	public function fetch_all_by_schoolandstatus($sid, $status='����') {
		// $status = in_array( $status,array('����','δ����','�ر�') ) ? $status : '����';
		return DB::fetch_all("SELECT * FROM %t WHERE sid =%s and status = %s ", array($this->_table, $sid ,$status));
	}
	
}

?>