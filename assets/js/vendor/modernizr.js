/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-arrow-setclasses !*/
!function(window,document,undefined){function is(e,n){return typeof e===n}function testRunner(){var e,n,s,o,r,t,i;for(var a in tests)if(tests.hasOwnProperty(a)){if(e=[],n=tests[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(o=is(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)t=e[r],i=t.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),classes.push((o?"":"no-")+i.join("-"))}}function setClasses(e){var n=docElement.className,s=Modernizr._config.classPrefix||"";if(isSVG&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),isSVG?docElement.className.baseVal=n:docElement.className=n)}var classes=[],tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){tests.push({name:e,fn:n,options:s})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("arrow",function(){try{eval("()=>{}")}catch(e){return!1}return!0});var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase();testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);