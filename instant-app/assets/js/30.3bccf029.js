(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("存储包含了对localStorage、sessionStorage、cookie、indexDB的常用操作，设置时支持批量设置，导出模块名为"),s("code",[t._v("storage")])]),t._v(" "),s("ul",[s("li",[t._v("导入模块")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" storage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gx-instant'")]),t._v("\n")])])]),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"setstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstore"}},[t._v("#")]),t._v(" setStore")]),t._v(" "),s("p",[t._v("说明：添加或更新缓存")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key: string | Array | Object")]),t._v(" store的键，当为数组时或对象时，表示批量设置；为对象时，则对象中的key代表键名，value代表键值")]),t._v(" "),s("li",[s("code",[t._v("val：any | Array<any>")]),t._v(" store的值，可选，当为数组时，代表批量设置的值，与key数组顺序一一对应，当key为对象时，value不生效，此时可置为null")]),t._v(" "),s("li",[s("code",[t._v("options：Object")]),t._v(" 可选项，可设置mark，serialize，以及cookie的可选项（支持Cookie.js中的可选项参数）")]),t._v(" "),s("li",[s("code",[t._v("options.mark boolean")]),t._v(" 存储key时是否标识，可选，被标识的key会被存在缓存中。当clear时，如果没有指定key时，会根据此值清除缓存，默认为true")]),t._v(" "),s("li",[s("code",[t._v("options.serialize boolean")]),t._v(" 存储的数据是否需要序列化，可选，为true，存储引用类型数据时将会通过serialize方法进行序列化，默认为true")])])]),t._v(" "),s("li",[t._v("返回：无")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置，localStore中设置name为tom")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localStore'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置，localStore中设置name为tom，age为18")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localStore'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置，localStore中设置name为tom，age为18，等同于第二行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localStore'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置，cookie中设置name为tom，age为18，但不会被标识")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mark")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置，localStore中设置name为tom，age为18，但不会被序列化")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localStore'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("serialize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("p",[t._v("提示：支持操作 localStorage、sessionStorage、cookie")]),t._v(" "),s("h3",{attrs:{id:"setlocalstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setlocalstore"}},[t._v("#")]),t._v(" setLocalStore")]),t._v(" "),s("p",[t._v("说明：添加或更新本地缓存")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key: string | Array | Object")]),t._v(" store的键，当为数组时或对象时，表示批量设置；为对象时，则对象中的key代表键名，value代表键值")]),t._v(" "),s("li",[s("code",[t._v("val：any | Array<any>")]),t._v(" store的值，可选，当为数组时，代表批量设置的值，与key数组顺序一一对应，当key为对象时，value不生效，此时可置为null")]),t._v(" "),s("li",[s("code",[t._v("isSerialize：boolean")]),t._v(" 存储值是否被序列化，可选，默认为true")])])]),t._v(" "),s("li",[t._v("返回：无")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置localStore，localStore中设置name为tom")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLocalStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置localStore，localStore中设置name为tom，age为18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLocalStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置localStore，localStore中设置name为tom，age为18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLocalStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置localStore，localStore中设置name为tom，不进行序列化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLocalStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("h3",{attrs:{id:"setsessionstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setsessionstore"}},[t._v("#")]),t._v(" setSessionStore")]),t._v(" "),s("p",[t._v("说明：添加或更新会话缓存")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key: string | Array | Object")]),t._v(" store的键，当为数组时或对象时，表示批量设置；为对象时，则对象中的key代表键名，value代表键值")]),t._v(" "),s("li",[s("code",[t._v("val：any | Array<any>")]),t._v(" store的值，可选，当为数组时，代表批量设置的值，与key数组顺序一一对应，当key为对象时，value不生效，此时可置为null")]),t._v(" "),s("li",[s("code",[t._v("isSerialize：boolean")]),t._v(" 存储值是否被序列化，可选，默认为true")])])]),t._v(" "),s("li",[t._v("返回：无")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置sessionStore，sessionStore中设置name为tom")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSessionStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置sessionStore，sessionStore中设置name为tom，age为18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSessionStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置sessionStore，sessionStore中设置name为tom，age为18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSessionStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置sessionStore，sessionStore中设置name为tom，不进行序列化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSessionStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("h3",{attrs:{id:"setcookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcookie"}},[t._v("#")]),t._v(" setCookie")]),t._v(" "),s("p",[t._v("说明：添加或更新cookie")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key: string | Array | Object")]),t._v(" store的键，当为数组时或对象时，表示批量设置；为对象时，则对象中的key代表键名，value代表键值")]),t._v(" "),s("li",[s("code",[t._v("val：any | Array<any>")]),t._v(" store的值，可选，当为数组时，代表批量设置的值，与key数组顺序一一对应，当key为对象时，value不生效，此时可置为null")]),t._v(" "),s("li",[s("code",[t._v("isSerialize：boolean")]),t._v(" 存储值是否被序列化，可选，默认为true")])])]),t._v(" "),s("li",[t._v("返回：无")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置cookie，cookie中设置name为tom")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置cookie，cookie中设置name为tom，age为18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//批量设置cookie，cookie中设置name为tom，age为18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单个设置cookie，cookie中设置name为tom，不进行序列化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("h3",{attrs:{id:"setindexdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setindexdb"}},[t._v("#")]),t._v(" setIndexDB")]),t._v(" "),s("p",[t._v("说明：在IndexDB中添加或设置值")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key: string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("val：any")]),t._v(" 值")])])])]),t._v(" "),s("h3",{attrs:{id:"getstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstore"}},[t._v("#")]),t._v(" getStore")]),t._v(" "),s("p",[t._v("说明：获取store")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("type：string")]),t._v(" 类型，可选，默认是localStore，可选值：localStore,sessionStore,cookie")]),t._v(" "),s("li",[s("code",[t._v("deserialize：boolean")]),t._v(" deserialize 可选，反序列化，为true时，将字符串反序列化为对象，默认true")])])]),t._v(" "),s("li",[t._v("返回 "),s("code",[t._v("any | Array<any> | false")]),t._v(" 成功返回相应store或store集合，不成功返回false")])]),t._v(" "),s("h3",{attrs:{id:"getlocalstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getlocalstore"}},[t._v("#")]),t._v(" getLocalStore")]),t._v(" "),s("p",[t._v("说明：获取localStore")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("isDeserialize：boolean")]),t._v(" 是否反序列化，可选，为true时，将可以反序列化的值进行反序列化，默认为true")])])]),t._v(" "),s("li",[t._v("返回 "),s("code",[t._v("any | Array<any> | false")]),t._v(" 成功返回相应store或store集合，不成功返回false")])]),t._v(" "),s("h3",{attrs:{id:"getsessionstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getsessionstore"}},[t._v("#")]),t._v(" getSessionStore")]),t._v(" "),s("p",[t._v("说明：获取sessionStore")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("isDeserialize：boolean")]),t._v(" 是否反序列化，可选，为true时，将可以反序列化的值进行反序列化，默认为true")])])]),t._v(" "),s("li",[t._v("返回 "),s("code",[t._v("any | Array<any> | false")]),t._v(" 成功返回相应store或store集合，不成功返回false")])]),t._v(" "),s("h3",{attrs:{id:"getcookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcookie"}},[t._v("#")]),t._v(" getCookie")]),t._v(" "),s("p",[t._v("说明：获取cookie")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("isDeserialize：boolean")]),t._v(" 是否反序列化，可选，为true时，将可以反序列化的值进行反序列化，默认为true")])])]),t._v(" "),s("li",[t._v("返回 "),s("code",[t._v("any | Array<any> | false")]),t._v(" 成功返回相应store或store集合，不成功返回false")])]),t._v(" "),s("h3",{attrs:{id:"getindexdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getindexdb"}},[t._v("#")]),t._v(" getIndexDB")]),t._v(" "),s("p",[t._v("说明：获取indexDB")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")])])]),t._v(" "),s("li",[t._v("返回 "),s("code",[t._v("Promise<any>")]),t._v(" 包含相应值或相应值数据的Promise对象。异常时Promise对象状态为rejected，返回异常信息")])]),t._v(" "),s("h3",{attrs:{id:"hasstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasstore"}},[t._v("#")]),t._v(" hasStore")]),t._v(" "),s("p",[t._v("说明：判断缓存中是否包含相应值")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("type string")]),t._v(" 类型，可选，可取值localStore，sessionStore，cookie。默认为localStore")])])]),t._v(" "),s("li",[s("p",[t._v("返回 "),s("code",[t._v("boolean")]),t._v(" 判断结果")])])]),t._v(" "),s("h3",{attrs:{id:"removestore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removestore"}},[t._v("#")]),t._v(" removeStore")]),t._v(" "),s("p",[t._v("说明：删除缓存中相应值")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")]),t._v(" "),s("li",[s("code",[t._v("type string")]),t._v(" 类型，可选，可取值localStore，sessionStore，cookie。默认为localStore")])])]),t._v(" "),s("li",[s("p",[t._v("返回 "),s("code",[t._v("boolean")]),t._v(" 删除成功返回true，否则返回false")])])]),t._v(" "),s("h3",{attrs:{id:"removelocalstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removelocalstore"}},[t._v("#")]),t._v(" removeLocalStore")]),t._v(" "),s("p",[t._v("说明：删除localStore")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")])])])]),t._v(" "),s("h2",{attrs:{id:"removesessionstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removesessionstore"}},[t._v("#")]),t._v(" removeSessionStore")]),t._v(" "),s("p",[t._v("说明：删除sessionStore")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")])])])]),t._v(" "),s("h2",{attrs:{id:"removecookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removecookie"}},[t._v("#")]),t._v(" removeCookie")]),t._v(" "),s("p",[t._v("说明：删除cookie")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")])])])]),t._v(" "),s("h3",{attrs:{id:"removeindexdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeindexdb"}},[t._v("#")]),t._v(" removeIndexDB")]),t._v(" "),s("p",[t._v("说明：删除indexDB")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合")])])]),t._v(" "),s("li",[s("p",[t._v("返回 "),s("code",[t._v("Promise")]),t._v(" resolved时返回成功信息，rejected时返回错误信息")])])]),t._v(" "),s("h3",{attrs:{id:"clearstore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearstore"}},[t._v("#")]),t._v(" clearStore")]),t._v(" "),s("p",[t._v("说明：清空缓存")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("isAll：boolean")]),t._v(" 可选，是否全部清空 默认为true")]),t._v(" "),s("li",[s("code",[t._v("key：string | Array<string>")]),t._v(" 键或键的集合，isAll为false时生效")]),t._v(" "),s("li",[s("code",[t._v("type：string")]),t._v(" 存储类型，可选，默认为localStore，可选sessionStore、cookie，localStore")])])]),t._v(" "),s("li",[s("p",[t._v("返回 "),s("code",[t._v("Promise")]),t._v(" resolved时返回成功信息，rejected时返回错误信息")])])]),t._v(" "),s("p",[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("当type为cookie时，且isAll为true，此时如果通过setStore设置的数据，且mark为true，则会通过被mark的key删除cookie，否则会报异常，此时应该显示指定要删除的key")]),t._v(" "),s("li",[t._v("当type为sessionStore或默认为localStore时，行为等同于store.clear")])])])}),[],!1,null,null,null);s.default=n.exports}}]);