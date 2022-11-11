"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"HUD Files"},s=void 0,p={unversionedId:"json/files",id:"json/files",title:"HUD Files",description:"The Files property defines a list of instructions made up of HUD elements and values to apply to the HUD.",source:"@site/docs/json/files.md",sourceDirName:"json",slug:"/json/files",permalink:"/json/files",draft:!1,editUrl:"https://github.com/CriticalFlaw/TF2HUD.Editor/tree/master/docs/json/files.md",tags:[],version:"current",lastUpdatedAt:1668125093,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"HUD Files"},sidebar:"jsonSideBar",previous:{title:"List Options",permalink:"/json/options"},next:{title:"Animations",permalink:"/json/animations"}},c={},u=[{value:"Special Keys",id:"special-keys",level:2},{value:"Replace",id:"replace",level:4},{value:"HUD Element Keywords",id:"hud-element-keywords",level:2},{value:"True/False",id:"truefalse",level:4},{value:"True/False (Ternary)",id:"truefalse-ternary",level:4},{value:"Operating System Tags",id:"operating-system-tags",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Files")," property defines a list of instructions made up of HUD elements and values to apply to the HUD."),(0,l.kt)("p",null,"The files property can contain 0 or more file paths relative to the root of the HUD. Each file path can be seperated by slash (/), backslash (","\\",") or double backslash (","\\","\\",")."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Files that have the extensions ",(0,l.kt)("inlineCode",{parentName:"p"},".res"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".vmt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".vdf")," are treated as HUD files, files that have the ",(0,l.kt)("inlineCode",{parentName:"p"},".txt")," extension are treated as HUD Animations files.")),(0,l.kt)("p",null,"For more information on HUD animations, see ",(0,l.kt)("a",{parentName:"p",href:"https://www.editor.criticalflaw.ca/json/animations/"},"HUD Animations"),"."),(0,l.kt)("p",null,"If the file does not exist, TF2HUD.Editor will create it with the values specified. If it does, the editor will merge the values specified with the already existing HUD values."),(0,l.kt)("p",null,"The value of the current control can be used for or inside a HUD element value by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"$value")," keyword. Values of other controls can be accessed using a dollar sign and the ID of the control"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Files": {\n    "resource/clientscheme.res": {\n      "Scheme":{\n        "Colors": {\n          "Health Colour": "$value"\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"For HUD files that have a header element that matches their file name (such as ",(0,l.kt)("inlineCode",{parentName:"p"},'"Resource/UI/HudMedicCharge.res"'),"), the editor will apply the values specified inside the header element, for other files (such as clientscheme files), the object will need to specify the absolute desired location of the value."),(0,l.kt)("p",null,"Containing header element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Files": {\n  "resource/ui/hudplayerhealth.res": {\n    // Resource/UI/HudPlayerHealth.res is not present\n    "PlayerStatusHealthValue": {\n        "fgcolor": "$value"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"No containing header element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  "Files": {\n    "resource/clientscheme.res": {\n      "Scheme": {\n        "Colors": {\n            "Health Color": "$value"\n        }\n      }\n    }\n  }\n')),(0,l.kt)("p",null,"Note that the following example is ",(0,l.kt)("strong",{parentName:"p"},"NOT")," correct:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  "Files": {\n    "resource/ui/hudplayerhealth.res": {\n      // "Resource/UI/HudPlayerHealth.res" is present, but will be inside itself!\n      "Resource/UI/HudPlayerHealth.res": {\n        "PlayerStatusHealthValue": {\n          "fgcolor": "$value"\n        }\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"special-keys"},"Special Keys"),(0,l.kt)("p",null,"Special keys can appear anywhere within a file entry in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Files")," object, however they are performed before the HUD properties are written to the file and will not appear inside the HUD file."),(0,l.kt)("p",null,"Special Keys also do not care about the structure of the HUD elements, and will overwrite instances of their instructions anywhere."),(0,l.kt)("h4",{id:"replace"},"Replace"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"replace")," special key is for use with the CheckBox control (see ",(0,l.kt)("a",{parentName:"p",href:"https://www.editor.criticalflaw.ca/json/controls/"},"Controls"),"). It takes a list that contains 2 strings of text and replaces raw text in the file based on the value of the CheckBox"),(0,l.kt)("p",null,"If the checkbox is checked, the editor will replace all occurences of the first item in the list with the second item. if the CheckBox is unchecked, the editor will replace all occurences of the second item in the list with the first item."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "replace": [\n    "Red",\n    "Green"\n  ]\n  ...\n}\n')),(0,l.kt)("p",null,"Always ensure your ",(0,l.kt)("inlineCode",{parentName:"p"},"replace")," usage is as greedy as possible, for example the following code will leak text and break the HUD:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "replace": [\n    "HUD_Font_",\n    "HUD_Font_Lato_"\n  ]\n  ...\n}\n')),(0,l.kt)("p",null,"After being run multiple times, this code will result in ",(0,l.kt)("inlineCode",{parentName:"p"},"HUD_Font_Lato_Lato_Lato_Lato_")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"It is not recommended to write VDF in the parameters of a special key, as the formatting of the HUD will change when the editor writed the specified properties")),(0,l.kt)("h2",{id:"hud-element-keywords"},"HUD Element Keywords"),(0,l.kt)("p",null,"Unlike Special Keys, HUD element keywords work within the structure of a HUD file."),(0,l.kt)("h4",{id:"truefalse"},"True/False"),(0,l.kt)("p",null,"The true/false object will evaluate the value of the CheckBox control and return the value that matches the setting of the CheckBox control."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Label": "Enable Custom Crosshair",\n  ...\n  "Files": {\n  "scripts/hudlayout.res": {\n    "Crosshair": {\n      "visible": {\n        "true": "1",\n        "false": "0"\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Assuming the CheckBox is checked, this will result in the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  "Crosshair"\n  {\n    ...\n    "visible"    "1"\n    ...\n  }\n')),(0,l.kt)("h4",{id:"truefalse-ternary"},"True/False (Ternary)"),(0,l.kt)("p",null,"Currently, you can evaluate the value of a CheckBox using a ternary expression wrapped in curly braces."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Files":{\n    "scripts/hudlayout.res": {\n        "Crosshair": {\n            "visible": "{$value ? 1 : 0}"\n        }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"The ternary statement can also be used inline with other values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts/hudlayout.res": {\n    "Crosshair": {\n      "font": "Crosshair Size $value | Outline {$my_hud_enable_crosshair_outline ? ON : OFF}"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"When compiled, this will result in the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  "Crosshair"\n  {\n    "font"      "Crosshair Size 32 | Outline ON"\n  }\n')),(0,l.kt)("h2",{id:"operating-system-tags"},"Operating System Tags"),(0,l.kt)("p",null,"Operating System Tags can be represents by putting a ",(0,l.kt)("inlineCode",{parentName:"p"},"^")," followed by the tag in the property name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  ...\n  "xpos": "10",\n  "xpos^[$WIN32]": "20"\n  ...\n')),(0,l.kt)("p",null,"After being written to the HUD, this will be represented as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"xpos"    "10"\n"xpos"    "20" [$WIN32]\n')))}d.isMDXComponent=!0}}]);