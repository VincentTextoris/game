$(document).ready(function() {



  $(document).on('keyup', function(event) {
   if(event.which==81){
      var position_red = $('#player1_race .active');
      position_red.removeClass('active');
      position_red.next().addClass('active');
    }
    if($('#end_of_race.active').length == 1){
      alert('Player 1 (Red) win the game !!!');
    }
  });

  $(document).on('keyup', function(event) {
    if(event.which==80){
      var position_yellow = $('#player2_race .active');
      position_yellow.removeClass('active');
      position_yellow.next().addClass('active');
    }
    if($('#end_of_race.active').length == 1){
      alert('Player 2 (Yellow) win the game !!!');
    }
  });

});
