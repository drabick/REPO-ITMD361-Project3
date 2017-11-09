//-- Goofle Mao Place MaRKER API Jscript -->
      
function initMap() {
  var myLatLng = {lat: 41.526899, lng: -88.078976};
          
  var aboutstring = '<h1>Chicago Street Pinball Arcade</h1><p>There are few things more truly American than pinball. Did you know that over 90% of the worlds pinball' + 
  ' machines have been designed and manufactured in the Chicago area?  Its true.  And is still true to this day.Pinball is something that can only approximated, and never duplicated.' +
  '  No two games are ever the same, and there arent patterns to memorize to guarantee you the high score.Pinball is a completely visceral experience, immersing and saturating the senses,'+
  ' which is something smart phones and consoles just cant do.Come visit us in historic Downtown Joliet, a block off of old Route 66, for your chance to partake in pinball for the first time,'+
  ' or the thousandth time.  Either way, youll be drawn back to the lure of the mystical silver ball.</p>';

  var infowindow = new google.maps.InfoWindow({
    content: aboutstring
    });   
    
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: myLatLng
  //mapTypeControl: true,
  //mapTypeControlOptions: {
  //  style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
  //  position: google.maps.ControlPosition.TOP_CENTER
  //  }
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'pin.png'
  });
  
  google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);  	
  });
                
}      