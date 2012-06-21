
<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_school.php  $
 *      $author: heavenlaker $
 *      $for: ���������ĳ־û�����صĲ�ѯ����  $
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
	 * ��ʼ����������
	 * @param int $id ��������ID
	 * 
	 */
	public function init_school($id) {
		// ����������̳��飬��������Ա����Ϊ����
		
		// ������ί��Ⱥ�飬��������Ա����ΪȺ��
		
		// ������ί��Ⱥ�飬��������Ա����ΪȺ��
		
		// ����̳��顢��ί�ᡢ��ʦ�ռ���ID
	}

	/**
	 * ��ȡĳ��״̬�Ľ�������
	 * @param  enum('apply','audited','closed') $status
	 * @param string $orderby �����ַ���
	 * @return multitype:unknown ���ݼ�
	 */
	public function fetch_all_by_status($status, $orderby = 1) {
		$status = in_array( $status,array('apply','audited','closed') ) ? $status : 'audited';
		$ordersql = $orderby ? 'ORDER BY t.dateline desc' : '';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.status='$status' $ordersql ". DB::limit($start, $limit));
	}
	
	/**
	 * ͨ�����ֲ�ѯ��������
	 * @param string $name 
	 */
	public function fetch_all_by_name($name,$start=0, $limit=30,$status='audited') {
		// ģ��ƥ��fullname �� shortname
		return DB::result_first("SELECT * FROM %t WHERE (fullname REGEXP %s or shortname REGEXP %s) "
				. ($status ? " and `status` = '$status'":'')
				. DB::limit($start, $limit)
				, array($this->_table, $name,$name));  
	}
	
	/**
	 * ͨ��ʡ�ݲ��Ҳ�ѯ��������
	 * @param string $province
	 */
	public function fetch_all_by_province($province,$start=0, $limit=30,$status='audited') {
		// ģ��ƥ��fullname �� shortname
		return DB::result_first("SELECT * FROM %t WHERE (`province` = %s) "
				. ($status ? " and `status` = '$status'":'')
				. DB::limit($start, $limit)
				, array($this->_table, $province));
	}
	
	/**
	 * ͨ��ʡ�ݲ��Ҳ�ѯ��������
	 * @param string $city
	 */
	public function fetch_all_by_city($city,$start=0, $limit=30,$status='audited') {
		// ģ��ƥ��fullname �� shortname
		return DB::result_first("SELECT * FROM %t WHERE (`province` = %s) "
				. ($status ? " and `status` = '$status'":'')
				. DB::limit($start, $limit)
				, array($this->_table, $city));
	}
	
	/**
	 * ͨ���ۿ�ID��ȡ������������ϸ��Ϣ
	 * @param int $fid 빿�ID
	 * @return multitype:unknown 
	 */
	public function fetch_all_by_fid($fid) {
		return DB::fetch_all("SELECT * FROM %t WHERE fid =%s", array($this->_table, $fid));
	}
	
	/**
	 * @param string $ids ��������ID�б�
	 * @return multitype:unknown 
	 */
	public function fetch_all_by_id($ids) {
		return DB::fetch_all("SELECT * FROM %t WHERE id IN(%n)", array($this->_table, (array)$ids), $this->_pk);
	}
	
	/**
	 * ͨ��һ��ID��ɾ����������
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
	 * ���½���������ID
	 * @param int $id ��������ID
	 * @param enum('apply','audited','closed')  $status ״̬
	 */
	public function update_status($id, $status) {
		DB::query("UPDATE ".DB::table($this->_table)." SET status=%s WHERE id=%i", array($status, $id));
		// ��������ͨ�����������ѧУ�������Ϣ'audited'
		if ($status == 'audited' )
		{
			self::init_school($id);
		}
	}
	
	/**
	 * ��;���ж��û��Ƿ�ĳ�����������Ĺ���Ա,����0/1
	 * @param  $sid����������ID
	 * @param  $uid��UID
	 *
	 */
	public function authory_for_admin($uid,$sid) {
		$count = (int) DB::result_first("SELECT `educational` FROM ".DB::table($this->_table) ." t WHERE t.uid='$uid' and t.sid='$sid'" );
		return ( ($count> 0) ? 1:0 );
	}
	
	/**
	 * ���������������Զ�Ϊ�������̳��顢���·��ࡢ��ʦȺ�顢��ί��Ⱥ��
	 * @param unknown_type $ids
	 * @return boolean
	 */

}

?>