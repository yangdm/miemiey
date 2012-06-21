<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_feetype.php  $
 *      $author: heavenlaker $
 *      $for: XXX�־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_feetype extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_feetype';
		$this->_pk    = 'id';

		parent::__construct();
	}
	
	/**
	 * ��������
	 * @param  $data����������
	 *
	 */
	public function insert($data, $return_insert_id = true, $replace = false, $silent = false) {
		$feetypeid = DB::insert($this->_table, $data, $return_insert_id, $replace, $silent);
		// Ϊÿ��ѧ�����Ͳ���30�����ýɷ���Ŀ
		$sql = "insert into ".DB::table('school_feeitem')."(`ftid`,`itemid`,`name`) values "
				."('$feetypeid','item1','�ɷ���Ŀ1'),"
				."('$feetypeid','item2','�ɷ���Ŀ2'),"
				."('$feetypeid','item3','�ɷ���Ŀ3'),"
				."('$feetypeid','item4','�ɷ���Ŀ4'),"
				."('$feetypeid','item5','�ɷ���Ŀ5'),"
				."('$feetypeid','item6','�ɷ���Ŀ6'),"
				."('$feetypeid','item7','�ɷ���Ŀ7'),"
				."('$feetypeid','item8','�ɷ���Ŀ8'),"
				."('$feetypeid','item9','�ɷ���Ŀ9'),"
				."('$feetypeid','item10','�ɷ���Ŀ10'),"
				."('$feetypeid','item11','�ɷ���Ŀ11'),"
				."('$feetypeid','item12','�ɷ���Ŀ12'),"
				."('$feetypeid','item13','�ɷ���Ŀ13'),"
				."('$feetypeid','item14','�ɷ���Ŀ14'),"
				."('$feetypeid','item15','�ɷ���Ŀ15'),"
				."('$feetypeid','item16','�ɷ���Ŀ16'),"
				."('$feetypeid','item17','�ɷ���Ŀ17'),"
				."('$feetypeid','item18','�ɷ���Ŀ18'),"
				."('$feetypeid','item19','�ɷ���Ŀ19'),"
				."('$feetypeid','item20','�ɷ���Ŀ20'),"
				."('$feetypeid','item21','�ɷ���Ŀ21'),"
				."('$feetypeid','item22','�ɷ���Ŀ22'),"
				."('$feetypeid','item23','�ɷ���Ŀ23'),"
				."('$feetypeid','item24','�ɷ���Ŀ24'),"
				."('$feetypeid','item25','�ɷ���Ŀ25'),"
				."('$feetypeid','item26','�ɷ���Ŀ26'),"
				."('$feetypeid','item27','�ɷ���Ŀ27'),"
				."('$feetypeid','item28','�ɷ���Ŀ28'),"
				."('$feetypeid','item29','�ɷ���Ŀ29'),"
				."('$feetypeid','item30','�ɷ���Ŀ30');";
		
		DB::query($sql);
		return $feetypeid;
	}
	
	/**
	 * ����ɾ��
	 * @param  $val��id �б� 
	 *
	 */
	public function delete($val, $unbuffered = false) {
		$ret = false;
		if(isset($val)) {
			$this->checkpk();
			$ret = DB::delete($this->_table, DB::field($this->_pk, $val), null, $unbuffered);
			$this->clear_cache($val);
			if ( $ret )
			{
				//ɾ���ɷ���Ŀ
				$ret = DB::delete('school_feeitem', DB::field('ftid', $val), null, $unbuffered);
			}
		}
		return $ret;
	}

	/**
	 * ��;��ȡĳ�����������µ�ѧ������
	 * @param  $sid����������ID
	 * 
	 */
	public function fetch_all_by_school($sid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid'" );
	}
	
	/**
	 * ��;��ȡĳ�����������µ�ѧ������
	 * @param  $sid����������ID
	 *
	 */
	public function fetch_all_by_school_valid($sid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' and valid = '1'" );
	}
	
}

?>