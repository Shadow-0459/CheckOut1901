<!DOCTYPE html>
<html>
<head>
    <title>demon</title>
    <meta charset="utf-8">
    <base href="<?php echo base_url()?>">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/button.css">
</head>
<body>

<!--<form action="index.php" method="post" id="wrapper">-->
<!--    从&nbsp;<input type="datetime-local" value="1901-01-01T00:00:00" id="time1" name="first"/>-->
<!--    到&nbsp;<input type="datetime-local" value="1901-01-01T00:00:00" id="time2" name="last"/>-->
<!--    <select name="choice">-->
<!--        <option value="1">升序</option>-->
<!--        <option value="2">降序</option>-->
<!--    </select>-->
<!--    <input type="submit" value="提交" id="btn">-->
<!--</form>-->
<div id="wrapper">
    <h1>周士琪的1901温度查询表</h1>
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;从<input type="datetime-local" value="1901-01-01T00:00:00" id="time1" name="first"/>
    &nbsp;&nbsp;&nbsp;&nbsp;到<input type="datetime-local" value="1901-01-02T00:00:00" id="time2" name="last"/>
<!--    <select name="choice" id="choice1">-->
<!--        <option value="1">升序</option>-->
<!--        <option value="2">降序</option>-->
<!--    </select>-->
    <input type="button" value="提交" id="btn" class="button button-glow button-rounded button-highlight">
    <div id="div1">

    </div>
</div>




<script src="js/jquery-1.12.4.min.js"></script>
<script src="js/echarts.js"></script>
<script src="js/checkout.js"></script>
</body>
</html>