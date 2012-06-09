
var PageName = '班级设置';
var PageId = '36845402bfc74018bb48e48c7d8454f5'
var PageUrl = '班级设置_1.html'
document.title = '班级设置';
var PageNotes = 
{
"pageName":"班级设置",
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

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u299 = document.getElementById('u299');

var u36 = document.getElementById('u36');

var u180 = document.getElementById('u180');

var u136 = document.getElementById('u136');

var u216 = document.getElementById('u216');

var u194 = document.getElementById('u194');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u78 = document.getElementById('u78');

var u166 = document.getElementById('u166');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u11'] = 'top';
var u126 = document.getElementById('u126');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u202 = document.getElementById('u202');

var u72 = document.getElementById('u72');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u138 = document.getElementById('u138');

var u100 = document.getElementById('u100');

var u54 = document.getElementById('u54');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u236 = document.getElementById('u236');

var u214 = document.getElementById('u214');

var u192 = document.getElementById('u192');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u269 = document.getElementById('u269');

var u321 = document.getElementById('u321');

var u150 = document.getElementById('u150');

var u287 = document.getElementById('u287');

var u48 = document.getElementById('u48');

var u327 = document.getElementById('u327');

var u24 = document.getElementById('u24');

var u80 = document.getElementById('u80');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u268 = document.getElementById('u268');

var u330 = document.getElementById('u330');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u42 = document.getElementById('u42');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');

var u307 = document.getElementById('u307');

var u285 = document.getElementById('u285');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u50ann'), "<div id='u50Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u50Note').click(function(e) { ToggleWorkflow(e, 'u50', 300, 150, false); return false; });
var u50Ann = 
{
"label":"?",
"描述":"编辑进入编辑态，任课教师进入班级任课教师页面"};

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	NewWindow("任课教师.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u162 = document.getElementById('u162');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u176 = document.getElementById('u176');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u26 = document.getElementById('u26');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
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
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u329 = document.getElementById('u329');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u148 = document.getElementById('u148');

var u110 = document.getElementById('u110');

var u305 = document.getElementById('u305');

var u283 = document.getElementById('u283');

var u20 = document.getElementById('u20');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u279 = document.getElementById('u279');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u160 = document.getElementById('u160');

var u297 = document.getElementById('u297');

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
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u228 = document.getElementById('u228');

var u88 = document.getElementById('u88');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u76 = document.getElementById('u76');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u240 = document.getElementById('u240');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u303 = document.getElementById('u303');

var u281 = document.getElementById('u281');

var u94 = document.getElementById('u94');

var u122 = document.getElementById('u122');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u317 = document.getElementById('u317');

var u295 = document.getElementById('u295');

var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u19ann'), "<div id='u19Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u19Note').click(function(e) { ToggleWorkflow(e, 'u19', 300, 150, false); return false; });
var u19Ann = 
{
"label":"?",
"描述":"对应pre_school_class",
"规则":"页面逻辑参考课程设置；点“任课教师”时弹出任课教师窗口，维护本班级的任课教师情况。"};

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u172 = document.getElementById('u172');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u46 = document.getElementById('u46');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u108 = document.getElementById('u108');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u64 = document.getElementById('u64');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u263 = document.getElementById('u263');

var u120 = document.getElementById('u120');

var u2 = document.getElementById('u2');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u315 = document.getElementById('u315');

var u293 = document.getElementById('u293');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u134 = document.getElementById('u134');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u170 = document.getElementById('u170');

var u265 = document.getElementById('u265');

var u82 = document.getElementById('u82');

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
var u238 = document.getElementById('u238');

var u200 = document.getElementById('u200');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u250 = document.getElementById('u250');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u58 = document.getElementById('u58');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u34 = document.getElementById('u34');

var u90 = document.getElementById('u90');

var u164 = document.getElementById('u164');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u146 = document.getElementById('u146');

var u52 = document.getElementById('u52');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u277 = document.getElementById('u277');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u212 = document.getElementById('u212');

var u190 = document.getElementById('u190');

var u301 = document.getElementById('u301');

var u226 = document.getElementById('u226');

var u60 = document.getElementById('u60');

var u118 = document.getElementById('u118');

var u262 = document.getElementById('u262');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u130 = document.getElementById('u130');

var u22 = document.getElementById('u22');

var u144 = document.getElementById('u144');

var u261 = document.getElementById('u261');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u275 = document.getElementById('u275');

var u17 = document.getElementById('u17');

var u248 = document.getElementById('u248');

var u210 = document.getElementById('u210');

var u325 = document.getElementById('u325');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');

var u30 = document.getElementById('u30');

var u224 = document.getElementById('u224');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u260 = document.getElementById('u260');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="课程设置.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u309 = document.getElementById('u309');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u106 = document.getElementById('u106');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u142 = document.getElementById('u142');

var u86 = document.getElementById('u86');

var u70 = document.getElementById('u70');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u156 = document.getElementById('u156');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u188 = document.getElementById('u188');

var u273 = document.getElementById('u273');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u222 = document.getElementById('u222');

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
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u104 = document.getElementById('u104');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u259 = document.getElementById('u259');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u232 = document.getElementById('u232');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
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
var u208 = document.getElementById('u208');

var u271 = document.getElementById('u271');

var u74 = document.getElementById('u74');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u158 = document.getElementById('u158');

var u220 = document.getElementById('u220');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u270 = document.getElementById('u270');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u270ann'), "<div id='u270Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u270Note').click(function(e) { ToggleWorkflow(e, 'u270', 300, 150, false); return false; });
var u270Ann = 
{
"label":"?",
"调用":"fetch_all_by_class( $classid)"};

var u28 = document.getElementById('u28');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u319 = document.getElementById('u319');

var u92 = document.getElementById('u92');

var u102 = document.getElementById('u102');

var u56 = document.getElementById('u56');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u116 = document.getElementById('u116');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u68 = document.getElementById('u68');

var u198 = document.getElementById('u198');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u313 = document.getElementById('u313');

var u291 = document.getElementById('u291');

var u168 = document.getElementById('u168');

var u246 = document.getElementById('u246');

var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u132 = document.getElementById('u132');

var u114 = document.getElementById('u114');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u38 = document.getElementById('u38');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
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
var u218 = document.getElementById('u218');

var u98 = document.getElementById('u98');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u311 = document.getElementById('u311');

var u230 = document.getElementById('u230');

var u186 = document.getElementById('u186');

var u32 = document.getElementById('u32');

var u244 = document.getElementById('u244');

var u124 = document.getElementById('u124');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u40 = document.getElementById('u40');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u289 = document.getElementById('u289');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u206 = document.getElementById('u206');

var u184 = document.getElementById('u184');

var u323 = document.getElementById('u323');

var u242 = document.getElementById('u242');

var u96 = document.getElementById('u96');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u174 = document.getElementById('u174');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
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
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
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
var u128 = document.getElementById('u128');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u204 = document.getElementById('u204');

var u182 = document.getElementById('u182');

var u66 = document.getElementById('u66');

var u178 = document.getElementById('u178');

var u140 = document.getElementById('u140');

var u196 = document.getElementById('u196');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u154 = document.getElementById('u154');

var u264 = document.getElementById('u264');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u84 = document.getElementById('u84');

var u258 = document.getElementById('u258');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u4 = document.getElementById('u4');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
if (window.OnLoad) OnLoad();
