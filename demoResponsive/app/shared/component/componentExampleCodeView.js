define(['marionette',
        'templates',
        'highlight','rup/rup.tabs'], function(Marionette, App, hljs){


  var ComponentCodeView = Marionette.LayoutView.extend({
  });

  var ComponentExampleCodeView = Marionette.LayoutView.extend({
      template: App.Templates.demoResponsive.app.shared.component.componentExampleCodeTemplate,
      ui:{
          codeTabs: "#exampleTabs",
          codeSnippets: "pre code"
      },
      regions:{
        HtmlCode: "#componentHtmlExample",
        JsCode: "#componentJsExample"
      },
      onBeforeShow: fncOnBeforeShow,
      onShow: fncOnShow,
      onAttach: fncOnAttach

  });

  function fncOnBeforeShow(){
    var $view = this;

    $view.HtmlCode.show(new ComponentCodeView({
      template: $view.options.templateHtml
    }));
    if ($view.options.templateJs){
      $view.JsCode.show(new ComponentCodeView({
        template: $view.options.templateJs
      }));
    } 
  }

  function fncOnShow(){
    var $view = this;

    $view.ui.codeSnippets.each(function(i, block) {

       if ($(block).hasClass("html") || $(block).hasClass("javascript")){
         block.innerHTML = block.innerHTML.replace(/</g, "&lt");
       }

       hljs.highlightBlock(block);

   });

    $view.ui.codeTabs.rup_tabs({
        tabs : [
          {i18nCaption:"HTML", layer:"pre:has(code.html)"},
          {i18nCaption:"JavaScript", layer:"pre:has(code.javascript)"}
        ]
    });
  }


  function fncOnAttach(){
    this.ui.codeTabs.rup_tabs({
        tabs : [
          {i18nCaption:"HTML", layer:"pre:has(code.html)"},
          {i18nCaption:"JavaScript", layer:"pre:has(code.javascript)"}
        ]
    });
  }

  return ComponentExampleCodeView;
});
