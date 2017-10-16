import { HungryBear } from './../js/hungryBear.js';

$(document).ready(function() {

  let fuzzy = new HungryBear("fuzzy");
  fuzzy.setHunger();
  setInterval(function(){ console.log(fuzzy.foodLevel);
    if (fuzzy.foodLevel > 10) {
      $("#normal").hide();
      $("#eating").show();
      $("#angry").hide();
      $("#message").hide();
    }
    if (fuzzy.foodLevel < 11) {
      $("#normal").show();
      $("#eating").hide();
      $("#angry").hide();
      $("#message").hide();
    }
    if (fuzzy.foodLevel < 5) {
      $("#normal").hide();
      $("#angry").show();
      $("#message").hide();
    }
    if (fuzzy.foodLevel <= 0) {
      $("#angry").hide();
      $("#feed").hide();
      $("#dead").show();
      $("#message").show();
      $("#playagain").show();
    }}, 1000);

    $("#feed").click(function() {
      fuzzy.feed();
    });
});
