webpackJsonp([167,212],{972:function(t,a){t.exports={content:["section",["p","Handling the overall layout of a page."],["h2","Specification"],["h3","Size"],["p","The first level of the navigation is placed near by a logo inclined left, and the secondary menu is placed inclined right."],["ul",["li",["p","Top Navigation (almost systems): the height of the first level navigation ",["code","64px"],", the second level of navigation ",["code","48px"],"\u3002"]],["li",["p","Top Navigation(contents page): the height of the first level navigation ",["code","80px"],", the second level of navigation ",["code","56px"],"\u3002"]],["li",["p","Calculation formula of a top navigation:",["code","48+8n"],"."]],["li",["p","Calculation formula a aside navigation:",["code","200+8n"],"."]]],["h3","Interaction rules"],["ul",["li",["p","The first level navigation and the last level navigation should be distincted by visualization;"]],["li",["p","The current item should have the highest priority of visualization;"]],["li",["p","When the current navigation item is collapsed, the stlye of the current navigation item will be applied to the parent level of it;"]],["li",["p","The left side navigation bar support for both the according and the expanding style, you can choose the one of it case by case."]]],["h2","Visualization rules"],["p"," Style of a navigation should conform to the level of it."],["ul",["li",["p",["strong","Emphasis by colorblock"]],["p","When background color is a deep color, you can use this pattern for the parent level navigation item of current page."]],["li",["p",["strong","The highlight match stick"]],["p","When background color is a light color, you can use this pattern for the current page navigation item, we recommed to use it for the last item of the navigation path."]],["li",["p",["strong","Hightlighted font"]],["p","From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item."]],["li",["p",["strong","Enlarge the size of the font"]],["p",["code","12px"],"\u3001",["code","14px"]," is a standard font size of navigations\uff0c14 is used for the first and the second level of the navigation. You can choose a approprigate font size in terms of the level of your navigation."]]],["h2","Component Overview"],["ul",["li",["p",["code","Layout"],": The layout wrapper, in which ",["code","Header"]," ",["code","Sider"]," ",["code","Content"]," ",["code","Footer"]," or ",["code","Layout"]," itself can be nested, and can be placed in any parent container."]],["li",["p",["code","Header"],": The top layout with default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Sider"],": The sidebar with default style and basic functions, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Content"],": The content layout with default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Footer"],": The bottom layout with default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]]],["blockquote",["p","Base on ",["code","flex layout"],", please pay attention to the ",["a",{title:null,href:"http://caniuse.com/#search=flex"},"compatibility"],"."]]],meta:{category:"Components",type:"Layout",cols:1,title:"Layout",filename:"components/layout/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Specification",title:"Specification"},"Specification"]],["li",["a",{className:"bisheng-toc-h2",href:"#Visualization-rules",title:"Visualization rules"},"Visualization rules"]],["li",["a",{className:"bisheng-toc-h2",href:"#Component-Overview",title:"Component Overview"},"Component Overview"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">></span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>left sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">></span></span>main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>right sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">></span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>'},["code","<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>"]],["h3","Layout"],["p","The wrapper."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","style"],["td","to custom the styles"],["td","object"],["td","-"]],["tr",["td","className"],["td","container className"],["td","string"],["td","-"]]]],["blockquote",["p","API of ",["code","Layout.Header"]," ",["code","Layout.Footer"]," ",["code","Layout.Content"]," is the same with ",["code","Layout"],"."]],["h3","Layout.Sider"],["p","The sidebar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","collapsible"],["td","whether can be collapsed"],["td","boolean"],["td","false"]],["tr",["td","defaultCollapsed"],["td","to set the initial status"],["td","boolean"],["td","false"]],["tr",["td","collapsed"],["td","to set the current status"],["td","boolean"],["td","-"]],["tr",["td","onCollapse"],["td","the callback function, can be executed by clicking the trigger or activating the responsive layout"],["td","(collapsed, type) => {}"],["td","-"]],["tr",["td","trigger"],["td","specify the customized trigger, set to null to hide the trigger"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","width"],["td","width of the sidebar"],["td","number","|","string"],["td","200"]],["tr",["td","collapsedWidth"],["td","width of the collapsed sidebar, by setting to ",["code","0"]," a special trigger will appear"],["td","number"],["td","64"]],["tr",["td","breakpoint"],["td","breakpoint of the responsive layout"],["td","Enum { 'xs', 'sm', 'md', 'lg', 'xl' }"],["td","-"]],["tr",["td","style"],["td","to custom the styles"],["td","object"],["td","-"]],["tr",["td","className"],["td","container className"],["td","string"],["td","-"]]]],["blockquote",["p","Note: If you want to wrap the ",["code","Sider"],", do not forget to add this setting to the customized component: ",["code","__ANT_LAYOUT_SIDER = true"],". e.g."]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> CustomizedSider <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Sider <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\nCustomizedSider<span class="token punctuation">.</span>__ANT_LAYOUT_SIDER <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomizedSider</span><span class="token punctuation">></span></span>Sider Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CustomizedSider</span><span class="token punctuation">></span></span>'},["code","const CustomizedSider = (props) => <Sider {...props} />\nCustomizedSider.__ANT_LAYOUT_SIDER = true;\n...\n<CustomizedSider>Sider Content</CustomizedSider>"]]]}}});