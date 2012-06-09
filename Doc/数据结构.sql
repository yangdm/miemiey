-- Ϊ��̳�������һ�ֶ�,�Ƿ�ΪѧУ��صİ��
-- no:���Ǻ�ѧУ��صİ��
-- school :ѧУ�Ĺ�����̳
-- class :�༶�ռ�
-- teaching : ��ʦ�ռ�
-- pta :��ί��
alter table pre_forum_forum add schoolrelative ENUM('no','school','class','teaching','pta') NOT NULL DEFAULT 'no';

-- ������������չ��̳���
DROP TABLE IF EXISTS pre_school_school;
CREATE TABLE pre_school_school (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`fullname` CHAR(255) NOT NULL COMMENT '����ȫ��',
	`shortname` CHAR(50) NOT NULL COMMENT '�������',
	`province` mediumint(8) unsigned NOT NULL COMMENT 'ʡ��', -- ʹ��'������pre_common_district ��level=1�ĵ���'
	`city` mediumint(8) unsigned NOT NULL COMMENT '���ڳ���',   -- ʹ��'������pre_common_district ��level=2�ĵ���'
	`service` CHAR(12) NOT NULL DEFAULT '100000000000' COMMENT '�ṩ�ķ����׶�԰��Сѧ����ѧ�����ӡ���ͯ��չ��������ѵ���κ��йܡ���������',  -- ��tag �Ƿ�����ʣ�
	-- `otherservice` CHAR(20) NOT NULL DEFAULT '' COMMENT '��������',
	`address`  VARCHAR(255) NOT NULL DEFAULT '' COMMENT '��ַ',
	`principal` CHAR(20) NOT NULL DEFAULT '' COMMENT '������',
	`applicant` CHAR(20) NOT NULL DEFAULT '' COMMENT '������',
	`telephone` CHAR(20) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`email` CHAR(20) NOT NULL DEFAULT '' COMMENT '�����ʼ�',
	`summary` mediumtext  NOT NULL COMMENT '�����ſ�',
	`fid` mediumint(8) unsigned NOT NULL default '0' COMMENT '��̳���id',
	`catid` mediumint(8) unsigned NOT NULL default '0' COMMENT '���µ���Ŀid��ѧУ���ڸ���Ŀ�´����Լ���һ�����·���',
	`gcatid` mediumint(8) unsigned NOT NULL default '0' COMMENT '�༶��̳������Ⱥ�����',
	`teachergid` mediumint(8) unsigned NOT NULL default '0' COMMENT '��ʦȺ��id����ѧ������',
	`ptagid` mediumint(8) unsigned NOT NULL default '0' COMMENT '��ί��Ⱥ��id',
	`tuition` tinyint(1) NOT NULL DEFAULT '1'  COMMENT '����ѧ�ѹ���',
	`attendance` tinyint(1) NOT NULL DEFAULT '1' COMMENT '���ÿ��ڹ���',
	`calendar` tinyint(1) NOT NULL DEFAULT '1' COMMENT '����У������',
	-- `schoolbus` tinyint(1) NOT NULL DEFAULT '1' COMMENT '���ð೵����',
	`onlinereg` tinyint(1) NOT NULL DEFAULT '1' COMMENT '����������ѵ����',
	`cookbook` tinyint(1) NOT NULL DEFAULT '1' COMMENT '����ʳ�׹���',
	`uid` MEDIUMINT(8) UNSIGNED NOT NULL COMMENT '�����û�',
	`dateline` INT(10) UNSIGNED NOT NULL COMMENT '����ʱ��',
	`status` enum('apply','audited','closed') NOT NULL default 'apply' COMMENT '״̬',
	-- ����
	PRIMARY KEY (`id`),
	KEY `fid` (`fid`),
	KEY `uid` (`uid`)
) ENGINE=MYISAM COMMENT='��������';

-- ���������Ĺ���Ա
DROP TABLE IF EXISTS pre_school_school_admin;
CREATE TABLE pre_school_school_admin (
	`sid` mediumint(8) unsigned NOT NULL COMMENT '��������ID' ,
	`uid` mediumint(8) unsigned NOT NULL COMMENT 'UID' ,
	`username` VARCHAR(255) NOT NULL COMMENT '�û�����',
	-- ����
	PRIMARY KEY (`sid`,uid)
) ENGINE=MYISAM COMMENT='���������Ĺ���Ա';


-- ��������-�γ�
DROP TABLE IF EXISTS pre_school_course;
CREATE TABLE pre_school_course (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`code` CHAR(20) NOT NULL COMMENT '�γ̱��',
	`name` VARCHAR(255) NOT NULL COMMENT '�γ�����',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='�γ�';
-- Ԥ��Ĭ�ϵĿγ� ��ÿ����һ������ʱ�Զ���Ĭ�Ͽγ�Ϊ�������ɸû����Ŀγ̣������޸�
insert into `pre_school_course` (`sid`,`code`, `name`) values
('0','01','����'),
('0','02','���'),
('0','03','����'),
('0','04','����'),
('0','05','��ѧ'),
('0','06','Ӣ��'),
('0','07','����'),
('0','08','����'),
('0','09','����'),
('0','10','����'),
('0','11','�ֹ�'),
('0','12','���');

-- ��������-�༶
DROP TABLE IF EXISTS pre_school_class;
CREATE TABLE pre_school_class (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`code` CHAR(20) NOT NULL COMMENT '�༶���',
	`name` VARCHAR(255) NOT NULL COMMENT '�༶����',
	`ctype` ENUM('�׶���','ѧǰ��','Сѧ','��ѧ','���Ӱ�','��Ȥ��','���˰�') NOT NULL COMMENT '�༶����',
	`foundyear` CHAR(4) NOT NULL COMMENT '�꼶������ѧʱ�����',
	`headteacher` VARCHAR(4) NOT NULL COMMENT '������ʦ',
	`status` ENUM('����','δ����','�ر�') NOT NULL default '����' COMMENT '״̬',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='�༶';


-- ѧ������
DROP TABLE IF EXISTS pre_school_student;
CREATE TABLE pre_school_student (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`code` VARCHAR(20) NOT NULL COMMENT 'ѧ��',
	`name` VARCHAR(255) NOT NULL COMMENT 'ѧ������',
	`photourl` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '��Ƭ',
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '���ڰ༶id',
	`classname` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '���ڰ༶����',
	`foundyear` CHAR(4) NOT NULL COMMENT '�꼶������ѧʱ�����',
	`gender` ENUM('��','Ů','δ֪') NOT NULL DEFAULT '��' COMMENT '�Ա�',
	`status` ENUM('�ڶ�','�Զ�','��ҵ','��ѧ') NOT NULL DEFAULT '�ڶ�' COMMENT '״̬',
	`birthyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '�������',  
	`birthmonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '�����·�',
	`birthday` tinyint(3) unsigned NOT NULL default '0'  COMMENT '������',
	`ethnic` VARCHAR(40) NOT NULL DEFAULT '����' COMMENT '����',
	`idcode` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '���֤��',
	`feetype` mediumint(8) unsigned NOT NULL DEFAULT 0 COMMENT 'ѧ������',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`email` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	`busno` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�೵',
	`busstation` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�೵վ��',
	`uid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '������UID',
	`username` char(15) NOT NULL default '' COMMENT '�������û���',
	`address` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '��ͥ��ַ',
	-- ��չ��Ϣ
	`residence` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '������ַ',
	`localaccount` tinyint(1) NOT NULL default '1' COMMENT '���ػ���',
	`bloodtype` varchar(20) NOT NULL default '' COMMENT 'Ѫ��',
	`height` varchar(20) NOT NULL default '' COMMENT ' ���',
	`weight` varchar(20) NOT NULL default '' COMMENT ' ����',
	`healthy` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '����״��',
	`hobby` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '��Ȥ����',
	`education` mediumtext COMMENT '�ܽ�������',
	`Remarks`  mediumtext COMMENT '��ע',
	-- ����
	`fname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`feducation` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`foccupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`fposition` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`ftelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`femail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	`fuid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '������UID',
	`fusername` char(15) NOT NULL default '' COMMENT '�������û���',
	-- ĸ��
	`mname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`meducation` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`moccupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`mposition` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`mtelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`memail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	`muid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '������UID',
	`musername` char(15) NOT NULL default '' COMMENT '�������û���',
	-- �����໤��
	`oname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`relation` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '��ѧ���Ĺ�ϵ',
	`oeducation` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`ooccupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`oposition` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`otelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`oemail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	`ouid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '������UID',
	`ousername` char(15) NOT NULL default '' COMMENT '�������û���',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `classid` (`classid`)
) ENGINE=MYISAM COMMENT='ѧ������';

-- �ҳ�����
DROP TABLE IF EXISTS pre_school_parentapply;
CREATE TABLE pre_school_parentapply (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`uid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '�����ߵ�UID',
	`username` char(15) NOT NULL default '' COMMENT '�������û���',
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '���ڰ༶id',
	`stid`  mediumint(8) unsigned NOT NULL COMMENT 'ѧ��id' ,
	`stcode` VARCHAR(20) NOT NULL COMMENT 'ѧ��',
	`stname` VARCHAR(255) NOT NULL COMMENT 'ѧ������',
	`parentname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`education` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`occupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`position` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`email` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '�ʼ���ַ',
	`ralation` ENUM('�ְ�','����','үү','����','��ү','����','����'),
	`audited` tinyint(1) NOT NULL DEFAULT 0 COMMENT '�����',
	`dateline` int(10) unsigned NOT NULL default '0' COMMENT '����ʱ��',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`,`audited`),
	KEY `stid` (`stid`)
) ENGINE=MYISAM COMMENT='�ҳ�����';


-- ѧ������
DROP TABLE IF EXISTS pre_school_absent;
CREATE TABLE pre_school_absent (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '���ڰ༶id',
	`stid`  mediumint(8) unsigned NOT NULL COMMENT 'ѧ��id' ,
	`stcode` VARCHAR(20) NOT NULL COMMENT 'ѧ��',
	`stname` VARCHAR(255) NOT NULL COMMENT 'ѧ������',
	`absentday` int(10) unsigned NOT NULL default '0'  COMMENT 'ȱ������',
	`absentreason` VARCHAR(255) NOT NULL default '' COMMENT 'ȱ��ԭ��',
	`reporter` VARCHAR(255) NOT NULL default '' COMMENT '���',
	dateline int(10) unsigned NOT NULL default '0' COMMENT '�ʱ��',
	-- ����
	PRIMARY KEY (`id`),
	KEY `stid` (`stid`),
	KEY `classid` (`classid`),
	KEY `absentday` (`absentday`)
) ENGINE=MYISAM COMMENT='ѧ������';

-- ��ʦ����
DROP TABLE IF EXISTS pre_school_teacher;
CREATE TABLE pre_school_teacher (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	-- ������Ϣ
	`name` VARCHAR(255) NOT NULL COMMENT '����',
	`photourl` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '��Ƭ',
	`gender` ENUM('��','Ů','δ֪') NOT NULL DEFAULT '��' COMMENT '�Ա�',
	`idcode` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '���֤��',
	`birthyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '�������',  
	`birthmonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '�����·�',
	`birthday` tinyint(3) unsigned NOT NULL default '0'  COMMENT '������',
	`ethnic` VARCHAR(40) NOT NULL DEFAULT '����' COMMENT '����',
	`department` varchar(255) NOT NULL default '' COMMENT '����',
	`jobtitle` varchar(255) NOT NULL default '' COMMENT 'ְ��',
	`entryyear` smallint(6)  NOT NULL DEFAULT '0' COMMENT '��ְ���',
	`entrymonth` tinyint(3) NOT NULL DEFAULT '0' COMMENT '��ְ�·�',
	`entryday` tinyint(3) NOT NULL DEFAULT '0' COMMENT '��ְ��',
	`status` ENUM('��ְ','����','ʵϰ','��ְ') NOT NULL DEFAULT '��ְ' COMMENT '״̬',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`email` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	`address` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '��ͥ��ַ',
	-- ����/��ҵ����
	`academicdegree` ENUM('��ר','��ר','����','˶ʿ','��ʿ') NOT NULL DEFAULT '����' COMMENT '���ѧ��',
	`university` VARCHAR(255) NOT NULL DEFAULT '��' COMMENT '��ҵԺУ',
	`specialty` VARCHAR(255) NOT NULL DEFAULT '��' COMMENT '��ѧרҵ',
	`graduateyear` smallint(6)  NOT NULL DEFAULT '0' COMMENT '��ҵ���',
	`professionyear` smallint(6)  NOT NULL DEFAULT '0' COMMENT '�������',
	`resume` mediumtext COMMENT '���˼���',
	-- ��չ��Ϣ
	`residence` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '������ַ',
	`localaccount` tinyint(1) NOT NULL default '1' COMMENT '���ػ���',
	`bloodtype` varchar(20) NOT NULL default '' COMMENT 'Ѫ��',
	`height` varchar(20) NOT NULL default '' COMMENT ' ���',
	`weight` varchar(20) NOT NULL default '' COMMENT ' ����',
	`healthy` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '����״��',
	`hobby` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '��Ȥ����',
	`uid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '������UID',
	`username` char(15) NOT NULL default '' COMMENT '�������û���',
	`Remarks`  mediumtext COMMENT '��ע',
	-- Ȩ����Ϣ
	`educational` tinyint(1) NOT NULL DEFAULT '0' COMMENT '��ѧ����',
	`article` tinyint(1) NOT NULL DEFAULT '0' COMMENT '���¹���',
	`cookbook` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ʳ�׹���',
	`calendar` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'У������',
	`enrollment` tinyint(1) NOT NULL DEFAULT '0' COMMENT '��������',
	`student` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ѧ������',
	`teacher` tinyint(1) NOT NULL DEFAULT '0' COMMENT '��ʦ����',
	`fees` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ѧ�ѹ���',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `uid` (`uid`)
) ENGINE=MYISAM COMMENT='��ʦ����';


-- ��ʦ�ο���Ϣ
DROP TABLE IF EXISTS pre_school_teacher_course;
CREATE TABLE pre_school_teacher_course (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`teacherid`  mediumint(8) unsigned NOT NULL COMMENT '��ʦid' ,
	`teachername` VARCHAR(255) NOT NULL COMMENT '��ʦ����',
	`classid`  mediumint(8) unsigned NOT NULL COMMENT '�༶id' ,
	`classname` VARCHAR(255) NOT NULL COMMENT '�༶����',
	`courseid`  mediumint(8) unsigned NOT NULL COMMENT '�γ�id' ,
	`coursename` VARCHAR(255) NOT NULL COMMENT '�γ�����',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `teacherid` (`teacherid`),
	KEY `classid` (`classid`),
	KEY `courseid` (`courseid`)
) ENGINE=MYISAM COMMENT='��ʦ�ο���Ϣ';

-- Ȩ��
/* 
DROP TABLE IF EXISTS pre_school_authority;
CREATE TABLE pre_school_authority (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`uid`  mediumint(8) unsigned NOT NULL COMMENT '�û�id' ,
	`teacherid`  mediumint(8) unsigned NOT NULL COMMENT '��ʦid' ,
	`teachername` VARCHAR(255) NOT NULL COMMENT '��ʦ����',
	`username` VARCHAR(255) NOT NULL COMMENT '����',
	-- Ȩ����Ϣ
	`educational` tinyint(1) NOT NULL DEFAULT '0' COMMENT '��ѧ����',
	`article` tinyint(1) NOT NULL DEFAULT '0' COMMENT '���¹���',
	`cookbook` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ʳ�׹���',
	`calendar` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'У������',
	`enrollment` tinyint(1) NOT NULL DEFAULT '0' COMMENT '��������',
	`student` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ѧ������',
	`teacher` tinyint(1) NOT NULL DEFAULT '0' COMMENT '��ʦ����',
	`fees` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ѧ�ѹ���',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `teacherid` (`teacherid`),
	KEY `uid` (`uid`)
) ENGINE=MYISAM COMMENT='Ȩ��';
*/

-- ѧ������
DROP TABLE IF EXISTS pre_school_feetype;
CREATE TABLE pre_school_feetype (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`name` VARCHAR(40) NOT NULL COMMENT '������������',
	`description` VARCHAR(255) NOT NULL COMMENT '������������',
	`periodtype` ENUM('�·�','����','���') NOT NULL DEFAULT '�·�' COMMENT '��������',
	`balancemonth` smallint NOT NULL COMMENT '������',
	`balanceday` smallint NOT NULL COMMENT '������',
	`urgedays` smallint NOT NULL COMMENT '�Զ��߽��������������δ�ɷѵ��Զ����ʹ���֪ͨ',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='�༶';

-- �ɷ���Ŀ
DROP TABLE IF EXISTS pre_school_feeitem;
CREATE TABLE pre_school_feeitem (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`ftid`  mediumint(8) unsigned NOT NULL COMMENT 'ѧ������' ,
	`itemid` VARCHAR(255) NOT NULL COMMENT '��Ӧ�ɷ���ϸ���е��ֶ�����',
	`valid` tinyint(1) NOT NULL DEFAULT '0' COMMENT '����',
	`name` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '�ɷ���Ŀ����',
	`description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '�ɷ���Ŀ����',
	`feemonth` CHAR(12) NOT NULL DEFAULT '111111111111' COMMENT '�ɷ��·ݣ���nλΪ1��ʾ������Ҫ��������ã������ʾ���·ݲ���Ҫ����',
	`itemtype` ENUM('����','����','������') NOT NULL DEFAULT '����' COMMENT '��Ŀ����',
	`valuetype` ENUM('�̶�ֵ','ϵͳ����','�ֹ�����') NOT NULL DEFAULT '�̶�ֵ' COMMENT 'ȡֵ��ʽ',
	`valueexp` TEXT COMMENT '������ʽ���̶�ֵ�Ǿ�Ϊһ����ֵ',
	-- ����
	PRIMARY KEY (`id`),
	KEY `ftid` (`ftid`),
	KEY `itemid`(`itemid`)
) ENGINE=MYISAM COMMENT='�ɷ���Ŀ';

-- ѧ��
DROP TABLE IF EXISTS pre_school_fee;
CREATE TABLE pre_school_fee (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '��������id' ,
	`feetypeid`  mediumint(8) unsigned NOT NULL COMMENT 'ѧ������id' ,
	`feeyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '�������',  
	`feemonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '�����·�',
	`studentid`  mediumint(8) unsigned NOT NULL COMMENT 'ѧ��id' ,
	`studentcode`  VARCHAR(255) NOT NULL COMMENT 'ѧ��' ,
	`studentname`  VARCHAR(255) NOT NULL COMMENT 'ѧ������' ,
	`classid`  mediumint(8) unsigned NOT NULL COMMENT '���ڰ༶id' ,
	`classname`  VARCHAR(255) NOT NULL COMMENT '�༶����' ,
	`absentcount` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT 'ȱ������' ,
	`amounts`  DECIMAL(12,2) unsigned NOT NULL DEFAULT '0' COMMENT '���' ,
	`status`  ENUM('δ���','�Ѻ˶�','�ѽ���','�ѿ�Ʊ') NOT NULL DEFAULT 'δ���' COMMENT '���' ,
	`notifytime`  int(10) unsigned NOT NULL default '0' COMMENT '���֪ͨʱ��',
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `feetypeid` (`feetypeid`),
	KEY `feemonth` (`feeyear`,`feemonth`),
	KEY `studentid` (`studentid`)
) ENGINE=MYISAM COMMENT='ѧ��';

-- ѧ����ϸ
DROP TABLE IF EXISTS pre_school_fee_detail;
CREATE TABLE pre_school_fee_detail (
	`id` mediumint(8) unsigned NOT NULL  COMMENT 'ѧ��id',
	`item1` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ1' ,
	`item2` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ2' ,
	`item3` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ3' ,
	`item4` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ4' ,
	`item5` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ5' ,
	`item6` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ6' ,
	`item7` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ7' ,
	`item8` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ8' ,
	`item9` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ9' ,
	`item10` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ10' ,
	`item11` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ11' ,
	`item12` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ12' ,
	`item13` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ13' ,
	`item14` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ14' ,
	`item15` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ15' ,
	`item16` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ16' ,
	`item17` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ17' ,
	`item18` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ18' ,
	`item19` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ19' ,
	`item20` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ20' ,
	`item21` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ21' ,
	`item22` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ22' ,
	`item23` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ23' ,
	`item24` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ24' ,
	`item25` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ25' ,
	`item26` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ26' ,
	`item27` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ27' ,
	`item28` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ28' ,
	`item29` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ29' ,
	`item30` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '������Ŀ30' ,
	-- ����
	PRIMARY KEY (`id`)
) ENGINE=MYISAM COMMENT='ѧ����ϸ';

-- ������ѵ
DROP TABLE IF EXISTS pre_school_admissions;
CREATE TABLE pre_school_admissions (
	tid mediumint(8) unsigned NOT NULL default '0' COMMENT '����id',
	uid mediumint(8) unsigned NOT NULL default '0' COMMENT '��Աid',
	`sid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '��������id' ,
	aid mediumint(8) unsigned NOT NULL default '0' COMMENT '����ͼƬid',
	`ctype` ENUM('�׶���','ѧǰ��','Сѧ','��ѧ','���Ӱ�','��Ȥ��','���˰�') NOT NULL COMMENT '��������',
	`starttime` int(10) unsigned NOT NULL default '0' COMMENT '������ʼʱ��',
	`expiration` int(10) unsigned NOT NULL default '0' COMMENT '������ֹ����',
	`checkintime` int(10) unsigned NOT NULL default '0' COMMENT '����ʱ��',
	`applycondition` varchar(255) NOT NULL default '' COMMENT '��������',
	`contact` varchar(255) NOT NULL default '' COMMENT '������',
	`telphone` varchar(255) NOT NULL default '' COMMENT '��ϵ�绰',
	`email` varchar(255) NOT NULL default '' COMMENT '�ʼ���ַ',
	`summary` varchar(255) NOT NULL default '' COMMENT 'ժҪ��Ϣ',
	--
	`cost` mediumint(8) unsigned NOT NULL default '0' COMMENT 'ѧ��',
	-- `place` varchar(255) NOT NULL default COMMENT '�ص�',
	-- class varchar(255) NOT NULL default COMMENT '���',
	-- gender tinyint(1) NOT NULL default '0' COMMENT '�Ա�',
	number smallint(5) unsigned NOT NULL default '0' COMMENT '��������',
	applynumber smallint(5) unsigned NOT NULL default '0' COMMENT '�ѱ�������',
	PRIMARY KEY (tid),
	KEY sid (sid,starttime),
	KEY starttime (starttime),
	KEY expiration (expiration),
	KEY applynumber (applynumber)
) ENGINE=MyISAM COMMENT='������ѵ';

-- ������ѵ�����
DROP TABLE IF EXISTS pre_school_admissions_apply;
CREATE TABLE pre_school_admissions_apply (
	applyid int(10) unsigned NOT NULL auto_increment COMMENT '����id',
	tid mediumint(8) unsigned NOT NULL default '0' COMMENT '����id',
	username varchar(255) NOT NULL default '' COMMENT '�û���',
	uid mediumint(8) unsigned NOT NULL default '0' COMMENT '��Աid',
	message varchar(255) NOT NULL default '' COMMENT '��Ϣ',
	verified tinyint(1) NOT NULL default '0' COMMENT '�Ƿ����ͨ��\n(0:N 1:Y 2:����������)',
	dateline int(10) unsigned NOT NULL default '0' COMMENT '����ʱ��',
	-- payment mediumint(8) NOT NULL default '0' COMMENT 'ÿ�˻���',
	-- ������Ϣ
	`name` VARCHAR(255) NOT NULL COMMENT 'ѧ������',
	`photourl` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '��Ƭ',
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '���ڰ༶id',
	`classname` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '���ڰ༶����',
	`gender` ENUM('��','Ů','δ֪') NOT NULL DEFAULT '��' COMMENT '�Ա�',
	-- `status` ENUM('�ڶ�','�Զ�','��ҵ','��ѧ','����') NOT NULL DEFAULT '�ڶ�' COMMENT '״̬',
	`birthyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '�������',  
	`birthmonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '�����·�',
	`birthday` tinyint(3) unsigned NOT NULL default '0'  COMMENT '������',
	`ethnic` VARCHAR(40) NOT NULL DEFAULT '����' COMMENT '����',
	`idcode` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '���֤��',
	`feetype` mediumint(8) unsigned NOT NULL DEFAULT 0 COMMENT 'ѧ������',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`email` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	`busstation` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�೵վ��',
	`address` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '��ͥ��ַ',
	-- ��չ��Ϣ
	`residence` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '������ַ',
	`localaccount` tinyint(1) NOT NULL default '1' COMMENT '���ػ���',
	`bloodtype` varchar(20) NOT NULL default '' COMMENT 'Ѫ��',
	`height` varchar(20) NOT NULL default '' COMMENT ' ���',
	`weight` varchar(20) NOT NULL default '' COMMENT ' ����',
	`healthy` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '����״��',
	`hobby` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '��Ȥ����',
	`education` mediumtext COMMENT '�ܽ�������',
	`Remarks`  mediumtext COMMENT '��ע',
	-- ����
	`fname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`feducation` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`foccupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`fposition` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`ftelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`femail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	-- ĸ��
	`mname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`meducation` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`moccupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`mposition` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`mtelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`memail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	-- �����໤��
	`oname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '����',
	`relation` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '��ѧ���Ĺ�ϵ',
	`oeducation` varchar(255) NOT NULL default '' COMMENT 'ѧ��',
	`ooccupation` varchar(255) NOT NULL default '' COMMENT '������λ',
	`oposition` varchar(255) NOT NULL default '' COMMENT 'ְλ',
	`otelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '��ϵ�绰',
	`oemail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '�����ʼ�',
	-- ����	
	PRIMARY KEY (applyid),
	KEY uid (uid),
	KEY tid (tid),
	KEY dateline (tid,dateline)
) ENGINE=MyISAM COMMENT='������ѵ�����';
-- ��������message�����Զ��ظ�����¥����ʾ��ϸ

-- У��
DROP TABLE IF EXISTS pre_school_canlendar;
CREATE TABLE pre_school_canlendar (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '��������id' ,
	`name` VARCHAR(120) NOT NULL DEFAULT '' COMMENT 'У������' ,
	`description` VARCHAR(500) NOT NULL DEFAULT '' COMMENT 'У������' ,
	`valide` tinyint(1) unsigned NOT NULL default '0' COMMENT '�Ƿ�����',  -- һ������ֻ������һ��У��
	-- ����
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='У��';

-- У����ϸ
DROP TABLE IF EXISTS pre_school_canlendar_detail;
CREATE TABLE pre_school_canlendar_detail (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`canlendarid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT 'У��id' ,
	`year` smallint(6) unsigned NOT NULL default '0'  COMMENT '���',  
	`month` tinyint(3) unsigned NOT NULL default '0'  COMMENT '�·�',
	`day` tinyint(3) unsigned NOT NULL default '0'  COMMENT '����',
	`class` ENUM('������','��ĩ','�ڼ���') NOT NULL default '������'  COMMENT '��������',
	`specialday` tinyint(1) unsigned NOT NULL default '1'  COMMENT '������',
	`activity` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '�˵��' ,
	`alert` tinyint(1) unsigned NOT NULL default '0' COMMENT '�Ƿ�����',  -- �Ƿ���ǰ���������Ա
	`alerttime` int(10) unsigned NOT NULL default '0' COMMENT '����ʱ��',
	`alertuser` text  COMMENT '������Ա',
	`message` text  COMMENT '��������',
	`website` tinyint(1) unsigned NOT NULL default '1' COMMENT 'վ������', 
	`email` tinyint(1) unsigned NOT NULL default '1' COMMENT '�ʼ�����', 
	`sms` tinyint(1) unsigned NOT NULL default '0' COMMENT '�ֻ���������', 
	-- ����
	PRIMARY KEY (`id`),
	KEY `canlendarid` (`canlendarid`),
	key `month`(`canlendarid`,`year`,`month`),
	key `altertime`(`alerttime`)
) ENGINE=MYISAM COMMENT='У����ϸ';

-- ѧҵ����
DROP TABLE IF EXISTS pre_school_evaluate;
CREATE TABLE pre_school_evaluate (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid` mediumint(8) unsigned NOT NULL default '0' COMMENT '��������id',
	`schoolyear` smallint(6) unsigned NOT NULL default '0'  COMMENT 'ѧ��', 
	`semesters`  VARCHAR(40) NOT NULL DEFAULT '' COMMENT 'ѧ�ڣ���ѧ�ڣ���ѧ�ڵ�',
	`evaluatetype` ENUM('��ĩ��','���п�','��Ԫ����','�ճ��۲�') NOT NULL default '��ĩ��' COMMENT '��������',
	`courseid` mediumint(8) unsigned NOT NULL default '0' COMMENT '�γ�id', 
	`coursename` VARCHAR(255) NOT NULL default '' COMMENT '�γ�����', 
	`evaluatetime` int(10) unsigned NOT NULL default '0' COMMENT '����ʱ��',
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`,`schoolyear`,`semesters`)
) ENGINE=MyISAM COMMENT='ѧҵ����';
  
-- �������
DROP TABLE IF EXISTS pre_school_evaluatescore;
CREATE TABLE pre_school_evaluatescore (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`evaluateid` mediumint(8) unsigned NOT NULL default '0' COMMENT '����id',
	`studentid` mediumint(8) unsigned NOT NULL default '0' COMMENT 'ѧ��id',
	`studentname` VARCHAR(255) NOT NULL default '' COMMENT 'ѧ������',
	`score` VARCHAR(20)  NULL default '' COMMENT '�ɼ�',
	`evaluate` TEXT COMMENT '����',
	`evaluator` VARCHAR(255) NOT NULL default '' COMMENT '������', -- Ĭ�ϵ�ǰ�û�
	-- ����	
	PRIMARY KEY (id),
	KEY uid (studentid),
	KEY tid (evaluateid)
) ENGINE=MyISAM COMMENT='������ѵ�����';
-- ��������message�����Զ��ظ�����¥����ʾ��ϸ

-- ��������ģ��
DROP TABLE IF EXISTS pre_school_teachtemplate;
CREATE TABLE pre_school_teachtemplate (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid` mediumint(8) unsigned NOT NULL default '0' COMMENT '��������id',
	`templatetype` ENUM('�̰�','��ѧ�ʼ�','�۲챨��') NOT NULL default '�̰�' COMMENT 'ģ������',
	`valid` tinyint(1) NOT NULL default '0' COMMENT 'Ĭ��ģ��',
	`template` text COMMENT 'ģ��',
	PRIMARY KEY (id),
	KEY `template` (`sid`,`templatetype`)
) ENGINE=MyISAM COMMENT='��������ģ��';
  

-- �̰�(ͨ���Զ��������Ϣ��ʵ�֣� �½��̰�ʱ���ؽ̰�ģ��
DROP TABLE IF EXISTS pre_school_teachingplan;
CREATE TABLE pre_school_teachingplan (
	`tid` mediumint(8) unsigned NOT NULL default '0' COMMENT '����id',
	`uid` mediumint(8) unsigned NOT NULL default '0' COMMENT '��Աid',
	`sid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '��������id' ,
	`aid` mediumint(8) unsigned NOT NULL default '0' COMMENT '����ͼƬid',
	`courseid` mediumint(8) unsigned NOT NULL default '0' COMMENT '�γ�ID',
	`coursename`  varchar(255) NOT NULL default '' COMMENT '�γ�����',
	`section`  varchar(255) NOT NULL default '' COMMENT '�½�',
	`subject` varchar(255) NOT NULL default '' COMMENT '����',
	`classid` mediumint(8) unsigned NOT NULL default '0' COMMENT '�༶ID',
	`classname` varchar(255) NOT NULL default '' COMMENT '�༶����',
	`teacherid` mediumint(8) unsigned NOT NULL default '0' COMMENT '�ڿν�ʦ',
	`teachername` varchar(255) NOT NULL default '' COMMENT '��ʦ����',
	`classtime` int(10) unsigned NOT NULL default '0' COMMENT '�Ͽ�ʱ��',
	`location`  varchar(255) NOT NULL default '' COMMENT '�Ͽεص�',
	PRIMARY KEY (tid),
	KEY sid (sid)
) ENGINE=MyISAM COMMENT='�̰�';

-- ѧ���������� (ͨ���Զ��������Ϣ��ʵ�֣� �½��̰�ʱ���ؽ̰�ģ��

