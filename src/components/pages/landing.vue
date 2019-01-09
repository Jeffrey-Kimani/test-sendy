<template lang="html">
    <div class="dashboard">
        <div class="top">Test Sendy</div>
        <div class="map" id="vehicle-map"></div>
        <div class="vehicles">
            <div class="input-group mb-2 mr-sm-2 input-icon">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <i class="fa fa-truck"></i>
                    </div>
                </div>
                <input type="text" class="form-control" id="find-truck" placeholder="Find a truck">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // moment: {},
                vehicles: [],
                markers: [],
                selectedVehicle: {
                    fuel: 0,
                    speed: 60,
                    degree: 72
                },
                showCard: true,
                map: {},
                numDeltas:5000,
                delay:0, //milliseconds
                i:0,
                deltaLat: 0,
                deltaLng: 0,
                position: [40.748774, -73.985763],
                markers: [],
                marker: {},
                markerData: {}
            }
        },
        methods: {
            setMarker(reg_no, newPos){
                console.log("Position",this.marker.pos,"New Pos",newPos)
                this.transition(newPos,this.marker.pos);
                this.marker.pos(newPos)
            },
            moveMarkers(){
                let _this = this
                var locations = [
                    [-1.300355, 36.773850],
                    [-1.300184, 36.776811],
                    [-1.299840, 36.779386],
                    [-1.298897, 36.779407],
                    [-1.299004, 36.777841],
                    [-1.298982, 36.776811],
                    [-1.297459, 36.776747],
                    [-1.296193, 36.776726],
                    [-1.296097, 36.779236],
                    [-1.296151, 36.777637],
                    [-1.296215, 36.776693],
                    [-1.294252, 36.776586],
                    [-1.294048, 36.776790],
                    [-1.293973, 36.779118],
                    [-1.292622, 36.779075],
                    [-1.291844, 36.779049],
                    [-1.291879, 36.778389]
                ]

                for (let i = 0; i < locations.length; i++) {
                    const l = locations[i];
                    
                    setTimeout(() => {
                        // var marker = new SlidingMarker({
                        //     position: myLatlng,
                        //     map: map,
                        //     title: "I'm sliding marker",
                        //     duration: 5000,
                        //     easing: "easeOutExpo"
                        // });
                        this.marker.setPosition( new google.maps.LatLng(l[0], l[1]));
                    }, i * 5000);
                }
            },
            rotateMarker(icon, deg){
                console.log('rotating')
                $(`img[src*="sendy"]`).css(
                    {'-webkit-transform' : 'rotate('+ deg +'deg)',
                    '-moz-transform' : 'rotate('+ deg +'deg)',
                    '-ms-transform' : 'rotate('+ deg +'deg)',
                    'transform' : 'rotate('+ deg +'deg)'});
                // $(`img[src*="sendy"]`).css(
                //     {'-webkit-transform' : 'rotate('+ deg +'deg)',
                //     '-moz-transform' : 'rotate('+ deg +'deg)',
                //     '-ms-transform' : 'rotate('+ deg +'deg)',
                //     'transform' : 'rotate('+ deg +'deg)'}); 
            },
            initializeMap(){
                var _this = this, marker, positions = [];

                var bounds = new google.maps.LatLngBounds();
                var mapOptions = {
                    center: {lat: -1.300355, lng: 36.773850},
                    zoom: 15,
                    styles: JSON.parse(`[
                        {
                            "featureType": "landscape",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "stylers": [
                                {
                                    "hue": "#00aaff"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "gamma": 2.15
                                },
                                {
                                    "lightness": 12
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "lightness": 24
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "lightness": 57
                                }
                            ]
                        }
                    ]`)
                }
                _this.map = new google.maps.Map(document.getElementById('vehicle-map'), mapOptions);

                var position = new google.maps.LatLng(-1.300355,36.773850);
                bounds.extend(position);
                var locations = [
                    [-1.300355, 36.773850],
                    [-1.300184, 36.776811],
                    [-1.299840, 36.779386],
                    [-1.298897, 36.779407],
                    [-1.299004, 36.777841],
                    [-1.298982, 36.776811],
                    [-1.297459, 36.776747],
                    [-1.296193, 36.776726],
                    [-1.296097, 36.779236],
                    [-1.296151, 36.777637],
                    [-1.296215, 36.776693],
                    [-1.294252, 36.776586],
                    [-1.294048, 36.776790],
                    [-1.293973, 36.779118],
                    [-1.292622, 36.779075],
                    [-1.291844, 36.779049],
                    [-1.291879, 36.778389]
                ]

                var icon = {
                    // url: 'https://images.sendyit.com/web_platform/vendor_type/top/2.svg',
                    // url: '/img/bus-yellow.svg',
                    url: '/img/sendy.png',
                    scaledSize: new google.maps.Size(40, 40), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0)
                    // path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    // scale: -5
                    // url: RotateIcon
                    //         .makeIcon(
                    //             '/img/sendy.png')
                    //         .setRotation({deg: 92})
                    //         .getUrl()
                }

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[0][0], locations[0][1]),
                    map: _this.map,
                    title:'Sendy Vehicle',
                    duration: 6000,
                    pos: [-1.300355, 36.773850],
                    easing: "linear",
                    // icon: icon
                });
                var heading = google.maps.geometry.spherical.computeHeading(new google.maps.LatLng(locations[0][0], locations[0][1]),new google.maps.LatLng(locations[1][0], locations[1][1]));
                // icon.rotation = heading;
                marker.setIcon(icon);
                setTimeout(() => {
                    this.rotateMarker('sendy',heading)
                }, 800);


                for (let i = 1; i < locations.length; i++) {
                    const l = locations[i];
                    
                    
                    setTimeout(() => {
                        console.log(new google.maps.LatLng(locations[i-1][0], locations[i-1][1]),new google.maps.LatLng(l[0], l[1]))
                        var heading = google.maps.geometry.spherical.computeHeading(new google.maps.LatLng(locations[i-1][0], locations[i-1][1]),new google.maps.LatLng(l[0], l[1]));
                        setTimeout(() => {
                            this.rotateMarker('sendy',heading)
                        }, 400);
                        // icon.rotation = heading;
                        marker.setIcon(icon);
                        marker.setPosition(new google.maps.LatLng(l[0], l[1]));
                    }, i * 5000);
                }

                // _this.moveMarkers()
            }
        },
        mounted(){
            this.initializeMap();
        }
    }
</script>

<style lang="less">
    .dashboard{
        .top{
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            font-size: 20px;
            // text-align: center;
            padding: 30px;
            padding-top: 10px;
        }
        .map{
            width: 75%;
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            z-index: 50;
        }
        .vehicle-details{
            width: 30%;
            max-width: 400px;
            position: absolute;
            bottom: 0;
            z-index: 500;
            
            .close{
                color: #aaaaaa;
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 16px;
                cursor: pointer;
            }
            .close:hover{
                color: #343a40;
            }
            .head{  
                display: flex;
                justify-content: center;
            }
            .demo{
                margin: 10px 0;
            }
            .detail-row{
                display: flex;
                padding: 15px 10px;
                border-bottom: .07rem dashed #ebedf2;
                .icon{
                    margin: 5px 15px 0 0;
                    font-size: 30px;
                }
            }
            .detail-row:last-child{
                border: 0;
            }
        }
        .vehicles{
            position: absolute;
            width: 25%;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 100;
            opacity: .9;
            background: #fff;
            overflow-y: scroll;
            padding: 10px;
        }
        .truck{
            margin: 20px 5px 20px 20px;

            .date{
                font-size: 12px;
                float: right;
            }
            .text{
                font-size: 13px;
            }
            .badge{
                float: right;
                padding: 5px 6px;
                font-size: 11px;

                .dark{
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
                .fa{
                    color: #fff !important;
                }
            }
        }
        #find-truck{
            padding: 10px 7px;
        }

    }
    @media (max-width: 1020px){
        .dashboard{
            .map{
                width: 62%;
            }
            .vehicles{
                width: 38% !important;
            }
            .vehicle-details{
                width: 40%;
            }
        }
    }
    @media (max-width: 864px){
        .dashboard{
            .map{
                width: 100%;
                bottom: 30vh;
            }
            .vehicles{
                bottom: 0;
                top: 70vh;
                width: 100% !important;
                overflow-y: scroll;
            }
            .vehicle-details{
                top: 70px;
                bottom: unset;
                bottom: none;
                width: 85%;
            }
        }
    }
</style>