<?php
if($_SERVER['REQUEST_METHOD']=='POST'){

  $location_id = $_POST['location_id'];



require_once('dbConnect.php');
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");




$r = getAllBookedDetails($conn,  $location_id);


  $bookedDetails = array();
  while($row=$r->fetch_array(MYSQLI_ASSOC)){
   $bookedDetails[] = $row ;
 }


 $response = array();
 $response['error'] = !(count($bookedDetails)>0);
 $response['data'] = array() ;
 $response['data'] = $bookedDetails ;

 echo json_encode($response) ;

}


 function getAllBookedDetails($conn, $location_id){
  $sql = "SELECT * FROM `parking_slot_status` WHERE `location_id`= '$location_id' " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }



 mysqli_close($conn) ;
 ?>
