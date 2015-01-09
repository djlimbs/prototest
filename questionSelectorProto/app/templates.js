Ember.TEMPLATES["_date"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"answer-list hidden-item\">\n    <span class=\"text-italic\">\n        <span class=\"juicon juicon-info-circle\"></span>\n        Applicants will be provided a date picker.\n    </span>\n</div>");
  
});

Ember.TEMPLATES["_paragraph"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"answer-list hidden-item\">\n    <span class=\"text-italic\">\n        <span class=\"juicon juicon-info-circle\"></span>\n        Applicants will be provided a large text field.\n    </span>\n</div>");
  
});

Ember.TEMPLATES["_textField"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"answer-list hidden-item\">\n    <span class=\"text-italic\">\n        <span class=\"juicon juicon-info-circle\"></span>\n        Applicants will be provided a text field.\n    </span>\n</div>");
  
});

Ember.TEMPLATES["components/datepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<div class=\"row input__group\">\n    <div class=\"column--md--4\">\n        <input type=\"text\" readonly=true/>\n        \n    </div>\n    <div class=\"column--md--2\">\n        <button type=\"button\" class=\"button button--secondary datepicker\" data-date-format=\"\" data-date=\"\">\n            <span class=\"juicon juicon-calendar\"></span>\n        </button>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["question"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n        <ul ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":answer-list :hidden-item question.isRadioButton:radio-list")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n            ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack2 = helpers.each.call(depth0, "question.answers", {hash:{
    'itemController': ("answer")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </ul>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                <li>\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Value__c", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n\n                    <span ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":juicon scoreIcon :mar--sm--lm")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></span>\n                </li>\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)),stack1 ? stack1.call(depth0, "question.questionPartial", options) : helperMissing.call(depth0, "partial", "question.questionPartial", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"pad--sm--n\">\n    <div class=\"input__icon--special juicon juicon-right\"></div>\n    <ul class=\"list-style-type-none inline-block input-size mar--sm--n text-right float--right\">\n        <li class=\"inline-block downVote colorToggle\">\n            <label class=\"input-size pad--sm--ls pad--sm--rs\">\n                <input type=\"checkbox\">\n                \n            </label>\n        </li>\n    </ul>\n    \n    <div class=\"input-size pad--sm--m dots question-text\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "question.Text__c", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "question.answers", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["questionDetail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<nav id=\"jobOfferNav\" class=\"nav-bar--sf1 mar--sm--bn\">\n    <button class=\"float--right-left button button--secondary mar--sm--only--ls show-brkpoint--sm--only\">Back</button>\n    <h1 class=\"nav-bar--sf1__title has-subtitle page__heading\">Question Detail</h1>\n</nav>\n<hr class=\"show-brkpoint--md mar--sm--bn\"/>\n<div class=\"content__section\">\n    <div class=\"grid grid--vertical\">\n        <p>\n            {!tobase7__Form_Element__c.tobase7__Text__c}\n        </p>\n        <ul class=\"mar--sm--n\">\n            <apex:repeat value=\"{!tobase7__Form_Element__c.tobase7__Answer_Choices__r}\" var=\"answer\">\n                <li>{!answer.tobase7__Value__c}</li>\n            </apex:repeat>\n        </ul>\n        <!--Select/Deselect Buttons-->\n        <div class=\" first-on--small--only mar--md--txl\">\n            <button type=\"button\" class=\"button button--primary width--full--sm--only\" id=\"selectQuestion\">Select Question</button>\n            <button type=\"button\" class=\"button button--error button--ghost width--full--sm--only hide--i\" id=\"deselectQuestion\">Deselect Question</button>\n        </div>\n    </div>\n</div>\n<div class=\"snack-bar__container hide\">\n    <div class=\"snack-bar\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"snack-bar__container\"></button>\n        <div class=\"selectedQAlert hide--i\">\n            <button type=\"button\" href=\"#\" class=\"button--snack text-primary undo\">Undo</button>\n            <span>Question selected</span>\n        </div>\n        <div class=\"deselectedQAlert hide--i\">\n            <button type=\"button\" href=\"#\" class=\"button--snack text-error undo\">Undo</button>\n            <span>Question deselected</span>\n        </div>\n    </div>\n</div>");
  
});

Ember.TEMPLATES["questionSelector"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n            <ul class=\"list-group list-group--bordered\" id=\"selectedQs\">\n                <div class=\"list-heading\">\n                    <h4 class=\"list-heading__title has-radius-top\">\n                        Selected Questions\n                    </h4>\n                </div>\n                ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "question", "in", "selectedQuestions", {hash:{
    'itemController': ("question")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div class=\"list-heading\">\n                    <h4 class=\"list-heading__title\">\n                        Options\n                    </h4>\n                </div>\n                <label class=\"input-size pad--sm--ls pad--sm--rs float--right pad--sm--tm pad--sm--bm option-fix\">\n                    <input type=\"checkbox\" name=\"chosen\" value=\"chosen\" checked=\"\">\n                </label>\n                <div class=\"input-size pad--sm--m dots question-text\">\n                    Allow candidates to assert skills\n                </div>\n            </ul>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "question", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "hasQuestions", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n                <ul class=\"list-group list-group--bordered\">\n                    ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "position", "in", "positions", {hash:{
    'itemController': ("position")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul> \n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "position.questions", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                            <div class=\"list-heading\">\n                                <h4 class=\"list-heading__title\">\n                                    Questions for a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "position.Name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                </h4>\n                            </div>\n                            <div>\n                                ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "question", "in", "position.questions", {hash:{
    'itemController': ("question")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </div>\n                        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "question", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                ");
  return buffer;
  }

  data.buffer.push("<div class=\"scope-container\">\n    <div id=\"mobileCardView\" style=\"display:none;\">\n        <div class=\"table--fixed bg-1 relative has-radius related-item\">\n            <div class=\"part__left--fixed card__feature--left\">\n                <div class=\"avatar-container--md\">\n                    <img src=\"https://dl.dropboxusercontent.com/u/234333568/questionSelectorProto/form-element.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"part__body width--full pad--sm--rm pad--sm--tm\">\n                <div class=\"dots\" style=\"color: #3c3d3e;\">Job Specific</div>\n            </div>\n        </div>\n    </div>\n    <div id=\"mobileMainView\" class=\"content pad--md--tm pad--md--bl pad--sm--only--n\" style=\"display:none;\">\n        <nav id=\"pageNav\" class=\"nav-bar--sf1 mar--sm--bn\">\n            <button ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":float--right :button :button--primary :mar--sm--only--rs isLoading:load-this")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickSave", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n            <h1 class=\"nav-bar--sf1__title has-subtitle page__heading has-subheading\">Job Specific Questions</h1>\n            <h2 class=\"nav-bar--sf1__subtitle page__subheading\">Front End Developer</h2>\n        </nav>\n        <hr class=\"show-brkpoint--md\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "selectedQuestions", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "positions", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["questionSelector/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n    <ul class=\"list-group list-group--bordered\" id=\"selectedQs\">\n        <div class=\"list-heading\">\n            <h4 class=\"list-heading__title has-radius-top\">\n                Selected Questions\n            </h4>\n        </div>\n        ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "question", "in", "selectedQuestions", {hash:{
    'itemController': ("question")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "question", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "hasQuestions", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n        <ul class=\"list-group list-group--bordered\">\n            ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "position", "in", "positions", {hash:{
    'itemController': ("position")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul> \n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "position.questions", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n                    <div class=\"list-heading\">\n                        <h4 class=\"list-heading__title\">\n                            Questions for a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "position.Name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        </h4>\n                    </div>\n                    <div>\n                        ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, "question", "in", "position.questions", {hash:{
    'itemController': ("question")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "question", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        ");
  return buffer;
  }

  data.buffer.push("<nav id=\"jobOfferNav\" class=\"nav-bar--sf1 mar--sm--bn\">\n    <button ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":float--right :button :button--primary :mar--sm--only--rs isLoading:load-this")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickSave", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n    <h1 class=\"nav-bar--sf1__title has-subtitle page__heading has-subheading\">Job Specific Questions</h1>\n    <h2 class=\"nav-bar--sf1__subtitle page__subheading\">Front End Developer</h2>\n</nav>\n<hr class=\"show-brkpoint--md\">\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "selectedQuestions", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<ul class=\"list-group list-group--bordered\" id=\"selectedQs\">\n    <div class=\"list-heading\">\n        <h4 class=\"list-heading__title has-radius-top\">\n            Options\n        </h4>\n    </div>\n    <li id=\"ember329\" class=\"ember-view list-group__item has-icon--right block\">\n        <div class=\"input-size pad--sm--m dots\">\n            <input type=\"checkbox\"/><label> Allow candidates to assert skills</label>\n        </div>\n    </li>\n</ul>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "positions", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  return buffer;
  
});