$(function () {
	$.getJSON( "json/china.json" ).done(function ( response ) {
		// jsMap.config( "#map-01", response );
		// jsMap.config( "#map-02", response, {
		// 	areaName: {
		// 		show: true
		// 	}
		// });
		// jsMap.config( "#map-03", response, {
		// 	multiple: true
		// });
		// $( "#get-multiple-1" ).on("click", function () {
		// 	console.log( jsMap.multipleValue( "#map-03" ) );
		// })
		// $( "#get-multiple-2" ).on("click", function () {
		// 	console.log( jsMap.multipleValue( "#map-03" , { type: "object" } ) );
		// })
		// jsMap.config( "#map-04", response, {
		// 	stroke: {
		// 		width: 2,
		// 		color: "#000"
		// 	}
		// });
		// jsMap.config( "#map-05", response, {
		// 	fill: {
        //         basicColor: "#259200",
        //         hoverColor: "#57cb00",
        //         clickColor: "#2e6f18"
        //     }
		// });

		jsMap.config( "#map-06", response, {
			areaName: {
				show: true
			},
			stroke: {
				width: 2,
				color: "#FFF"
			},
			fill: {
                basicColor: {
                    heilongjiang: "#FF5900",
                    jilin: "#19BB00",
					liaoning: "#6800FF",
					beijing: "#FF0000",
					hebei: "#006ab7",
					tianjin: "#ae86bb",
					neimenggu: "#A9CC29",
					hubei: "#ffd700",
					henan: "#a9cc29",
					shandong: "#0cc8c3",
					shanxi: "#ea627c",
					shannxi: "#91cdeb",
					xinjiang: "#FB3334",
					xizang: "#ea627c",
					sichuan: "#aac913",
					guangxi: "#ffd700",
					guangzhou: "#006ab7",
					fujian: "#aac913",
					hainan: "#A9CC29",
					shanghai: "#006ab7",
					zhejiang: "#ffd700",
					jiangsu: "#ae86bb",
					anhui: "#ea627c",
					hunan: "#91cdeb",
					chongqing: "#FB3334",
					guizhou: "#ea627c",
					yunnan: "#006ab7",
					gansu: "#ffd700",
					ningxia: "#006ab7",
					taiwan: "#91cdeb",
					jiangxi: "#ae86bb"
                },
                hoverColor: {
                    heilongjiang: "#ff8c4e",
                    jilin: "#1fe000",
                    liaoning: "#954dff"
                },
                clickColor: {
                    heilongjiang: "#c94600",
                    jilin: "#159a00",
                    liaoning: "#5200c9"
                }
            }
		});

		// jsMap.config( "#map-07", response, {
		// 	disabled: {
		// 		name: [ "heilongjiang", "jilin", "liaoning" ]
		// 	}
		// });

		// jsMap.config( "#map-08", response, {
		// 	disabled: {
		// 		name: [ "heilongjiang", "jilin", "liaoning" ],
		// 		except: true
		// 	}
		// });

		// jsMap.config( "#map-09", response, {
		// 	tip: function ( id, name ) {
        //         return '<div style="background:#eee;padding:15px;"><p>id: ' + id + '</p><p>name: ' + name + '</p></div>';
        //     }
		// });

		// var $hoverCallback = $( "#hover-callback" );
		// jsMap.config( "#map-10", response, {
		// 	hoverCallback: function ( id, name ) {
		// 		$hoverCallback.text( id + " --- " + name );
		// 	}
		// });

		// var $clickCallback = $( "#click-callback" );
		// jsMap.config( "#map-11", response, {
		// 	clickCallback: function ( id, name ) {
		// 		$clickCallback.text( id + " --- " + name );
		// 	}
		// });

	})

})