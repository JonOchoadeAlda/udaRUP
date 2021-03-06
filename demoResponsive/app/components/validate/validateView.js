define(['marionette',
        'templates',
        './validateBodyView',
        './validateTestView',
        '../../shared/component/componentExampleCodeView',
        'rup/rup.validate'], function(Marionette, App, ValidateBodyView, ValidateTestView, ComponentExampleCodeView){

  var ValidateView = Marionette.LayoutView.extend({
      template: App.Templates.demoResponsive.app.shared.component.componentLayoutTemplate,
      regions:{
        Main: "#componentMainBody",
        Example: "#exampleCode",
        Test: "#componentTest"
      },
      onRender: fncOnRender
  });

  function fncOnRender(){
    var $view = this;

    $view.Main.show(new ValidateBodyView());
    $view.Example.show(new ComponentExampleCodeView({
      templateHtml: App.Templates.demoResponsive.app.components.validate.validateHtmlCodeTemplate,
      templateJs: App.Templates.demoResponsive.app.components.validate.validateJsCodeTemplate
    }));
    $view.Test.show(new ValidateTestView());
  }


  return ValidateView;
});
