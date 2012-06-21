<?php

/**
 *      [Miemiey] (C)2012-2099 Miemiey.com
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: table_school_area.php  $
 *      $author: heavenlaker $
 *      $for: �������������ĳ־û�����صĲ�ѯ����  $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

class table_school_area extends discuz_table
{
	public function __construct() {

		$this->_table = 'common_district';
		$this->_pk    = 'id';

		parent::__construct();
	}

	// ��ȡ���ڵ�ʡ�У�����������
	public function fetch_territoryarea() {
		$query = DB::fetch_all("SELECT * FROM " .DB::table($this->_table). " WHERE (id between 1 and 35) or (upid between 1 and 34) order  by id");
		$arealist = array();
		foreach($query as $area) {
			
			if ( $area['level'] == 1 )  // ʡ��ֱϽ��
			{
				$area['childareas'] = array();
				$arealist[$area['id']] = $area;
			}
			else
			{
				$arealist[$area['upid']]['childareas'][] = $area;
			}
		}
		
		return $arealist;
	}
	
}

?>