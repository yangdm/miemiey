<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_feetype.php  $
 *      $author: heavenlaker $
 *      $for: XXX持久化和常用查询方法 $
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
	 * 重载新增
	 * @param  $data：新增数据
	 *
	 */
	public function insert($data, $return_insert_id = true, $replace = false, $silent = false) {
		$feetypeid = DB::insert($this->_table, $data, $return_insert_id, $replace, $silent);
		// 为每个学费类型插入30个备用缴费项目
		$sql = "insert into ".DB::table('school_feeitem')."(`ftid`,`itemid`,`name`) values "
				."('$feetypeid','item1','缴费项目1'),"
				."('$feetypeid','item2','缴费项目2'),"
				."('$feetypeid','item3','缴费项目3'),"
				."('$feetypeid','item4','缴费项目4'),"
				."('$feetypeid','item5','缴费项目5'),"
				."('$feetypeid','item6','缴费项目6'),"
				."('$feetypeid','item7','缴费项目7'),"
				."('$feetypeid','item8','缴费项目8'),"
				."('$feetypeid','item9','缴费项目9'),"
				."('$feetypeid','item10','缴费项目10'),"
				."('$feetypeid','item11','缴费项目11'),"
				."('$feetypeid','item12','缴费项目12'),"
				."('$feetypeid','item13','缴费项目13'),"
				."('$feetypeid','item14','缴费项目14'),"
				."('$feetypeid','item15','缴费项目15'),"
				."('$feetypeid','item16','缴费项目16'),"
				."('$feetypeid','item17','缴费项目17'),"
				."('$feetypeid','item18','缴费项目18'),"
				."('$feetypeid','item19','缴费项目19'),"
				."('$feetypeid','item20','缴费项目20'),"
				."('$feetypeid','item21','缴费项目21'),"
				."('$feetypeid','item22','缴费项目22'),"
				."('$feetypeid','item23','缴费项目23'),"
				."('$feetypeid','item24','缴费项目24'),"
				."('$feetypeid','item25','缴费项目25'),"
				."('$feetypeid','item26','缴费项目26'),"
				."('$feetypeid','item27','缴费项目27'),"
				."('$feetypeid','item28','缴费项目28'),"
				."('$feetypeid','item29','缴费项目29'),"
				."('$feetypeid','item30','缴费项目30');";
		
		DB::query($sql);
		return $feetypeid;
	}
	
	/**
	 * 重载删除
	 * @param  $val：id 列表 
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
				//删除缴费项目
				$ret = DB::delete('school_feeitem', DB::field('ftid', $val), null, $unbuffered);
			}
		}
		return $ret;
	}

	/**
	 * 用途：取某个教育机构下的学费类型
	 * @param  $sid：教育机构ID
	 * 
	 */
	public function fetch_all_by_school($sid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid'" );
	}
	
	/**
	 * 用途：取某个教育机构下的学费类型
	 * @param  $sid：教育机构ID
	 *
	 */
	public function fetch_all_by_school_valid($sid) {
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' and valid = '1'" );
	}
	
}

?>