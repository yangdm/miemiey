
var PageName = '教师管理';
var PageId = 'e99c8cac394741bbb2dd6ee86d51e390'
var PageUrl = '教师管理.html'
document.title = '教师管理';
var PageNotes = 
{
"pageName":"教师管理",
"showNotesNames":"False",
"关闭":"<p style=\"text-align:left;\"><span style=\"\">教师管理页签高亮<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">离职教师去掉所有权限<\/span><\/p>"}
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
gv_vAlignTable['u370'] = 'top';
var u167 = document.getElementById('u167');

var u299 = document.getElementById('u299');

var u17 = document.getElementById('u17');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u333 = document.getElementById('u333');

var u97 = document.getElementById('u97');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u165 = document.getElementById('u165');

var u231 = document.getElementById('u231');

var u347 = document.getElementById('u347');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u139 = document.getElementById('u139');

var u201 = document.getElementById('u201');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u215 = document.getElementById('u215');

var u193 = document.getElementById('u193');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u413 = document.getElementById('u413');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u151 = document.getElementById('u151');

var u71 = document.getElementById('u71');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u389 = document.getElementById('u389');

var u319 = document.getElementById('u319');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u425 = document.getElementById('u425');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u67 = document.getElementById('u67');

var u269 = document.getElementById('u269');

var u331 = document.getElementById('u331');

var u321 = document.getElementById('u321');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u287 = document.getElementById('u287');

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u345 = document.getElementById('u345');

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u113 = document.getElementById('u113');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u163 = document.getElementById('u163');

var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u93 = document.getElementById('u93');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'top';
var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u307 = document.getElementById('u307');

var u285 = document.getElementById('u285');

var u18 = document.getElementById('u18');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u343 = document.getElementById('u343');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u29 = document.getElementById('u29');

var u357 = document.getElementById('u357');

var u79 = document.getElementById('u79');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{
windowEvent = e;


if (true) {

	NewWindow("教师信息（弹窗）.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u411 = document.getElementById('u411');

var u149 = document.getElementById('u149');

var u111 = document.getElementById('u111');

var u391 = document.getElementById('u391');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u12 = document.getElementById('u12');

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u161 = document.getElementById('u161');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u63 = document.getElementById('u63');

var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u305 = document.getElementById('u305');

var u283 = document.getElementById('u283');

var u20 = document.getElementById('u20');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u279 = document.getElementById('u279');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u241 = document.getElementById('u241');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u297 = document.getElementById('u297');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u49 = document.getElementById('u49');

var u355 = document.getElementById('u355');

var u25 = document.getElementById('u25');

var u309 = document.getElementById('u309');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u81 = document.getElementById('u81');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u123 = document.getElementById('u123');

var u263 = document.getElementById('u263');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u137 = document.getElementById('u137');

var u426 = document.getElementById('u426');

var u33 = document.getElementById('u33');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u173 = document.getElementById('u173');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'top';
var u213 = document.getElementById('u213');

var u303 = document.getElementById('u303');

var u281 = document.getElementById('u281');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u317 = document.getElementById('u317');

var u295 = document.getElementById('u295');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u51 = document.getElementById('u51');

var u434 = document.getElementById('u434');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u434ann'), "<div id='u434Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u434Note').click(function(e) { ToggleWorkflow(e, 'u434', 300, 150, false); return false; });
var u434Ann = 
{
"label":"?",
"调用":"table_school_teacher::fetch_all_by_condition"};

var u109 = document.getElementById('u109');

var u253 = document.getElementById('u253');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u359 = document.getElementById('u359');

var u267 = document.getElementById('u267');

var u399 = document.getElementById('u399');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u121 = document.getElementById('u121');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u207 = document.getElementById('u207');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u135 = document.getElementById('u135');

var u433 = document.getElementById('u433');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u171 = document.getElementById('u171');

var u191 = document.getElementById('u191');

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u239 = document.getElementById('u239');

var u301 = document.getElementById('u301');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u2 = document.getElementById('u2');

var u169 = document.getElementById('u169');

var u315 = document.getElementById('u315');

var u293 = document.getElementById('u293');

var u21 = document.getElementById('u21');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u251 = document.getElementById('u251');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u373 = document.getElementById('u373');

var u265 = document.getElementById('u265');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u16 = document.getElementById('u16');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u77 = document.getElementById('u77');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u369 = document.getElementById('u369');

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u387 = document.getElementById('u387');

var u147 = document.getElementById('u147');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u95 = document.getElementById('u95');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u430 = document.getElementById('u430');

var u327 = document.getElementById('u327');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u119 = document.getElementById('u119');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u277 = document.getElementById('u277');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u47 = document.getElementById('u47');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u131 = document.getElementById('u131');

var u407 = document.getElementById('u407');

var u385 = document.getElementById('u385');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u145 = document.getElementById('u145');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u65 = document.getElementById('u65');

var u249 = document.getElementById('u249');

var u211 = document.getElementById('u211');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u85 = document.getElementById('u85');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u261 = document.getElementById('u261');

var u175 = document.getElementById('u175');

var u61 = document.getElementById('u61');

var u275 = document.getElementById('u275');

var u329 = document.getElementById('u329');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u83 = document.getElementById('u83');

var u107 = document.getElementById('u107');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u405 = document.getElementById('u405');

var u383 = document.getElementById('u383');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u143 = document.getElementById('u143');

var u379 = document.getElementById('u379');

var u341 = document.getElementById('u341');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u397 = document.getElementById('u397');

var u9 = document.getElementById('u9');

var u157 = document.getElementById('u157');

var u59 = document.getElementById('u59');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u189 = document.getElementById('u189');

var u35 = document.getElementById('u35');

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{
windowEvent = e;


if (true) {

	NewWindow("教师信息（弹窗）.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u227 = document.getElementById('u227');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u435 = document.getElementById('u435');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u223 = document.getElementById('u223');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u237 = document.getElementById('u237');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u43 = document.getElementById('u43');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u273 = document.getElementById('u273');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u53 = document.getElementById('u53');

var u105 = document.getElementById('u105');

var u403 = document.getElementById('u403');

var u381 = document.getElementById('u381');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u395 = document.getElementById('u395');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u155 = document.getElementById('u155');

var u209 = document.getElementById('u209');

var u353 = document.getElementById('u353');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u367 = document.getElementById('u367');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u221 = document.getElementById('u221');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u235 = document.getElementById('u235');

var u75 = document.getElementById('u75');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u271 = document.getElementById('u271');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u103 = document.getElementById('u103');

var u339 = document.getElementById('u339');

var u401 = document.getElementById('u401');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u117 = document.getElementById('u117');

var u415 = document.getElementById('u415');

var u393 = document.getElementById('u393');

var u31 = document.getElementById('u31');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'top';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	NewWindow("教师信息（弹窗）.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u351 = document.getElementById('u351');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u199 = document.getElementById('u199');

var u365 = document.getElementById('u365');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u417 = document.getElementById('u417');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u133 = document.getElementById('u133');

var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'top';
var u233 = document.getElementById('u233');

var u87 = document.getElementById('u87');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u247 = document.getElementById('u247');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u101 = document.getElementById('u101');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u0 = document.getElementById('u0');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u89 = document.getElementById('u89');

var u313 = document.getElementById('u313');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u427 = document.getElementById('u427');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u219 = document.getElementById('u219');

var u363 = document.getElementById('u363');

var u377 = document.getElementById('u377');

var u259 = document.getElementById('u259');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u57 = document.getElementById('u57');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u187 = document.getElementById('u187');

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u245 = document.getElementById('u245');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u14 = document.getElementById('u14');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u99 = document.getElementById('u99');

var u349 = document.getElementById('u349');

var u311 = document.getElementById('u311');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u127 = document.getElementById('u127');

var u325 = document.getElementById('u325');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u361 = document.getElementById('u361');

var u375 = document.getElementById('u375');

var u27 = document.getElementById('u27');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u179 = document.getElementById('u179');

var u185 = document.getElementById('u185');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u243 = document.getElementById('u243');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u257 = document.getElementById('u257');

var u69 = document.getElementById('u69');

var u289 = document.getElementById('u289');

var u45 = document.getElementById('u45');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u409 = document.getElementById('u409');

var u115 = document.getElementById('u115');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u323 = document.getElementById('u323');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u291 = document.getElementById('u291');

var u337 = document.getElementById('u337');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u129 = document.getElementById('u129');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u205 = document.getElementById('u205');

var u183 = document.getElementById('u183');

var u10 = document.getElementById('u10');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u141 = document.getElementById('u141');

var u197 = document.getElementById('u197');

var u39 = document.getElementById('u39');

var u255 = document.getElementById('u255');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u159 = document.getElementById('u159');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u125 = document.getElementById('u125');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u335 = document.getElementById('u335');

var u23 = document.getElementById('u23');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u371 = document.getElementById('u371');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u203 = document.getElementById('u203');

var u181 = document.getElementById('u181');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u4 = document.getElementById('u4');

var u217 = document.getElementById('u217');

var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');

var u41 = document.getElementById('u41');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u153 = document.getElementById('u153');

if (window.OnLoad) OnLoad();
