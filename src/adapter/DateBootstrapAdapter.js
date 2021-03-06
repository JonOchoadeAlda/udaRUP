
( function(root, factory ) {
 if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define( ["jquery","../rup.base","../templates"], factory );
 } else {

    // Browser globals
    root.DateBootstrapAdapter = factory( jQuery );
 }
} (this,  function( $ ) {

  function DateBootstrapAdapter(){

  }

  DateBootstrapAdapter.prototype.initIconTrigger = function (settings) {
    //Imagen del calendario
    //settings.buttonImage = $.rup.STATICS + (settings.buttonImage ? settings.buttonImage : "/rup/basic-theme/images/calendario.png");
    settings.buttonText = '<i class="fa fa-calendar" aria-hidden="true"></i>';
    //Atributos NO MODIFICABLES
    //La imagen no debe ser un botón
    settings.buttonImageOnly = false;
    //Solo permitir caracteres permitidos en la máscara
    settings.constrainInput = true;
    //Mostrar patrón con foco en input y pinchando imagen
    settings.showOn = "both";
  };

  DateBootstrapAdapter.prototype.postConfigure = function (settings) {
    var $self = this,
      data = $self.data("datepicker"),
      $input = data.input,
      $trigger = data.trigger,
      $div;

      $div = $("<div>").addClass("rup-date-input-group");
      $input.add($trigger).wrapAll($div);
  };



  return DateBootstrapAdapter;
}));
