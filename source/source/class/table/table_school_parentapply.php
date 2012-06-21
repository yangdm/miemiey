<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_parentapply.php  $
 *      $author: heavenlaker $
 *      $for: XXX�־û��ͳ��ò�ѯ���� $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_parentapply extends discuz_table
{
	public function __construct() {

		$this->_table = 'school_parentapply';
		$this->_pk    = 'id';

		parent::__construct();
	}

	/**
	 * ��;��ȡĳ�����������µ�����ҳ�
	 * @param  sid:��������ID
	 * 
	 */
	public function fetch_all_by_school($sid,$audited=0, $start=0, $limit=30, $orderby='') {
		$ordersql = $orderby ? $orderby:'ORDER BY t.dateline desc';
		return DB::fetch_all('SELECT * FROM '.DB::table($this->_table)." t WHERE t.sid='$sid' and t.audited='$audited' " 
				. ' '.$ordersql.' ' 
				.DB::limit($start, $limit));
	}
	
	/**
	 * ��;���ҳ����
	 * @param $id:����ID
	 *
	 */
	public function auditparent($id) {
		$apply = self::fetch($id);
		// ����ǰְ֣�����ѧ���ĸ����������
		if ($apply['relation']=='�ְ�' )
		{
			DB::query('UPDATE '.DB::table('school_student').' SET '
						." `fname`= '".$apply['parentname']."' ,"
						." `feducation`= '".$apply['education']."' ,"
						." `foccupation`= '".$apply['occupation']."' ,"
						." `fposition`= '".$apply['position']."' ,"
						." `ftelephone`= '".$apply['telephone']."' ,"
						." `femail`= '".$apply['email']."' ,"
						." `fuid`= '".$apply['uid']."' ,"
						." `fusername`= '".$apply['username']."' "
						." WHERE id = '".$apply['$stid']."'");
		}			
		// ��������裬����ѧ����ĸ���������
		else if ($apply['relation']=='����' )
		{
			DB::query('UPDATE '.DB::table('school_student').' SET '
			." `mname`= '".$apply['parentname']."' ,"
			." `meducation`= '".$apply['education']."' ,"
			." `moccupation`= '".$apply['occupation']."' ,"
			." `mposition`= '".$apply['position']."' ,"
			." `mtelephone`= '".$apply['telephone']."' ,"
			." `memail`= '".$apply['email']."' ,"
			." `muid`= '".$apply['uid']."' ,"
			." `musername`= '".$apply['username']."' "
			." WHERE id = '".$apply['$stid']."'");
		}
		// �������������ѧ���������໤������
		else
		{
			DB::query('UPDATE '.DB::table('school_student').' SET '
			." `oname`= '".$apply['parentname']."' ,"
			." `oeducation`= '".$apply['education']."' ,"
			." `ooccupation`= '".$apply['occupation']."' ,"
			." `oposition`= '".$apply['position']."' ,"
			." `otelephone`= '".$apply['telephone']."' ,"
			." `oemail`= '".$apply['email']."' ,"
			." `ouid`= '".$apply['uid']."' ,"
			." `ousername`= '".$apply['username']."' "
			." WHERE id = '".$apply['$stid']."'");
		}
		// �������״̬
		return DB::query('UPDATE '.DB::table($this->_table)." SET audited='1' where id = '$id');
	}
	
}

?>