var pomodoro = (function() {
  var period        = 0;
  var intervalTimer = null;
  var intervalColor = null;

  startPeriod = function() {
    clearInterval(intervalTimer);
    clearInterval(intervalColor);
    document.getElementById('timer').style.backgroundColor = "white";

    intervalTimer = setInterval(function() {
        period--;
        document.getElementById('timer').innerHTML = periodToString(period);
        if (period <= 0) {
            document.getElementById('timer').innerHTML = "Over!";
            clearInterval(intervalTimer);
            changeBgColors();
        }
    }, 1000);
  }

  periodToString = function(aPeriod){
    var minutes = Math.floor(aPeriod/60);
    var seconds = aPeriod - minutes*60;

    return minutes + ':' + (seconds<10 ? '0' + seconds : seconds);
  }

  changeBgColors = function() {
    intervalColor = setInterval(function() {
      var bgColor = document.getElementById('timer').style.backgroundColor;
      var newColor = bgColor !== "red" ? "red" : "white";
      document.getElementById('timer').style.backgroundColor = newColor;
    }, 750);
  }

  return {
    //Events
    work: function(){
      period = 25 * 60;
      startPeriod();
    },

    shortBeak: function(){
      period = 5 * 60;
      startPeriod();
    },

    longBeak: function(){
      period = 15 * 60;
      startPeriod();
    }
  };
})();
