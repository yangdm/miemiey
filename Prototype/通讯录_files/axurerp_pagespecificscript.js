
var PageName = '通讯录';
var PageId = '87ab32b6cc484c14a4d38ce285a71a3d'
var PageUrl = '通讯录.html'
document.title = '通讯录';
var PageNotes = 
{
"pageName":"通讯录",
"showNotesNames":"False",
"关闭":"<p style=\"text-align:left;\"><span style=\"\">点击详情，弹出学生详细信息页面可修改学生信息，只有班主任和家长才能查看和修改，其他人员不允许查询和修改<\/span><\/p>"}
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

var u122 = document.getElementById('u122');

var u132 = document.getElementById('u132');

var u32 = document.getElementById('u32');

var u130 = document.getElementById('u130');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u4 = document.getElementById('u4');

var u140 = document.getElementById('u140');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u42 = document.getElementById('u42');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u14 = document.getElementById('u14');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u124 = document.getElementById('u124');

var u138 = document.getElementById('u138');

var u2 = document.getElementById('u2');

var u52 = document.getElementById('u52');

var u20 = document.getElementById('u20');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u120 = document.getElementById('u120');

var u24 = document.getElementById('u24');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u48 = document.getElementById('u48');

var u108 = document.getElementById('u108');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u62 = document.getElementById('u62');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u21 = document.getElementById('u21');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u34 = document.getElementById('u34');

var u68 = document.getElementById('u68');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u72 = document.getElementById('u72');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u66 = document.getElementById('u66');

var u112 = document.getElementById('u112');

var u110 = document.getElementById('u110');

var u78 = document.getElementById('u78');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u16 = document.getElementById('u16');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u54 = document.getElementById('u54');

var u118 = document.getElementById('u118');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u38 = document.getElementById('u38');

var u26 = document.getElementById('u26');

var u128 = document.getElementById('u128');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u100 = document.getElementById('u100');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');

var u88 = document.getElementById('u88');

var u114 = document.getElementById('u114');

var u56 = document.getElementById('u56');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u92 = document.getElementById('u92');

var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u98 = document.getElementById('u98');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u74 = document.getElementById('u74');

var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');

var u40 = document.getElementById('u40');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u104 = document.getElementById('u104');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u102 = document.getElementById('u102');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u84 = document.getElementById('u84');

var u50 = document.getElementById('u50');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u76 = document.getElementById('u76');

var u134 = document.getElementById('u134');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u94 = document.getElementById('u94');

var u60 = document.getElementById('u60');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u44 = document.getElementById('u44');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');

var u58 = document.getElementById('u58');

var u36 = document.getElementById('u36');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u0 = document.getElementById('u0');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');

var u146 = document.getElementById('u146');

var u15 = document.getElementById('u15');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u80 = document.getElementById('u80');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u90 = document.getElementById('u90');

var u18 = document.getElementById('u18');

var u30 = document.getElementById('u30');

var u22 = document.getElementById('u22');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u136 = document.getElementById('u136');

var u28 = document.getElementById('u28');

if (window.OnLoad) OnLoad();
