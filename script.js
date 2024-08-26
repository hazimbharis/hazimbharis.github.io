$(function(){
    var x = 0;
    var y = 0;
    setInterval(function(){
      x -=3;
      y -=2;
      $('#bg').css('background-position', x + 'px ' + y +'px');
    }, 50);
  });