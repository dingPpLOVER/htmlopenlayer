$(function() {
	console.log(111)
	// 创建地图实例
	var map = new ol.Map({
		target: 'map', // 地图容器的DOM ID
		layers: [
			new ol.layer.Tile({
				source: new ol.source.XYZ({
					// url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
					
					tileUrlFunction: function(xyz) {
						// console.log(xyz)
						// console.log(obj1)
						// console.log(obj2)
						var z = xyz[0] //缩放级别
						var x = Math.abs(xyz[1]) //横坐标
						var y = Math.abs(xyz[2]) - 1 //纵坐标
					
						if (z > 10) {
							var url =
								'http://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=' +
								x + '&y=' + y + '&z=' + z + ''
							// console.log(url)
							return url
						} else {
							x = 'C' + padLeft(8, x.toString(16))
							y = 'R' + padLeft(8, y.toString(16))
							z = 'L' + padLeft(2, z)
							// console.log(x, y, z)
							// var url = 'mapimg' + '/' + z + '/' + y + '/' + x + '.png';
							url = 'http://' + '221.209.22.251:15003' +
								'/web/mapimg/GD_china' + '/' + z + '/' + y + '/' +
								x + '.png'; //齐齐哈尔服务器图片位置
							// url = require('@/assets/mapimg/'+ z + '/' + y + '/' + x + '.png') 
							console.log(url)
							return url
						}
					}
				}), // 使用高德地图
				// projection: 'EPSG:4326'//投影
			})
		], 
		view: new ol.View({
			center: [127, 47], // 设置地图中心坐标（经纬度）
			zoom: 10, // 设置地图缩放级别
			projection: 'EPSG:4326'//投影
		})
	});
	

	function padLeft(num, val) {
		return (new Array(num).join('0') + val).slice(-num)
	}

})