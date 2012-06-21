<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_teacher.php  $
 *      $author: heavenlaker $
 *      $for: ��ʦ�����ĳ־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_teacher extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_teacher';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * ��;����ְʱ��ɾ�����Ȩ��
	 * @param  $sid����������ID
	 *
	 */
	public function leaving($sid,$teacherid,$uid) {
		return self::update_authority($sid, $teacherid, $uid, '0', '0', '0', '0', '0', '0', '0', '0');
	}

	/**
	 * ��;��ȡĳ�����������µ����н�ʦ
	 * @param  $sid����������ID
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30, $orderby='ORDER BY 1') {
		$ordersql = $orderby ? $orderby : ' ORDER BY 1 ';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql ".DB::limit($start, $limit));
	}
	
	/**
	 * ��;�����ݳ��ڱ���ȡĳ�����������µ����н�ʦ
	 * @param  $sid����������ID
	 * @param  $name����ʦ����
	 * @param  $department������
	 * @param  $username:����
	 * @param  $status��״̬
	 *
	 */
	public function fetch_all_by_condition($sid,$name,$department,$username,$status, $start=0, $limit=30, $orderby='ORDER BY 1') {
		$ordersql = $orderby ? $orderby : ' ORDER BY 1 ' ;
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid'  "
				.($name ?" and `name`='$name' ":' ')
				.($department ?" and `department`='$department' ":' ')
				.($username ?" and `username`='$username' ":' ')
				.($status ?" and `status`='$status' ":' ')
				.' '. $ordersql .' '.DB::limit($start, $limit));
	}
	
	/**
	 * ��;�����½�ʦ��Ȩ��
	 * @param  $sid����������ID
	 * @param  $teacherid����ʦ����
	 * @param  $department������
	 * @param  $username:����
	 * @param  $status��״̬
	 *
	 */
	public function update_authority($sid,$teacherid,$uid,$educational,$article,$cookbook, $calendar, $enrollment, $student,$teacher,$fees) {
		$educational = ($educational ? $educational : 0);
		$article = ($article ? $article : 0);
		$cookbook = ($cookbook ? $cookbook : 0);
		$calendar = ($calendar ? $calendar : 0);
		$enrollment = ($enrollment ? $enrollment : 0);
		$student = ($student ? $student : 0);
		$teacher = ($teacher ? $teacher : 0);
		$fees = ($fees ? $fees : 0);
		//����Ȩ����Ϣ
		DB::query('update '.DB::table($this->_table)
				." set `educational`='$educational',`article`='$article',`cookbook`='$cookbook', `calendar`='$calendar',"
				." `enrollment`='$enrollment',`student` = '$student',`teacher`='$teacher',`fees`='$fees'"
				." WHERE `id`='$teacherid' and `sid`='$sid' "
				);
		// ���¹���Ȩ��,���¶�Ӧ���·����ά��Ȩ�� 
		// ��ȡ��ǰ����������Ӧ�����·���ID
		$catid = (int) DB::result_first("SELECT `catid` FROM ".DB::table('school_school') ."  t.sid='$sid'" );

		if ($article == 1 )
		{
			DB::query('INSERT INTO '.DB::table('portal_category_permission').'(catid,uid,allowpublish,allowmanage)'
					." VALUES($catid,$uid,'1','1')");
		}
		else 
		{
			DB::query('DELETE '.DB::table('portal_category_permission')." WHERE catid = '$catid' and uid = '$uid'");
		}
				
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱���ѧ�����ܵ�Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 * 
	 */
	public function authory_for_educational($uid,$sid) {
		$count = (int) DB::result_first("SELECT `educational` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($count> 0) ? 1:0 );
	}
	
	/** 
	 * ��;���ж��û��Ƿ�߱����¹����Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_article($uid,$sid) {
		$article = (int) DB::result_first("SELECT `article` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($article> 0) ? 1:0 );
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱�ʳ�׹����Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_cookbook($uid,$sid) {
		$cookbook = (int) DB::result_first("SELECT `cookbook` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($cookbook> 0) ? 1:0 );
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱�У�������Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_calendar($uid,$sid) {
		$calendar = (int) DB::result_first("SELECT `calendar` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($calendar> 0) ? 1:0 );
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱����������Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_enrollment($uid,$sid) {
		$enrollment = (int) DB::result_first("SELECT `enrollment` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($enrollment> 0) ? 1:0 );
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱�ѧ�����������Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_student($uid,$sid) {
		$student = (int) DB::result_first("SELECT `student` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($student> 0) ? 1:0 );
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱���ʦ���������Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_teacher($uid,$sid) {
		$teacher = (int) DB::result_first("SELECT `teacher` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($teacher> 0) ? 1:0 );
	}
	
	/**
	 * ��;���ж��û��Ƿ�߱�ѧ�ѹ����Ȩ��,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_fees($uid,$sid) {
		$fees = (int) DB::result_first("SELECT `fees` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($fees> 0) ? 1:0 );
	}
	
}

?>