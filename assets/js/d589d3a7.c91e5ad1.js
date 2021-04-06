(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return h})),a.d(t,"metadata",(function(){return g})),a.d(t,"Highlight",(function(){return O})),a.d(t,"toc",(function(){return j})),a.d(t,"default",(function(){return w}));var n=a(3),i=a(7),s=a(0),o=a.n(s),c=a(119),r=a(134),l=a(117),d=a(108),b=a.n(d);const m=37,p=39;var u=function(e){const{lazy:t,block:a,defaultValue:n,values:i,groupId:c,className:d}=e,{tabGroupChoices:u,setTabGroupChoices:v}=Object(r.a)(),[h,g]=Object(s.useState)(n),O=s.Children.toArray(e.children),j=[];if(null!=c){const e=u[c];null!=e&&e!==h&&i.some((t=>t.value===e))&&g(e)}const N=e=>{const t=e.target,a=j.indexOf(t),n=O[a].props.value;g(n),null!=c&&(v(c,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:o}=window;return t>=0&&i<=o&&n<=s&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((()=>t.classList.remove(b.a.tabItemActive)),2e3))}),150))},w=e=>{var t;let a;switch(e.keyCode){case p:{const t=j.indexOf(e.target)+1;a=j[t]||j[0];break}case m:{const t=j.indexOf(e.target)-1;a=j[t]||j[j.length-1];break}}null===(t=a)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},d)},i.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:w,onFocus:N,onClick:N},t)))),t?Object(s.cloneElement)(O.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(s.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))};var v=function({children:e,hidden:t,className:a}){return o.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)},h={title:"Getting Started",slug:"/"},g={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 1: Generate a new Docusaurus site",source:"@site/docs/getting-started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.md",version:"current",sidebar:"docs",next:{title:"Create a Page",permalink:"/docs/create-a-page"}},O=function(e){var t=e.children,a=e.color;return Object(c.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},j=[{value:"Step 1: Generate a new Docusaurus site",id:"step-1-generate-a-new-docusaurus-site",children:[]},{value:"Step 2: Start your Docusaurus site",id:"step-2-start-your-docusaurus-site",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],N={Highlight:O,toc:j};function w(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},N,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"step-1-generate-a-new-docusaurus-site"},"Step 1: Generate a new Docusaurus site"),Object(c.b)("p",null,"If you haven't already, generate a new Docusaurus site using the classic template:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(c.b)("h2",{id:"step-2-start-your-docusaurus-site"},"Step 2: Start your Docusaurus site"),Object(c.b)("p",null,"Run the development server in the newly created ",Object(c.b)("inlineCode",{parentName:"p"},"my-website")," folder:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(c.b)("p",null,"Open ",Object(c.b)("inlineCode",{parentName:"p"},"docs/getting-started.md")," and edit some lines. The site reloads automatically and display your changes."),Object(c.b)("p",null,"Welcome to new React based static websites generator"),Object(c.b)("h2",{id:"thats-it"},"That's it!"),Object(c.b)("p",null,"Congratulations! You've successfully run and modified your Docusaurus project."),Object(c.b)(O,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(c.b)(O,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(c.b)("p",null,"I can write ",Object(c.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(c.b)("em",{parentName:"p"},"JSX"),"!"),Object(c.b)(u,{defaultValue:"orange",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(c.b)(v,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(c.b)(v,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(c.b)(v,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="How to add new Button"',title:'"How',to:!0,add:!0,new:!0,'Button"':!0},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html",metastring:'{2,4} title="Alert"',"{2,4}":!0,title:'"Alert"'},'<div class="mb-3">\n  <label for="exampleFormControlInput1" class="form-label">Email address</label>\n  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">\n</div>\n<div class="mb-3">\n  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>\n  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n</div>\n')),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The content and title ",Object(c.b)("em",{parentName:"p"},"can")," include markdown."))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You can specify an optional title")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Heads up! Here's a pro-tip."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Useful information."))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Warning! You better pay attention!"))),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Danger danger, mayday!"))))}w.isMDXComponent=!0}}]);