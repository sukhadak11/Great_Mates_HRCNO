$(document).ready(function() {
  $('#addCard').click(function() {
    // Get the values entered in the "Front" and "Back" textareas
    var front = $('#frontData').val();
    var back = $('#backData').val();

    // Check if both front and back are filled
    if (front.trim() === '' || back.trim() === '') {
      alert('Please fill in both the "Front" and "Back" fields.');
      return; // Stop execution if validation fails
    }

    // Construct HTML for the flashcard
    var html = '';
    html += '<div class="pull-left" id="f1_container">';
    html += '<div id="f1_card" class="shadow">';
    html += '<div class="front face"><h1>' + front + '</h1></div>';
    html += '<div class="back face center"><h1>' + back + '</h1></div>';
    html += '</div>';
    html += '</div>';

    // Append flashcard HTML to the card field
    $('#cardField').append(html);

    // Clear textareas for the next input
    $('textarea').val('');
  });
});
