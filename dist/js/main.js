$(document).ready(function() {
  $("#fullpage").fullpage({
    sectionsColor: ["#0f0", "#00f", "#f00", "#f0f", "#0ff"],
    autoscrolling: true,
    scrollHorizontally: true,
    navigation: true,
    anchors: ["section1", "section2", "section3", "section4", "section5"],
    navigationTooltips: ["TOP", "About Us", "Activity", "Member", "Contact"],
    showActiveTooltip: true,
    scrollingSpeed: 1200,
    loopTop: true,
    loopBottom: true,
    onLeave: function(origin, destination, direction) {
      console.log("onLeave", origin.index, destination.index);
      if (origin.index == 1) {
        $(".content1").slideUp();
      } else if (origin.index == 2) {
        $(".content2").slideUp();
      } else if (origin.index == 3) {
        $(".content3").slideUp();
      } else if (origin.index == 4) {
        $(".content4").slideUp();
      }
    },
    afterLoad: function(origin, destination, direction) {
      console.log("afterLoad", origin.index, destination.index);
      if (destination.index == 1) {
        $(".content1").slideDown();
      } else if (destination.index == 2) {
        $(".content2").slideDown();
      } else if (destination.index == 3) {
        $(".content3").slideDown();
      } else if (destination.index == 4) {
        $(".content4").slideDown();
      }
    }
  });

  $(document).on("click", "#turnOff", function() {
    fullpage_api.setAutoScrolling(false);
  });

  $(document).on("click", "#turnOn", function() {
    fullpage_api.setAutoScrolling(true);
  });
});
