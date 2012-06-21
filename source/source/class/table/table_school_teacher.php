<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_teacher.php  $
 *      $author: heavenlaker $
 *      $for: 教师档案的持久化和常用查询方法 $
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
	 * 用途：离职时，删除相关权限
	 * @param  $sid：教育机构ID
	 *
	 */
	public function leaving($sid,$teacherid,$uid) {
		return self::update_authority($sid, $teacherid, $uid, '0', '0', '0', '0', '0', '0', '0', '0');
	}

	/**
	 * 用途：取某个教育机构下的所有教师
	 * @param  $sid：教育机构ID
	 * 
	 */
	public function fetch_all_by_school($sid, $start=0, $limit=30, $orderby='ORDER BY 1') {
		$ordersql = $orderby ? $orderby : ' ORDER BY 1 ';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' $ordersql ".DB::limit($start, $limit));
	}
	
	/**
	 * 用途：根据长期保持取某个教育机构下的所有教师
	 * @param  $sid：教育机构ID
	 * @param  $name：教师姓名
	 * @param  $department：部门
	 * @param  $username:网名
	 * @param  $status：状态
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
	 * 用途：更新教师的权限
	 * @param  $sid：教育机构ID
	 * @param  $teacherid：教师姓名
	 * @param  $department：部门
	 * @param  $username:网名
	 * @param  $status：状态
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
		//更新权限信息
		DB::query('update '.DB::table($this->_table)
				." set `educational`='$educational',`article`='$article',`cookbook`='$cookbook', `calendar`='$calendar',"
				." `enrollment`='$enrollment',`student` = '$student',`teacher`='$teacher',`fees`='$fees'"
				." WHERE `id`='$teacherid' and `sid`='$sid' "
				);
		// 文章管理权限,更新对应文章分类的维护权限 
		// 获取当前教育机构对应的文章分类ID
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
	 * 用途：判断用户是否具备教学教务功能的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 * 
	 */
	public function authory_for_educational($uid,$sid) {
		$count = (int) DB::result_first("SELECT `educational` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($count> 0) ? 1:0 );
	}
	
	/** 
	 * 用途：判断用户是否具备文章管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_article($uid,$sid) {
		$article = (int) DB::result_first("SELECT `article` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($article> 0) ? 1:0 );
	}
	
	/**
	 * 用途：判断用户是否具备食谱管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_cookbook($uid,$sid) {
		$cookbook = (int) DB::result_first("SELECT `cookbook` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($cookbook> 0) ? 1:0 );
	}
	
	/**
	 * 用途：判断用户是否具备校历管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_calendar($uid,$sid) {
		$calendar = (int) DB::result_first("SELECT `calendar` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($calendar> 0) ? 1:0 );
	}
	
	/**
	 * 用途：判断用户是否具备招生管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_enrollment($uid,$sid) {
		$enrollment = (int) DB::result_first("SELECT `enrollment` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($enrollment> 0) ? 1:0 );
	}
	
	/**
	 * 用途：判断用户是否具备学生档案管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_student($uid,$sid) {
		$student = (int) DB::result_first("SELECT `student` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($student> 0) ? 1:0 );
	}
	
	/**
	 * 用途：判断用户是否具备教师档案管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_teacher($uid,$sid) {
		$teacher = (int) DB::result_first("SELECT `teacher` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($teacher> 0) ? 1:0 );
	}
	
	/**
	 * 用途：判断用户是否具备学费管理的权限,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_fees($uid,$sid) {
		$fees = (int) DB::result_first("SELECT `fees` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($fees> 0) ? 1:0 );
	}
	
}

?>