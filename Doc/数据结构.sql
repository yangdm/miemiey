-- 为论坛版块增加一字段,是否为学校相关的版块
-- no:不是和学校相关的版块
-- school :学校的公开论坛
-- class :班级空间
-- teaching : 教师空间
-- pta :家委会
alter table pre_forum_forum add schoolrelative ENUM('no','school','class','teaching','pta') NOT NULL DEFAULT 'no';

-- 教育机构，扩展论坛版块
DROP TABLE IF EXISTS pre_school_school;
CREATE TABLE pre_school_school (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`fullname` CHAR(255) NOT NULL COMMENT '机构全称',
	`shortname` CHAR(50) NOT NULL COMMENT '机构简称',
	`province` mediumint(8) unsigned NOT NULL COMMENT '省份', -- 使用'地区表pre_common_district 中level=1的地区'
	`city` mediumint(8) unsigned NOT NULL COMMENT '所在城市',   -- 使用'地区表pre_common_district 中level=2的地区'
	`service` CHAR(12) NOT NULL DEFAULT '100000000000' COMMENT '提供的服务：幼儿园、小学、中学、亲子、儿童拓展、成人培训、课后托管、……其它',  -- 用tag 是否更合适？
	-- `otherservice` CHAR(20) NOT NULL DEFAULT '' COMMENT '其它描述',
	`address`  VARCHAR(255) NOT NULL DEFAULT '' COMMENT '地址',
	`principal` CHAR(20) NOT NULL DEFAULT '' COMMENT '负责人',
	`applicant` CHAR(20) NOT NULL DEFAULT '' COMMENT '申请人',
	`telephone` CHAR(20) NOT NULL DEFAULT '' COMMENT '联系电话',
	`email` CHAR(20) NOT NULL DEFAULT '' COMMENT '电子邮件',
	`summary` mediumtext  NOT NULL COMMENT '根构概况',
	`fid` mediumint(8) unsigned NOT NULL default '0' COMMENT '论坛版块id',
	`catid` mediumint(8) unsigned NOT NULL default '0' COMMENT '文章的栏目id，学校可在该栏目下创建自己的一级文章分类',
	`gcatid` mediumint(8) unsigned NOT NULL default '0' COMMENT '班级论坛所属的群组分类',
	`teachergid` mediumint(8) unsigned NOT NULL default '0' COMMENT '教师群组id，教学教务区',
	`ptagid` mediumint(8) unsigned NOT NULL default '0' COMMENT '家委会群组id',
	`tuition` tinyint(1) NOT NULL DEFAULT '1'  COMMENT '启用学费功能',
	`attendance` tinyint(1) NOT NULL DEFAULT '1' COMMENT '启用考勤功能',
	`calendar` tinyint(1) NOT NULL DEFAULT '1' COMMENT '启用校历功能',
	-- `schoolbus` tinyint(1) NOT NULL DEFAULT '1' COMMENT '启用班车功能',
	`onlinereg` tinyint(1) NOT NULL DEFAULT '1' COMMENT '启用招生培训功能',
	`cookbook` tinyint(1) NOT NULL DEFAULT '1' COMMENT '启用食谱功能',
	`uid` MEDIUMINT(8) UNSIGNED NOT NULL COMMENT '申请用户',
	`dateline` INT(10) UNSIGNED NOT NULL COMMENT '申请时间',
	`status` enum('apply','audited','closed') NOT NULL default 'apply' COMMENT '状态',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `fid` (`fid`),
	KEY `uid` (`uid`)
) ENGINE=MYISAM COMMENT='教育机构';

-- 教育机构的管理员
DROP TABLE IF EXISTS pre_school_school_admin;
CREATE TABLE pre_school_school_admin (
	`sid` mediumint(8) unsigned NOT NULL COMMENT '教育机构ID' ,
	`uid` mediumint(8) unsigned NOT NULL COMMENT 'UID' ,
	`username` VARCHAR(255) NOT NULL COMMENT '用户名称',
	-- 索引
	PRIMARY KEY (`sid`,uid)
) ENGINE=MYISAM COMMENT='教育机构的管理员';


-- 教育机构-课程
DROP TABLE IF EXISTS pre_school_course;
CREATE TABLE pre_school_course (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`code` CHAR(20) NOT NULL COMMENT '课程编号',
	`name` VARCHAR(255) NOT NULL COMMENT '课程名称',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='课程';
-- 预置默认的课程 ，每增加一个机构时自动以默认课程为基础生成该机构的课程，供其修改
insert into `pre_school_course` (`sid`,`code`, `name`) values
('0','01','主班'),
('0','02','配班'),
('0','03','生活'),
('0','04','语文'),
('0','05','数学'),
('0','06','英语'),
('0','07','体育'),
('0','08','美术'),
('0','09','音乐'),
('0','10','德育'),
('0','11','手工'),
('0','12','外教');

-- 教育机构-班级
DROP TABLE IF EXISTS pre_school_class;
CREATE TABLE pre_school_class (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`code` CHAR(20) NOT NULL COMMENT '班级编号',
	`name` VARCHAR(255) NOT NULL COMMENT '班级名称',
	`ctype` ENUM('幼儿班','学前班','小学','中学','亲子班','兴趣班','成人班') NOT NULL COMMENT '班级类型',
	`foundyear` CHAR(4) NOT NULL COMMENT '年级，即入学时的年份',
	`headteacher` VARCHAR(4) NOT NULL COMMENT '主班老师',
	`status` ENUM('正常','未开班','关闭') NOT NULL default '正常' COMMENT '状态',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='班级';


-- 学生档案
DROP TABLE IF EXISTS pre_school_student;
CREATE TABLE pre_school_student (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`code` VARCHAR(20) NOT NULL COMMENT '学号',
	`name` VARCHAR(255) NOT NULL COMMENT '学生姓名',
	`photourl` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '相片',
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '所在班级id',
	`classname` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '所在班级名称',
	`foundyear` CHAR(4) NOT NULL COMMENT '年级，即入学时的年份',
	`gender` ENUM('男','女','未知') NOT NULL DEFAULT '男' COMMENT '性别',
	`status` ENUM('在读','试读','毕业','退学') NOT NULL DEFAULT '在读' COMMENT '状态',
	`birthyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '出生年份',  
	`birthmonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '出生月份',
	`birthday` tinyint(3) unsigned NOT NULL default '0'  COMMENT '出生日',
	`ethnic` VARCHAR(40) NOT NULL DEFAULT '汉族' COMMENT '民族',
	`idcode` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '身份证号',
	`feetype` mediumint(8) unsigned NOT NULL DEFAULT 0 COMMENT '学费类型',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`email` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	`busno` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '班车',
	`busstation` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '班车站点',
	`uid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '关联的UID',
	`username` char(15) NOT NULL default '' COMMENT '关联的用户名',
	`address` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '家庭地址',
	-- 扩展信息
	`residence` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '户籍地址',
	`localaccount` tinyint(1) NOT NULL default '1' COMMENT '本地户口',
	`bloodtype` varchar(20) NOT NULL default '' COMMENT '血型',
	`height` varchar(20) NOT NULL default '' COMMENT ' 身高',
	`weight` varchar(20) NOT NULL default '' COMMENT ' 体重',
	`healthy` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '健康状况',
	`hobby` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '兴趣爱好',
	`education` mediumtext COMMENT '受教育经历',
	`Remarks`  mediumtext COMMENT '备注',
	-- 父亲
	`fname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`feducation` varchar(255) NOT NULL default '' COMMENT '学历',
	`foccupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`fposition` varchar(255) NOT NULL default '' COMMENT '职位',
	`ftelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`femail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	`fuid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '关联的UID',
	`fusername` char(15) NOT NULL default '' COMMENT '关联的用户名',
	-- 母亲
	`mname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`meducation` varchar(255) NOT NULL default '' COMMENT '学历',
	`moccupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`mposition` varchar(255) NOT NULL default '' COMMENT '职位',
	`mtelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`memail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	`muid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '关联的UID',
	`musername` char(15) NOT NULL default '' COMMENT '关联的用户名',
	-- 其他监护人
	`oname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`relation` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '和学生的关系',
	`oeducation` varchar(255) NOT NULL default '' COMMENT '学历',
	`ooccupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`oposition` varchar(255) NOT NULL default '' COMMENT '职位',
	`otelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`oemail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	`ouid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '关联的UID',
	`ousername` char(15) NOT NULL default '' COMMENT '关联的用户名',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `classid` (`classid`)
) ENGINE=MYISAM COMMENT='学生档案';

-- 家长申请
DROP TABLE IF EXISTS pre_school_parentapply;
CREATE TABLE pre_school_parentapply (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`uid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '申请者的UID',
	`username` char(15) NOT NULL default '' COMMENT '关联的用户名',
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '所在班级id',
	`stid`  mediumint(8) unsigned NOT NULL COMMENT '学生id' ,
	`stcode` VARCHAR(20) NOT NULL COMMENT '学号',
	`stname` VARCHAR(255) NOT NULL COMMENT '学生姓名',
	`parentname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`education` varchar(255) NOT NULL default '' COMMENT '学历',
	`occupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`position` varchar(255) NOT NULL default '' COMMENT '职位',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`email` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '邮件地址',
	`ralation` ENUM('爸爸','妈妈','爷爷','奶奶','姥爷','姥姥','其他'),
	`audited` tinyint(1) NOT NULL DEFAULT 0 COMMENT '已审核',
	`dateline` int(10) unsigned NOT NULL default '0' COMMENT '申请时间',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`,`audited`),
	KEY `stid` (`stid`)
) ENGINE=MYISAM COMMENT='家长申请';


-- 学生考勤
DROP TABLE IF EXISTS pre_school_absent;
CREATE TABLE pre_school_absent (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '所在班级id',
	`stid`  mediumint(8) unsigned NOT NULL COMMENT '学生id' ,
	`stcode` VARCHAR(20) NOT NULL COMMENT '学号',
	`stname` VARCHAR(255) NOT NULL COMMENT '学生姓名',
	`absentday` int(10) unsigned NOT NULL default '0'  COMMENT '缺勤日期',
	`absentreason` VARCHAR(255) NOT NULL default '' COMMENT '缺勤原因',
	`reporter` VARCHAR(255) NOT NULL default '' COMMENT '填报人',
	dateline int(10) unsigned NOT NULL default '0' COMMENT '填报时间',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `stid` (`stid`),
	KEY `classid` (`classid`),
	KEY `absentday` (`absentday`)
) ENGINE=MYISAM COMMENT='学生考勤';

-- 教师档案
DROP TABLE IF EXISTS pre_school_teacher;
CREATE TABLE pre_school_teacher (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	-- 基本信息
	`name` VARCHAR(255) NOT NULL COMMENT '姓名',
	`photourl` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '相片',
	`gender` ENUM('男','女','未知') NOT NULL DEFAULT '男' COMMENT '性别',
	`idcode` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '身份证号',
	`birthyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '出生年份',  
	`birthmonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '出生月份',
	`birthday` tinyint(3) unsigned NOT NULL default '0'  COMMENT '出生日',
	`ethnic` VARCHAR(40) NOT NULL DEFAULT '汉族' COMMENT '民族',
	`department` varchar(255) NOT NULL default '' COMMENT '部门',
	`jobtitle` varchar(255) NOT NULL default '' COMMENT '职务',
	`entryyear` smallint(6)  NOT NULL DEFAULT '0' COMMENT '入职年份',
	`entrymonth` tinyint(3) NOT NULL DEFAULT '0' COMMENT '入职月份',
	`entryday` tinyint(3) NOT NULL DEFAULT '0' COMMENT '入职日',
	`status` ENUM('在职','试用','实习','离职') NOT NULL DEFAULT '在职' COMMENT '状态',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`email` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	`address` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '家庭地址',
	-- 教育/行业经验
	`academicdegree` ENUM('中专','大专','本科','硕士','博士') NOT NULL DEFAULT '本科' COMMENT '最高学历',
	`university` VARCHAR(255) NOT NULL DEFAULT '男' COMMENT '毕业院校',
	`specialty` VARCHAR(255) NOT NULL DEFAULT '男' COMMENT '所学专业',
	`graduateyear` smallint(6)  NOT NULL DEFAULT '0' COMMENT '毕业年份',
	`professionyear` smallint(6)  NOT NULL DEFAULT '0' COMMENT '入行年份',
	`resume` mediumtext COMMENT '个人简历',
	-- 扩展信息
	`residence` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '户籍地址',
	`localaccount` tinyint(1) NOT NULL default '1' COMMENT '本地户口',
	`bloodtype` varchar(20) NOT NULL default '' COMMENT '血型',
	`height` varchar(20) NOT NULL default '' COMMENT ' 身高',
	`weight` varchar(20) NOT NULL default '' COMMENT ' 体重',
	`healthy` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '健康状况',
	`hobby` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '兴趣爱好',
	`uid` mediumint(8) unsigned NOT NULL  DEFAULT 0 COMMENT '关联的UID',
	`username` char(15) NOT NULL default '' COMMENT '关联的用户名',
	`Remarks`  mediumtext COMMENT '备注',
	-- 权限信息
	`educational` tinyint(1) NOT NULL DEFAULT '0' COMMENT '教学教务',
	`article` tinyint(1) NOT NULL DEFAULT '0' COMMENT '文章管理',
	`cookbook` tinyint(1) NOT NULL DEFAULT '0' COMMENT '食谱管理',
	`calendar` tinyint(1) NOT NULL DEFAULT '0' COMMENT '校历管理',
	`enrollment` tinyint(1) NOT NULL DEFAULT '0' COMMENT '招生管理',
	`student` tinyint(1) NOT NULL DEFAULT '0' COMMENT '学生档案',
	`teacher` tinyint(1) NOT NULL DEFAULT '0' COMMENT '教师档案',
	`fees` tinyint(1) NOT NULL DEFAULT '0' COMMENT '学费管理',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `uid` (`uid`)
) ENGINE=MYISAM COMMENT='教师档案';


-- 教师任课信息
DROP TABLE IF EXISTS pre_school_teacher_course;
CREATE TABLE pre_school_teacher_course (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`teacherid`  mediumint(8) unsigned NOT NULL COMMENT '教师id' ,
	`teachername` VARCHAR(255) NOT NULL COMMENT '教师姓名',
	`classid`  mediumint(8) unsigned NOT NULL COMMENT '班级id' ,
	`classname` VARCHAR(255) NOT NULL COMMENT '班级名称',
	`courseid`  mediumint(8) unsigned NOT NULL COMMENT '课程id' ,
	`coursename` VARCHAR(255) NOT NULL COMMENT '课程名称',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `teacherid` (`teacherid`),
	KEY `classid` (`classid`),
	KEY `courseid` (`courseid`)
) ENGINE=MYISAM COMMENT='教师任课信息';

-- 权限
/* 
DROP TABLE IF EXISTS pre_school_authority;
CREATE TABLE pre_school_authority (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`uid`  mediumint(8) unsigned NOT NULL COMMENT '用户id' ,
	`teacherid`  mediumint(8) unsigned NOT NULL COMMENT '教师id' ,
	`teachername` VARCHAR(255) NOT NULL COMMENT '教师名称',
	`username` VARCHAR(255) NOT NULL COMMENT '网名',
	-- 权限信息
	`educational` tinyint(1) NOT NULL DEFAULT '0' COMMENT '教学教务',
	`article` tinyint(1) NOT NULL DEFAULT '0' COMMENT '文章管理',
	`cookbook` tinyint(1) NOT NULL DEFAULT '0' COMMENT '食谱管理',
	`calendar` tinyint(1) NOT NULL DEFAULT '0' COMMENT '校历管理',
	`enrollment` tinyint(1) NOT NULL DEFAULT '0' COMMENT '招生管理',
	`student` tinyint(1) NOT NULL DEFAULT '0' COMMENT '学生档案',
	`teacher` tinyint(1) NOT NULL DEFAULT '0' COMMENT '教师档案',
	`fees` tinyint(1) NOT NULL DEFAULT '0' COMMENT '学费管理',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `teacherid` (`teacherid`),
	KEY `uid` (`uid`)
) ENGINE=MYISAM COMMENT='权限';
*/

-- 学费类型
DROP TABLE IF EXISTS pre_school_feetype;
CREATE TABLE pre_school_feetype (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`name` VARCHAR(40) NOT NULL COMMENT '费用类型名称',
	`description` VARCHAR(255) NOT NULL COMMENT '费用类型描述',
	`periodtype` ENUM('月份','季度','年度') NOT NULL DEFAULT '月份' COMMENT '结算周期',
	`balancemonth` smallint NOT NULL COMMENT '结算月',
	`balanceday` smallint NOT NULL COMMENT '结算日',
	`urgedays` smallint NOT NULL COMMENT '自动催缴天数，结算后几天未缴费的自动发送催熟通知',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='班级';

-- 缴费项目
DROP TABLE IF EXISTS pre_school_feeitem;
CREATE TABLE pre_school_feeitem (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`ftid`  mediumint(8) unsigned NOT NULL COMMENT '学费类型' ,
	`itemid` VARCHAR(255) NOT NULL COMMENT '对应缴费明细表中的字段名称',
	`valid` tinyint(1) NOT NULL DEFAULT '0' COMMENT '启用',
	`name` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '缴费项目名称',
	`description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '缴费项目描述',
	`feemonth` CHAR(12) NOT NULL DEFAULT '111111111111' COMMENT '缴费月份：第n位为1表示该月需要缴纳这费用，否则表示该月份不需要缴纳',
	`itemtype` ENUM('增项','减项','辅助项') NOT NULL DEFAULT '增项' COMMENT '项目类型',
	`valuetype` ENUM('固定值','系统计算','手工核算') NOT NULL DEFAULT '固定值' COMMENT '取值方式',
	`valueexp` TEXT COMMENT '计算表达式，固定值是就为一个数值',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `ftid` (`ftid`),
	KEY `itemid`(`itemid`)
) ENGINE=MYISAM COMMENT='缴费项目';

-- 学费
DROP TABLE IF EXISTS pre_school_fee;
CREATE TABLE pre_school_fee (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL COMMENT '教育机构id' ,
	`feetypeid`  mediumint(8) unsigned NOT NULL COMMENT '学费类型id' ,
	`feeyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '费用年份',  
	`feemonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '费用月份',
	`studentid`  mediumint(8) unsigned NOT NULL COMMENT '学生id' ,
	`studentcode`  VARCHAR(255) NOT NULL COMMENT '学号' ,
	`studentname`  VARCHAR(255) NOT NULL COMMENT '学生姓名' ,
	`classid`  mediumint(8) unsigned NOT NULL COMMENT '所在班级id' ,
	`classname`  VARCHAR(255) NOT NULL COMMENT '班级名称' ,
	`absentcount` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '缺勤天数' ,
	`amounts`  DECIMAL(12,2) unsigned NOT NULL DEFAULT '0' COMMENT '金额' ,
	`status`  ENUM('未审核','已核对','已缴纳','已开票') NOT NULL DEFAULT '未审核' COMMENT '金额' ,
	`notifytime`  int(10) unsigned NOT NULL default '0' COMMENT '最近通知时间',
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`),
	KEY `feetypeid` (`feetypeid`),
	KEY `feemonth` (`feeyear`,`feemonth`),
	KEY `studentid` (`studentid`)
) ENGINE=MYISAM COMMENT='学费';

-- 学费明细
DROP TABLE IF EXISTS pre_school_fee_detail;
CREATE TABLE pre_school_fee_detail (
	`id` mediumint(8) unsigned NOT NULL  COMMENT '学费id',
	`item1` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目1' ,
	`item2` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目2' ,
	`item3` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目3' ,
	`item4` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目4' ,
	`item5` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目5' ,
	`item6` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目6' ,
	`item7` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目7' ,
	`item8` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目8' ,
	`item9` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目9' ,
	`item10` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目10' ,
	`item11` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目11' ,
	`item12` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目12' ,
	`item13` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目13' ,
	`item14` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目14' ,
	`item15` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目15' ,
	`item16` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目16' ,
	`item17` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目17' ,
	`item18` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目18' ,
	`item19` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目19' ,
	`item20` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目20' ,
	`item21` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目21' ,
	`item22` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目22' ,
	`item23` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目23' ,
	`item24` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目24' ,
	`item25` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目25' ,
	`item26` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目26' ,
	`item27` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目27' ,
	`item28` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目28' ,
	`item29` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目29' ,
	`item30` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '费用项目30' ,
	-- 索引
	PRIMARY KEY (`id`)
) ENGINE=MYISAM COMMENT='学费明细';

-- 招生培训
DROP TABLE IF EXISTS pre_school_admissions;
CREATE TABLE pre_school_admissions (
	tid mediumint(8) unsigned NOT NULL default '0' COMMENT '主题id',
	uid mediumint(8) unsigned NOT NULL default '0' COMMENT '会员id',
	`sid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '教育机构id' ,
	aid mediumint(8) unsigned NOT NULL default '0' COMMENT '主题图片id',
	`ctype` ENUM('幼儿班','学前班','小学','中学','亲子班','兴趣班','成人班') NOT NULL COMMENT '招生类型',
	`starttime` int(10) unsigned NOT NULL default '0' COMMENT '报名开始时间',
	`expiration` int(10) unsigned NOT NULL default '0' COMMENT '报名截止日期',
	`checkintime` int(10) unsigned NOT NULL default '0' COMMENT '报到时间',
	`applycondition` varchar(255) NOT NULL default '' COMMENT '报名条件',
	`contact` varchar(255) NOT NULL default '' COMMENT '负责人',
	`telphone` varchar(255) NOT NULL default '' COMMENT '联系电话',
	`email` varchar(255) NOT NULL default '' COMMENT '邮件地址',
	`summary` varchar(255) NOT NULL default '' COMMENT '摘要信息',
	--
	`cost` mediumint(8) unsigned NOT NULL default '0' COMMENT '学费',
	-- `place` varchar(255) NOT NULL default COMMENT '地点',
	-- class varchar(255) NOT NULL default COMMENT '类别',
	-- gender tinyint(1) NOT NULL default '0' COMMENT '性别',
	number smallint(5) unsigned NOT NULL default '0' COMMENT '招生人数',
	applynumber smallint(5) unsigned NOT NULL default '0' COMMENT '已报名人数',
	PRIMARY KEY (tid),
	KEY sid (sid,starttime),
	KEY starttime (starttime),
	KEY expiration (expiration),
	KEY applynumber (applynumber)
) ENGINE=MyISAM COMMENT='招生培训';

-- 招生培训申请表
DROP TABLE IF EXISTS pre_school_admissions_apply;
CREATE TABLE pre_school_admissions_apply (
	applyid int(10) unsigned NOT NULL auto_increment COMMENT '申请id',
	tid mediumint(8) unsigned NOT NULL default '0' COMMENT '主题id',
	username varchar(255) NOT NULL default '' COMMENT '用户名',
	uid mediumint(8) unsigned NOT NULL default '0' COMMENT '会员id',
	message varchar(255) NOT NULL default '' COMMENT '消息',
	verified tinyint(1) NOT NULL default '0' COMMENT '是否审核通过\n(0:N 1:Y 2:需完善资料)',
	dateline int(10) unsigned NOT NULL default '0' COMMENT '申请时间',
	-- payment mediumint(8) NOT NULL default '0' COMMENT '每人花销',
	-- 基本信息
	`name` VARCHAR(255) NOT NULL COMMENT '学生姓名',
	`photourl` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '相片',
	`classid` mediumint(8) NOT NULL DEFAULT 0 COMMENT '所在班级id',
	`classname` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '所在班级名称',
	`gender` ENUM('男','女','未知') NOT NULL DEFAULT '男' COMMENT '性别',
	-- `status` ENUM('在读','试读','毕业','退学','报名') NOT NULL DEFAULT '在读' COMMENT '状态',
	`birthyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '出生年份',  
	`birthmonth` tinyint(3) unsigned NOT NULL default '0'  COMMENT '出生月份',
	`birthday` tinyint(3) unsigned NOT NULL default '0'  COMMENT '出生日',
	`ethnic` VARCHAR(40) NOT NULL DEFAULT '汉族' COMMENT '民族',
	`idcode` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '身份证号',
	`feetype` mediumint(8) unsigned NOT NULL DEFAULT 0 COMMENT '学费类型',
	`telephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`email` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	`busstation` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '班车站点',
	`address` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '家庭地址',
	-- 扩展信息
	`residence` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '户籍地址',
	`localaccount` tinyint(1) NOT NULL default '1' COMMENT '本地户口',
	`bloodtype` varchar(20) NOT NULL default '' COMMENT '血型',
	`height` varchar(20) NOT NULL default '' COMMENT ' 身高',
	`weight` varchar(20) NOT NULL default '' COMMENT ' 体重',
	`healthy` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '健康状况',
	`hobby` VARCHAR(255) NOT NULL DEFAULT ''  COMMENT '兴趣爱好',
	`education` mediumtext COMMENT '受教育经历',
	`Remarks`  mediumtext COMMENT '备注',
	-- 父亲
	`fname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`feducation` varchar(255) NOT NULL default '' COMMENT '学历',
	`foccupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`fposition` varchar(255) NOT NULL default '' COMMENT '职位',
	`ftelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`femail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	-- 母亲
	`mname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`meducation` varchar(255) NOT NULL default '' COMMENT '学历',
	`moccupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`mposition` varchar(255) NOT NULL default '' COMMENT '职位',
	`mtelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`memail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	-- 其他监护人
	`oname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '姓名',
	`relation` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '和学生的关系',
	`oeducation` varchar(255) NOT NULL default '' COMMENT '学历',
	`ooccupation` varchar(255) NOT NULL default '' COMMENT '工作单位',
	`oposition` varchar(255) NOT NULL default '' COMMENT '职位',
	`otelephone` VARCHAR(40) NOT NULL DEFAULT '' COMMENT '联系电话',
	`oemail` VARCHAR(40) NOT NULL DEFAULT ''  COMMENT '电子邮件',
	-- 索引	
	PRIMARY KEY (applyid),
	KEY uid (uid),
	KEY tid (tid),
	KEY dateline (tid,dateline)
) ENGINE=MyISAM COMMENT='招生培训申请表';
-- 申请后基于message内容自动回复，主楼不显示明细

-- 校历
DROP TABLE IF EXISTS pre_school_canlendar;
CREATE TABLE pre_school_canlendar (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '教育机构id' ,
	`name` VARCHAR(120) NOT NULL DEFAULT '' COMMENT '校历名称' ,
	`description` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '校历名称' ,
	`valide` tinyint(1) unsigned NOT NULL default '0' COMMENT '是否启用',  -- 一个机构只能启用一个校历
	-- 索引
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`)
) ENGINE=MYISAM COMMENT='校历';

-- 校历明细
DROP TABLE IF EXISTS pre_school_canlendar_detail;
CREATE TABLE pre_school_canlendar_detail (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`canlendarid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '校历id' ,
	`year` smallint(6) unsigned NOT NULL default '0'  COMMENT '年份',  
	`month` tinyint(3) unsigned NOT NULL default '0'  COMMENT '月份',
	`day` tinyint(3) unsigned NOT NULL default '0'  COMMENT '日期',
	`class` ENUM('工作日','周末','节假日') NOT NULL default '工作日'  COMMENT '日期类型',
	`specialday` tinyint(1) unsigned NOT NULL default '1'  COMMENT '特殊活动日',
	`activity` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '活动说明' ,
	`alert` tinyint(1) unsigned NOT NULL default '0' COMMENT '是否提醒',  -- 是否提前提醒相关人员
	`alerttime` int(10) unsigned NOT NULL default '0' COMMENT '提醒时间',
	`alertuser` text  COMMENT '提醒人员',
	`message` text  COMMENT '提醒内容',
	`website` tinyint(1) unsigned NOT NULL default '1' COMMENT '站内提醒', 
	`email` tinyint(1) unsigned NOT NULL default '1' COMMENT '邮件提醒', 
	`sms` tinyint(1) unsigned NOT NULL default '0' COMMENT '手机短信提醒', 
	-- 索引
	PRIMARY KEY (`id`),
	KEY `canlendarid` (`canlendarid`),
	key `month`(`canlendarid`,`year`,`month`),
	key `altertime`(`alerttime`)
) ENGINE=MYISAM COMMENT='校历明细';

-- 学业评估
DROP TABLE IF EXISTS pre_school_evaluate;
CREATE TABLE pre_school_evaluate (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid` mediumint(8) unsigned NOT NULL default '0' COMMENT '教育机构id',
	`schoolyear` smallint(6) unsigned NOT NULL default '0'  COMMENT '学年', 
	`semesters`  VARCHAR(40) NOT NULL DEFAULT '' COMMENT '学期：上学期，下学期等',
	`evaluatetype` ENUM('期末考','期中考','单元测试','日常观察') NOT NULL default '期末考' COMMENT '评估类型',
	`courseid` mediumint(8) unsigned NOT NULL default '0' COMMENT '课程id', 
	`coursename` VARCHAR(255) NOT NULL default '' COMMENT '课程名称', 
	`evaluatetime` int(10) unsigned NOT NULL default '0' COMMENT '评估时间',
	PRIMARY KEY (`id`),
	KEY `sid` (`sid`,`schoolyear`,`semesters`)
) ENGINE=MyISAM COMMENT='学业评估';
  
-- 评估结果
DROP TABLE IF EXISTS pre_school_evaluatescore;
CREATE TABLE pre_school_evaluatescore (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`evaluateid` mediumint(8) unsigned NOT NULL default '0' COMMENT '评估id',
	`studentid` mediumint(8) unsigned NOT NULL default '0' COMMENT '学生id',
	`studentname` VARCHAR(255) NOT NULL default '' COMMENT '学生姓名',
	`score` VARCHAR(20)  NULL default '' COMMENT '成绩',
	`evaluate` TEXT COMMENT '评价',
	`evaluator` VARCHAR(255) NOT NULL default '' COMMENT '评价人', -- 默认当前用户
	-- 索引	
	PRIMARY KEY (id),
	KEY uid (studentid),
	KEY tid (evaluateid)
) ENGINE=MyISAM COMMENT='招生培训申请表';
-- 申请后基于message内容自动回复，主楼不显示明细

-- 特殊主题模板
DROP TABLE IF EXISTS pre_school_teachtemplate;
CREATE TABLE pre_school_teachtemplate (
	`id` mediumint(8) unsigned NOT NULL auto_increment ,
	`sid` mediumint(8) unsigned NOT NULL default '0' COMMENT '教育机构id',
	`templatetype` ENUM('教案','教学笔记','观察报告') NOT NULL default '教案' COMMENT '模板类型',
	`valid` tinyint(1) NOT NULL default '0' COMMENT '默认模板',
	`template` text COMMENT '模板',
	PRIMARY KEY (id),
	KEY `template` (`sid`,`templatetype`)
) ENGINE=MyISAM COMMENT='特殊主题模板';
  

-- 教案(通过自定义分类信息来实现） 新建教案时加载教安模板
DROP TABLE IF EXISTS pre_school_teachingplan;
CREATE TABLE pre_school_teachingplan (
	`tid` mediumint(8) unsigned NOT NULL default '0' COMMENT '主题id',
	`uid` mediumint(8) unsigned NOT NULL default '0' COMMENT '会员id',
	`sid`  mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '教育机构id' ,
	`aid` mediumint(8) unsigned NOT NULL default '0' COMMENT '主题图片id',
	`courseid` mediumint(8) unsigned NOT NULL default '0' COMMENT '课程ID',
	`coursename`  varchar(255) NOT NULL default '' COMMENT '课程名称',
	`section`  varchar(255) NOT NULL default '' COMMENT '章节',
	`subject` varchar(255) NOT NULL default '' COMMENT '主题',
	`classid` mediumint(8) unsigned NOT NULL default '0' COMMENT '班级ID',
	`classname` varchar(255) NOT NULL default '' COMMENT '班级名称',
	`teacherid` mediumint(8) unsigned NOT NULL default '0' COMMENT '授课教师',
	`teachername` varchar(255) NOT NULL default '' COMMENT '教师姓名',
	`classtime` int(10) unsigned NOT NULL default '0' COMMENT '上课时间',
	`location`  varchar(255) NOT NULL default '' COMMENT '上课地点',
	PRIMARY KEY (tid),
	KEY sid (sid)
) ENGINE=MyISAM COMMENT='教案';

-- 学生评估报告 (通过自定义分类信息来实现） 新建教案时加载教安模板

