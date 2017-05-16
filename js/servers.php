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


    $conn = mysqli_connect('localhost','root','','blog');
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
    $result = mysqli_query($conn,"SELECT * FROM test WHERE year_month_day>"."'$first'"."and year_month_day<"."'$last'".'order by year_month_day ASC');
//    $number = 0;

    $arr1 = array();
//    $arr1->num = 0;
    $arr2 = array();
//    $arr2->num = 0;
    $arr3 = array();
//    $arr3->num = 0;
    $arr4 = array();
//    $arr4->num = 0;
    $arr5 = array();
//    $arr5->num = 0;
    $num = array(0,0,0,0,0);

    $str = array();

    define("a",-100);
    define("b",-40);
    define("c",-10);
    define("d",20);
    while($row = mysqli_fetch_array($result))//函数从结果集中取得一行作为关联数组
    {
        if($row["temperature"]<a){
            $arr1[] = $row["temperature"];
//            $arr1->num = $arr1->num + 1;
            $num[0]++;
        }elseif ($row["temperature"]<b && $row["temperature"]>=a){
            $arr2[] = $row["temperature"];
//            $arr2->num = $arr2->num + 1;
            $num[1]++;
        }elseif ($row["temperature"]<c && $row["temperature"]>=b){
            $arr3[] = $row["temperature"];
//            $arr3->num = $arr3->num + 1;
            $num[2]++;
        }elseif ($row["temperature"]<d && $row["temperature"]>=c){
            $arr4[] = $row["temperature"];
//            $arr4->num = $arr4->num + 1;
            $num[3]++;
        }elseif($row["temperature"]>d){
            $arr5[] = $row["temperature"];
//            $arr5->num = $arr5->num + 1;
            $num[4]++;
        }
//        $number++;
//        echo '<tr>'.
//                '<td>'.$number.'</td>'.
//                '<td>'.$row["year_month_day"].'</td>'.
//                '<td>'.$row["temperature"].'</td>'.
//              '</tr>';
        $str[] = $row['year_month_day'];

    }

    $ob = array(
        'str'=>$str,
        'arr1'=>$arr1,
        'arr2'=>$arr2,
        'arr3'=>$arr3,
        'arr4'=>$arr4,
        'arr5'=>$arr5,
        'num'=>$num
    );
    echo json_encode($ob);
?>