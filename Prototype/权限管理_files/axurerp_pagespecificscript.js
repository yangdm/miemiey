
var PageName = '权限管理';
var PageId = '3daa890a8ac6497397819498bd5b5baa'
var PageUrl = '权限管理.html'
document.title = '权限管理';
var PageNotes = 
{
"pageName":"权限管理",
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

var u370 = document.getElementById('u370');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u202 = document.getElementById('u202');

var u180 = document.getElementById('u180');

var u136 = document.getElementById('u136');

var u216 = document.getElementById('u216');

var u194 = document.getElementById('u194');

var u514 = document.getElementById('u514');

var u492 = document.getElementById('u492');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');

var u450 = document.getElementById('u450');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u78 = document.getElementById('u78');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u166 = document.getElementById('u166');

var u298 = document.getElementById('u298');

var u464 = document.getElementById('u464');

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

	self.location.href="班级设置_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u126 = document.getElementById('u126');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u527 = document.getElementById('u527');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u346 = document.getElementById('u346');

var u72 = document.getElementById('u72');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u378 = document.getElementById('u378');

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u138 = document.getElementById('u138');

var u100 = document.getElementById('u100');

var u54 = document.getElementById('u54');

var u302 = document.getElementById('u302');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u214 = document.getElementById('u214');

var u192 = document.getElementById('u192');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u390 = document.getElementById('u390');

var u150 = document.getElementById('u150');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u132 = document.getElementById('u132');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u340 = document.getElementById('u340');

var u24 = document.getElementById('u24');

var u318 = document.getElementById('u318');

var u462 = document.getElementById('u462');

var u476 = document.getElementById('u476');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u268 = document.getElementById('u268');

var u330 = document.getElementById('u330');

var u176 = document.getElementById('u176');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u344 = document.getElementById('u344');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u300 = document.getElementById('u300');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u326 = document.getElementById('u326');

var u400 = document.getElementById('u400');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');

var u410 = document.getElementById('u410');

var u186 = document.getElementById('u186');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');

var u424 = document.getElementById('u424');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u162 = document.getElementById('u162');

var u460 = document.getElementById('u460');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u332 = document.getElementById('u332');

var u306 = document.getElementById('u306');

var u284 = document.getElementById('u284');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u342 = document.getElementById('u342');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u518 = document.getElementById('u518');

var u426 = document.getElementById('u426');

var u512 = document.getElementById('u512');

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u356 = document.getElementById('u356');

var u388 = document.getElementById('u388');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u36 = document.getElementById('u36');

var u148 = document.getElementById('u148');

var u312 = document.getElementById('u312');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'top';
var u348 = document.getElementById('u348');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u20 = document.getElementById('u20');

var u124 = document.getElementById('u124');

var u526 = document.getElementById('u526');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u526ann'), "<div id='u526Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u526Note').click(function(e) { ToggleWorkflow(e, 'u526', 300, 150, false); return false; });
var u526Ann = 
{
"label":"?",
"调用":"table_school_teacher::fetch_all_by_condition"};

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u160 = document.getElementById('u160');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
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
var u178 = document.getElementById('u178');

var u436 = document.getElementById('u436');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u66 = document.getElementById('u66');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u66ann'), "<div id='u66Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u66Note').click(function(e) { ToggleWorkflow(e, 'u66', 300, 150, false); return false; });
var u66Ann = 
{
"label":"?",
"调用":"update_authority();"};

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u474 = document.getElementById('u474');

var u228 = document.getElementById('u228');

var u88 = document.getElementById('u88');

var u304 = document.getElementById('u304');

var u282 = document.getElementById('u282');

var u76 = document.getElementById('u76');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u240 = document.getElementById('u240');

var u296 = document.getElementById('u296');

var u158 = document.getElementById('u158');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u408 = document.getElementById('u408');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u422 = document.getElementById('u422');

var u438 = document.getElementById('u438');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
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
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u94 = document.getElementById('u94');

var u122 = document.getElementById('u122');

var u358 = document.getElementById('u358');

var u420 = document.getElementById('u420');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u19ann'), "<div id='u19Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u19Note').click(function(e) { ToggleWorkflow(e, 'u19', 300, 150, false); return false; });
var u19Ann = 
{
"label":"?",
"调用":"table_school_teacher::fetch_all_by_school();"};

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u434 = document.getElementById('u434');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u172 = document.getElementById('u172');

var u470 = document.getElementById('u470');

var u472 = document.getElementById('u472');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u46 = document.getElementById('u46');

var u280 = document.getElementById('u280');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'top';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u490 = document.getElementById('u490');

var u316 = document.getElementById('u316');

var u294 = document.getElementById('u294');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u108 = document.getElementById('u108');

var u252 = document.getElementById('u252');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'top';
var u386 = document.getElementById('u386');

var u266 = document.getElementById('u266');

var u398 = document.getElementById('u398');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u120 = document.getElementById('u120');

var u2 = document.getElementById('u2');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u134 = document.getElementById('u134');

var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u170 = document.getElementById('u170');

var u446 = document.getElementById('u446');

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
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

var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'top';
var u314 = document.getElementById('u314');

var u292 = document.getElementById('u292');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u250 = document.getElementById('u250');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u58 = document.getElementById('u58');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u34 = document.getElementById('u34');

var u264 = document.getElementById('u264');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u164 = document.getElementById('u164');

var u80 = document.getElementById('u80');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u368 = document.getElementById('u368');

var u430 = document.getElementById('u430');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u146 = document.getElementById('u146');

var u52 = document.getElementById('u52');

var u444 = document.getElementById('u444');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u48 = document.getElementById('u48');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u212 = document.getElementById('u212');

var u190 = document.getElementById('u190');

var u510 = document.getElementById('u510');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'top';
var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'top';
var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u28 = document.getElementById('u28');

var u60 = document.getElementById('u60');

var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u118 = document.getElementById('u118');

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'top';
var u262 = document.getElementById('u262');

var u254 = document.getElementById('u254');

var u498 = document.getElementById('u498');

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u130 = document.getElementById('u130');

var u406 = document.getElementById('u406');

var u384 = document.getElementById('u384');

var u22 = document.getElementById('u22');

var u144 = document.getElementById('u144');

var u523 = document.getElementById('u523');

var u442 = document.getElementById('u442');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u456 = document.getElementById('u456');

var u488 = document.getElementById('u488');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u17 = document.getElementById('u17');

var u248 = document.getElementById('u248');

var u210 = document.getElementById('u210');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u30 = document.getElementById('u30');

var u224 = document.getElementById('u224');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u260 = document.getElementById('u260');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
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
var u236 = document.getElementById('u236');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u274 = document.getElementById('u274');

var u328 = document.getElementById('u328');

var u106 = document.getElementById('u106');

var u404 = document.getElementById('u404');

var u382 = document.getElementById('u382');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u142 = document.getElementById('u142');

var u86 = document.getElementById('u86');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u70 = document.getElementById('u70');

var u396 = document.getElementById('u396');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u156 = document.getElementById('u156');

var u188 = document.getElementById('u188');

var u354 = document.getElementById('u354');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u222 = document.getElementById('u222');

var u458 = document.getElementById('u458');

var u520 = document.getElementById('u520');

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
var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u525 = document.getElementById('u525');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u272 = document.getElementById('u272');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u402 = document.getElementById('u402');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'top';
var u104 = document.getElementById('u104');

var u308 = document.getElementById('u308');

var u56 = document.getElementById('u56');

var u380 = document.getElementById('u380');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u168 = document.getElementById('u168');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'top';
var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u416 = document.getElementById('u416');

var u394 = document.getElementById('u394');

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

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u13'] = 'top';
var u208 = document.getElementById('u208');

var u352 = document.getElementById('u352');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u418 = document.getElementById('u418');

var u366 = document.getElementById('u366');

var u74 = document.getElementById('u74');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u276 = document.getElementById('u276');

var u220 = document.getElementById('u220');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u270 = document.getElementById('u270');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u92 = document.getElementById('u92');

var u102 = document.getElementById('u102');

var u338 = document.getElementById('u338');

var u322 = document.getElementById('u322');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'top';
var u116 = document.getElementById('u116');

var u414 = document.getElementById('u414');

var u392 = document.getElementById('u392');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'top';
var u350 = document.getElementById('u350');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u508 = document.getElementById('u508');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u68 = document.getElementById('u68');

var u226 = document.getElementById('u226');

var u198 = document.getElementById('u198');

var u364 = document.getElementById('u364');

var u432 = document.getElementById('u432');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u232 = document.getElementById('u232');

var u468 = document.getElementById('u468');

var u486 = document.getElementById('u486');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u246 = document.getElementById('u246');

var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u412 = document.getElementById('u412');

var u448 = document.getElementById('u448');

var u96 = document.getElementById('u96');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u372 = document.getElementById('u372');

var u114 = document.getElementById('u114');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u278 = document.getElementById('u278');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u290 = document.getElementById('u290');

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u38 = document.getElementById('u38');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'top';
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

var u362 = document.getElementById('u362');

var u98 = document.getElementById('u98');

var u376 = document.getElementById('u376');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u286 = document.getElementById('u286');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u230 = document.getElementById('u230');

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u506 = document.getElementById('u506');

var u484 = document.getElementById('u484');

var u32 = document.getElementById('u32');

var u244 = document.getElementById('u244');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u310 = document.getElementById('u310');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'top';
var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u40 = document.getElementById('u40');

var u324 = document.getElementById('u324');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'top';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u360 = document.getElementById('u360');

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u374 = document.getElementById('u374');

var u428 = document.getElementById('u428');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u206 = document.getElementById('u206');

var u184 = document.getElementById('u184');

var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'top';
var u482 = document.getElementById('u482');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');

var u478 = document.getElementById('u478');

var u440 = document.getElementById('u440');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u496 = document.getElementById('u496');

var u64 = document.getElementById('u64');

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u256 = document.getElementById('u256');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u288 = document.getElementById('u288');

var u454 = document.getElementById('u454');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u174 = document.getElementById('u174');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u110 = document.getElementById('u110');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
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
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u42 = document.getElementById('u42');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u26 = document.getElementById('u26');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u336 = document.getElementById('u336');

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
var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u128 = document.getElementById('u128');

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u204 = document.getElementById('u204');

var u182 = document.getElementById('u182');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u480 = document.getElementById('u480');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u140 = document.getElementById('u140');

var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u196 = document.getElementById('u196');

var u516 = document.getElementById('u516');

var u494 = document.getElementById('u494');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u154 = document.getElementById('u154');

var u452 = document.getElementById('u452');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u90 = document.getElementById('u90');

var u466 = document.getElementById('u466');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u84 = document.getElementById('u84');

var u258 = document.getElementById('u258');

var u320 = document.getElementById('u320');

var u4 = document.getElementById('u4');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u334 = document.getElementById('u334');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'top';
if (window.OnLoad) OnLoad();
