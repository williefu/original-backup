(function(R,L){function j(a,b,c,d){var c=c||[],b=b||t,e,f,g,k,h=b.nodeType;if(1!==h&&9!==h)return[];if(!a||"string"!==typeof a)return c;g=D(b);if(!g&&!d&&(e=da.exec(a)))if(k=e[1])if(9===h)if((f=b.getElementById(k))&&f.parentNode){if(f.id===k)return c.push(f),c}else return c;else{if(b.ownerDocument&&(f=b.ownerDocument.getElementById(k))&&S(b,f)&&f.id===k)return c.push(f),c}else{if(e[2])return E.apply(c,v.call(b.getElementsByTagName(a),0)),c;if((k=e[3])&&T&&b.getElementsByClassName)return E.apply(c,
v.call(b.getElementsByClassName(k),0)),c}return M(a,b,c,d,g)}function w(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function U(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function x(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1}function F(a,b,c,d){var e,f,g,k,h,p,q,l,n,i=!c&&b!==t,u=(i?"<s>":"")+a.replace(G,"$1<s>");if(h=V[m][u])return d?0:v.call(h,0);h=a;p=[];l=o.preFilter;
for(n=o.filter;h;){if(!e||(f=ea.exec(h)))f&&(h=h.slice(f[0].length),g.selector=q),p.push(g=[]),q="",i&&(h=" "+h);e=!1;if(f=H.exec(h))q+=f[0],h=h.slice(f[0].length),e=g.push({part:f.pop().replace(G," "),string:f[0],captures:f});for(k in n)if((f=y[k].exec(h))&&(!l[k]||(f=l[k](f,b,c))))q+=f[0],h=h.slice(f[0].length),e=g.push({part:k,string:f.shift(),captures:f});if(!e)break}q&&(g.selector=q);return d?h.length:h?j.error(a):v.call(V(u,p),0)}function fa(a,b,c,d){var e=b.dir,f=W++;a||(a=function(a){return a===
c});return b.first?function(b){for(;b=b[e];)if(1===b.nodeType)return a(b)&&b}:d?function(b){for(;b=b[e];)if(1===b.nodeType&&a(b))return b}:function(b){for(var c,d=f+"."+X,p=d+"."+Y;b=b[e];)if(1===b.nodeType){if((c=b[m])===p)return b.sizset;if("string"===typeof c&&0===c.indexOf(d)){if(b.sizset)return b}else{b[m]=p;if(a(b))return b.sizset=!0,b;b.sizset=!1}}}}function ga(a,b){return a?function(c){var d=b(c);return d&&a(!0===d?c:d)}:b}function Z(a,b,c,d){for(var e=0,f=b.length;e<f;e++)j(a,b[e],c,d)}function M(a,
b,c,d,e){var a=a.replace(G,"$1"),f,g,k,h,p,q;p=F(a,b,e);q=b.nodeType;if(y.POS.test(a)){f=p;var l,i,m,u,r,s,t;p=0;q=f.length;for(var w=y.POS,B=RegExp("^"+w.source+"(?!"+n+")","i"),C=function(){for(var a=1,b=arguments.length-2;a<b;a++)arguments[a]===L&&(u[a]=L)};p<q;p++){a=f[p];l="";m=d;e=0;for(k=a.length;e<k;e++){i=a[e];h=i.string;if("PSEUDO"===i.part){w.exec("");for(i=0;u=w.exec(h);){g=!0;r=w.lastIndex=u.index+u[0].length;if(r>i){l+=h.slice(i,u.index);i=r;s=[b];H.test(l)&&(m&&(s=m),m=d);if(t=ha.test(l))l=
l.slice(0,-5).replace(H,"$&*"),i++;1<u.length&&u[0].replace(B,C);r=u[1];var D=u[2],x=void 0,A=o.setFilters[r.toLowerCase()];A||j.error(r);if(l||!(x=m))Z(l||"*",s,x=[],m);m=0<x.length?A(x,D,t):[]}l=""}}g||(l+=h);g=!1}l?H.test(l)?Z(l,m||[b],c,d):j(l,b,c,d?d.concat(m):m):E.apply(c,m)}return 1===q?c:j.uniqueSort(c)}if(d)f=v.call(d,0);else if(1===p.length){if(2<(k=v.call(p[0],0)).length&&"ID"===(h=k[0]).part&&9===q&&!e&&o.relative[k[1].part]){b=o.find.ID(h.captures[0].replace(z,""),b,e)[0];if(!b)return c;
a=a.slice(k.shift().string.length)}g=(p=N.exec(k[0].string))&&!p.index&&b.parentNode||b;p="";for(d=k.length-1;0<=d;d--){h=k[d];q=h.part;p=h.string+p;if(o.relative[q])break;if(o.order.test(q)&&(f=o.find[q](h.captures[0].replace(z,""),g,e),null!=f)){(a=a.slice(0,a.length-p.length)+p.replace(y[q],""))||E.apply(c,v.call(f,0));break}}}if(a){g=O(a,b,e);X=g.dirruns++;null==f&&(f=o.find.TAG("*",N.test(a)&&b.parentNode||b));for(d=0;b=f[d];d++)Y=g.runs++,g(b)&&c.push(b)}return c}var X,Y,P,o,A,D,S,O,Q,B,$=!0,
m=("sizcache"+Math.random()).replace(".",""),t=R.document,r=t.documentElement,W=0,v=[].slice,E=[].push,C=function(a,b){a[m]=b||!0;return a},i=function(){var a={},b=[];return C(function(c,d){b.push(c)>o.cacheLength&&delete a[b.shift()];return a[c]=d},a)},aa=i(),V=i(),ba=i(),n="[\\x20\\t\\r\\n\\f]",i="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w","w#"),i="\\["+n+"*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)"+n+"*(?:([*^$|!~]?=)"+n+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+i+")|)|)"+n+"*\\]",I=":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+
i+")|[^:]|\\\\.)*|.*))\\)|)",G=RegExp("^"+n+"+|((?:^|[^\\\\])(?:\\\\.)*)"+n+"+$","g"),ea=RegExp("^"+n+"*,"+n+"*"),H=RegExp("^"+n+"*([\\x20\\t\\r\\n\\f>+~])"+n+"*"),ia=RegExp(I),da=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,N=/[\x20\t\r\n\f]*[+~]/,ha=/:not\($/,ja=/h\d/i,ka=/input|select|textarea|button/i,z=/\\(?!\\)/g,y={ID:/^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,NAME:/^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,TAG:RegExp("^("+"(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w",
"w*")+")"),ATTR:RegExp("^"+i),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|nth|last|first)-child(?:\\("+n+"*(even|odd|(([+-]|)(\\d*)n|)"+n+"*(?:([+-]|)"+n+"*(\\d+)|))"+n+"*\\)|)","i"),POS:RegExp(":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)","ig"),needsContext:RegExp("^"+n+"*[>+~]|:(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)","i")},i=function(a){var b=t.createElement("div");try{return a(b)}catch(c){return!1}finally{}},I=i(function(a){a.appendChild(t.createComment(""));
return!a.getElementsByTagName("*").length}),la=i(function(a){a.innerHTML="<a href='#'></a>";return a.firstChild&&"undefined"!==typeof a.firstChild.getAttribute&&"#"===a.firstChild.getAttribute("href")}),ma=i(function(a){a.innerHTML="<select></select>";a=typeof a.lastChild.getAttribute("multiple");return"boolean"!==a&&"string"!==a}),T=i(function(a){a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!a.getElementsByClassName||!a.getElementsByClassName("e").length)return!1;a.lastChild.className=
"e";return 2===a.getElementsByClassName("e").length}),na=i(function(a){a.id=m+0;a.innerHTML="<a name='"+m+"'></a><div name='"+m+"'></div>";r.insertBefore(a,r.firstChild);var b=t.getElementsByName&&t.getElementsByName(m).length===2+t.getElementsByName(m+0).length;P=!t.getElementById(m);r.removeChild(a);return b});try{v.call(r.childNodes,0)[0].nodeType}catch(ra){v=function(a){for(var b,c=[];b=this[a];a++)c.push(b);return c}}j.matches=function(a,b){return j(a,null,null,b)};j.matchesSelector=function(a,
b){return 0<j(b,null,null,[a]).length};A=j.getText=function(a){var b,c="",d=0;if(b=a.nodeType)if(1===b||9===b||11===b){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=A(a)}else{if(3===b||4===b)return a.nodeValue}else for(;b=a[d];d++)c+=A(b);return c};D=j.isXML=function(a){return(a=a&&(a.ownerDocument||a).documentElement)?"HTML"!==a.nodeName:!1};S=j.contains=r.contains?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===
d||!(!d||!(1===d.nodeType&&c.contains&&c.contains(d)))}:r.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1};j.attr=function(a,b){var c;(c=D(a))||(b=b.toLowerCase());return o.attrHandle[b]?o.attrHandle[b](a):ma||c?a.getAttribute(b):(c=a.getAttributeNode(b))?"boolean"===typeof a[b]?a[b]?b:null:c.specified?c.value:null:null};o=j.selectors={cacheLength:50,createPseudo:C,match:y,order:RegExp("ID|TAG"+(na?
"|NAME":"")+(T?"|CLASS":"")),attrHandle:la?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:P?function(a,b,c){if("undefined"!==typeof b.getElementById&&!c)return(a=b.getElementById(a))&&a.parentNode?[a]:[]}:function(a,b,c){if("undefined"!==typeof b.getElementById&&!c)return(b=b.getElementById(a))?b.id===a||"undefined"!==typeof b.getAttributeNode&&b.getAttributeNode("id").value===a?[b]:L:[]},TAG:I?function(a,b){if("undefined"!==typeof b.getElementsByTagName)return b.getElementsByTagName(a)}:
function(a,b){var c=b.getElementsByTagName(a);if("*"===a){for(var d,e=[],f=0;d=c[f];f++)1===d.nodeType&&e.push(d);return e}return c},NAME:function(a,b){if("undefined"!==typeof b.getElementsByName)return b.getElementsByName(name)},CLASS:function(a,b,c){if("undefined"!==typeof b.getElementsByClassName&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=
a[1].replace(z,"");a[3]=(a[4]||a[5]||"").replace(z,"");"~="===a[2]&&(a[3]=" "+a[3]+" ");return a.slice(0,4)},CHILD:function(a){a[1]=a[1].toLowerCase();"nth"===a[1]?(a[2]||j.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*("even"===a[2]||"odd"===a[2])),a[4]=+(a[6]+a[7]||"odd"===a[2])):a[2]&&j.error(a[0]);return a},PSEUDO:function(a,b,c){var d,e;if(y.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(d=a[4]){if(ia.test(d)&&(e=F(d,b,c,!0))&&(e=d.indexOf(")",d.length-e)-d.length))d=d.slice(0,e),a[0]=a[0].slice(0,
e);a[2]=d}return a.slice(0,3)}},filter:{ID:P?function(a){a=a.replace(z,"");return function(b){return b.getAttribute("id")===a}}:function(a){a=a.replace(z,"");return function(b){return(b="undefined"!==typeof b.getAttributeNode&&b.getAttributeNode("id"))&&b.value===a}},TAG:function(a){if("*"===a)return function(){return!0};a=a.replace(z,"").toLowerCase();return function(b){return b.nodeName&&b.nodeName.toLowerCase()===a}},CLASS:function(a){var b=aa[m][a];b||(b=aa(a,RegExp("(^|"+n+")"+a+"("+n+"|$)")));
return function(a){return b.test(a.className||"undefined"!==typeof a.getAttribute&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return!b?function(b){return null!=j.attr(b,a)}:function(d){var d=j.attr(d,a),e=d+"";if(null==d)return"!="===b;switch(b){case "=":return e===c;case "!=":return e!==c;case "^=":return c&&0===e.indexOf(c);case "*=":return c&&-1<e.indexOf(c);case "$=":return c&&e.substr(e.length-c.length)===c;case "~=":return-1<(" "+e+" ").indexOf(c);case "|=":return e===c||e.substr(0,
c.length+1)===c+"-"}}},CHILD:function(a,b,c,d){if("nth"===a){var e=W++;return function(a){var b,k=0,h=a;if(1===c&&0===d)return!0;if((b=a.parentNode)&&(b[m]!==e||!a.sizset)){for(h=b.firstChild;h&&!(1===h.nodeType&&(h.sizset=++k,h===a));h=h.nextSibling);b[m]=e}a=a.sizset-d;return 0===c?0===a:0===a%c&&0<=a/c}}return function(b){var c=b;switch(a){case "only":case "first":for(;c=c.previousSibling;)if(1===c.nodeType)return!1;if("first"===a)return!0;c=b;case "last":for(;c=c.nextSibling;)if(1===c.nodeType)return!1;
return!0}}},PSEUDO:function(a,b,c,d){var e,f=o.pseudos[a]||o.pseudos[a.toLowerCase()];f||j.error("unsupported pseudo: "+a);return!f[m]?1<f.length?(e=[a,a,"",b],function(a){return f(a,0,e)}):f:f(b,c,d)}},pseudos:{not:C(function(a,b,c){var d=O(a.replace(G,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){a.parentNode&&
a.parentNode.selectedIndex;return!0===a.selected},parent:function(a){return!o.pseudos.empty(a)},empty:function(a){for(var b,a=a.firstChild;a;){if("@"<a.nodeName||3===(b=a.nodeType)||4===b)return!1;a=a.nextSibling}return!0},contains:C(function(a){return function(b){return-1<(b.textContent||b.innerText||A(b)).indexOf(a)}}),has:C(function(a){return function(b){return 0<j(a,b).length}}),header:function(a){return ja.test(a.nodeName)},text:function(a){var b,c;return"input"===a.nodeName.toLowerCase()&&"text"===
(b=a.type)&&(null==(c=a.getAttribute("type"))||c.toLowerCase()===b)},radio:w("radio"),checkbox:w("checkbox"),file:w("file"),password:w("password"),image:w("image"),submit:U("submit"),reset:U("reset"),button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},input:function(a){return ka.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&!(!a.type&&!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},
setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){b=a.pop();return c?a:[b]},even:function(a,b,c){for(var b=[],c=c?1:0,d=a.length;c<d;c+=2)b.push(a[c]);return b},odd:function(a,b,c){for(var b=[],c=c?0:1,d=a.length;c<d;c+=2)b.push(a[c]);return b},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){b=a.splice(+b,1);return c?a:b}}};Q=r.compareDocumentPosition?function(a,b){return a===b?(B=
!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return B=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[];c=a.parentNode;d=b.parentNode;var g=c;if(c===d)return x(a,b);if(c){if(!d)return 1}else return-1;for(;g;)e.unshift(g),g=g.parentNode;for(g=d;g;)f.unshift(g),g=g.parentNode;c=e.length;d=f.length;for(g=0;g<c&&g<d;g++)if(e[g]!==f[g])return x(e[g],f[g]);return g===
c?x(a,f[g],-1):x(e[g],b,1)};[0,0].sort(Q);$=!B;j.uniqueSort=function(a){var b,c=1;B=$;a.sort(Q);if(B)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a};j.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};O=j.compile=function(a,b,c){var d,e,f;if((e=ba[m][a])&&e.context===b)return e;d=F(a,b,c);e=0;for(f=d.length;e<f;e++){for(var g=d,k=e,h=d[e],i=b,q=c,l=void 0,j=void 0,n=0;l=h[n];n++)j=o.relative[l.part]?fa(j,o.relative[l.part],i,q):ga(j,o.filter[l.part].apply(null,l.captures.concat(i,
q)));g[k]=j}e=ba(a,function(a){for(var b,c=0;b=d[c];c++)if(b(a))return!0;return!1});e.context=b;e.runs=e.dirruns=0;return e};if(t.querySelectorAll){var ca,oa=M,pa=/'|\\/g,qa=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,s=[],J=[":active"],K=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;i(function(a){a.innerHTML="<select><option selected=''></option></select>";a.querySelectorAll("[selected]").length||s.push("\\["+n+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
a.querySelectorAll(":checked").length||s.push(":checked")});i(function(a){a.innerHTML="<p test=''></p>";a.querySelectorAll("[test^='']").length&&s.push("[*^$]="+n+"*(?:\"\"|'')");a.innerHTML="<input type='hidden'/>";a.querySelectorAll(":enabled").length||s.push(":enabled",":disabled")});s=s.length&&RegExp(s.join("|"));M=function(a,b,c,d,e){if(!d&&!e&&(!s||!s.test(a)))if(9===b.nodeType)try{return E.apply(c,v.call(b.querySelectorAll(a),0)),c}catch(f){}else if(1===b.nodeType&&"object"!==b.nodeName.toLowerCase()){var g,
k,h,j=b.getAttribute("id"),i=j||m,l=N.test(a)&&b.parentNode||b;j?i=i.replace(pa,"\\$&"):b.setAttribute("id",i);g=F(a,b,e);i="[id='"+i+"']";k=0;for(h=g.length;k<h;k++)g[k]=i+g[k].selector;try{return E.apply(c,v.call(l.querySelectorAll(g.join(",")),0)),c}catch(n){}finally{j||b.removeAttribute("id")}}return oa(a,b,c,d,e)};K&&(i(function(a){ca=K.call(a,"div");try{K.call(a,"[test!='']:sizzle"),J.push(y.PSEUDO.source,y.POS.source,"!=")}catch(b){}}),J=RegExp(J.join("|")),j.matchesSelector=function(a,b){b=
b.replace(qa,"='$1']");if(!D(a)&&!J.test(b)&&(!s||!s.test(b)))try{var c=K.call(a,b);if(c||ca||a.document&&11!==a.document.nodeType)return c}catch(d){}return 0<j(b,null,null,[a]).length})}o.setFilters.nth=o.setFilters.eq;o.filters=o.pseudos;"function"===typeof define&&define.amd?define(function(){return j}):R.Sizzle=j})(window);

var JSON;JSON||(JSON={});
(function(){function k(a){return 10>a?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function m(a,j){var c,d,h,n,g=e,f,b=j[a];b&&("object"===typeof b&&"function"===typeof b.toJSON)&&(b=b.toJSON(a));"function"===typeof i&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?""+b:"null";case "boolean":case "null":return""+b;
case "object":if(!b)return"null";e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){n=b.length;for(c=0;c<n;c+=1)f[c]=m(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&"object"===typeof i){n=i.length;for(c=0;c<n;c+=1)"string"===typeof i[c]&&(d=i[c],(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+
e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,j,c){var d;l=e="";if(typeof c==="number")for(d=0;d<c;d=d+1)l=l+" ";else typeof c==="string"&&(l=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return m("",
{"":a})});"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)if(Object.prototype.hasOwnProperty.call(b,g)){f=c(b,g);f!==void 0?b[g]=f:delete b[g]}return e.call(a,d,b)}var d,a=""+a;q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+a+")");return typeof e==="function"?c({"":d},""):d}throw new SyntaxError("JSON.parse");})})();

/* Cookie */
(function(g){g.cookie=function(h,b,a){if(1<arguments.length&&(!/Object/.test(Object.prototype.toString.call(b))||null===b||void 0===b)){a=g.extend({},a);if(null===b||void 0===b)a.expires=-1;if("number"===typeof a.expires){var d=a.expires,c=a.expires=new Date;c.setDate(c.getDate()+d)}b=""+b;return document.cookie=[encodeURIComponent(h),"=",a.raw?b:encodeURIComponent(b),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":
""].join("")}for(var a=b||{},d=a.raw?function(a){return a}:decodeURIComponent,c=document.cookie.split("; "),e=0,f;f=c[e]&&c[e].split("=");e++)if(d(f[0])===h)return d(f[1]||"");return null}})(jQuery);

/* Cross Domain */
var XD=function(){var e,g,h=1,f,d=this;return{postMessage:function(c,b,a){b&&(a=a||parent,d.postMessage?a.postMessage(c,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(a.location=b.replace(/#.*$/,"")+"#"+ +new Date+h++ +"&"+c))},receiveMessage:function(c,b){if(d.postMessage)if(c&&(f=function(a){if("string"===typeof b&&a.origin!==b||"[object Function]"===Object.prototype.toString.call(b)&&!1===b(a.origin))return!1;c(a)}),d.addEventListener)d[c?"addEventListener":"removeEventListener"]("message",f,!1);
else d[c?"attachEvent":"detachEvent"]("onmessage",f);else e&&clearInterval(e),e=null,c&&(e=setInterval(function(){var a=document.location.hash,b=/^#?\d+&/;a!==g&&b.test(a)&&(g=a,c({data:a.replace(b,"")}))},100))}}}();