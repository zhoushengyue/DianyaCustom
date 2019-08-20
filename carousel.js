var map = new AMap.Map('Amapcontainer', {
  zoom:17,//级别
  center: [113.016101,28.184624],//中心点坐标113.016101,28.184624高桥建材市场北门
  viewMode:'3D'//使用3D视图
});

var marker = new AMap.Marker({
  position:[113.016101,28.184624]//位置
})
map.add(marker);//添加到地图

var infoWindow = new AMap.InfoWindow({ //创建信息窗体
  isCustom: true,  //使用自定义窗体
  content:'<div><p><b><a href="amapuri://route/plan/?sname=我的位置&dlat=28.184624&dlon=113.016101&dname=长沙典雅橱柜&dev=0&t=0">点此导航到店</a></b></p></div>'
  //offset:new Amap.Pixel(5,-5)
});
var onMarkerClick  =  function(e) {
  infoWindow.open(map, e.target.getPosition());//打开信息窗体
  //e.target就是被点击的Marker
} 
var marker = new AMap.Marker({
   position: [113.016101,28.184624]
})
map.add(marker);
marker.on('click',onMarkerClick);//绑定click事件