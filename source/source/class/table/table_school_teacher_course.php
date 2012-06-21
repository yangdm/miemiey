<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_teacher_course.php  $
 *      $author: heavenlaker $
 *      $for: ��ʦ�ο���Ϣ�־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_teacher_course extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_teacher_course';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * ��;��ȡĳ�����������µĽ�ʦ�ο����
	 * @param  
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30, $orderby='ORDER BY `classid`') {
		$ordersql = $orderby ? 'ORDER BY `classid`' : $orderby;
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql ".DB::limit($start, $limit));
	}
	
	/**
	 * ��;��ȡĳ����ʦ���ο����
	 * @param $teacherid:��ʦID
	 *
	 */
	public function fetch_all_by_teacher( $teacherid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)
				." t WHERE t.`teacherid` = '$teacherid' order by `classid` "
				);
	}
	
	/**
	 * ��;��ȡĳ���༶���ο���ʦ
	 * @param $classid:�༶ID
	 *
	 */
	public function fetch_all_by_class( $classid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)
				." t WHERE t.`classid` = '$classid'  order by `teacherid` "
				);
	}
	
}

?>