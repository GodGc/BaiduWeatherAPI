
$(function () {
        $("#locationWeather").click(function () {
            var locationSearch = $("#location").val();
            if(locationSearch){
                //查询天气前先清空内容
                $("#weather").html("");
                var h3 =  $("<h3>"+locationSearch+"天气为:</h3><br>")
                $("#weather").append(h3);
                $.ajax({
                    url:"http://api.map.baidu.com/telematics/v3/weather?location="+locationSearch+"&output=json&ak=grvVc1I5YyU3oG8oQ4FWseUHWj3ubN6W",
                    dataType:'jsonP',
                    success:function(data){
                        // 读取对象
                        var weatherResults = data.results[0];

                        // 读取模板
                        var str = template('template',weatherResults);
//                console.log(str);

                        // 添加到界面上
                        $("#weather").append(str);
                    }
                })
            }else{
                var h3 =  $("<h3>请输入正确的地名</h3>")
                $("#weather").append(h3);
            }

        })
})