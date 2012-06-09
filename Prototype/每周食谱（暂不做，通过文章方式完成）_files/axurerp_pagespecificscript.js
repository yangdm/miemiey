
var PageName = '每周食谱（暂不做，通过文章方式完成）';
var PageId = '1cd981458fe644beb6cb49f3d6723dc1'
var PageUrl = '每周食谱（暂不做，通过文章方式完成）.html'
document.title = '每周食谱（暂不做，通过文章方式完成）';
var PageNotes = 
{
"pageName":"每周食谱（暂不做，通过文章方式完成）",
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
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u51 = document.getElementById('u51');

var u113 = document.getElementById('u113');

var u130 = document.getElementById('u130');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u16 = document.getElementById('u16');

var u111 = document.getElementById('u111');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u6 = document.getElementById('u6');

var u77 = document.getElementById('u77');

var u93 = document.getElementById('u93');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u53 = document.getElementById('u53');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u119 = document.getElementById('u119');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u7 = document.getElementById('u7');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u115 = document.getElementById('u115');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u57 = document.getElementById('u57');

var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u89 = document.getElementById('u89');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u49 = document.getElementById('u49');

var u79 = document.getElementById('u79');

var u87 = document.getElementById('u87');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u85 = document.getElementById('u85');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u41 = document.getElementById('u41');

var u71 = document.getElementById('u71');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u75 = document.getElementById('u75');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u37 = document.getElementById('u37');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u97 = document.getElementById('u97');

var u83 = document.getElementById('u83');

var u107 = document.getElementById('u107');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u95 = document.getElementById('u95');

var u22 = document.getElementById('u22');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u47 = document.getElementById('u47');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u73 = document.getElementById('u73');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u20 = document.getElementById('u20');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u28 = document.getElementById('u28');

var u101 = document.getElementById('u101');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u14 = document.getElementById('u14');

var u39 = document.getElementById('u39');

var u69 = document.getElementById('u69');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	NewTab("食谱管理.html" + GetQuerystring(), "");

}

}

var u103 = document.getElementById('u103');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u61 = document.getElementById('u61');

var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u24 = document.getElementById('u24');

var u105 = document.getElementById('u105');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u109 = document.getElementById('u109');

var u123 = document.getElementById('u123');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u127 = document.getElementById('u127');

var u81 = document.getElementById('u81');

var u5 = document.getElementById('u5');

var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u33 = document.getElementById('u33');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u18 = document.getElementById('u18');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u67 = document.getElementById('u67');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u125 = document.getElementById('u125');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u55 = document.getElementById('u55');

var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u99 = document.getElementById('u99');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u117 = document.getElementById('u117');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u91 = document.getElementById('u91');

var u121 = document.getElementById('u121');

if (window.OnLoad) OnLoad();
