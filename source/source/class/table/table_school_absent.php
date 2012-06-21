<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_absent.php  $
 *      $author: heavenlaker $
 *      $for: ȱ�ڼ�¼��־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_absent extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_absent';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * ��;��ȡĳ�����������µ�ȱ�ڼ�¼
	 * @param  $sid ��������ID
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30,$orderby='ORDER BY 1') {
		$ordersql = $orderby ? 'ORDER BY t.dateline desc' : '';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql ".DB::limit($start, $limit));
	}
	
	/**
	 * ��;����������ѯȱ�ڼ�¼
	 * @param  $sid����������ID
	 * @param  $classid���༶ID
	 * @param  $stname��ѧ������
	 * @param  $stno�� ѧ��
	 * @param  $datestart����ʼ����
	 * @param  $dateend����ֹ����  
	 *
	 */
	public function fetch_all_by_condition($sid,$classid=0,$stname='',$stno='',$datestart=0,$dateend=0, $start=0, $limit=30,$order='') {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)
				." t WHERE t.sid='$sid'"
				.($classid ?" and `code`='$classid'":' ')
				.($stname ?" and `name`='$stname'":' ')
				.($stno ?" and `classid`='$stno'":' ')
				.(($datestart>0 && $dateend >0 )?" and `absentday` between '$datestart' and '$dateend' ":' ')
				.($order?"ORDER BY t.dateline desc " :'')
				.DB::limit($start, $limit)
				, array($this->_table, $sid)); 
	}
	
}

?>