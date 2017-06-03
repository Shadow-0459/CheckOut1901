<?php
/**
 * Created by PhpStorm.
 * User: Mr Ripper
 * Date: 2017/3/27
 * Time: 16:33
 */
//    $time1 = $_POST['time1'];
//    $time2 = $_POST['time2'];
//    echo $time1.$time2;


    $conn = mysqli_connect('localhost','root','','xuhui');
    mysqli_set_charset($conn,'utf8');//上面两句必须同时使用
    if (!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }

    $first = $_POST["first"];
    $last = $_POST["last"];
    //$choice = $_POST["choice"]; //_POST用于收集表单数据
//    if($choice == 1){
//        $result = mysqli_query($conn,"SELECT * FROM test WHERE year_month_day>"."'$first'"."and year_month_day<"."'$last'".'order by temperature ASC');
//    }else if($choice == 2){
//        $result = mysqli_query($conn,"SELECT * FROM test WHERE year_month_day>"."'$first'"."and year_month_day<"."'$last'".'order by temperature DESC');
//    }
    $result = mysqli_query($conn,"SELECT * FROM xuhui");
//    $number = 0;


    $arrt = array();
    $arrh = array();
    $arrs = array();
    $arra = array();



    while($row = mysqli_fetch_array($result))//函数从结果集中取得一行作为关联数组
    {
//        $number++;
//        echo '<tr>'.
//                '<td>'.$number.'</td>'.
//                '<td>'.$row["year_month_day"].'</td>'.
//                '<td>'.$row["temperature"].'</td>'.
//              '</tr>';
        $arrt[] = $row['temput'];
        $arrh[] = $row['humi'];
        $arrs[] = $row['sun'];
        $arra[] = $row['alcohol'];
    }

    $ob = array(
        'arrt'=>$arrt,
        'arrh'=>$arrh,
        'arrs'=>$arrs,
        'arra'=>$arra
    );
    echo json_encode($ob);
?>