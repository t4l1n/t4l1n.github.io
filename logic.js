window.onload = function() {
  var boxes = document.getElementsByClassName("box");

  // append 'active' on click
  for(i = 0; i < boxes.length; i ++) {
    var activeClass = " active";
    boxes[i].addEventListener("click", function() { 
      if(this.className.indexOf(activeClass) == -1) {
        this.className = this.className + activeClass;
      }
    });

    // // remove 'active' class on double click
    // boxes[i].addEventListener("dblclick", function() {
    //   if(this.className.indexOf(activeClass) != -1) {
    //     this.className = this.className.replace(activeClass, "");
    //   }
    // });
  }

  var vidsAreas = document.getElementsByClassName("overlay2-clickableArea");
  var vids = document.getElementsByTagName("video");

  for(var i = 0; i < vidsAreas.length; i++) {
    vidsAreas[i].addEventListener("mousedown", startStop);
  }

  for(var i = 0; i < vids.length; i++) {
    vids[i].addEventListener("ended", showOverlay);
  }
}

/**
 * Event callback function
 */
var startStop = function() {
  var parent = this.parentElement;
  var video = parent.getElementsByTagName("video")[0];
  var overlay1 = parent.getElementsByClassName("overlay")[0];
  var overlay2 = parent.getElementsByClassName("overlay2")[0];

  if(video.paused) {
    videoStart(video, overlay1, overlay2)
  }
  else {
    videoStop(video, overlay1, overlay2)
  }
}

var showOverlay = function() {
  var parent = this.parentElement;
  var overlay1 = parent.getElementsByClassName("overlay")[0];
  var overlay2 = parent.getElementsByClassName("overlay2")[0];

  videoStop(this, overlay1, overlay2);
}

// *****************************************************************************************************************

var videoStart = function(video, overlay1, overlay2) {
  console.log("PLAYING VID");
  video.play();
  video.setAttribute("controls", "controls");
  overlay1.style.opacity = "0";
  overlay2.style.opacity = "0";
}

var videoStop = function(video, overlay1, overlay2) {
  console.log("PAUSING VID");
  video.pause();
  video.removeAttribute("controls");
  overlay1.style.opacity = "1";
  overlay2.style.opacity = "1";
}