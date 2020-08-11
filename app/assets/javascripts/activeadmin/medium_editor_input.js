function initMediumEditors() {
  $('.medium-editor').each(function() {
    if(!$(this).hasClass('medium-editor--active')) {
      var options = {};
      options = $.extend({}, options, $(this).data('options'));
      var editor = new MediumEditor($(this), options);
      $(this).addClass('medium-editor--active');
      $('.editable').mediumInsert({
        editor: editor
      });
    }
  });
}

$(document).on('has_many_add:after', function() {
  initMediumEditors();
});

$(document).ready(function() {
  initMediumEditors();
});
