
( function(root, factory ) {
 if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define( ["jquery","../rup.base","../templates"], factory );
 } else {

    // Browser globals
    root.UploadBootstrapAdapter = factory( jQuery );
 }
} (this,  function( $ ) {

  function UploadBootstrapAdapter(){

  }

  UploadBootstrapAdapter.prototype.processdone = function (e, data) {
        $(e.target).find('.start').removeAttr("disabled");
  };

  UploadBootstrapAdapter.prototype.downloadTemplate = function(o){
      var that = this,
          rows = $(),
          files = o.files,
          options = o.options;
      rows = $("<ul>").addClass("list-group");

      return Rup.Templates.rup.upload.downloadTemplate({
        files:files
      });

  };

  UploadBootstrapAdapter.prototype.uploadTemplate = function(o) {
        var that = this,
          rows = $(),
          files = o.files,
          options = o.options;

          return Rup.Templates.rup.upload.uploadTemplate({
            files:files,
            submitInForm: options.submitInForm===true?true:undefined,
            notSubmitInForm: !(options.submitInForm===true?true:undefined)
          });
    };

    return UploadBootstrapAdapter;
}));
