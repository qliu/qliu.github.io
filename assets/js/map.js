var map = L.map('map',{worldCopyJump:true});
map.setView([35.2965835,0], 3);
map.worldCopyJump = true;
var basemap = L.tileLayer(
'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
maxZoom: 18,
minZoom: 3,
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'examples.map-20v6611k',
});
basemap.addTo(map);

var mapTitle = L.control({position: 'bottomleft'});
mapTitle.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'map-title');
  this._div.innerHTML = "<h3>Places I've been to ...</h3>";
  return this._div;
};
mapTitle.addTo(map);

var marker_nanjing = L.marker([32.0992691,118.7377506]).addTo(map);
var marker_zhenjiang = L.marker([32.1752387,119.4593668]).addTo(map);
var marker_yangzhou = L.marker([32.4174549,119.4894129]).addTo(map);
var marker_wuxi = L.marker([31.5702698,120.3126526]).addTo(map);
var marker_suzhou = L.marker([31.3283481,120.6443024]).addTo(map);
var marker_lianyungang = L.marker([34.5963511,119.2009735]).addTo(map);
var marker_shanghai = L.marker([31.2243489,121.4767528]).addTo(map);
var marker_hangzhou = L.marker([30.2613905,120.1718902]).addTo(map);
var marker_zhangjiajie = L.marker([29.1155453,110.5265808]).addTo(map);
var marker_kunming = L.marker([25.0213872,102.7410507]).addTo(map);
var marker_dali = L.marker([25.5726647,100.2308035]).addTo(map);
var marker_lijiang = L.marker([26.8698697,100.2268982]).addTo(map);
var marker_xishuangbanna = L.marker([21.9794698,100.8146668]).addTo(map);
var marker_hainan = L.marker([19.1561581,109.9471588]).addTo(map);
var marker_beijing = L.marker([39.9388838,116.3974589]).addTo(map);
var marker_hongkong = L.marker([22.3700556,114.1535941]).addTo(map);
var marker_macau = L.marker([22.1634178,113.5629425]).addTo(map);
var marker_tokyo = L.marker([35.673343,139.710388]).addTo(map);
var marker_yokohama = L.marker([35.46195,139.61925]).addTo(map);
var marker_hakone = L.marker([35.2324916,139.0475768]).addTo(map);
var marker_nagoya = L.marker([35.16805,136.9116]).addTo(map);
var marker_kyoto = L.marker([35.0061,135.76095]).addTo(map);
var marker_oosaka = L.marker([34.6784,135.49515]).addTo(map);
var marker_saipan = L.marker([15.1778007,145.750967]).addTo(map);
var marker_tinian = L.marker([15.0118918,145.6280315]).addTo(map);
var marker_puket = L.marker([7.8833609,98.3919135]).addTo(map);
var marker_phiphiislands = L.marker([7.7526521,98.7741031]).addTo(map);
var marker_denver = L.marker([39.7643389,-104.8551114]).addTo(map);
var marker_tallahasee = L.marker([30.4671395,-84.2568559]).addTo(map);
var marker_pensacola = L.marker([30.4540759,-87.2038516]).addTo(map);
var marker_newyork = L.marker([40.7590615,-73.969231]).addTo(map);
var marker_buffalo = L.marker([42.8962389,-78.854702]).addTo(map);
var marker_boston = L.marker([42.3133735,-71.0571571]).addTo(map);
var marker_washignton = L.marker([38.8935965,-77.014576]).addTo(map);
var marker_knoxville = L.marker([35.9584634,-83.9250825]).addTo(map);
var marker_losangeles = L.marker([34.0204989,-118.4117325]).addTo(map);
var marker_santamonica = L.marker([34.0218628,-118.4804206]).addTo(map);
var marker_sanfrancisco = L.marker([37.7577,-122.4376]).addTo(map);
var marker_burlingame = L.marker([37.5860415,-122.3676346]).addTo(map);
var marker_mountainview = L.marker([37.4038194,-122.081267]).addTo(map);
var marker_cupertino = L.marker([37.3092499,-122.0436445]).addTo(map);
var marker_paloalto = L.marker([37.42565,-122.13535]).addTo(map);
var marker_austin = L.marker([30.3077609,-97.7534014]).addTo(map);
var marker_houston = L.marker([29.8171779,-95.4012915]).addTo(map);
var marker_maui = L.marker([20.8624968,-156.6448453]).addTo(map);
var marker_ottawa = L.marker([45.373551,-75.6845615]).addTo(map);
var marker_toronto = L.marker([43.7182712,-79.3777061]).addTo(map);
var marker_niagrafalls = L.marker([43.0539325,-79.0880345]).addTo(map);
var marker_longdon = L.marker([51.5286417,-0.1015987]).addTo(map);
var marker_nottingham = L.marker([52.9540225,-1.1700618]).addTo(map);
var marker_portland = L.marker([45.5424364,-122.654422]).addTo(map);
var marker_vancouver = L.marker([49.2569684,-123.1239135]).addTo(map);
var marker_seattle = L.marker([47.614848,-122.3359059]).addTo(map);
var marker_sanjose = L.marker([37.3317651,-121.8865425]).addTo(map);
var marker_oahu = L.marker([21.4837543,-157.9652284]).addTo(map);