(()=>{"use strict";var e,a,c,f,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",110:"66406991",225:"3152febb",453:"30a24c52",533:"b2b675dd",938:"d52c447c",948:"8717b14a",1115:"264db338",1125:"3976bd0a",1203:"7b5e0b9b",1286:"9ce1c5e6",1354:"30fe98e8",1477:"b2f554cd",1518:"348b37a1",1521:"009df8df",1541:"b49e3e51",1633:"031793e1",1713:"a7023ddc",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2535:"814f3328",3008:"04720f61",3055:"dfb878c5",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3262:"92738ca2",3303:"a7552de3",3514:"73664a40",3581:"5df1c867",3608:"9e4087bc",4013:"01a85c17",4195:"c4f5d8e4",4382:"4926c301",4854:"c7b9174c",4955:"3ca8dc72",5979:"48223c06",6103:"ccc49370",6555:"5a9e0567",6606:"a593f815",6738:"616f4fd6",6826:"fb21012a",6938:"608ae6a4",6966:"ad10b267",7178:"096bfee4",7293:"4f07360b",7414:"393be207",7918:"17896441",8402:"5b59a439",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9030:"e3b79c67",9035:"4c9e35b1",9412:"a9db94d6",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9700:"e16015ca",9817:"14eb3368"}[e]||e)+"."+{53:"b8a03b25",110:"bbcb931a",225:"9fd1647d",453:"20c199b8",533:"ce165535",938:"c1bfb285",948:"8b01f715",1115:"90eed551",1125:"85cfb0ea",1203:"853a31f9",1286:"3dbcf834",1354:"f3af3a48",1477:"32bad3ad",1506:"5770950c",1518:"c0508957",1521:"2c575e6c",1541:"3cfd437c",1633:"ffd26f0c",1713:"93122ee7",1914:"0d6007c1",2267:"a0dc1b87",2362:"f5ed4136",2529:"41ace16e",2535:"bc919e9c",3008:"e45d308e",3055:"cbdbaa91",3085:"f541954d",3089:"fbcaea52",3205:"adc10bb5",3262:"4c888d41",3303:"4ab72902",3514:"7efbcd46",3581:"39874c3f",3608:"1dc8f99f",4013:"ebca2629",4195:"e03d4218",4382:"aa7c35fa",4854:"d2e603ed",4955:"6e13ab61",4972:"9c9593fc",5979:"5e355a97",6103:"3b380a76",6555:"49197600",6606:"b2aca6a5",6738:"2563d1a9",6826:"82a1d318",6938:"3e7f1ddb",6966:"5d796cd7",7178:"f557abb7",7293:"1880719b",7414:"f9a302b2",7918:"e5eb10c3",8402:"d3f6d64e",8610:"d3adc89d",8636:"090fd0c6",9003:"76eedcfd",9030:"0e965d13",9035:"581749d8",9412:"ec04ca63",9514:"76c26516",9642:"12586cb0",9671:"90bef8fa",9700:"381975af",9817:"c202ffd5"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="nostr-design:",b.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918",59362658:"2267",66406991:"110","935f2afb":"53","3152febb":"225","30a24c52":"453",b2b675dd:"533",d52c447c:"938","8717b14a":"948","264db338":"1115","3976bd0a":"1125","7b5e0b9b":"1203","9ce1c5e6":"1286","30fe98e8":"1354",b2f554cd:"1477","348b37a1":"1518","009df8df":"1521",b49e3e51:"1541","031793e1":"1633",a7023ddc:"1713",d9f32620:"1914",e273c56f:"2362","814f3328":"2535","04720f61":"3008",dfb878c5:"3055","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205","92738ca2":"3262",a7552de3:"3303","73664a40":"3514","5df1c867":"3581","9e4087bc":"3608","01a85c17":"4013",c4f5d8e4:"4195","4926c301":"4382",c7b9174c:"4854","3ca8dc72":"4955","48223c06":"5979",ccc49370:"6103","5a9e0567":"6555",a593f815:"6606","616f4fd6":"6738",fb21012a:"6826","608ae6a4":"6938",ad10b267:"6966","096bfee4":"7178","4f07360b":"7293","393be207":"7414","5b59a439":"8402","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003",e3b79c67:"9030","4c9e35b1":"9035",a9db94d6:"9412","1be78505":"9514","7661071f":"9642","0e384e19":"9671",e16015ca:"9700","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunknostr_design=self.webpackChunknostr_design||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();