define(['marionette',
        'templates',
        // 'rup/rup.upload','rup/rup.button'], function(Marionette, App){
          'jquery.fileupload','rup/rup.button'], function(Marionette, App){

  var UploadTestView = Marionette.LayoutView.extend({
      template: App.Templates.demoResponsive.app.components.upload.uploadTestTemplate,
      ui:{
        basicFileuploadContext: "#basicFileuploadContext"
      },
      onAttach: fncOnAttach

  });

  function fncOnAttach(){
    var $view = this;

    $('#basicFileupload').fileupload({
        dataType: 'json',
        uploadTemplateId:false,
        downloadTemplateId:false,
        add: function (e, data) {
            $view.ui. basicFileuploadContext.text("Subiendo archivos...");
            data.submit();
        },
        done: function (e, data) {
          $.each(data.result, function (index, file) {
            $view.ui. basicFileuploadContext.text(file.name);
          });
        }
    });

  }



  return UploadTestView;
});
