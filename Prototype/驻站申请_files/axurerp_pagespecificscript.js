
var PageName = '驻站申请';
var PageId = '90bfa821c07f4c9c8fb4fcccb11b56b0'
var PageUrl = '驻站申请.html'
document.title = '驻站申请';
var PageNotes = 
{
"pageName":"驻站申请",
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

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');

var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u8 = document.getElementById('u8');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u21 = document.getElementById('u21');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u57 = document.getElementById('u57');

var u32 = document.getElementById('u32');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u32ann'), "<div id='u32Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u32Note').click(function(e) { ToggleWorkflow(e, 'u32', 300, 150, false); return false; });
var u32Ann = 
{
"label":"?",
"规则":"省份切换后，市、区根据省份自动过虑"};

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u15 = document.getElementById('u15');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u37 = document.getElementById('u37');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u41 = document.getElementById('u41');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u12 = document.getElementById('u12');

var u39 = document.getElementById('u39');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u35 = document.getElementById('u35');

var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u58 = document.getElementById('u58');

var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u53 = document.getElementById('u53');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u5 = document.getElementById('u5');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u47 = document.getElementById('u47');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u51ann'), "<div id='u51Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u51Note').click(function(e) { ToggleWorkflow(e, 'u51', 300, 150, false); return false; });
var u51Ann = 
{
"label":"?",
"调用":"调用C::t('school_school')-&gt;insert($data); 进行持久化"};

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{
windowEvent = e;


if (true) {

	self.location.href="教育机构查找结果.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u34ann'), "<div id='u34Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u34Note').click(function(e) { ToggleWorkflow(e, 'u34', 300, 150, false); return false; });
var u34Ann = 
{
"label":"?",
"规则":"对应pre_school_school.service"};
gv_vAlignTable['u34'] = 'top';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
