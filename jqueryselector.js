$(document).ready(function() {
  $('#nbrTxt').focus();

  //add item function
  function addItem() {

    var value = $('#nbrTxt').val();
    var usrName = prompt("What is the Programmer's Name?");

    $('table>tbody').empty();
    for (var i = 1; i <= value; i++) {
      $('table').append('<tr><td></td><td></td></tr>');
      $('table tr:last td:first').html(i);
      $('table tr:last td:last').html(usrName);
      $(this).focus().select();
    };
  };
  
  //Add item on "GO" click
  $('#btnGo').click(addItem);

  //Add item on Enter
  $('#nbrTxt').keydown(function(e) {
    if (e.which === 13)
      addItem();
  })
  //Shade every other row
  $(document).on('click', '#shade', function() {
    $('tr:not(:first-child):even').toggleClass('shade');
  })
  //Underline every tenth row
  $(document).on('click', '#drkLine', function() {
    $('tr:nth-child(10n+10)').toggleClass('underline')
  })
  //reset table on Reset Button Click
  $(document).on('click', '#btnReset', function() {
    $('tr').each(function() {
      $(this).closest('tbody').remove();
      $('#nbrTxt').focus().select();
    })
  })
});
