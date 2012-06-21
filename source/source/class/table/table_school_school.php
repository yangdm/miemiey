
<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_school.php  $
 *      $author: heavenlaker $
 *      $for: 教育机构的持久化和相关的查询方法  $
 *      
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_school extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_school';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * 初始化教育机构
	 * @param int $id 教育机构ID
	 * 
	 */
	public function init_school($id) {
		// 创建公开论坛版块，并将管理员设置为版主
		
		// 创建家委会群组，将将管理员设置为群主
		
		// 创建家委会群组，将将管理员设置为群主
		
		// 绑定论坛版块、家委会、教师空间版块ID
	}

	/**
	 * 获取某种状态的教育机构
	 * @param  enum('apply','audited','closed') $status
	 * @param string $orderby 排序字符串
	 * @return multitype:unknown 数据集
	 */
	public function fetch_all_by_status($status, $orderby = 1) {
		$status = in_array( $status,array('apply','audited','closed') ) ? $status : 'audited';
		$ordersql = $orderby ? 'ORDER BY t.dateline desc' : '';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.status='$status' $ordersql ". DB::limit($start, $limit));
	}
	
	/**
	 * 通过名字查询教育机构
	 * @param string $name 
	 */
	public function fetch_all_by_name($name,$start=0, $limit=30,$status='audited') {
		// 模糊匹配fullname 或 shortname
		return DB::result_first("SELECT * FROM %t WHERE (fullname REGEXP %s or shortname REGEXP %s) "
				. ($status ? " and `status` = '$status'":'')
				. DB::limit($start, $limit)
				, array($this->_table, $name,$name));  
	}
	
	/**
	 * 通过省份查找查询教育机构
	 * @param string $province
	 */
	public function fetch_all_by_province($province,$start=0, $limit=30,$status='audited') {
		// 模糊匹配fullname 或 shortname
		return DB::result_first("SELECT * FROM %t WHERE (`province` = %s) "
				. ($status ? " and `status` = '$status'":'')
				. DB::limit($start, $limit)
				, array($this->_table, $province));
	}
	
	/**
	 * 通过省份查找查询教育机构
	 * @param string $city
	 */
	public function fetch_all_by_city($city,$start=0, $limit=30,$status='audited') {
		// 模糊匹配fullname 或 shortname
		return DB::result_first("SELECT * FROM %t WHERE (`province` = %s) "
				. ($status ? " and `status` = '$status'":'')
				. DB::limit($start, $limit)
				, array($this->_table, $city));
	}
	
	/**
	 * 通过论块ID获取教育机构的详细信息
	 * @param int $fid 牍块ID
	 * @return multitype:unknown 
	 */
	public function fetch_all_by_fid($fid) {
		return DB::fetch_all("SELECT * FROM %t WHERE fid =%s", array($this->_table, $fid));
	}
	
	/**
	 * @param string $ids 教育机构ID列表
	 * @return multitype:unknown 
	 */
	public function fetch_all_by_id($ids) {
		return DB::fetch_all("SELECT * FROM %t WHERE id IN(%n)", array($this->_table, (array)$ids), $this->_pk);
	}
	
	/**
	 * 通过一组ID，删除教育机构
	 * @param unknown_type $ids
	 * @return boolean
	 */
	public function delete_by_id($ids) {
		if(empty($ids)) {
			return false;
		}
		DB::query("DELETE FROM ".DB::table($this->_table)." WHERE %i", array(DB::field('id', $ids)));
	}
	
	/**
	 * 更新教育机构的ID
	 * @param int $id 教育机构ID
	 * @param enum('apply','audited','closed')  $status 状态
	 */
	public function update_status($id, $status) {
		DB::query("UPDATE ".DB::table($this->_table)." SET status=%s WHERE id=%i", array($status, $id));
		// 如果是审核通过，则初化化学校的相关信息'audited'
		if ($status == 'audited' )
		{
			self::init_school($id);
		}
	}
	
	/**
	 * 用途：判断用户是否某个教育机构的管理员,返回0/1
	 * @param  $sid：教育机构ID
	 * @param  $uid：UID
	 *
	 */
	public function authory_for_admin($uid,$sid) {
		$count = (int) DB::result_first("SELECT `educational` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($count> 0) ? 1:0 );
	}
	
	/**
	 * 重载新增方法，自动为其分配论坛版块、文章分类、教师群组、加委会群组
	 * @param unknown_type $ids
	 * @return boolean
	 */

}

?>