
var PageName = '任课教师';
var PageId = 'e81f09c699404e84ba7a353fa5a9979c'
var PageUrl = '任课教师.html'
document.title = '任课教师';
var PageNotes = 
{
"pageName":"任课教师",
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

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u46 = document.getElementById('u46');

var u6 = document.getElementById('u6');

var u38 = document.getElementById('u38');

var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u62 = document.getElementById('u62');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');

var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u64 = document.getElementById('u64');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u36 = document.getElementById('u36');

var u58 = document.getElementById('u58');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u52 = document.getElementById('u52');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u52ann'), "<div id='u52Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u52Note').click(function(e) { ToggleWorkflow(e, 'u52', 300, 150, false); return false; });
var u52Ann = 
{
"label":"?",
"描述":"增加新一行，并使当前行进入编辑状态"};

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u3ann'), "<div id='u3Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u3Note').click(function(e) { ToggleWorkflow(e, 'u3', 300, 150, false); return false; });
var u3Ann = 
{
"label":"?",
"调用":"新增的行调用C::t('school_teacher_course')-&gt;insert($data); 删除的行，调用C::t('school_teacher_course')-&gt;delete(课程ID列表);更新的行，调用C::t('school_teacher_course')-&gt;update($id,$data);"};

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u20 = document.getElementById('u20');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u20ann'), "<div id='u20Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u20Note').click(function(e) { ToggleWorkflow(e, 'u20', 300, 150, false); return false; });
var u20Ann = 
{
"label":"?",
"描述":"使当前行进入编辑状态"};

var u50 = document.getElementById('u50');

var u28 = document.getElementById('u28');

var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u4 = document.getElementById('u4');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u56 = document.getElementById('u56');

var u5 = document.getElementById('u5');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u5ann'), "<div id='u5Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u5Note').click(function(e) { ToggleWorkflow(e, 'u5', 300, 150, false); return false; });
var u5Ann = 
{
"label":"?",
"调用":"table_school_teacher_course::fetch_all_by_class();"};

var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');

var u48 = document.getElementById('u48');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');

var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
if (window.OnLoad) OnLoad();
