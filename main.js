(function($) {
  var scrumCardElement = $('.scrum-card');
  var selectCardElement = $('#select-choice-a');

  $(selectCardElement).change(function() {
    var sVal = selectCardElement.val();
    scrumCardElement.text(sVal);
  });
})(jQuery);
