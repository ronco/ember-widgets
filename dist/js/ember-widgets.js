/*!
* ember-widgets v0.1.0
* Copyright 2013-2014 Addepar Inc.
* See LICENSE.
*/
(function() {

var _ref;

Ember.Widgets = Ember.Namespace.create();

Ember.Widgets.VERSION = '0.1.0';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Widgets', Ember.Widgets.VERSION);
}


})();

(function() {

Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.ResizeHandlerMixin = Ember.Mixin.create({
  resizeEndDelay: 200,
  resizing: false,
  onResizeStart: Ember.K,
  onResizeEnd: Ember.K,
  onResize: Ember.K,
  endResize: Ember.computed(function() {
    return function(event) {
      if (this.isDestroyed) {
        return;
      }
      this.set('resizing', false);
      return typeof this.onResizeEnd === "function" ? this.onResizeEnd(event) : void 0;
    };
  }),
  handleWindowResize: function(event) {
    if (!this.get('resizing')) {
      this.set('resizing', true);
      if (typeof this.onResizeStart === "function") {
        this.onResizeStart(event);
      }
    }
    if (typeof this.onResize === "function") {
      this.onResize(event);
    }
    return Ember.run.debounce(this, this.get('endResize'), event, this.get('resizeEndDelay'));
  },
  didInsertElement: function() {
    this._super();
    return this._setupResizeDocumentHandlers();
  },
  willDestroyElement: function() {
    this._removeResizeDocumentHandlers();
    return this._super();
  },
  _setupResizeDocumentHandlers: function() {
    if (this._resizeHandler) {
      return;
    }
    this._resizeHandler = jQuery.proxy(this.get('handleWindowResize'), this);
    return jQuery(window).on("resize." + this.elementId, this._resizeHandler);
  },
  _removeResizeDocumentHandlers: function() {
    jQuery(window).off("resize." + this.elementId, this._resizeHandler);
    return this._resizeHandler = null;
  }
});


})();

(function() {

Ember.TEMPLATES["accordion_group_layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"panel-heading\">\n  <h4 class=\"panel-title\">\n    <a class=\"accordion-toggle collapsed\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "view.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </a>\n  </h4>\n</div>\n<div class=\"panel-collapse collapse\">\n  <div class=\"panel-body\">");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.CollectionView", {hash:{
    'tagName': ("ol"),
    'class': ("carousel-indicators"),
    'contentBinding': ("view.content"),
    'itemViewClass': ("Ember.Widgets.CarouselIndicator")
  },hashTypes:{'tagName': "STRING",'class': "STRING",'contentBinding': "STRING",'itemViewClass': "STRING"},hashContexts:{'tagName': depth0,'class': depth0,'contentBinding': depth0,'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n<div class=\"carousel-inner\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<a class=\"left carousel-control\"  href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "prev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">‹</a>\n<a class=\"right carousel-control\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">›</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["color_picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.ColorPickerCell", {hash:{
    'colorBinding': ("selectedColor"),
    'classNames': ("color-picker-cell-transparent")
  },hashTypes:{'colorBinding': "STRING",'classNames': "STRING"},hashContexts:{'colorBinding': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.ColorPickerCell", {hash:{
    'colorBinding': ("selectedColor")
  },hashTypes:{'colorBinding': "STRING"},hashContexts:{'colorBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <div class=\"color-row clearfix\">\n        ");
  stack1 = helpers.each.call(depth0, "color", "in", "row", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <hr>\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.ColorPickerCell", {hash:{
    'colorBinding': ("color")
  },hashTypes:{'colorBinding': "STRING"},hashContexts:{'colorBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"dropdown\">\n  <a class=\"clearfix color-picker-dropdown-button\" data-toggle=\"dropdown\" href=\"#\">\n    ");
  stack1 = helpers['if'].call(depth0, "isColorTransparent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <span class=\"pull-right fa fa-caret-down color-picker-dropdown-caret\"></span>\n  </a>\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":dropdown-menu :color-picker-dropdown dropdownClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    role=\"menu\" aria-labelledby=\"dLabel\">\n    ");
  stack1 = helpers.each.call(depth0, "row", "in", "colorRows", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <form ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":color-picker-custom-form isCustomColorValid:valid:invalid")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <div class=\"form-group form-group-sm\">\n        <div class=\"input-group\">\n          <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":input-group-addon\n            :color-picker-custom-preview isCustomColor:active"),
    'style': ("customColorCSS")
  },hashTypes:{'class': "STRING",'style': "STRING"},hashContexts:{'class': depth0,'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("customColor"),
    'class': ("form-control input-sm"),
    'type': ("text"),
    'placeholder': ("HEX code")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'type': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'type': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["color_picker_cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"no-color-indicator-holder\"></div>");
  
});

Ember.TEMPLATES["component_default_content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<p>");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["editable_label"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.innerTextField", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editLabel", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "view.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["font_chooser_item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("view.style")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendClose", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</button>\n      <h4 class=\"modal-title\">");
  stack1 = helpers._triageMustache.call(depth0, "headerText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    </div>\n    <div class=\"modal-body\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "_contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"modal-footer\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "_footerViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-primary :btn-confirm isValid::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendConfirm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "confirmText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <button type=\"button\" class=\"btn btn-default btn-cancel\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "cancelText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <button type=\"button\" class=\"btn btn-default btn-close\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendClose", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "closeText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "confirmText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "cancelText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "closeText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["multi-select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"ember-select-no-results\">No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-select-container ember-select-multi dropdown-toggle js-dropdown-toggle\">\n  <ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-control :ember-select-choices choicesFieldClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    \n    ");
  data.buffer.push(escapeExpression(helpers.each.call(depth0, "selections", {hash:{
    'itemViewClass': ("view.selectionItemView")
  },hashTypes:{'itemViewClass': "STRING"},hashContexts:{'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    <li class=\"ember-select-search-field\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </li>\n  </ul>\n</div>\n\n<div class=\"dropdown-menu js-dropdown-menu\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["multi_select_item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<a class=\"ember-select-search-choice-close\" href=\"#\"\n  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeSelectItem", "view.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">×\n</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["non_editable_text_pill_configuration"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'valueBinding': ("content.text"),
    'placeholder': ("Enter custom text"),
    'class': ("form-control")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <h4 class=\"popover-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"arrow\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("arrowStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"popover-content\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view._contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["popover_link_popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <h4 class=\"popover-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"arrow\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("view.arrowStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"popover-content\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view._contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["radio_button_layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.RadioButtonComponent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectedItemView", {hash:{
    'contentBinding': ("selection")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "prompt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"ember-select-search\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"ember-select-no-results\">No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</span>\n  ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-select-container dropdown-toggle js-dropdown-toggle\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDropdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-control :ember-select-choice buttonClass disabled:disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "selection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </a>\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":dropdown-menu :js-dropdown-menu dropdownMenuClass\n  isDropdownMenuPulledRight:pull-right")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  stack1 = helpers.unless.call(depth0, "isSelect", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "selectMenuView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["select_item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("view.label")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.titleOnOptions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["select_item_layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.content.isGroupOption", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["text_editor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<iframe class=\"text-editor-frame\" src=\"about:blank\">\n</iframe>\n");
  
});

Ember.TEMPLATES["text_editor_config"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['select-component'] || (depth0 && depth0['select-component']),options={hash:{
    'content': ("fontNames"),
    'placeholder': ("Select a Font"),
    'selection': ("textEditor.selectedFontName"),
    'class': ("ember-text-editor-font-family-select js-ember-text-editor-font-family-select"),
    'isSelect': ("true"),
    'buttonClass': ("btn btn-default btn-sm btn-form text-left"),
    'itemViewClass': ("fontChooserItemViewClass"),
    'userSelected': ("applyFontName")
  },hashTypes:{'content': "ID",'placeholder': "STRING",'selection': "ID",'class': "STRING",'isSelect': "STRING",'buttonClass': "STRING",'itemViewClass': "ID",'userSelected': "STRING"},hashContexts:{'content': depth0,'placeholder': depth0,'selection': depth0,'class': depth0,'isSelect': depth0,'buttonClass': depth0,'itemViewClass': depth0,'userSelected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "select-component", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers['select-component'] || (depth0 && depth0['select-component']),options={hash:{
    'content': ("fontSizes"),
    'placeholder': ("Select Font Size"),
    'optionLabelPath': ("name"),
    'optionValuePath': ("size"),
    'value': ("textEditor.selectedFontSize"),
    'sortLabels': (false),
    'class': ("ember-text-editor-font-size-select"),
    'isSelect': ("true"),
    'buttonClass': ("btn btn-default btn-sm"),
    'userSelected': ("applyFontSize")
  },hashTypes:{'content': "ID",'placeholder': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'value': "ID",'sortLabels': "BOOLEAN",'class': "STRING",'isSelect': "STRING",'buttonClass': "STRING",'userSelected': "STRING"},hashContexts:{'content': depth0,'placeholder': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'value': depth0,'sortLabels': depth0,'class': depth0,'isSelect': depth0,'buttonClass': depth0,'userSelected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "select-component", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.ColorPicker", {hash:{
    'selectedColor': ("textEditor.selectedForeColor"),
    'class': ("btn btn-default btn-sm"),
    'userSelected': ("applyForeColor")
  },hashTypes:{'selectedColor': "ID",'class': "STRING",'userSelected': "STRING"},hashContexts:{'selectedColor': depth0,'class': depth0,'userSelected': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div class=\"btn-group\">\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isBold:active :js-btn-bold")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-bold\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isItalic:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleItalic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-italic\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isUnderline:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleUnderline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-underline\"></i>\n  </button>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isJustifyLeft:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "justifyLeft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-align-left\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isJustifyCenter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "justifyCenter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-align-center\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isJustifyRight:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "justifyRight", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-align-right\"></i>\n  </button>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-list-ol\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-list-ul\"></i>\n  </button>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "outdent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-outdent\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "indent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-indent\"></i>\n  </button>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["text_editor_pill_menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"ember-select-container dropdown-toggle\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDropdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  <a ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":ember-select-choice buttonClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "selection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </a>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectedItemView", {hash:{
    'contentBinding': ("selection")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      <i ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "prompt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      <i ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"ember-select-search\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"ember-select-no-results\">No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</span>\n  ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "showButton", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":dropdown-menu dropdownMenuClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  stack1 = helpers.unless.call(depth0, "isSelect", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "selectMenuView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["text_editor_with_non_editable"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<iframe class=\"text-editor-frame\" src=\"about:blank\">\n</iframe>\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.PillSelect", {hash:{
    'class': ("insert-non-editable-btn"),
    'isSelect': ("pillHideSearchBox"),
    'query': ("query"),
    'showDropdown': ("showConfigPopover"),
    'content': ("_pillOptions"),
    'optionLabelPath': ("label"),
    'optionValuePath': ("value"),
    'prompt': ("Insert Non-Editable"),
    'selection': ("selectedPillOption"),
    'buttonClass': ("btn btn-default btn-sm"),
    'viewName': ("pillChooserInLine"),
    'userSelected': ("insertPill"),
    'showButton': (false)
  },hashTypes:{'class': "STRING",'isSelect': "ID",'query': "ID",'showDropdown': "ID",'content': "ID",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING",'selection': "ID",'buttonClass': "STRING",'viewName': "STRING",'userSelected': "STRING",'showButton': "BOOLEAN"},hashContexts:{'class': depth0,'isSelect': depth0,'query': depth0,'showDropdown': depth0,'content': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0,'selection': depth0,'buttonClass': depth0,'viewName': depth0,'userSelected': depth0,'showButton': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["text_editor_with_non_editable_config"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['select-component'] || (depth0 && depth0['select-component']),options={hash:{
    'content': ("fontNames"),
    'placeholder': ("Select a Font"),
    'selection': ("textEditor.selectedFontName"),
    'class': ("ember-text-editor-font-family-select js-ember-text-editor-font-family-select"),
    'isSelect': ("true"),
    'buttonClass': ("btn btn-default btn-sm btn-form text-left"),
    'itemViewClass': ("fontChooserItemViewClass"),
    'userSelected': ("applyFontName")
  },hashTypes:{'content': "ID",'placeholder': "STRING",'selection': "ID",'class': "STRING",'isSelect': "STRING",'buttonClass': "STRING",'itemViewClass': "ID",'userSelected': "STRING"},hashContexts:{'content': depth0,'placeholder': depth0,'selection': depth0,'class': depth0,'isSelect': depth0,'buttonClass': depth0,'itemViewClass': depth0,'userSelected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "select-component", options))));
  data.buffer.push("\n\n\n\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers['select-component'] || (depth0 && depth0['select-component']),options={hash:{
    'content': ("fontSizes"),
    'placeholder': ("Select Font Size"),
    'optionLabelPath': ("name"),
    'optionValuePath': ("size"),
    'value': ("textEditor.selectedFontSize"),
    'sortLabels': (false),
    'class': ("ember-text-editor-font-size-select"),
    'isSelect': ("true"),
    'buttonClass': ("btn btn-default btn-sm"),
    'userSelected': ("applyFontSize")
  },hashTypes:{'content': "ID",'placeholder': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'value': "ID",'sortLabels': "BOOLEAN",'class': "STRING",'isSelect': "STRING",'buttonClass': "STRING",'userSelected': "STRING"},hashContexts:{'content': depth0,'placeholder': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'value': depth0,'sortLabels': depth0,'class': depth0,'isSelect': depth0,'buttonClass': depth0,'userSelected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "select-component", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.ColorPicker", {hash:{
    'selectedColor': ("textEditor.selectedForeColor"),
    'class': ("btn btn-default btn-sm"),
    'userSelected': ("applyForeColor")
  },hashTypes:{'selectedColor': "ID",'class': "STRING",'userSelected': "STRING"},hashContexts:{'selectedColor': depth0,'class': depth0,'userSelected': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div class=\"btn-group\">\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isBold:active :js-btn-bold")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-bold\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isItalic:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleItalic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-italic\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isUnderline:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleUnderline", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-underline\"></i>\n  </button>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isJustifyLeft:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "justifyLeft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-align-left\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isJustifyCenter:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "justifyCenter", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-align-center\"></i>\n  </button>\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': (":btn :btn-default :btn-sm textEditor.isJustifyRight:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "justifyRight", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-align-right\"></i>\n  </button>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-list-ol\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-list-ul\"></i>\n  </button>\n</div>\n\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "outdent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-outdent\"></i>\n  </button>\n  <button type=\"button\" class=\"btn btn-default btn-sm\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "indent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <i class=\"fa fa-indent\"></i>\n  </button>\n</div>\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.PillSelect", {hash:{
    'class': ("insert-non-editable-btn"),
    'isSelect': ("pillHideSearchBox"),
    'query': ("query"),
    'showDropdown': ("showConfigPopover"),
    'content': ("_pillOptions"),
    'optionLabelPath': ("label"),
    'optionValuePath': ("value"),
    'prompt': ("Insert Non-Editable"),
    'selection': ("selectedPillOption"),
    'buttonClass': ("btn btn-default btn-sm"),
    'viewName': ("pillChooser"),
    'userSelected': ("insertPill")
  },hashTypes:{'class': "STRING",'isSelect': "ID",'query': "ID",'showDropdown': "ID",'content': "ID",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING",'selection': "ID",'buttonClass': "STRING",'viewName': "STRING",'userSelected': "STRING"},hashContexts:{'class': depth0,'isSelect': depth0,'query': depth0,'showDropdown': depth0,'content': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0,'selection': depth0,'buttonClass': depth0,'viewName': depth0,'userSelected': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["typeahead"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"dropdown-menu\">\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-typeahead-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  data.buffer.push("<div>\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{
    'classBinding': ("searchFieldClass")
  },hashTypes:{'classBinding': "STRING"},hashContexts:{'classBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  stack1 = helpers.unless.call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["view_parent_view_content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "view.parentView.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {

Ember.Widgets.StyleBindingsMixin = Ember.Mixin.create({
  concatenatedProperties: ['styleBindings'],
  attributeBindings: ['style'],
  unitType: 'px',
  createStyleString: function(styleName, property) {
    var value;
    value = this.get(property);
    if (value === void 0) {
      return;
    }
    if (Ember.typeOf(value) === 'number') {
      value = value + this.get('unitType');
    }
    return "" + styleName + ":" + value + ";";
  },
  applyStyleBindings: function() {
    var lookup, properties, styleBindings, styleComputed, styles;
    styleBindings = this.styleBindings;
    if (!styleBindings) {
      return;
    }
    lookup = {};
    styleBindings.forEach(function(binding) {
      var property, style, _ref;
      _ref = binding.split(':'), property = _ref[0], style = _ref[1];
      return lookup[style || property] = property;
    });
    styles = _.keys(lookup);
    properties = _.values(lookup);
    styleComputed = Ember.computed((function(_this) {
      return function() {
        var styleString, styleTokens;
        styleTokens = styles.map(function(style) {
          return _this.createStyleString(style, lookup[style]);
        });
        styleString = styleTokens.join('');
        if (styleString.length !== 0) {
          return styleString;
        }
      };
    })(this));
    styleComputed.property.apply(styleComputed, properties);
    return Ember.defineProperty(this, 'style', styleComputed);
  },
  init: function() {
    this.applyStyleBindings();
    return this._super();
  }
});

Ember.Widgets.BodyEventListener = Ember.Mixin.create({
  bodyElementSelector: 'html',
  bodyClick: Ember.K,
  didInsertElement: function() {
    this._super();
    return Ember.run.next(this, this._setupDocumentHandlers);
  },
  willDestroyElement: function() {
    this._super();
    return this._removeDocumentHandlers();
  },
  _setupDocumentHandlers: function() {
    if (this._clickHandler) {
      return;
    }
    this._clickHandler = (function(_this) {
      return function(event) {
        if (_this.get('_state') || _this.get('state') === 'inDOM' && Ember.isEmpty(_this.$().has($(event.target)))) {
          return _this.bodyClick();
        }
      };
    })(this);
    return $(this.get('bodyElementSelector')).on("click", this._clickHandler);
  },
  _removeDocumentHandlers: function() {
    $(this.get('bodyElementSelector')).off("click", this._clickHandler);
    return this._clickHandler = null;
  }
});


})();

(function() {

Ember.Widgets.AccordionComponent = Ember.Component.extend({
  classNames: 'panel-group',
  activeIndex: 0
});

Ember.Widgets.AccordionItem = Ember.View.extend({
  defaultTemplate: Ember.Handlebars.compile('{{view.content}}'),
  layoutName: 'accordion_group_layout',
  classNames: 'panel panel-default',
  title: 'Untitled Accordion Group',
  index: 0,
  isActive: false,
  content: Ember.computed.alias('parentView.content'),
  isActiveDidChange: Ember.observer(function() {
    this.set('isActive', this.get('parentView.activeIndex') === this.get('index'));
    if (this.get('isActive')) {
      return this.show();
    } else {
      return this.hide();
    }
  }, 'parentView.activeIndex'),
  didInsertElement: function() {
    var index;
    index = this.get('parentView').$('.panel').index(this.$());
    this.set('index', index);
    return this.isActiveDidChange();
  },
  click: function(event) {
    if (!(this.$(event.target).closest('.panel-heading').length > 0)) {
      return;
    }
    if (this.get('isActive')) {
      return this.set('parentView.activeIndex', null);
    } else {
      return this.set('parentView.activeIndex', this.get('index'));
    }
  },
  hide: function() {
    var $accordionBody;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.height($accordionBody.height())[0].offsetHeight;
    $accordionBody.removeClass('collapse').removeClass('in').addClass('collapsing');
    return $accordionBody.height(0).one($.support.transition.end, (function(_this) {
      return function() {
        return $accordionBody.removeClass('collapsing').addClass('collapse');
      };
    })(this));
  },
  show: function() {
    var $accordionBody;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.removeClass('collapse').addClass('collapsing').height(0);
    $accordionBody.height($accordionBody[0]['scrollHeight']);
    return this.$().one($.support.transition.end, (function(_this) {
      return function() {
        return $accordionBody.removeClass('collapsing').addClass('in').height('auto');
      };
    })(this));
  }
});

Ember.Handlebars.helper('accordion-component', Ember.Widgets.AccordionComponent);

Ember.Handlebars.helper('accordion-item', Ember.Widgets.AccordionItem);


})();

(function() {

Ember.Widgets.CarouselComponent = Ember.Component.extend({
  layoutName: 'carousel',
  classNames: ['carousel', 'slide'],
  classNameBindings: Ember.A(['sliding']),
  activeIndex: 0,
  didInsertElement: function() {
    if (!this.get('content')) {
      return this.set('content', Ember.A(new Array(this.$('.item').length)));
    }
  },
  actions: {
    prev: function() {
      var activeIndex, contentLength, nextIndex;
      if (this.get('sliding')) {
        return;
      }
      activeIndex = this.get('activeIndex');
      contentLength = this.get('content.length');
      nextIndex = activeIndex - 1;
      nextIndex = nextIndex < 0 ? contentLength - 1 : nextIndex;
      return this.slide('prev', nextIndex);
    },
    next: function() {
      var activeIndex, contentLength, nextIndex;
      if (this.get('sliding')) {
        return;
      }
      activeIndex = this.get('activeIndex');
      contentLength = this.get('content.length');
      nextIndex = activeIndex + 1;
      nextIndex = nextIndex >= contentLength ? 0 : nextIndex;
      return this.slide('next', nextIndex);
    }
  },
  to: function(pos) {
    var direction;
    if (this.get('sliding')) {
      return;
    }
    if (!((0 <= pos && pos < this.get('content.length')))) {
      return;
    }
    direction = pos > this.get('activeIndex') ? 'next' : 'prev';
    return this.slide(direction, pos);
  },
  slide: function(type, nextIndex) {
    var $active, $next, direction;
    if (this.get('activeIndex') === nextIndex) {
      return;
    }
    direction = type === 'next' ? 'left' : 'right';
    $active = $(this.$('.item').get(this.get('activeIndex')));
    $next = $(this.$('.item').get(nextIndex));
    this.set('sliding', true);
    $next.addClass(type);
    $next[0].offsetWidth;
    $active.addClass(direction);
    $next.addClass(direction);
    return $next.one($.support.transition.end, (function(_this) {
      return function() {
        return Ember.run(_this, function() {
          this.set('activeIndex', nextIndex);
          $next.removeClass([type, direction].join(' ')).addClass('active');
          $active.removeClass(['active', direction].join(' '));
          return this.set('sliding', false);
        });
      };
    })(this));
  }
});

Ember.Widgets.CarouselIndicator = Ember.View.extend({
  classNameBindings: 'isActive:active',
  isActive: Ember.computed(function() {
    return this.get('contentIndex') === this.get('controller.activeIndex');
  }).property('contentIndex', 'controller.activeIndex'),
  click: function() {
    return this.get('controller').to(this.get('contentIndex'));
  }
});

Ember.Widgets.CarouselItem = Ember.View.extend({
  classNames: 'item'
});

Ember.Handlebars.helper('carousel-component', Ember.Widgets.CarouselComponent);

Ember.Handlebars.helper('carousel-item', Ember.Widgets.CarouselItem);


})();

(function() {

Ember.Widgets.EditableLabel = Ember.View.extend({
  templateName: 'editable_label',
  classNames: ['editable-label'],
  placeholder: '',
  isEditing: false,
  value: null,
  displayName: Ember.computed(function() {
    if (Ember.isNone(this.get('value')) || this.get('value') === '') {
      return this.get('placeholder');
    } else {
      return this.get('value');
    }
  }).property('value', 'placeholder'),
  innerTextField: Ember.TextField.extend({
    valueBinding: Ember.Binding.oneWay('parentView.value'),
    didInsertElement: function() {
      return this.$().focus();
    },
    blur: function() {
      this.set('parentView.isEditing', false);
      return this.set('parentView.value', this.get('value'));
    }
  }),
  editLabel: function() {
    return this.set('isEditing', true);
  }
});

Ember.Handlebars.helper('editable-label-component', Ember.Widgets.EditableLabel);


})();

(function() {

Ember.Widgets.ModalComponent = Ember.Component.extend(Ember.Widgets.StyleBindingsMixin, {
  layoutName: 'modal',
  classNames: ['modal'],
  classNameBindings: ['isShowing:in', 'hasCloseButton::has-no-close-button', 'fade'],
  modalPaneBackdrop: '<div class="modal-backdrop"></div>',
  bodyElementSelector: '.modal-backdrop',
  enforceModality: false,
  escToCancel: true,
  backdrop: true,
  isShowing: false,
  hasCloseButton: true,
  fade: true,
  headerText: "Modal Header",
  confirmText: "Confirm",
  cancelText: "Cancel",
  closeText: null,
  content: "",
  isValid: true,
  confirm: Ember.K,
  cancel: Ember.K,
  close: Ember.K,
  contentViewClass: Ember.View.extend({
    template: Ember.Handlebars.compile("<p>{{content}}</p>")
  }),
  footerViewClass: Ember.View.extend({
    templateName: 'modal_footer'
  }),
  _contentViewClass: Ember.computed(function() {
    var contentViewClass;
    contentViewClass = this.get('contentViewClass');
    if (typeof contentViewClass === 'string') {
      return Ember.get(contentViewClass);
    } else {
      return contentViewClass;
    }
  }).property('contentViewClass'),
  _footerViewClass: Ember.computed(function() {
    var footerViewClass;
    footerViewClass = this.get('footerViewClass');
    if (typeof footerViewClass === 'string') {
      return Ember.get(footerViewClass);
    } else {
      return footerViewClass;
    }
  }).property('footerViewClass'),
  actions: {
    sendCancel: function() {
      var cancel;
      if (!this.get('isShowing')) {
        return;
      }
      cancel = this.get('cancel');
      if (typeof cancel === 'function') {
        this.cancel(this);
      } else {
        this.sendAction('cancel');
      }
      return this.hide();
    },
    sendConfirm: function() {
      var confirm;
      if (!this.get('isShowing')) {
        return;
      }
      confirm = this.get('confirm');
      if (typeof confirm === 'function') {
        this.confirm(this);
      } else {
        this.sendAction('confirm');
      }
      return this.hide();
    },
    sendClose: function() {
      var close;
      if (!this.get('isShowing')) {
        return;
      }
      close = this.get('close');
      if (typeof close === 'function') {
        this.close(this);
      } else {
        this.sendAction('close');
      }
      return this.hide();
    }
  },
  didInsertElement: function() {
    this._super();
    if (this.get('fade')) {
      this.$()[0].offsetWidth;
    }
    if (this.get('backdrop')) {
      this._appendBackdrop();
    }
    Ember.run.next(this, function() {
      return this.set('isShowing', true);
    });
    $(document.body).addClass('modal-open');
    return this._setupDocumentHandlers();
  },
  willDestroyElement: function() {
    this._super();
    this._removeDocumentHandlers();
    if (this._backdrop) {
      return this._backdrop.remove();
    }
  },
  keyHandler: Ember.computed(function() {
    var fn;
    fn = function(event) {
      if (event.which === 27 && this.get('escToCancel')) {
        return $(document).trigger('modal:hide');
      }
    };
    return _.bind(fn, this);
  }),
  click: function(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (!this.get('enforceModality')) {
      return this.hide();
    }
  },
  hide: function() {
    this.set('isShowing', false);
    $(document.body).removeClass('modal-open');
    if (this._backdrop) {
      this._backdrop.removeClass('in');
    }
    return this.$().one($.support.transition.end, (function(_this) {
      return function() {
        return Ember.run(_this, _this.destroy);
      };
    })(this));
  },
  _appendBackdrop: function() {
    var modalPaneBackdrop, parentLayer;
    parentLayer = this.$().parent();
    modalPaneBackdrop = this.get('modalPaneBackdrop');
    if (this.get('fade')) {
      this._backdrop = jQuery(modalPaneBackdrop).addClass('fade');
    }
    this._backdrop.appendTo(parentLayer);
    return Ember.run.next(this, function() {
      return this._backdrop.addClass('in');
    });
  },
  _setupDocumentHandlers: function() {
    this._super();
    if (!this._hideHandler) {
      this._hideHandler = (function(_this) {
        return function() {
          return _this.hide();
        };
      })(this);
      $(document).on('modal:hide', this._hideHandler);
    }
    return $(document).on('keyup', this.get('keyHandler'));
  },
  _removeDocumentHandlers: function() {
    this._super();
    $(document).off('modal:hide', this._hideHandler);
    this._hideHandler = null;
    return $(document).off('keyup', this.get('keyHandler'));
  }
});

Ember.Widgets.ModalComponent.reopenClass({
  rootElement: '.ember-application',
  poppedModal: null,
  hideAll: function() {
    return $(document).trigger('modal:hide');
  },
  popup: function(options) {
    var modal, rootElement;
    if (options == null) {
      options = {};
    }
    this.hideAll();
    rootElement = options.rootElement || this.rootElement;
    modal = this.create(options);
    modal.set('container', modal.get('targetObject.container'));
    modal.appendTo(rootElement);
    return modal;
  }
});

Ember.Handlebars.helper('modal-component', Ember.Widgets.ModalComponent);


})();

(function() {

Ember.Widgets.PopoverMixin = Ember.Mixin.create(Ember.Widgets.StyleBindingsMixin, Ember.Widgets.BodyEventListener, {
  layoutName: 'popover',
  classNames: ['popover'],
  classNameBindings: ['isShowing:in', 'fade', 'placement'],
  styleBindings: ['left', 'top', 'display', 'visibility'],
  targetElement: null,
  contentViewClass: null,
  fade: true,
  placement: 'top',
  display: 'block',
  visibility: 'hidden',
  debounceTime: 100,
  left: 0,
  top: 0,
  marginTop: 23,
  marginLeft: 10,
  isShowing: false,
  inserted: false,
  title: '',
  content: '',
  _resizeHandler: null,
  _scrollHandler: null,
  _contentViewClass: Ember.computed(function() {
    if (this.get('contentViewClass')) {
      return this.get('contentViewClass');
    }
    return Ember.View.extend({
      content: Ember.computed.alias('parentView.content'),
      templateName: 'view_parent_view_content'
    });
  }).property('contentViewClass'),
  didInsertElement: function() {
    this._super();
    return Ember.run.next(this, function() {
      this.snapToPosition();
      this.set('visibility', 'visible');
      return this.set('isShowing', true);
    });
  },
  bodyClick: function() {
    return this.hide();
  },
  hide: function() {
    if (this.get('isDestroyed')) {
      return;
    }
    this.set('isShowing', false);
    return this.$().one($.support.transition.end, (function(_this) {
      return function() {
        return Ember.run(_this, _this.destroy);
      };
    })(this));
  },

  /*
  Calculate the offset of the given iframe relative to the top window.
  - Walks up the iframe chain, checking the offset of each one till it reaches top
  - Only works with friendly iframes.
  - Takes into account scrolling, but comes up with a result relative to
  top iframe, regardless of being visibile withing intervening frames.
  
  @param window win    the iframe we're interested in (e.g. window)
  @param object pos   an object containing the offset so far:
  { left: [x], top: [y] }
  (optional - initializes with 0,0 if undefined)
  @return pos object above
  
  via http://stackoverflow.com/a/9676655
   */
  computeFrameOffset: function(win, pos) {
    var found, frame, frames, rect, _i, _len;
    if (pos == null) {
      pos = {
        top: 0,
        left: 0
      };
    }
    frames = win.parent.document.getElementsByTagName("iframe");
    found = false;
    for (_i = 0, _len = frames.length; _i < _len; _i++) {
      frame = frames[_i];
      if (frame.contentWindow === win) {
        found = true;
        break;
      }
    }
    if (found) {
      rect = frame.getBoundingClientRect();
      pos.left += rect.left;
      pos.top += rect.top;
      if (win !== top) {
        this.computeFrameOffset(win.parent, pos);
      }
    }
    return pos;
  },
  getOffset: function($target) {
    var doc, pos, win;
    pos = $target.offset();
    doc = $target[0].ownerDocument;
    win = doc.defaultView;
    return this.computeFrameOffset(win, pos);
  },
  snapToPosition: function() {
    var $target, actualHeight, actualWidth, pos;
    $target = $(this.get('targetElement'));
    if (this.get('_state') || this.get('state') !== 'inDOM' || Ember.isEmpty($target)) {
      return;
    }
    actualWidth = this.$()[0].offsetWidth;
    actualHeight = this.$()[0].offsetHeight;
    pos = this.getOffset($target);
    pos.width = $target[0].offsetWidth;
    pos.height = $target[0].offsetHeight;
    switch (this.get('placement')) {
      case 'bottom':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left + pos.width / 2 - actualWidth / 2);
        break;
      case 'top':
        this.set('top', pos.top - actualHeight);
        this.set('left', pos.left + pos.width / 2 - actualWidth / 2);
        break;
      case 'top-right':
        this.set('top', pos.top);
        this.set('left', pos.left + pos.width);
        break;
      case 'top-left':
        this.set('top', pos.top);
        this.set('left', pos.left - actualWidth);
        break;
      case 'bottom-right':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left + pos.width - actualWidth);
        break;
      case 'bottom-left':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left);
        break;
      case 'left':
        this.set('top', pos.top - this.get('marginTop'));
        this.set('left', pos.left - actualWidth);
        break;
      case 'right':
        this.set('top', pos.top - this.get('marginTop'));
        this.set('left', pos.left + pos.width);
        break;
    }
    this.correctIfOffscreen();
    return this.positionArrow();
  },
  positionArrow: function() {
    var $target, arrowSize, left, pos, top;
    $target = $(this.get('targetElement'));
    pos = this.getOffset($target);
    pos.width = $target[0].offsetWidth;
    pos.height = $target[0].offsetHeight;
    arrowSize = 22;
    switch (this.get('placement')) {
      case 'left':
      case 'right':
        top = pos.top + pos.height / 2 - this.get('top') - arrowSize / 2;
        return this.set('arrowStyle', "margin-top:" + top + "px;");
      case 'top':
      case 'bottom':
        left = pos.left + pos.width / 2 - this.get('left') - arrowSize / 2;
        return this.set('arrowStyle', "margin-left:" + left + "px;");
    }
  },
  correctIfOffscreen: function() {
    var actualHeight, actualWidth, bodyHeight, bodyWidth;
    bodyWidth = $('body').width();
    bodyHeight = $('body').height();
    actualWidth = this.$()[0].offsetWidth;
    actualHeight = this.$()[0].offsetHeight;
    if (this.get('left') + actualWidth > bodyWidth) {
      this.set('left', bodyWidth - actualWidth - this.get('marginLeft'));
    }
    if (this.get('left') < 0) {
      this.set('left', this.get('marginLeft'));
    }
    if (this.get('top') + actualHeight > bodyHeight) {
      this.set('top', bodyHeight - actualHeight - this.get('marginTop'));
    }
    if (this.get('top') < 0) {
      return this.set('top', this.get('marginTop'));
    }
  },
  debounceSnapToPosition: Ember.computed(function() {
    return (function(_this) {
      return function() {
        return Ember.run.debounce(_this, _this.snapToPosition, _this.get('debounceTime'));
      };
    })(this);
  }),
  _setupDocumentHandlers: function() {
    this._super();
    if (!this._hideHandler) {
      this._hideHandler = (function(_this) {
        return function() {
          return _this.hide();
        };
      })(this);
      $(document).on('popover:hide', this._hideHandler);
    }
    if (!this._resizeHandler) {
      this._resizeHandler = this.get('debounceSnapToPosition');
      $(document).on('resize', this._resizeHandler);
    }
    if (!this._scrollHandler) {
      this._scrollHandler = this.get('debounceSnapToPosition');
      return $(document).on('scroll', this._scrollHandler);
    }
  },
  _removeDocumentHandlers: function() {
    this._super();
    $(document).off('popover:hide', this._hideHandler);
    this._hideHandler = null;
    $(document).off('resize', this._resizeHandler);
    this._resizeHandler = null;
    $(document).off('scroll', this._scrollHandler);
    return this._scrollHandler = null;
  }
});

Ember.Widgets.PopoverComponent = Ember.Component.extend(Ember.Widgets.PopoverMixin);

Ember.Widgets.PopoverComponent.reopenClass({
  rootElement: '.ember-application',
  hideAll: function() {
    return $(document).trigger('popover:hide');
  },
  popup: function(options) {
    var popover, rootElement;
    this.hideAll();
    rootElement = options.rootElement || this.rootElement;
    popover = this.create(options);
    popover.set('container', popover.get('targetObject.container'));
    popover.appendTo(rootElement);
    return popover;
  }
});

Ember.Handlebars.helper('popover-component', Ember.Widgets.PopoverComponent);


})();

(function() {

Ember.Widgets.PopoverLinkComponent = Ember.Component.extend({
  classNames: ['popover-link'],
  classNameBindings: ['disabled'],
  placement: 'top',
  content: null,
  title: null,
  contentViewClass: null,
  disabled: false,
  popoverClassNames: [],
  rootElement: '.ember-application',
  _contentViewClass: Ember.computed(function() {
    var contentViewClass;
    contentViewClass = this.get('contentViewClass');
    if (typeof contentViewClass === 'string') {
      return Ember.get(contentViewClass);
    }
    return contentViewClass;
  }).property('contentViewClass'),
  click: function(event) {
    var popover, popoverView;
    if (this.get('disabled')) {
      return;
    }
    popoverView = Ember.View.extend(Ember.Widgets.PopoverMixin, {
      layoutName: 'popover_link_popover',
      classNames: this.get('popoverClassNames'),
      controller: this,
      targetElement: this.get('element'),
      container: this.get('container'),
      placement: Ember.computed.alias('controller.placement'),
      title: Ember.computed.alias('controller.title'),
      contentViewClass: this.get('_contentViewClass')
    });
    popover = popoverView.create();
    return popover.appendTo(this.get('rootElement'));
  }
});

Ember.Handlebars.helper('popover-link-component', Ember.Widgets.PopoverLinkComponent);


})();

(function() {

var get, set;

get = function(object, key) {
  if (!object) {
    return void 0;
  }
  if (!key) {
    return object;
  }
  return (typeof object.get === "function" ? object.get(key) : void 0) || object[key];
};

set = function(object, key, value) {
  if (!(object && key)) {
    return;
  }
  return (typeof object.set === "function" ? object.set(key, value) : void 0) || (object[key] = value);
};

Ember.Widgets.SelectOptionView = Ember.ListItemView.extend({
  tagName: 'li',
  templateName: 'select_item',
  layoutName: 'select_item_layout',
  classNames: 'ember-select-result-item',
  classNameBindings: Ember.A(['content.isGroupOption:ember-select-group', 'isHighlighted:highlighted']),
  labelPath: Ember.computed.alias('controller.optionLabelPath'),
  isHighlighted: Ember.computed(function() {
    return this.get('controller.highlighted') === this.get('content');
  }).property('controller.highlighted', 'content'),
  labelPathDidChange: Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('labelPath');
    path = labelPath ? "content." + labelPath : 'content';
    Ember.defineProperty(this, 'label', Ember.computed.alias(path));
    return this.notifyPropertyChange('label');
  }, 'content', 'labelPath'),
  didInsertElement: function() {
    this._super();
    return this.labelPathDidChange();
  },
  updateContext: function(context) {
    this._super(context);
    return this.set('content', context);
  },
  click: function() {
    if (this.get('content.isGroupOption')) {
      return;
    }
    this.set('controller.selection', this.get('content'));
    this.get('controller').userDidSelect(this.get('content'));
    if (this.get('controller.showDropdown')) {
      this.get('controller').send('hideDropdown');
      return false;
    }
  },
  mouseEnter: function() {
    if (this.get('content.isGroupOption')) {
      return;
    }
    return this.set('controller.highlighted', this.get('content'));
  }
});

Ember.Widgets.SelectComponent = Ember.Component.extend(Ember.Widgets.BodyEventListener, Ember.AddeparMixins.ResizeHandlerMixin, {
  layoutName: 'select',
  classNames: 'ember-select',
  attributeBindings: Ember.A(['tabindex']),
  classNameBindings: Ember.A(['showDropdown:open', 'isDropup:dropup']),
  itemViewClass: 'Ember.Widgets.SelectOptionView',
  prompt: 'Select a Value',
  disabled: false,
  highlightedIndex: -1,
  tabindex: -1,
  showDropdown: false,
  dropdownHeight: 300,
  rowHeight: 26,
  sortLabels: true,
  titleOnOptions: false,
  isSelect: false,
  isDropup: false,
  isDropdownMenuPulledRight: false,
  dropdownToggleIcon: 'fa fa-caret-down',
  buttonClass: 'btn btn-default',
  dropdownMenuClass: '',
  content: Ember.A([]),
  selection: null,
  query: '',
  optionLabelPath: '',
  optionValuePath: '',
  optionGroupPath: '',
  optionDefaultPath: '',
  selectMenuView: null,
  updateDropdownLayout: Ember.observer(function() {
    if (this.get('_state') || this.get('state') !== 'inDOM' || this.get('showDropdown') === false) {
      return;
    }
    this.$('.js-dropdown-menu').css('visibility', 'hidden');
    return Ember.run.next(this, function() {
      var dropdownButton, dropdownButtonHeight, dropdownButtonOffset, dropdownMargin, dropdownMenu, dropdownMenuBottom, dropdownMenuHeight, dropdownMenuOffset, dropdownMenuWidth, dropupMenuTop;
      dropdownButton = this.$('.js-dropdown-toggle')[0];
      dropdownButtonHeight = this.$(dropdownButton).outerHeight();
      dropdownButtonOffset = this.$(dropdownButton).offset();
      dropdownMenu = this.$('.js-dropdown-menu')[0];
      dropdownMenuHeight = this.$(dropdownMenu).outerHeight();
      dropdownMenuWidth = this.$(dropdownMenu).outerWidth();
      dropdownMenuOffset = this.$(dropdownMenu).offset();
      dropdownMargin = 15;
      if (this.get('isDropup')) {
        dropdownMenuBottom = dropdownButtonOffset.top + dropdownButtonHeight + dropdownMenuHeight + dropdownMargin;
      } else {
        dropdownMenuBottom = dropdownMenuOffset.top + dropdownMenuHeight;
      }
      dropupMenuTop = dropdownButtonOffset.top - dropdownMenuHeight - dropdownMargin;
      this.set('isDropup', dropupMenuTop > window.scrollY && dropdownMenuBottom > window.innerHeight);
      this.set('isDropdownMenuPulledRight', dropdownButtonOffset.left + dropdownMenuWidth + dropdownMargin > window.innerWidth);
      this.$('.js-dropdown-menu').css('visibility', 'visible');
    });
  }, 'showDropdown'),
  onResizeEnd: function() {
    return Ember.run(this, this.updateDropdownLayout);
  },
  itemView: Ember.computed(function() {
    var itemViewClass;
    itemViewClass = this.get('itemViewClass');
    if (typeof itemViewClass === 'string') {
      return Ember.get(itemViewClass);
    }
    return itemViewClass;
  }).property('itemViewClass'),
  selectedItemView: Ember.computed(function() {
    return this.get('itemView').extend({
      tagName: 'span',
      labelPath: Ember.computed.alias('controller.optionLabelPath'),
      context: Ember.computed.alias('controller.selection')
    });
  }).property('itemView'),
  selectedLabel: Ember.computed(function() {
    return get(this.get('selection'), this.get('optionLabelPath'));
  }).property('selection', 'optionLabelPath'),
  searchView: Ember.TextField.extend({
    placeholder: 'Search',
    valueBinding: 'parentView.query',
    showDropdownDidChange: Ember.observer(function() {
      return Ember.run.next(this, function() {
        if (this.get('_state') || this.get('state') === 'inDOM') {
          return this.$().focus();
        }
      });
    }, 'parentView.showDropdown')
  }),
  listView: Ember.ListView.extend({
    style: Ember.computed(function() {
      var height;
      height = Math.min(this.get('height'), this.get('totalHeight'));
      return "height: " + height + "px";
    })
  }.property('height', 'totalHeight')),
  filteredContent: Ember.computed(function() {
    var content, filteredContent, query;
    content = this.get('content');
    query = this.get('query');
    if (!content) {
      return Ember.A([]);
    }
    filteredContent = Ember.A(this.get('content').filter((function(_this) {
      return function(item) {
        return _this.matcher(query, item);
      };
    })(this)));
    if (!this.get('sortLabels')) {
      return filteredContent;
    }
    return Ember.A(_.sortBy(filteredContent, (function(_this) {
      return function(item) {
        var _ref;
        return (_ref = get(item, _this.get('optionLabelPath'))) != null ? _ref.toLowerCase() : void 0;
      };
    })(this)));
  }).property('content.@each', 'query', 'optionLabelPath', 'sortLabels'),
  groupedContent: Ember.computed(function() {
    var content, groups, path, result;
    path = this.get('optionGroupPath');
    content = this.get('filteredContent');
    if (!path) {
      return content;
    }
    groups = _.groupBy(content, function(item) {
      return get(item, path);
    });
    result = Ember.A();
    _.keys(groups).sort().forEach(function(key) {
      result.pushObject(Ember.Object.create({
        isGroupOption: true,
        name: key
      }));
      return result.pushObjects(groups[key]);
    });
    return result;
  }).property('filteredContent', 'optionGroupPath'),
  hasNoResults: Ember.computed.empty('filteredContent'),
  value: Ember.computed(function(key, value) {
    var selection, valuePath;
    if (arguments.length === 2) {
      valuePath = this.get('optionValuePath');
      selection = value;
      if (valuePath) {
        selection = this.get('content').findProperty(valuePath, value);
      }
      this.set('selection', selection);
      return value;
    } else {
      valuePath = this.get('optionValuePath');
      selection = this.get('selection');
      if (valuePath) {
        return get(selection, valuePath);
      } else {
        return selection;
      }
    }
  }).property('selection'),
  didInsertElement: function() {
    this._super();
    return this.setDefaultSelection();
  },
  matcher: function(searchText, item) {
    var escapedSearchText, label, regex;
    if (!searchText) {
      return true;
    }
    label = get(item, this.get('optionLabelPath'));
    escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    regex = new RegExp(escapedSearchText, 'i');
    return regex.test(label);
  },
  setDefaultSelection: Ember.observer(function() {
    var content, defaultPath;
    if (this.get('selection')) {
      return;
    }
    content = this.get('content');
    defaultPath = this.get('optionDefaultPath');
    if (!(content && defaultPath)) {
      return;
    }
    return this.set('selection', content.findProperty(defaultPath));
  }, 'content.@each'),
  selectableOptionsDidChange: Ember.observer(function() {
    var highlighted;
    highlighted = this.get('highlighted');
    if (!this.get('selectableOptions').contains(highlighted)) {
      return this.set('highlighted', this.get('selectableOptions.firstObject'));
    }
  }, 'selectableOptions'),

  /*
   * SELECTION RELATED
   */
  KEY_EVENTS: {
    8: 'deletePressed',
    27: 'escapePressed',
    13: 'enterPressed',
    38: 'upArrowPressed',
    40: 'downArrowPressed'
  },
  selectableOptions: Ember.computed(function() {
    return Ember.A((this.get('groupedContent') || []).filter(function(item) {
      return !get(item, 'isGroupOption');
    }));
  }).property('groupedContent'),
  highlighted: Ember.computed(function(key, value) {
    var content, index;
    content = this.get('selectableOptions') || Ember.A([]);
    value = value || Ember.A([]);
    if (arguments.length === 1) {
      index = this.get('highlightedIndex');
      value = content.objectAt(index);
    } else {
      index = content.indexOf(value);
      this.setHighlightedIndex(index, true);
    }
    return value;
  }).property('selectableOptions', 'highlightedIndex'),
  bodyClick: function() {
    return this.send('hideDropdown');
  },
  keyDown: function(event) {
    var map, method, _ref;
    if (!this.get('showDropdown')) {
      return this.set('showDropdown', true);
    }
    map = this.get('KEY_EVENTS');
    method = map[event.keyCode];
    if (method) {
      return (_ref = this.get(method)) != null ? _ref.apply(this, arguments) : void 0;
    }
  },
  deletePressed: Ember.K,
  escapePressed: function(event) {
    return this.send('hideDropdown');
  },
  enterPressed: function(event) {
    var item;
    item = this.get('highlighted');
    if (!Ember.isEmpty(item)) {
      this.set('selection', item);
    }
    if (!Ember.isEmpty(item)) {
      this.userDidSelect(item);
    }
    this.send('hideDropdown');
    return event.preventDefault();
  },
  upArrowPressed: function(event) {
    var index, sel;
    sel = this.get('highlightedIndex');
    index = event.ctrlKey || event.metaKey ? 0 : sel - 1;
    this.setHighlightedIndex(index, true);
    return event.preventDefault();
  },
  downArrowPressed: function(event) {
    var clen, index, sel;
    sel = this.get('highlightedIndex');
    clen = this.get('selectableOptions.length');
    index = event.ctrlKey || event.metaKey ? clen - 1 : sel + 1;
    this.setHighlightedIndex(index, true);
    return event.preventDefault();
  },
  setHighlightedIndex: function(index, ensureVisible) {
    if (!this.ensureIndex(index)) {
      return;
    }
    this.set('highlightedIndex', index);
    if (ensureVisible) {
      return this.ensureVisible(index);
    }
  },
  ensureIndex: function(index) {
    var clen;
    clen = this.get('selectableOptions.length');
    return index >= 0 && index < clen;
  },
  ensureVisible: function(index) {
    var $listView, endIndex, item, listView, newIndex, numRows, startIndex;
    $listView = this.$('.ember-list-view');
    listView = Ember.View.views[$listView.attr('id')];
    if (!listView) {
      return;
    }
    startIndex = listView._startingIndex();
    numRows = listView._childViewCount() - 1;
    endIndex = startIndex + numRows;
    item = this.get('selectableOptions').objectAt(index);
    newIndex = this.get('groupedContent').indexOf(item);
    if (index === 0) {
      return $listView.scrollTop(0);
    } else if (newIndex < startIndex) {
      return $listView.scrollTop(newIndex * this.get('rowHeight'));
    } else if (newIndex >= endIndex) {
      return $listView.scrollTop((newIndex - numRows + 1.5) * this.get('rowHeight'));
    }
  },
  userDidSelect: function(selection) {
    return this.sendAction('userSelected', selection);
  },
  actions: {
    toggleDropdown: function(event) {
      if (this.get('disabled')) {
        return;
      }
      return this.toggleProperty('showDropdown');
    },
    hideDropdown: function(event) {
      return this.set('showDropdown', false);
    }
  }
});

Ember.Handlebars.helper('select-component', Ember.Widgets.SelectComponent);


})();

(function() {

var get, set;

get = function(object, key) {
  if (!object) {
    return void 0;
  }
  if (!key) {
    return object;
  }
  return (typeof object.get === "function" ? object.get(key) : void 0) || object[key];
};

set = function(object, key, value) {
  if (!(object && key)) {
    return;
  }
  return (typeof object.set === "function" ? object.set(key, value) : void 0) || (object[key] = value);
};

Ember.Widgets.MultiSelectOptionView = Ember.View.extend({
  tagName: 'li',
  templateName: 'multi_select_item',
  classNames: 'ember-select-search-choice',
  labelPath: Ember.computed.alias('controller.optionLabelPath'),
  didInsertElement: function() {
    this._super();
    return this.labelPathDidChange();
  },
  labelPathDidChange: Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('labelPath');
    path = labelPath ? "context." + labelPath : 'context';
    Ember.defineProperty(this, 'label', Ember.computed.alias(path));
    return this.notifyPropertyChange('label');
  }, 'context', 'labelPath')
});

Ember.Widgets.MultiSelectComponent = Ember.Widgets.SelectComponent.extend({
  layoutName: 'multi-select',
  selections: void 0,
  choicesFieldClass: '',
  values: Ember.computed(function(key, value) {
    var selections, valuePath;
    if (arguments.length === 2) {
      if (!value) {
        return;
      }
      valuePath = this.get('optionValuePath');
      this.set('selections', Ember.A(this.get('content').filter(function(item) {
        return value.contains(get(item, valuePath));
      })));
      return value;
    } else {
      valuePath = this.get('optionValuePath');
      selections = this.get('selections');
      if (valuePath) {
        return selections.getEach(valuePath);
      } else {
        return selections;
      }
    }
  }).property('selections.@each'),
  selectionItemView: Ember.Widgets.MultiSelectOptionView,
  searchView: Ember.TextField.extend({
    "class": 'ember-select-input',
    valueBinding: 'parentView.query',
    focusIn: function(event) {
      return this.set('parentView.showDropdown', true);
    }
  }),
  filteredContent: Ember.computed(function() {
    var content, query, selections;
    content = this.get('content');
    query = this.get('query');
    selections = this.get('selections');
    if (!(content && selections)) {
      return Ember.A([]);
    }
    return Ember.A(this.get('content').filter((function(_this) {
      return function(item) {
        return !selections.contains(item) && _this.matcher(query, item);
      };
    })(this)));
  }).property('content.@each', 'optionLabelPath', 'query', 'selections.@each'),
  selectionDidChange: Ember.observer(function() {
    var selection, selections;
    selections = this.get('selections');
    selection = this.get('selection');
    this.set('selection', null);
    this.set('query', '');
    if (!Ember.isEmpty(selection) && !selections.contains(selection)) {
      return selections.pushObject(selection);
    }
  }, 'selection'),
  didInsertElement: function() {
    this._super();
    if (!this.get('selections')) {
      this.set('selections', Ember.A([]));
    }
    if (!this.get('values')) {
      return this.set('values', Ember.A([]));
    }
  },
  deletePressed: function(event) {
    if (event.target.selectionStart === 0) {
      return this.removeSelectItem(this.get('selections.lastObject'));
    }
  },
  removeSelectItem: function(item) {
    return this.get('selections').removeObject(item);
  },
  actions: {
    removeSelectItem: function(item) {
      return this.removeSelectItem(item);
    }
  }
});

Ember.Handlebars.helper('multi-select-component', Ember.Widgets.MultiSelectComponent);


})();

(function() {

Ember.Widgets.RadioButtonComponent = Ember.Component.extend({
  attributeBindings: ['type', 'checked'],
  classNames: ['radio-input'],
  tagName: 'input',
  type: 'radio',
  checked: Ember.computed.alias('parentView.checked')
});

Ember.Widgets.RadioButtonWrapperComponent = Ember.Component.extend({
  layoutName: 'radio_button_layout',
  value: null,
  selectedValue: Ember.computed.alias('parentView.selectedValue'),
  classNames: ['radio-button'],
  checked: false,
  selectedValueChanged: Ember.on('init', Ember.observer(function() {
    var selectedValue;
    selectedValue = this.get('selectedValue');
    if (!Ember.isEmpty(selectedValue) && this.get('value') === selectedValue) {
      return this.set('checked', true);
    } else {
      return this.set('checked', false);
    }
  }, 'selectedValue')),
  click: function(event) {
    this.set('checked', true);
    return this.set('selectedValue', this.get('value'));
  }
});

Ember.Widgets.RadioButtonGroupComponent = Ember.Component.extend({
  classNames: ['ember-radio-button-group'],
  selectedValue: null
});

Ember.Handlebars.helper('radio-button-group-component', Ember.Widgets.RadioButtonGroupComponent);

Ember.Handlebars.helper('radio-button', Ember.Widgets.RadioButtonWrapperComponent);


})();

(function() {

Ember.Widgets.DomHelper = Ember.Mixin.create({
  KEY_CODES: {
    BACKSPACE: 8,
    DELETE: 46,
    DOWN: 40,
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    SPACEBAR: 32,
    TAB: 9,
    UP: 38,
    ESCAPE: 27
  },
  selectElement: function(element, collapseMode) {
    var range;
    if (collapseMode == null) {
      collapseMode = "end";
    }
    if (document.createRange) {
      range = document.createRange();
      range.selectNodeContents(element);
      if (collapseMode !== "none") {
        range.collapse(collapseMode === "beginning" ? true : false);
      }
      return this.activateRange(range);
    }
  },
  activateRange: function(range) {
    var selection;
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return range;
  },
  deleteRange: function(range, shouldDeleteContainer) {
    var endParent, startParent;
    if (shouldDeleteContainer == null) {
      shouldDeleteContainer = true;
    }
    startParent = range.startContainer.parentNode;
    endParent = range.endContainer.parentNode;
    range.deleteContents();
    if (this.isEmpty(startParent) && shouldDeleteContainer) {
      $(startParent).remove();
    }
    if (this.isEmpty(endParent) && shouldDeleteContainer) {
      return $(endParent).remove();
    }
  },
  insertHTMLAtRange: function(range, html) {
    return this.insertElementAtRange(range, this.createElementsFromString(html)[0]);
  },
  insertElementAtRange: function(range, node) {
    this.deleteRange(range, false);
    range.insertNode(node);
    return node;
  },
  getCurrentRange: function() {
    var idocument, iframe;
    iframe = this.$('iframe.text-editor-frame')[0];
    idocument = iframe.contentDocument || iframe.contentWindow.document;
    if (idocument.getSelection().rangeCount > 0) {
      return idocument.getSelection().getRangeAt(0);
    } else {
      return null;
    }
  },
  isEmpty: function(element) {
    var _ref;
    return element.children.length === 0 && element.childNodes.length <= 1 && ((_ref = element.childNodes[0]) != null ? _ref.length : void 0) === 0;
  },
  createElementsFromString: function(string) {
    return $("<div/>").html(string).contents();
  },
  convertElementsToString: function(elements) {
    return $("<div/>").html(elements).html();
  },
  getNonEmptySideNode: function(range, left, deep) {
    var index, node, nodeIsEmpty, sideNode, _ref;
    if (left == null) {
      left = true;
    }
    nodeIsEmpty = function(node) {
      var _ref;
      return (node != null ? (_ref = node.nodeValue) != null ? _ref.trim().length : void 0 : void 0) === 0;
    };
    node = range[left ? 'startContainer' : 'endContainer'];
    while (((sideNode = node[left ? 'previousSibling' : 'nextSibling']) === null || nodeIsEmpty(sideNode)) && !$(node).hasClass(this.EDITOR_CLASS)) {
      if (nodeIsEmpty(sideNode)) {
        node = node[left ? 'previousSibling' : 'nextSibling'];
      } else {
        node = node.parentNode;
      }
    }
    if (deep) {
      while ((sideNode != null ? (_ref = sideNode.children) != null ? _ref.length : void 0 : void 0) > 0) {
        index = left ? sideNode.children.length - 1 : 0;
        sideNode = sideNode.children[index];
      }
    }
    return sideNode;
  },
  getCharactersPrecedingCaret: function() {
    var precedingChars, range;
    range = this.getCurrentRange();
    if (range === null) {
      return "";
    }
    range.collapse(true);
    range.setStart(range.startContainer, 0);
    precedingChars = range.toString();
    return precedingChars;
  },
  deleteCharactersPrecedingCaret: function(length, shouldDeleteContainer) {
    var range;
    if (shouldDeleteContainer == null) {
      shouldDeleteContainer = true;
    }
    range = this.getCurrentRange();
    if (range === null) {
      return "";
    }
    range.collapse(true);
    range.setStart(range.startContainer, range.endOffset - length);
    return this.deleteRange(range, shouldDeleteContainer);
  },
  wrapInDiv: function(htmlElements) {
    var endSlice, isDiv, newElement, slicedElements, _results;
    isDiv = htmlElements.map(function(i, el) {
      var _ref;
      return ((_ref = el.tagName) != null ? _ref.toLowerCase() : void 0) === "div";
    });
    isDiv = isDiv.toArray();
    if (isDiv.every(function(elem) {
      return elem;
    })) {
      return;
    }
    if (htmlElements.length === 1 && htmlElements[0].className === "rangySelectionBoundary") {
      return;
    }
    _results = [];
    while (htmlElements.length > 0) {
      endSlice = isDiv.indexOf(true);
      if (endSlice === -1) {
        endSlice = isDiv.length;
      }
      if (endSlice > 0) {
        slicedElements = htmlElements.slice(0, endSlice);
        newElement = slicedElements.wrapAll('<div/>');
        slicedElements.wrapAll('<div/>').parent().replaceWith(newElement);
      } else {
        endSlice = 1;
      }
      htmlElements = htmlElements.slice(endSlice);
      _results.push(isDiv = isDiv.slice(endSlice));
    }
    return _results;
  }
});


})();

(function() {

Ember.Widgets.TextEditorComponent = Ember.Component.extend({
  templateName: 'text_editor',
  selectedFontName: 'Helvetica Neue',
  selectedFontSize: '2',
  selectedForeColor: 'rgb(0, 0, 0)',
  isToolbarVisible: true,
  EDITOR_CLASS: 'text-editor',
  PLACEHOLDER_TEXT: 'Click to edit',
  commands: Ember.A(['bold', 'italic', 'underline', 'fontName', 'fontSize', 'foreColor', 'indent', 'outdent', 'insertOrderedList', 'insertUnorderedList', 'justifyLeft', 'justifyCenter', 'justifyRight', 'strikeThrough']),
  iframeHeadContents: Ember.computed(function() {
    return "<style>\n  html,\n  body {\n    min-height: 0;\n    min-width: 0;\n    margin: 0;\n    background: transparent;\n    font-family: \"Helvetica Neue\";\n  }\n  ." + this.EDITOR_CLASS + " {\n  min-height: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 5px;\n}\n." + this.EDITOR_CLASS + ":focus {\n    outline: none;\n  }\n  .non-editable {\n    display: inline-block;\n    padding: 0 5px;\n    background-color: #e7e7e7;\n    list-style-type: none;\n    cursor: pointer;\n  }\n  [contentEditable=true]:empty:not(:focus):before {\n    content: attr(data-ph);\n    color: grey;\n    font-style: italic;\n  }\n</style>";
  }).property('EDITOR_CLASS'),
  iframeBodyContents: Ember.computed(function() {
    return '<div class="' + this.EDITOR_CLASS + '" contenteditable="true" data-ph="' + this.PLACEHOLDER_TEXT + '"></div>';
  }).property('EDITOR_CLASS', 'PLACEHOLDER_TEXT'),
  getEditor: function() {
    return this.$('iframe.text-editor-frame').contents().find('.' + this.EDITOR_CLASS);
  },
  getDocument: function() {
    var iframe;
    iframe = this.$('iframe.text-editor-frame')[0];
    return iframe.contentDocument || iframe.contentWindow.document;
  },
  inEditor: function(range) {
    return this.$(range.endContainer).parents().has(range.startContainer).first().closest('.' + this.EDITOR_CLASS).length > 0;
  },
  isTargetInEditor: function(event) {
    return !Ember.isEmpty($(event.target).closest('.' + this.EDITOR_CLASS));
  },
  getOrCreateLastElementInEditor: function() {
    var editor, iframe;
    editor = this.getEditor()[0];
    if (editor === undefined) {
      iframe = this.$('iframe.text-editor-frame').contents();
      iframe.find('body').append(this.get('iframeBodyContents'));
      editor = this.getEditor()[0];
    }
    if (editor.childElementCount === 0) {
      this.insertHTMLAtRange(this.selectElement(editor), "<div></div>");
    }
    return editor.children[editor.children.length - 1];
  },
  didInsertElement: function() {
    var iframe;
    this._super();
    iframe = this.$('iframe.text-editor-frame').contents();
    iframe.find('body').append(this.get('iframeBodyContents'));
    iframe.find('head').append(this.get('iframeHeadContents'));
    this.getDocument().execCommand('styleWithCSS', true, true);
    iframe = this.$('iframe.text-editor-frame')[0];
    iframe.contentWindow.onkeyup = (function(_this) {
      return function(event) {
        return _this.keyUp(event);
      };
    })(this);
    iframe.contentWindow.onkeydown = (function(_this) {
      return function(event) {
        return _this.keyDown(event);
      };
    })(this);
    iframe.contentWindow.onmouseup = (function(_this) {
      return function(event) {
        return _this.mouseUp(event);
      };
    })(this);
    iframe.contentWindow.onmousedown = (function(_this) {
      return function(event) {
        return _this.mouseDown(event);
      };
    })(this);
    iframe.contentWindow.onclick = (function(_this) {
      return function(event) {
        return _this.click(event);
      };
    })(this);
    return this.get('commands').forEach((function(_this) {
      return function(command) {
        return _this.set(command, function(arg) {
          _this.getDocument().execCommand(command, true, arg);
          return _this.queryCommandState();
        });
      };
    })(this));
  },
  keyUp: function(event) {
    return this.queryCommandState();
  },
  mouseUp: function(event) {
    return this.queryCommandState();
  },
  queryCommandState: function() {
    var fontName, idocument;
    idocument = this.getDocument();
    this.set('isBold', idocument.queryCommandState('bold'));
    this.set('isItalic', idocument.queryCommandState('italic'));
    this.set('isUnderline', idocument.queryCommandState('underline'));
    this.set('isJustifyLeft', idocument.queryCommandState('justifyLeft'));
    this.set('isJustifyCenter', idocument.queryCommandState('justifyCenter'));
    this.set('isJustifyRight', idocument.queryCommandState('justifyRight'));
    fontName = idocument.queryCommandValue('fontName') || '';
    this.set('selectedFontName', fontName.replace(/^'/, '').replace(/'$/, ''));
    this.set('selectedFontSize', idocument.queryCommandValue('fontSize'));
    return this.set('selectedForeColor', idocument.queryCommandValue('foreColor'));
  },
  click: function(event) {
    return Ember.K;
  },
  keyDown: function(event) {
    return Ember.K;
  },
  mouseDown: function(event) {
    return Ember.K;
  }
});


})();

(function() {

Ember.Widgets.BaseNonEditablePill = Ember.Controller.extend(Ember.Widgets.DomHelper, {
  textEditor: null,
  params: Ember.computed(function() {
    return {};
  }),
  name: null,
  result: function() {
    return Ember.K;
  },
  configure: function() {
    return this.send('modalConfirm');
  },
  actions: {
    modalConfirm: function() {
      if (this.get('params.pillId')) {
        return this.get('textEditor').updatePill(this);
      } else {
        this.set('params.pillId', this.get('textEditor').getNewPillId());
        this.set('params.type', "" + this.constructor);
        return this.get('textEditor').insertPill(this);
      }
    },
    modalCancel: function() {
      return Ember.K;
    }
  },
  updateContent: function() {
    return $(this.get('pillElement')).text(this.result());
  },
  render: function() {
    var key, span, value, _ref;
    span = this.createElementsFromString("<span></span>");
    span.addClass('non-editable');
    span.attr({
      'title': this.get('name')
    });
    _ref = this.get('params');
    for (key in _ref) {
      value = _ref[key];
      span.attr('data-' + Ember.String.dasherize(key), value);
    }
    this.set('pillElement', span);
    this.updateContent(span);
    return span[0];
  }
});

Ember.Widgets.NonEditableTextPill = Ember.Widgets.BaseNonEditablePill.extend({
  name: "Custom Text",
  text: Ember.computed.alias('params.text'),
  result: function() {
    return this.get('params.text');
  },
  configure: function() {
    var modal;
    return modal = Ember.Widgets.ModalComponent.popup({
      content: this,
      targetObject: this,
      confirm: "modalConfirm",
      cancel: "modalCancel",
      contentViewClass: Ember.View.extend({
        templateName: 'non_editable_text_pill_configuration'
      }),
      headerText: this.get('name'),
      confirmText: "Insert"
    });
  }
});

Ember.Widgets.TodaysDatePill = Ember.Widgets.BaseNonEditablePill.extend({
  name: "Today's Date",
  result: function() {
    return Date();
  }
});

Ember.Widgets.PillSelect = Ember.Widgets.SelectComponent.extend({
  templateName: 'text_editor_pill_menu',
  isSelect: true,
  showButton: true
});

Ember.Widgets.PillInsertMixin = Ember.Mixin.create({
  pillOptions: Ember.A([Ember.Widgets.TodaysDatePill, Ember.Widgets.NonEditableTextPill]),
  _pillOptions: Ember.computed(function() {
    return Ember.A(this.getWithDefault('pillOptions', []).map((function(_this) {
      return function(option) {
        return {
          label: option.create().name,
          value: option
        };
      };
    })(this)));
  })
}.property('pillOptions'), {
  actions: {
    insertPill: function(pillOption) {
      var selectedPillOption;
      selectedPillOption = pillOption.value.create({
        textEditor: this.get('textEditor') || this
      });
      selectedPillOption.configure();
      return this.set('selectedPillOption', null);
    }
  }
});


})();

(function() {

Ember.Widgets.TextEditorConfigComponent = Ember.Component.extend({
  templateName: 'text_editor_config',
  classNames: Ember.A(['ember-text-editor-toolbar']),
  selectedFontName: 'Helvetica Neue',
  selectedFontSize: '2',
  selectedForeColor: 'rgb(0, 0, 0)',
  textEditor: null,
  fontNames: Ember.A(['Arial', 'Calibri', 'Cambria', 'Consolas', 'Corsiva', 'Courier New', 'Georgia', 'Helvetica Neue', 'Helvetica', 'Sans-Serif', 'Serif', 'Syncopate', 'Times New Roman', 'Trebuchet MS', 'Verdana']),
  fontSizes: Ember.A([
    {
      size: '1',
      name: '8'
    }, {
      size: '2',
      name: '10'
    }, {
      size: '3',
      name: '12'
    }, {
      size: '4',
      name: '14'
    }, {
      size: '5',
      name: '18'
    }, {
      size: '6',
      name: '24'
    }, {
      size: '7',
      name: '36'
    }
  ]),
  fontChooserItemViewClass: Ember.Widgets.SelectOptionView.extend({
    templateName: 'font_chooser_item',
    style: Ember.computed(function() {
      return "font-family:" + (this.get('label')) + ";";
    }).property('label')
  }),
  actions: {
    applyFontSize: function(options) {
      this.get('textEditor').fontSize(options.size);
      return this.get('textEditor').getEditor().focus();
    },
    applyFontName: function(font) {
      this.get('textEditor').fontName(font);
      return this.get('textEditor').getEditor().focus();
    },
    applyForeColor: function(color) {
      this.get('textEditor').foreColor(color);
      return this.get('textEditor').getEditor().focus();
    },
    toggleBold: function() {
      this.get('textEditor').bold();
      return this.get('textEditor').getEditor().focus();
    },
    toggleItalic: function() {
      this.get('textEditor').italic();
      return this.get('textEditor').getEditor().focus();
    },
    toggleUnderline: function() {
      this.get('textEditor').underline();
      return this.get('textEditor').getEditor().focus();
    },
    justifyLeft: function() {
      this.get('textEditor').justifyLeft();
      return this.get('textEditor').getEditor().focus();
    },
    justifyCenter: function() {
      this.get('textEditor').justifyCenter();
      return this.get('textEditor').getEditor().focus();
    },
    justifyRight: function() {
      this.get('textEditor').justifyRight();
      return this.get('textEditor').getEditor().focus();
    },
    insertOrderedList: function() {
      this.get('textEditor').insertOrderedList();
      return this.get('textEditor').getEditor().focus();
    },
    insertUnorderedList: function() {
      this.get('textEditor').insertUnorderedList();
      return this.get('textEditor').getEditor().focus();
    },
    outdent: function() {
      this.get('textEditor').outdent();
      return this.get('textEditor').getEditor().focus();
    },
    indent: function() {
      this.get('textEditor').indent();
      return this.get('textEditor').getEditor().focus();
    }
  }
});

Ember.Widgets.TextEditorWithNonEditableConfigComponent = Ember.Widgets.TextEditorConfigComponent.extend(Ember.Widgets.PillInsertMixin, {
  templateName: 'text_editor_with_non_editable_config'
});


})();

(function() {

Ember.Widgets.TextEditorWithNonEditableComponent = Ember.Widgets.TextEditorComponent.extend(Ember.Widgets.DomHelper, Ember.Widgets.PillInsertMixin, {
  templateName: 'text_editor_with_non_editable',
  pillOptions: Ember.A([Ember.Widgets.TodaysDatePill, Ember.Widgets.NonEditableTextPill]),
  getInsertSelectController: function() {
    return this.get('pillChooserInLine');
  },
  INVISIBLE_CHAR: '\uFEFF',
  INSERT_PILL_CHAR: '=',
  insertPillRegex: Ember.computed(function() {
    return new RegExp(this.INSERT_PILL_CHAR + '[A-Za-z0-9_\+\-]*$', 'gi');
  }).property('INSERT_PILL_CHAR'),
  pillId: 0,
  mouseDownTarget: null,
  pillHideSearchBox: false,
  showConfigPopover: false,
  selectedPillOption: null,
  _getPillFromElement: function(pillElement) {
    var data, key, params, value;
    data = $(pillElement).data();
    if (!data.type) {
      return;
    }
    params = {};
    for (key in data) {
      value = data[key];
      params[key] = value;
    }
    return Ember.get(data.type).create({
      'textEditor': this,
      'params': params
    });
  },
  _getElementFromPill: function(pill) {
    var pillId;
    pillId = pill.get('params.pillId');
    return this.getEditor().find('.non-editable[data-pill-id="' + pillId + '"]');
  },
  serialize: function() {
    var div, raw_html;
    raw_html = this.getEditor().html();
    div = $('<div/>').html(raw_html);
    $('.non-editable', div).empty();
    return div.html();
  },
  updateNonEditablePillContent: function() {
    var pill, pillElement, pillElements, _i, _len;
    pillElements = this.getEditor().find('.non-editable[data-pill-id]');
    for (_i = 0, _len = pillElements.length; _i < _len; _i++) {
      pillElement = pillElements[_i];
      pill = this._getPillFromElement(pillElement);
      if (!pill) {
        return;
      }
      $(pillElement).text(pill.result());
    }
  },
  _getCurrentCaretContainer: function(range) {
    return $(range != null ? range.startContainer.parentElement : void 0).closest('.non-editable-caret');
  },
  getNewPillId: function() {
    return this.incrementProperty('pillId');
  },
  updatePill: function(pill) {
    var pillElement;
    pillElement = this._getElementFromPill(pill);
    return $(pillElement).text(pill.result());
  },
  insertPill: function(pill) {
    var caretContainer, existingNonEditable, factor, matches, precedingCharacters, range;
    precedingCharacters = this.getCharactersPrecedingCaret(this.getEditor()[0]);
    matches = precedingCharacters.match(this.get('insertPillRegex'));
    if (matches) {
      this.deleteCharactersPrecedingCaret(matches[0].length, false);
    }
    range = this.getCurrentRange();
    if (!range || !this.inEditor(range)) {
      if (!(range = this.getCurrentRange()) || !this.inEditor(range)) {
        this.selectElement(this.getOrCreateLastElementInEditor());
      }
      range = this.getCurrentRange();
    }
    existingNonEditable = this._getNonEditableParent(range.startContainer) || this._getNonEditableParent(range.endContainer);
    if (existingNonEditable != null) {
      existingNonEditable.remove();
    }
    factor = this.insertElementAtRange(range, pill.render());
    caretContainer = this._insertCaretContainer(factor, false);
    this.selectElement(caretContainer);
    this._removeCaretContainers();
    this._moveSelection();
    this._wrapText();
    this.getEditor().focus();
    return this.selectElement(factor.nextSibling);
  },
  _isNonEditable: function(node) {
    return !Ember.isEmpty($(node).closest('.non-editable'));
  },
  _getNonEditableOnLeft: function(deep) {
    var currentRange, leftNode, _ref;
    if (deep == null) {
      deep = false;
    }
    if (!((currentRange = this.getCurrentRange()) && (leftNode = this.getNonEmptySideNode(currentRange, true, deep)))) {
      return;
    }
    if (currentRange.startOffset === 0 && this._isNonEditable(leftNode)) {
      return leftNode;
    } else if (currentRange.startOffset === 1 && this._isNonEditable(leftNode) && ((_ref = currentRange.startContainer.nodeValue) != null ? _ref.charAt(0) : void 0) === this.INVISIBLE_CHAR) {
      return leftNode;
    }
  },
  _getNonEditableOnRight: function(deep) {
    var currentRange, endContainer, rightNode;
    if (deep == null) {
      deep = false;
    }
    if (!((currentRange = this.getCurrentRange()) && (rightNode = this.getNonEmptySideNode(currentRange, false, deep)))) {
      return;
    }
    endContainer = currentRange.endContainer;
    if (currentRange.endOffset === endContainer.length && this._isNonEditable(rightNode)) {
      return rightNode;
    } else if (currentRange.endOffset === endContainer.length - 1 && endContainer.nodeValue.charAt(endContainer.nodeValue.length - 1) === this.INVISIBLE_CHAR && this._isNonEditable(rightNode)) {
      return rightNode;
    }
  },
  _isRangeWithinNonEditable: function(range) {
    var $endNode, $startNode;
    $startNode = $(range.startContainer.parentNode);
    $endNode = $(range.endContainer.parentNode);
    return $startNode.hasClass('non-editable') && $endNode.hasClass('non-editable') && $startNode[0] === $endNode[0];
  },
  _getNonEditableParent: function(node) {
    while (node) {
      if ($(node).hasClass('non-editable')) {
        return node;
      }
      node = node.parentElement;
    }
  },
  _insertCaretContainer: function(target, before) {
    var caretContainer;
    caretContainer = this.createElementsFromString('<span class="non-editable-caret">' + this.INVISIBLE_CHAR + '</span>')[0];
    if (before) {
      $(caretContainer).insertBefore(target);
    } else {
      $(caretContainer).insertAfter(target);
    }
    return caretContainer;
  },
  _removeCaretContainer: function(caretContainer) {
    var child, contents, savedSelection;
    if (caretContainer.parentElement.innerHTML === '<span class="non-editable-caret">' + this.INVISIBLE_CHAR + '</span>') {
      return $(caretContainer.parentElement).html('<br>');
    }
    if ((child = caretContainer.childNodes[0]) && child.nodeValue.charAt(0) === this.INVISIBLE_CHAR) {
      child = child.deleteData(0, 1);
    }
    savedSelection = rangy.saveSelection(this.$('iframe.text-editor-frame')[0].contentWindow);
    contents = $(caretContainer).contents();
    $(caretContainer).replaceWith(contents);
    return rangy.restoreSelection(savedSelection);
  },
  _removeCaretContainers: function() {
    var caretContainer, child, contents, currentCaretContainer, range, _ref, _results;
    range = this.getCurrentRange();
    currentCaretContainer = this._getCurrentCaretContainer(range);
    _results = [];
    while ((caretContainer = this.getEditor().find('.non-editable-caret').not(currentCaretContainer)[0])) {
      if (caretContainer.parentElement.innerHTML === '<span class="non-editable-caret">' + this.INVISIBLE_CHAR + '</span>') {
        $(caretContainer.parentElement).html('<br>');
        continue;
      }
      child = caretContainer.childNodes[0];
      if (child && ((_ref = child.nodeValue) != null ? _ref.charAt(0) : void 0) === this.INVISIBLE_CHAR) {
        child = child.deleteData(0, 1);
      }
      contents = $(caretContainer).contents();
      $(caretContainer).replaceWith(contents);
      _results.push(caretContainer.childNodes[caretContainer.childNodes.length - 1]);
    }
    return _results;
  },
  _moveSelection: function() {
    var caretContainer, collapse, currentRange, element, hasSideContent, isCollapsed, nonEditableEnd, nonEditableStart, parentCaret, selection;
    hasSideContent = function(range, element, left) {
      var container, len, offset;
      container = range.startContainer;
      offset = range.startOffset;
      if (container.nodeType === 3) {
        len = container.nodeValue.length;
        if ((offset > 0 && offset < len) || (left ? offset === len : offset === 0)) {
          return;
        }
      }
      return element;
    };
    this._removeCaretContainers();
    if (!(currentRange = this.getCurrentRange())) {
      return;
    }
    isCollapsed = currentRange.collapsed;
    nonEditableStart = this._getNonEditableParent(currentRange.startContainer);
    nonEditableEnd = this._getNonEditableParent(currentRange.endContainer);
    parentCaret = this._getCurrentCaretContainer(currentRange);
    if (nonEditableStart || nonEditableEnd) {
      if (currentRange.collapsed) {
        if ((element = hasSideContent(currentRange, nonEditableStart || nonEditableEnd, true))) {
          caretContainer = this._insertCaretContainer(element, true);
        } else if ((element = hasSideContent(currentRange, nonEditableStart || nonEditableEnd, false))) {
          caretContainer = this._insertCaretContainer(element, false);
        }
        if (caretContainer) {
          collapse = $(caretContainer).is(":first-child") ? "beginning" : "end";
          this.selectElement(caretContainer, collapse);
          return;
        }
      }
      if (nonEditableStart) {
        currentRange.setStartBefore(nonEditableStart);
      }
      if (nonEditableEnd) {
        currentRange.setEndAfter(nonEditableEnd);
      }
      selection = window.getSelection();
      selection.removeAllRanges();
      return selection.addRange(currentRange);
    } else if ((parentCaret != null ? parentCaret.length : void 0) > 0 && !this._isNonEditable(this.getNonEmptySideNode(currentRange, true)) && !this._isNonEditable(this.getNonEmptySideNode(currentRange, false))) {
      return this._removeCaretContainer(parentCaret[0]);
    }
  },
  _showPillConfig: function(query) {
    this.set('showConfigPopover', true);
    this.set('pillHideSearchBox', true);
    return this.set('query', query);
  },
  _hidePillConfig: function() {
    this.set('showConfigPopover', false);
    this.set('pillHideSearchBox', false);
    return this.set('query', null);
  },
  _handlePillConfig: function() {
    var matches, precedingCharacters, query;
    precedingCharacters = this.getCharactersPrecedingCaret(this.getEditor()[0]);
    matches = precedingCharacters.match(this.get('insertPillRegex'));
    if (matches) {
      query = matches[0].split(" ").reverse()[0].slice(1);
      return this._showPillConfig(query);
    } else {
      return this._hidePillConfig();
    }
  },
  keyDown: function(event) {
    var caret, endElement, handleLeftNodeCase, handleRightNodeCase, insertSelect, isCharacter, isCollapsed, keyCode, leftNode, leftNodeDeep, nonEditableParent, range, rightNode, rightNodeDeep, startElement;
    if (!this.isTargetInEditor(event)) {
      return;
    }
    handleLeftNodeCase = (function(_this) {
      return function() {
        if (leftNode) {
          if (keyCode === _this.KEY_CODES.LEFT && isCollapsed) {
            _this.selectElement(leftNode, "none");
            return event.preventDefault();
          } else if (keyCode === _this.KEY_CODES.BACKSPACE) {
            return _this.selectElement(leftNode, "none");
          }
        } else if (leftNodeDeep && keyCode === _this.KEY_CODES.BACKSPACE) {
          return _this._insertCaretContainer(leftNodeDeep, false);
        }
      };
    })(this);
    handleRightNodeCase = (function(_this) {
      return function() {
        if (rightNode) {
          if (keyCode === _this.KEY_CODES.DELETE) {
            return _this.selectElement(rightNode, "none");
          } else if (keyCode === _this.KEY_CODES.RIGHT && isCollapsed) {
            _this.selectElement(rightNode, "none");
            return event.preventDefault();
          }
        } else if (rightNodeDeep && keyCode === _this.KEY_CODES.DELETE && !rightNode) {
          return _this._insertCaretContainer(rightNodeDeep, true);
        }
      };
    })(this);
    isCharacter = function(keyCode) {
      return keyCode >= 48 && keyCode <= 90 || keyCode >= 96 && keyCode <= 111 || keyCode >= 186 && keyCode <= 222;
    };
    keyCode = event.keyCode;
    if (this.showConfigPopover) {
      insertSelect = this.getInsertSelectController();
      if (keyCode === this.KEY_CODES.DOWN) {
        return insertSelect.downArrowPressed(event);
      } else if (keyCode === this.KEY_CODES.UP) {
        return insertSelect.upArrowPressed(event);
      } else if ((keyCode === this.KEY_CODES.ENTER || keyCode === this.KEY_CODES.TAB) && insertSelect.get('filteredContent').length > 0) {
        return insertSelect.enterPressed(event);
      } else if (keyCode === this.KEY_CODES.ESCAPE) {
        return insertSelect.escapePressed(event);
      }
    }
    this._moveSelection();
    range = this.getCurrentRange();
    isCollapsed = range.collapsed;
    startElement = range.startContainer;
    endElement = range.endContainer;
    nonEditableParent = this._isNonEditable(startElement) || this._isNonEditable(endElement);
    leftNode = this._getNonEditableOnLeft();
    rightNode = this._getNonEditableOnRight();
    leftNodeDeep = this._getNonEditableOnLeft(true);
    rightNodeDeep = this._getNonEditableOnRight(true);
    if ((event.metaKey || event.ctrlKey) && (keyCode !== this.KEY_CODES.DELETE && keyCode !== this.KEY_CODES.BACKSPACE)) {
      return;
    }
    if (isCharacter(keyCode) || keyCode === this.KEY_CODES.BACKSPACE || keyCode === this.KEY_CODES.DELETE) {
      if ((leftNode || rightNode) && !isCollapsed) {
        caret = this._insertCaretContainer(leftNode || rightNode, leftNode ? false : true);
        this.deleteRange(range);
        this.selectElement(caret);
      } else if (nonEditableParent) {
        this.deleteRange(range);
      }
      if ((keyCode === this.KEY_CODES.BACKSPACE || keyCode === this.KEY_CODES.DELETE) && !isCollapsed && nonEditableParent) {
        return event.preventDefault();
      }
    }
    handleLeftNodeCase();
    return handleRightNodeCase();
  },
  _wrapText: function() {
    var $editor, contents, savedSelection;
    $editor = this.getEditor();
    savedSelection = rangy.saveSelection(this.$('iframe.text-editor-frame')[0].contentWindow);
    contents = $editor.contents();
    this.wrapInDiv(contents);
    return rangy.restoreSelection(savedSelection);
  },
  keyUp: function(event) {
    if (!this.isTargetInEditor(event)) {
      return;
    }
    this._moveSelection();
    this._wrapText();
    if (event.keyCode !== this.KEY_CODES.ESCAPE) {
      this._handlePillConfig();
      return this._super();
    }
  },
  mouseDown: function(event) {
    if (!this.isTargetInEditor(event)) {
      return;
    }
    this.mouseDownTarget = event.target;
    return this._moveSelection();
  },
  mouseUp: function(event) {
    var currentRange;
    if (!this.isTargetInEditor(event)) {
      return;
    }
    this._moveSelection();
    this._wrapText();
    currentRange = this.getCurrentRange();
    if (this._isNonEditable(event.target) && event.target === this.mouseDownTarget && this._isRangeWithinNonEditable(currentRange)) {
      this.selectElement(event.target, "none");
      event.preventDefault();
    }
    return this._super();
  },
  click: function(event) {
    return Ember.K;
  }
});


})();

(function() {

var colorNameToHexMap, colorToHex, rgbToHex;

rgbToHex = function(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

colorNameToHexMap = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

colorToHex = function(color) {
  var blue, digits, green, opacity, red;
  if (!color) {
    return color;
  }
  if (color.substr(0, 1) === "#" || color === "transparent") {
    return color.toLowerCase();
  }
  if (color in colorNameToHexMap) {
    return colorNameToHexMap[color.toLowerCase()];
  }
  digits = /(.*?)rgb(a)?\((\d+), (\d+), (\d+)(, (\d+))?\)/.exec(color);
  if ((digits != null ? digits.length : void 0) === 8) {
    red = parseInt(digits[3]);
    green = parseInt(digits[4]);
    blue = parseInt(digits[5]);
    opacity = parseInt(digits[7]);
    if (opacity === 0) {
      return "transparent";
    }
    return rgbToHex(red, green, blue);
  }
  return void 0;
};

Ember.Widgets.ColorPicker = Ember.Component.extend({
  templateName: 'color_picker',
  classNames: ['color-picker-button'],
  colorPickerPlacement: 'right',
  dropdownClass: null,
  INITIAL_COLOR: '#0074D9',
  selectedColor: '#0074D9',
  selectedColorRGB: Ember.computed(function() {
    return colorToHex(this.get('selectedColor'));
  }).property('selectedColor'),
  customColor: '',
  isColorTransparent: Ember.computed.equal('selectedColorRGB', 'transparent'),
  colorRows: Ember.A([Ember.A(['#000000', '#111111', '#434343', '#666666', '#999999', '#AAAAAA', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF']), Ember.A(['#001F3F', '#0074D9', '#7FDBFF', '#39CCCC', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B', '#FF4136', '#85144B', '#B10DC9', 'transparent'])]),
  setCustomColor: Ember.observer(function() {
    if (this.get('isCustomColorValid') === true) {
      return this.set('selectedColor', this.get('customColor'));
    }
  }, 'customColor', 'isCustomColorValid'),
  isCustomColorValid: Ember.computed(function() {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("" + (this.get('customColor')));
  }).property('customColor'),
  customColorCSS: Ember.computed(function() {
    return "background-color: " + (this.get('customColor'));
  }).property('customColor'),
  actions: {
    setColor: function(color) {
      this.set('customColor', '');
      return this.set('selectedColor', color);
    }
  },
  userDidSelect: function(selection) {
    return this.sendAction('userSelected', selection);
  }
});

Ember.Widgets.ColorPickerCell = Ember.View.extend(Ember.Widgets.StyleBindingsMixin, {
  templateName: 'color_picker_cell',
  classNames: ['pull-left', 'color-picker-cell'],
  classNameBindings: Ember.A(['isActive:active:inactive']),
  styleBindings: 'color:background-color',
  color: null,
  isActive: Ember.computed(function() {
    return colorToHex(this.get('controller.selectedColor')) === colorToHex(this.get('color'));
  }).property('controller.selectedColor', 'color'),
  click: function(event) {
    this.get('controller').send('setColor', this.get('color'));
    return this.get('controller').userDidSelect(this.get('color'));
  }
});


})();

(function() {

Ember.Widgets.TypeaheadComponent = Ember.Widgets.SelectComponent.extend({
  layoutName: 'typeahead',
  searchFieldClass: 'form-control',
  searchView: Ember.TextField.extend({
    "class": 'ember-select-input',
    valueBinding: 'parentView.query',
    focusIn: function(event) {
      return this.set('parentView.showDropdown', true);
    }
  }),
  selectionDidChange: Ember.observer(function() {
    return this.set('query', this.get('selection'));
  }, 'selection')
});

Ember.Handlebars.helper('typeahead-component', Ember.Widgets.TypeaheadComponent);


})();