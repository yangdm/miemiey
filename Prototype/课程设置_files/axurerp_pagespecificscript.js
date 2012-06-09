
var PageName = '课程设置';
var PageId = 'eefff736c88b4a06b2a8db9aa52df3e8'
var PageUrl = '课程设置.html'
document.title = '课程设置';
var PageNotes = 
{
"pageName":"课程设置",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '9');
  value = value.replace(/\[\[GenMonth\]\]/g, '6');
  value = value.replace(/\[\[GenMonthName\]\]/g, '六月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期六');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u115 = document.getElementById('u115');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u21 = document.getElementById('u21');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u153 = document.getElementById('u153');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u17 = document.getElementById('u17');

var u135 = document.getElementById('u135');

var u151 = document.getElementById('u151');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');

var u55 = document.getElementById('u55');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if (true) {

	self.location.href="家长审核.html" + GetQuerystring();

}

}
gv_vAlignTable['u14'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u20 = document.getElementById('u20');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u20ann'), "<div id='u20Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u20Note').click(function(e) { ToggleWorkflow(e, 'u20', 300, 150, false); return false; });
var u20Ann = 
{
"label":"?",
"调用":"table_school_course::fetch_all_by_school();"};

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u67 = document.getElementById('u67');

var u65 = document.getElementById('u65');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="教育机构首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="班级设置_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u75 = document.getElementById('u75');

var u133 = document.getElementById('u133');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u89 = document.getElementById('u89');

var u47 = document.getElementById('u47');

var u184 = document.getElementById('u184');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u31 = document.getElementById('u31');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u57 = document.getElementById('u57');

var u119 = document.getElementById('u119');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	self.location.href="模板管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u16'] = 'top';
var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="机构设置-首页基本信息.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u149 = document.getElementById('u149');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u149ann'), "<div id='u149Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u149Note').click(function(e) { ToggleWorkflow(e, 'u149', 300, 150, false); return false; });
var u149Ann = 
{
"label":"?",
"描述":"点击新增，列表中增加一行并自动进入编辑状态"};

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u182 = document.getElementById('u182');

var u101 = document.getElementById('u101');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u23 = document.getElementById('u23');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u33 = document.getElementById('u33');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u157 = document.getElementById('u157');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u183 = document.getElementById('u183');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u71 = document.getElementById('u71');

var u181 = document.getElementById('u181');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u181ann'), "<div id='u181Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u181Note').click(function(e) { ToggleWorkflow(e, 'u181', 300, 150, false); return false; });
var u181Ann = 
{
"label":"?",
"描述":"删除选中的课程，保存修改结果；删除前需要让用户先进行确认",
"调用":"新增的行调用C::t('school_course')-&gt;insert($data); 删除的行，调用C::t('school_course')-&gt;delete(课程ID列表);更新的行，调用C::t('school_course')-&gt;update($id,$data);"};

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u43 = document.getElementById('u43');

var u169 = document.getElementById('u169');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u139 = document.getElementById('u139');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u121 = document.getElementById('u121');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u155 = document.getElementById('u155');

var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u123 = document.getElementById('u123');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u81 = document.getElementById('u81');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u9'] = 'top';
var u4 = document.getElementById('u4');

var u73 = document.getElementById('u73');

var u113 = document.getElementById('u113');

var u147 = document.getElementById('u147');

var u163 = document.getElementById('u163');

var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u117 = document.getElementById('u117');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{
windowEvent = e;


if (true) {

	self.location.href="权限管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u13'] = 'top';
var u29 = document.getElementById('u29');

var u111 = document.getElementById('u111');

var u141 = document.getElementById('u141');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u127 = document.getElementById('u127');

var u173 = document.getElementById('u173');

var u39 = document.getElementById('u39');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u39ann'), "<div id='u39Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u39Note').click(function(e) { ToggleWorkflow(e, 'u39', 300, 150, false); return false; });
var u39Ann = 
{
"label":"?",
"描述":"使当前行进入编辑状态"};

var u99 = document.getElementById('u99');

var u171 = document.getElementById('u171');

var u0 = document.getElementById('u0');

var u145 = document.getElementById('u145');

var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u8 = document.getElementById('u8');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u8ann'), "<div id='u8Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u8Note').click(function(e) { ToggleWorkflow(e, 'u8', 300, 150, false); return false; });
var u8Ann = 
{
"label":"?",
"规则":"判断当前用户是否是该机构的管理员，或者是论坛的管理员，如果不是则允许访问"};

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="机构设置-首页基本信息.html" + GetQuerystring();

}

}
gv_vAlignTable['u8'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	self.location.href="学费类型.html" + GetQuerystring();

}

}
gv_vAlignTable['u15'] = 'top';
var u49 = document.getElementById('u49');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u93 = document.getElementById('u93');

var u167 = document.getElementById('u167');

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="文章分类.html" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
var u165 = document.getElementById('u165');

var u25 = document.getElementById('u25');

var u59 = document.getElementById('u59');

var u137 = document.getElementById('u137');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');

var u161 = document.getElementById('u161');

var u45 = document.getElementById('u45');

var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u143 = document.getElementById('u143');

var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');

var u69 = document.getElementById('u69');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
if (window.OnLoad) OnLoad();
