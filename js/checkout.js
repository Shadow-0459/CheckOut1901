/**
 * Created by Mr Ripper on 2017/3/27.
 */
    var oBtn = document.getElementById('btn');
    var oDiv = document.getElementById('div1');
    var oTime1 = document.getElementById('time1');
    var oTime2 = document.getElementById('time2');
    //var oChoice1 = document.getElementById('choice1');
    var  time1 = (oTime1.value).replace("T", " ");
    var time2 = (oTime2.value).replace("T", " ");;
    // var choice1 = oChoice1.value;
    oTime1.onblur = function(){
        time1 = this.value;
    };
    oTime2.onblur = function(){
        time2 = this.value;
    };
    // oChoice1.onblur = function(){
    //     choice1 = this.value;
    // };
    console.log(time1);
    console.log(time2);
    oBtn.onclick = function(){
        // <创建XMLrequest对象>

        if(window.XMLHttpRequest){
            var xmlhttp = new XMLHttpRequest();
        }else{
            var xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // time1.replace(/T/g,' ');
        // time2.replace(/T/g,' ');
        time1 = time1.replace("T",' ');
        time2 = time2.replace("T",' ');




        //发送请求
        xmlhttp.open('POST','js/servers.php',true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send('first='+time1+'&last='+time2);//'time1='+time1+'&time2='+time2
        xmlhttp.onreadystatechange = function() {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                var obj = JSON.parse(xmlhttp.responseText);
                console.log(obj);

                oDiv.innerHTML = xmlhttp.responseText;

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(oDiv);

                 // 指定图表的配置项和数据
                 var base = +new Date(1901, 2, 0);
                 var oneDay = 24 * 3600 * 1000;
                 //var date = [];

                 var data = [0];

                 for (var i = 1; i < 365; i++) {
                 var now = new Date(base += oneDay);
                 //date.push([now.getFullYear(), now.getMonth() + 1, now.getDate(),now.getHours()].join('/'));
                 var myData = obj.arr;
                 //console.log(myData[i]);
                 data.push(myData[i]);
                 }

                 option = {
                 tooltip: {
                 trigger: 'axis',
                 position: function (pt) {
                 return [pt[0], '10%'];
                 }
                 },
                 title: {
                 left: 'center',
                 text: '大数据量面积图',
                 },
                 toolbox: {
                 feature: {
                 dataZoom: {
                 yAxisIndex: 'none'
                 },
                 restore: {},
                 saveAsImage: {}
                 }
                 },
                 xAxis: {
                 type: 'category',
                 boundaryGap: false,
                 data: obj.str
                 // [<?php echo $str;?>]
                 },
                 yAxis: {
                 type: 'value',
                 boundaryGap: [0, '100%']
                 },
                 dataZoom: [{
                 type: 'inside',
                 start: 0,
                 end: 10
                 }, {
                 start: 0,
                 handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                 handleSize: '80%',
                 handleStyle: {
                 color: '#fff',
                 shadowBlur: 3,
                 shadowColor: 'rgba(0, 0, 0, 0.6)',
                 shadowOffsetX: 2,
                 shadowOffsetY: 2
                 }
                 }],
                 series: [
                 {
                 name:'温度',
                 type:'line',
                 smooth:true,
                 symbol: 'none',
                 sampling: 'average',
                 itemStyle: {
                 normal: {
                 color: 'rgb(255, 70, 131)'
                 }
                 },
                 areaStyle: {
                 normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                 offset: 0,
                 color: 'rgb(255, 158, 68)'
                 }, {
                 offset: 1,
                 color: 'rgb(255, 70, 131)'
                 }])
                 }
                 },
                 data: data,
                 markPoint:{data:[{type:'max',name:'最大值'},{type:'min',name:'最小值'}]}
                 }
                 ]
                 };
                 // 使用刚指定的配置项和数据显示图表。
                 myChart.setOption(option);
            }
        }
    };