(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{251:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),a("p",[t._v("A curated list of plugins and modules for objection. Only plugins that follow "),a("router-link",{attrs:{to:"/guide/plugins.html#plugin-development-best-practices"}},[t._v("the best practices")]),t._v(" are accepted on this list. Other modules like plugins for other frameworks and things that cannot be implemented following the best practices are an exception to this rule. If you are a developer of or otherwise know of a good plugin/module for objection, please create a pull request or an issue to get it added to this list.")],1),t._v(" "),a("h2",{attrs:{id:"_3rd-party-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-party-plugins"}},[t._v("#")]),t._v(" 3rd party plugins")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/snlamm/objection-dynamic-finder",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-dynamic-finder"),a("OutboundLink")],1),t._v(" - dynamic finders for your models")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/seegno/objection-guid",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-guid"),a("OutboundLink")],1),t._v(" - automatic guid for your models")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/scoutforpets/objection-password",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-password"),a("OutboundLink")],1),t._v(" - automatic password hashing for your models")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/griffinpp/objection-soft-delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-soft-delete"),a("OutboundLink")],1),t._v(" - Soft delete functionality with minimal configuration")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/seegno/objection-unique",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-unique"),a("OutboundLink")],1),t._v(" - Unique validation for your models")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/oscaroox/objection-visibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-visibility"),a("OutboundLink")],1),t._v(" - whitelist/blacklist your model properties")])]),t._v(" "),a("h2",{attrs:{id:"other-3rd-party-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-3rd-party-modules"}},[t._v("#")]),t._v(" Other 3rd party modules")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tandg-digital/objection-filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-filter"),a("OutboundLink")],1),t._v(" - API filtering on data and related models")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vincit/objection-graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-graphql"),a("OutboundLink")],1),t._v(" - Automatically generates rich graphql schema for objection models")])]),t._v(" "),a("h2",{attrs:{id:"plugin-development-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-development-best-practices"}},[t._v("#")]),t._v(" Plugin development best practices")]),t._v(" "),a("p",[t._v("When possible, objection.js plugins should be implemented as "),a("a",{attrs:{href:"http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("class mixins"),a("OutboundLink")],1),t._v(". A mixin is simply a function that takes a class as an argument and returns a subclass. Plugins should not modify "),a("router-link",{attrs:{to:"/api/model/"}},[t._v("objection.Model")]),t._v(", "),a("router-link",{attrs:{to:"/api/query-builder/"}},[t._v("objection.QueryBuilder")]),t._v(" or any other global variables directly. See the "),a("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("example plugin"),a("OutboundLink")],1),t._v(" for more info. There is also "),a("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/plugin-with-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("another example"),a("OutboundLink")],1),t._v(" that should be followed if your plugin takes options or configuration parameters.")],1),t._v(" "),a("p",[t._v("Mixin is just a function that takes a class and returns an extended subclass.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The returned class should have no name. That way")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the superclass's name gets inherited.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("extends")]),t._v(" Model "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your modifications.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Mixins can be then applied like this:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("strong",[t._v("doesn't")]),t._v(" work since mixins never modify the input:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This does absolutely nothing.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Multiple mixins:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeOtherMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("There are a couple of helpers in objection main module for applying multiple mixins.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Model "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'objection'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  SomeMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  SomeOtherMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EvenMoreMixins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  LolSoManyMixins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImAMixinWithOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Model "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'objection'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mixins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  SomeMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  SomeOtherMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EvenMoreMixins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  LolSoManyMixins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImAMixinWithOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mixins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Mixins can also be used as decorators:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@SomeMixin\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MixinWithOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);