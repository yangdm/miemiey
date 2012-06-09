
var PageName = '家长申请（弹出）';
var PageId = '3202d674743f44c79528e66fe0749894'
var PageUrl = '家长申请（弹出）.html'
document.title = '家长申请（弹出）';
var PageNotes = 
{
"pageName":"家长申请（弹出）",
"showNotesNames":"False",
"关闭":"<p style=\"text-align:left;\"><span style=\"\">检查班级中是否存在这个名字的孩子，如果不存在，则给出提示<\/span><\/p>"}
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

var u3 = document.getElementById('u3');

var u21 = document.getElementById('u21');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u12Note').click(function(e) { ToggleWorkflow(e, 'u12', 300, 150, false); return false; });
var u12Ann = 
{
"label":"?",
"描述":"检查该班级中是否存在该名称的学生，如果不存在进行提示",
"调用":"table_school_parentapply::insert();"};

var u15 = document.getElementById('u15');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u0 = document.getElementById('u0');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u19 = document.getElementById('u19');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u17 = document.getElementById('u17');

var u5 = document.getElementById('u5');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u9 = document.getElementById('u9');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u11 = document.getElementById('u11');

var u13 = document.getElementById('u13');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u7 = document.getElementById('u7');

if (window.OnLoad) OnLoad();
