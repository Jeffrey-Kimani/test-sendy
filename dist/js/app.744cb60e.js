webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,n){t.exports=n("NHnr")},Jmt5:function(t,e){},KWv7:function(t,e,n){"use strict";var s=n("/5sW"),a=n("/ocq"),i={},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"row",staticStyle:{margin:"0"}},[n("div",{staticClass:"container"},[n("transition",[n("router-view")],1)],1)])])},r=[],l=n("XyMi");function c(t){n("qB1J")}var u=!1,p=c,m=null,d=null,f=Object(l["a"])(i,o,r,u,p,m,d),v=f.exports,h=n("fKPv"),g=n.n(h),y={data:function(){var t;return t={vehicles:[],markers:[],selectedVehicle:{fuel:0,speed:60,degree:72},showCard:!0,map:{},numDeltas:100,delay:10,i:0,deltaLat:0,deltaLng:0,position:[40.748774,-73.985763]},g()(t,"markers",[]),g()(t,"marker",{}),g()(t,"markerData",{}),t},methods:{setMarker:function(t,e){console.log("Position",this.marker.pos,"New Pos",e),this.transition(e,this.marker.pos),this.marker.pos(e)},initializeMap:function(){var t,e=this,n=[],s=new google.maps.LatLngBounds,a={center:{lat:-1.300355,lng:36.77385},zoom:15,styles:'[\n                    {\n                        "featureType": "landscape",\n                        "elementType": "labels",\n                        "stylers": [\n                            {\n                                "visibility": "off"\n                            }\n                        ]\n                    },\n                    {\n                        "featureType": "transit",\n                        "elementType": "labels",\n                        "stylers": [\n                            {\n                                "visibility": "off"\n                            }\n                        ]\n                    },\n                    {\n                        "featureType": "poi",\n                        "elementType": "labels",\n                        "stylers": [\n                            {\n                                "visibility": "off"\n                            }\n                        ]\n                    },\n                    {\n                        "featureType": "water",\n                        "elementType": "labels",\n                        "stylers": [\n                            {\n                                "visibility": "off"\n                            }\n                        ]\n                    },\n                    {\n                        "featureType": "road",\n                        "elementType": "labels.icon",\n                        "stylers": [\n                            {\n                                "visibility": "off"\n                            }\n                        ]\n                    },\n                    {\n                        "stylers": [\n                            {\n                                "hue": "#00aaff"\n                            },\n                            {\n                                "saturation": -100\n                            },\n                            {\n                                "gamma": 2.15\n                            },\n                            {\n                                "lightness": 12\n                            }\n                        ]\n                    },\n                    {\n                        "featureType": "road",\n                        "elementType": "labels.text.fill",\n                        "stylers": [\n                            {\n                                "visibility": "on"\n                            },\n                            {\n                                "lightness": 24\n                            }\n                        ]\n                    },\n                    {\n                        "featureType": "road",\n                        "elementType": "geometry",\n                        "stylers": [\n                            {\n                                "lightness": 57\n                            }\n                        ]\n                    }\n                ]'};e.map=new google.maps.Map(document.getElementById("vehicle-map"),a);var i=new google.maps.LatLng(-1.300355,36.77385);s.extend(i);new google.maps.Size(60,80),new google.maps.Point(0,0),new google.maps.Point(0,32);t=new google.maps.Marker({position:i,map:e.map,title:"Hello",pos:[-1.300355,36.77385]}),e.markers.push({id:"KBA 234A",pos:[-1.300355,36.77385],marker:t}),e.marker=t,t.setIcon("/img/bus-yellow.svg");new MarkerClusterer(e.map,n,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});for(var o=[[-1.300355,36.77385],[-1.300184,36.776811],[-1.29984,36.779386],[-1.298897,36.779407],[-1.299004,36.777841],[-1.298982,36.776811],[-1.297459,36.776747],[-1.296193,36.776726],[-1.296097,36.779236],[-1.296151,36.777637],[-1.296215,36.776693],[-1.294252,36.776586],[-1.294048,36.77679],[-1.293973,36.779118],[-1.292622,36.779075],[-1.291844,36.779049],[-1.291879,36.778389]],r=function(t){o[t];setTimeout(function(){console.log("Moving"),e.setMarker("",o[t])},5e3*t)},l=0;l<o.length;l++)r(l)},transition:function(t,e){this.i=0,this.deltaLat=(t[0]-e[0])/this.numDeltas,this.deltaLng=(t[1]-e[1])/this.numDeltas,this.moveMarker(e)},moveMarker:function(t){t[0]+=this.deltaLat,t[1]+=this.deltaLng;var e=new google.maps.LatLng(t[0],t[1]);this.marker.setTitle("Latitude:"+t[0]+" | Longitude:"+t[1]),this.marker.setPosition(e),this.i!=this.numDeltas&&(this.i++,setTimeout(this.moveMarker(t),this.delay))}},mounted:function(){this.initializeMap()}},k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{staticClass:"map",attrs:{id:"vehicle-map"}}),n("div",{staticClass:"vehicles"},[n("div",{staticClass:"input-group mb-2 mr-sm-2 input-icon"},[n("div",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-text"},[n("i",{staticClass:"fa fa-truck"})])]),n("input",{staticClass:"form-control",attrs:{type:"text",id:"find-truck",placeholder:"Find a truck"}}),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-text"},[n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")])])])])])])}];function b(t){n("PoFl")}var C=!1,x=b,T=null,_=null,P=Object(l["a"])(y,k,w,C,x,T,_),M=P.exports,L={mounted:function(){this.$nextTick(function(){$(".jumbotron").hide("slow"),$(".jumbotron").fadeIn("slow")})}},j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards"},[n("div",{staticClass:"row",staticStyle:{margin:"0"}},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"fx-heading-box"},[n("div",{staticClass:"fx-h3"},[t._v("Test")]),n("div",{staticClass:"fx-text"},[t._v("This is a test page")])])]),n("div",{staticClass:"col-12 my-3"},[n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"display-4"},[t._v("Hello, world!")]),n("p",{staticClass:"lead"},[t._v("This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.")]),n("hr",{staticClass:"my-4"}),n("p",[t._v("It uses utility classes for typography and spacing to space content out within the larger container.")]),n("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"#",role:"button"}},[t._v("Learn more")])])])])])}];function J(t){n("ZdPo")}var S=!1,D=J,W=null,B=null,I=Object(l["a"])(L,j,E,S,D,W,B),K=I.exports;s["a"].use(a["a"]);e["a"]=new a["a"]({mode:"history",routes:[{path:"/",name:"LandingPage",component:M},{path:"/nested",component:v,children:[{path:"/",name:"TestPage",component:K}]}]})},M93x:function(t,e,n){"use strict";var s={name:"app"},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",[n("router-view")],1)],1)},i=[],o=n("XyMi");function r(t){n("+VGo")}var l=!1,c=r,u=null,p=null,m=Object(o["a"])(s,a,i,l,c,u,p);e["a"]=m.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n("/5sW"),s=n("M93x"),a=n("KWv7"),i=n("7t+N"),o=n.n(i),r=n("sUu7"),l=n("18Sv"),c=n.n(l),u=n("kb3J"),p=n("Jmt5"),m=(n.n(p),n("QYCU"));n.n(m);t.jQuery=o.a,t.$=o.a,t.req=new u["a"];n("K3J8");e["a"].use(r["a"]),e["a"].use(c.a),e["a"].config.productionTip=!1,new e["a"]({el:"#app",router:a["a"],render:function(t){return t(s["a"])}})}.call(e,n("DuR2"))},PoFl:function(t,e){},QYCU:function(t,e){},ZdPo:function(t,e){},kb3J:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var s=n("VjuZ"),a=(n.n(s),n("y9m4")),i=(n.n(a),n("Z60a")),o=n.n(i),r=n("C9uT"),l=n.n(r);window.axios=n("mtWM");var c="http://kopacentafrica.com/api/web/v1",u=function(){function t(){o()(this,t)}return l()(t,[{key:"getParsedUrl",value:function(t){return c+t}},{key:"callServer",value:function(t){return new Promise(function(e,n){axios.post(c,t).then(function(t){e(t)}).catch(function(t){void 0!=t.response&&t.response.status,n(t)})})}},{key:"callServerMultipart",value:function(t){return new Promise(function(e,n){axios.post(c,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e(t)}).catch(function(t){void 0!=t.response&&t.response.status,n(t)})})}},{key:"callServerWithToken",value:function(t){return new Promise(function(e,n){axios.defaults.headers.common["token"]=t.token,axios.post(c,t).then(function(t){e(t)}).catch(function(t){void 0!=t.response&&t.response.status,"11111"===t.response.data.Error.code&&window.location.replace("/log-in"),n(t)})})}},{key:"callServerIndependent",value:function(t,e,n,s){var a=this;return new Promise(function(i,o){axios.defaults.headers.common["token"]=a.$session.get("user").token,axios.post(c,{action:t,resource:e,data:n,metadata:s}).then(function(t){i(t)}).catch(function(t){void 0!=t.response&&t.response.status,o(t)})})}}]),t}()},qB1J:function(t,e){}},[0]);
//# sourceMappingURL=app.744cb60e.js.map