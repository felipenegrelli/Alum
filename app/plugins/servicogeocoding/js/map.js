/*
 * Aprende Google Maps Geocoding através de exemplos
 * Miguel Marnoto
 * 2015 - www.marnoto.com
 *
 */

var map;
var marker;


function initialize() {

	var mapOptions = {
		center: new google.maps.LatLng(40.680898,-8.684059),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);


function searchAddress() {

  var addressInput = document.getElementById('address-input').value;
  //var addressInput = "Rua Vila Velha, n89, Nova Brasília, Cariacica, ES";
	var geocoder = new google.maps.Geocoder();


	geocoder.geocode({address: addressInput}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.bounds.b.b;
      long = results[0].geometry.bounds.f.b;
      var myResult = results[0].geometry.location;
      createMarker(myResult);

      map.setCenter(myResult);

      map.setZoom(17);
		}
	});

}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }
  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}