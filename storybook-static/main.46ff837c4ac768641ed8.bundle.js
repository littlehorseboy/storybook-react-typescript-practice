(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Button(props){props.haha;var onClick=props.onClick;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:onClick},props.haha)}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{haha:{defaultValue:null,description:"",name:"haha",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},341:function(module,exports,__webpack_require__){__webpack_require__(342),__webpack_require__(453),module.exports=__webpack_require__(454)},364:function(module,exports){},454:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(17),__webpack_require__(13),__webpack_require__(11),__webpack_require__(18),__webpack_require__(19);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(115);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{}});var req=__webpack_require__(605);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(169)(module))},605:function(module,exports,__webpack_require__){var map={"./Button.stories.tsx":606};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=605},606:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(150),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(333),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(118),_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(152),withStorySource=__webpack_require__(607).withStorySource,__STORY__="import React from 'react';\r\nimport { storiesOf } from '@storybook/react';\r\nimport { action } from '@storybook/addon-actions';\r\nimport { withInfo } from '@storybook/addon-info';\r\nimport { withKnobs, boolean, text, number } from '@storybook/addon-knobs';\r\nimport Button from './Button';\r\n\r\nstoriesOf('Button', module)\r\n  .addDecorator(withInfo)\r\n  .addDecorator(withKnobs)\r\n  .add('Button123', () => <Button haha=\"123\" onClick={action('onClick')} />)\r\n  .add('Button456', () => <Button haha=\"456\" onClick={action('onClick')} />)\r\n  .add('ButtonClick', () => <Button haha=\"789\" onClick={action('onClick')} />, {\r\n    info: { inline: true },\r\n  })\r\n  .add('ButtonDisable', () => <button disabled={boolean('Disabled', false)}>ddd</button>)\r\n  .add(\r\n    'ButtonDynamicVar',\r\n    () => {\r\n      const name = text('Name', 'Horse');\r\n      const age = number('Age', 18);\r\n\r\n      return (\r\n        <div>\r\n          Name: {name}\r\n          <br />\r\n          Age: {age}\r\n        </div>\r\n      );\r\n    },\r\n    { notes: '麥克風測試~ 麥克風測試' }\r\n  );\r\n",__ADDS_MAP__={"button--buttondynamicvar":{startLoc:{col:4,line:18},endLoc:{col:29,line:31}},"button--buttondisable":{startLoc:{col:7,line:16},endLoc:{col:88,line:16}},"button--buttonclick":{startLoc:{col:7,line:13},endLoc:{col:3,line:15}},"button--button456":{startLoc:{col:7,line:12},endLoc:{col:75,line:12}},"button--button123":{startLoc:{col:7,line:11},endLoc:{col:75,line:11}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("Button123",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{haha:"123",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClick")})}).add("Button456",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{haha:"456",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClick")})}).add("ButtonClick",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.a,{haha:"789",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClick")})},{info:{inline:!0}}).add("ButtonDisable",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1)},"ddd")}).add("ButtonDynamicVar",function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Name","Horse"),age=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("Age",18);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Name: ",name,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Age: ",age)},{notes:"麥克風測試~ 麥克風測試"})}.call(this,__webpack_require__(169)(module))},623:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":296,"./nestedObjectAssign.js":296};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=623}},[[341,1,2]]]);
//# sourceMappingURL=main.46ff837c4ac768641ed8.bundle.js.map