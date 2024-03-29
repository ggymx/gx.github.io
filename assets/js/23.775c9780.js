(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{308:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断言"}},[t._v("#")]),t._v(" 断言")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("断言包含了一些常用的判断方法，导出模块名为"),s("code",[t._v("assert")])]),t._v(" "),s("ul",[s("li",[t._v("导入模块")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" assert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gx-instant'")]),t._v("\n")])])]),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"truth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#truth"}},[t._v("#")]),t._v(" truth")]),t._v(" "),s("p",[t._v("说明：判断是否为真值")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("strict：boolean")]),t._v(" 可选，是否是严格模式，严格模式下，采用===进行对比，默认false")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为真值，当val为数组时，self为false，会判断集合内每个数据是否为真值；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("truth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("truth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("truth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会判断集合每一项是否为真值")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("truth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会判断值[1,0,2]是否为真值")]),t._v("\n")])])]),s("h3",{attrs:{id:"falsity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#falsity"}},[t._v("#")]),t._v(" falsity")]),t._v(" "),s("p",[t._v("说明：判断是否为假值")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("strict：boolean")]),t._v(" 可选，是否是严格模式，严格模式下，采用===进行对比，默认false")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为假值，当val为数组时，self为false，会判断集合内每个数据是否为假值；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("falsity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("falsity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("falsity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会判断集合每一项是否为真值")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("falsity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会判断值[1,0,2]是否为真值")]),t._v("\n")])])]),s("h3",{attrs:{id:"isnumber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isnumber"}},[t._v("#")]),t._v(" isNumber")]),t._v(" "),s("p",[t._v("说明：判断数据是否为number类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为数值，当val为数组时，self为false，会判断集合内每个数据是否为数值；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),s("h3",{attrs:{id:"isstring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isstring"}},[t._v("#")]),t._v(" isString")]),t._v(" "),s("p",[t._v("说明：判断数据是否为string类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为字符串，当val为数组时，self为false，会判断集合内每个数据是否为string类型；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),s("h3",{attrs:{id:"isboolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isboolean"}},[t._v("#")]),t._v(" isBoolean")]),t._v(" "),s("p",[t._v("说明：判断数据是否为boolean类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为布尔值，当val为数组时，self为false，会判断集合内每个数据是否为布尔值；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBoolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBoolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBoolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),s("h3",{attrs:{id:"isarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isarray"}},[t._v("#")]),t._v(" isArray")]),t._v(" "),s("p",[t._v("说明：判断数据是否为array类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为数组类型，当val为数组时，self为false，会判断集合内每个数据是否为数组类型；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true [[1],null]本身是数组")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false null不是数组")]),t._v("\n")])])]),s("h3",{attrs:{id:"ismap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ismap"}},[t._v("#")]),t._v(" isMap")]),t._v(" "),s("p",[t._v("说明：判断数据是否为map类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为map类型，当val为数组时，self为false，会判断集合内每个数据是否为map类型；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean | Array<boolean>")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"isobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isobject"}},[t._v("#")]),t._v(" isObject")]),t._v(" "),s("p",[t._v("说明：判断数据是否为Object类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 判断是否自身类型为Object类型，可选，当val为数组时，self为false，会判断集合内每个数据是否为Object类型；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean | Array<boolean>")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"isfunction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isfunction"}},[t._v("#")]),t._v(" isFunction")]),t._v(" "),s("p",[t._v("说明：判断数据是否为Function类型")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 判断是否自身为Function类型，可选，当val为数组时，self为false，会判断集合内每个数据是否为Function类型；self为true则返回val本身的判断结果")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean | Array<boolean>")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"iselement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iselement"}},[t._v("#")]),t._v(" isElement")]),t._v(" "),s("p",[t._v("说明：判断数据是否为页面元素（DOM，继承自HTMLElement）")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"isdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isdate"}},[t._v("#")]),t._v(" isDate")]),t._v(" "),s("p",[t._v("说明：判断是否为日期类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("obj: any")]),t._v(" 数据")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"is"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is"}},[t._v("#")]),t._v(" is")]),t._v(" "),s("p",[t._v("说明：通用判断方法，判断是否Array,boolean,string,number,Map,Object,Function类型")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val: any")]),t._v(" 数据")]),t._v(" "),s("li",[s("code",[t._v("type: string")]),t._v(" 判断数据是否为某类型，如number,array等")]),t._v(" "),s("li",[s("code",[t._v("self：boolean")]),t._v(" 可选，判断是否自身类型为某类型，当val为数组时，self为false，会判断集合内每个数据是否为type指定的类型；self为true则返回val本身的判断结果，默认true")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"isimg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isimg"}},[t._v("#")]),t._v(" isImg")]),t._v(" "),s("p",[t._v("说明：判断是否为图片")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为图片的格式断言列表，可选，默认"),s("code",[t._v("['JPG','JPEG','PNG','SVG','GIF']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true，因为默认的img断言列表中存在JPG（大小写不敏感）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PNG'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false，因为jpg格式不包含在被允许的格式范围PNG中")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test2.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//支持File和string混传，支持批量判断")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test2.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PNG'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//断言列表单个时可不指定为数组，也可以写成isImg(['test.jpg','test2.png'],['PNG'])")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test2.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PNG'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JPG'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可指定多个断言列表")]),t._v("\n")])])]),s("h3",{attrs:{id:"isvideo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isvideo"}},[t._v("#")]),t._v(" isVideo")]),t._v(" "),s("p",[t._v("说明：判断是否为视频")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为视频的格式断言列表，可选，默认"),s("code",[t._v("['MP4','MOV','AVI','FLV','3GP']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("提示：调用方式等同isImg")]),t._v(" "),s("h3",{attrs:{id:"isaudio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isaudio"}},[t._v("#")]),t._v(" isAudio")]),t._v(" "),s("p",[t._v("说明：判断是否为音频")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为音频的格式断言列表，可选，默认"),s("code",[t._v("['MP3','MPEG','OGG','WMA']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("提示：调用方式等同isImg")]),t._v(" "),s("h3",{attrs:{id:"isdoc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isdoc"}},[t._v("#")]),t._v(" isDoc")]),t._v(" "),s("p",[t._v("说明：判断是否为Word文档")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为word文档的格式断言列表，可选，默认"),s("code",[t._v("['DOC','DOCX']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("提示：调用方式等同isImg")]),t._v(" "),s("h3",{attrs:{id:"isexcel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isexcel"}},[t._v("#")]),t._v(" isExcel")]),t._v(" "),s("p",[t._v("说明：判断是否为Excel表格")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为表格的格式断言列表，可选，默认"),s("code",[t._v("['XLS','XLSX','XLSM','XLSB','XLTX','XLTM','CSV']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("提示：调用方式等同isImg")]),t._v(" "),s("h3",{attrs:{id:"ispdf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ispdf"}},[t._v("#")]),t._v(" isPDF")]),t._v(" "),s("p",[t._v("说明：判断是否为PDF")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为PDF的格式断言列表，可选，默认"),s("code",[t._v("['PDF']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("提示：调用方式等同isImg")]),t._v(" "),s("h3",{attrs:{id:"iszip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iszip"}},[t._v("#")]),t._v(" isZIP")]),t._v(" "),s("p",[t._v("说明：判断是否为压缩文件")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("file: File | string | Array<File,string>")]),t._v(" 文件或文件名列表")]),t._v(" "),s("li",[s("code",[t._v("allowType: string | Array<string>")]),t._v(" 判断是否为压缩文件的格式断言列表，可选，默认"),s("code",[t._v("['ZIP','RAR','7Z']")]),t._v("，注意：大小写不敏感")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("提示：调用方式等同isImg")]),t._v(" "),s("h3",{attrs:{id:"istype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istype"}},[t._v("#")]),t._v(" isType")]),t._v(" "),s("p",[t._v("说明：判断是否属于某类型")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val：any | Array<any>")]),t._v(" 需要判断的值或者值列表")]),t._v(" "),s("li",[s("code",[t._v("type: string")]),t._v(" 目标类型")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v("  判断结果，如果val是数组，则判断数组内的每一项是否均符合type指定的类型")])]),t._v(" "),s("p",[t._v("提示：内部使用"),s("code",[t._v("typeof")]),t._v("进行判断")]),t._v(" "),s("h3",{attrs:{id:"isinstance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isinstance"}},[t._v("#")]),t._v(" isInstance")]),t._v(" "),s("p",[t._v("说明：判断是否属于某实例")]),t._v(" "),s("p",[s("code",[t._v("版本：0.0.7")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("val：any | Array<any>")]),t._v(" 需要判断的值或者值列表")]),t._v(" "),s("li",[s("code",[t._v("type: Object")]),t._v(" 目标类型，引用数据类型")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果，如果val是数组，则判断数组内的每一项是否均为type的实例")])]),t._v(" "),s("p",[t._v("提示：内部使用"),s("code",[t._v("instanceof")]),t._v("进行判断")]),t._v(" "),s("h3",{attrs:{id:"equals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#equals"}},[t._v("#")]),t._v(" equals")]),t._v(" "),s("p",[t._v("说明：比较一组数据是否相等")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("vales: any")]),t._v(" 可以是数组，也可以是多个参数")]),t._v(" "),s("li",[s("code",[t._v("strict: boolean")]),t._v(" 可选，判断相等时是否严格比较，默认false（引用类型数据会先序列化再比较）")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//等同于")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//等同于")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("h3",{attrs:{id:"equalsobj"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#equalsobj"}},[t._v("#")]),t._v(" equalsObj")]),t._v(" "),s("p",[t._v("说明：比较对象是否相等")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("obj1: Object")]),t._v(" 比较对象")]),t._v(" "),s("li",[s("code",[t._v("obj2: Object")]),t._v(" 比较对象")]),t._v(" "),s("li",[s("code",[t._v("strict：boolean")]),t._v(" 可选，是否严格比较，严格比较下，key顺序不一致也不会视为相等，对比方式会先将对象序列化，默认false")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equalsObj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true（key顺序可以不同）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equalsObj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false（key顺序不同视为不同）")]),t._v("\n")])])]),s("h3",{attrs:{id:"cannumber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cannumber"}},[t._v("#")]),t._v(" canNumber")]),t._v(" "),s("p",[t._v("说明：判断是否能转为数字")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("num: any | Array<any>")]),t._v(" 要判断的数据，当数据为集合时，会判断集合中的每个数据是否都能转为数字")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])]),t._v(" "),s("h3",{attrs:{id:"candate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#candate"}},[t._v("#")]),t._v(" canDate")]),t._v(" "),s("p",[t._v("说明：判断数据是否能转成日期类型数据")]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[s("code",[t._v("num: any | Array<any>")]),t._v(" 要判断的数据，当数据为集合时，会判断集合中的每个数据是否都能转为Date类型")])])]),t._v(" "),s("li",[t._v("返回："),s("code",[t._v("boolean")]),t._v(" 判断结果")])])])}),[],!1,null,null,null);s.default=e.exports}}]);