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
                // console.log(obj);

                oDiv.innerHTML = xmlhttp.responseText;

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(oDiv);

                 // 指定图表的配置项和数据
                 var base = +new Date(1901, 2, 0);
                 var oneDay = 24 * 3600 * 1000;
                 //var date = [];



                 for (var i = 1; i < 365; i++) {
                 var now = new Date(base += oneDay);
                 //date.push([now.getFullYear(), now.getMonth() + 1, now.getDate(),now.getHours()].join('/'));

                 }

                option = {
                    title : {
                        text: '1901年海洋温度监测数据来源',
                        subtext: '数值符合',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['极度寒冷','寒冷','危险','冰凉','舒适']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:obj.num[0], name:'极度寒冷'},
                                {value:obj.num[1], name:'寒冷'},
                                {value:obj.num[2], name:'危险'},
                                {value:obj.num[3], name:'冰凉'},
                                {value:obj.num[4], name:'舒适'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                 // 使用刚指定的配置项和数据显示图表。
                 myChart.setOption(option);
            }
        }
    };