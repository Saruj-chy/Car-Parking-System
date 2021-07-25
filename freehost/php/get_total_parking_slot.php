<?php
if($_SERVER['REQUEST_METHOD']=='POST'){

  $location_id = $_POST['location_id'];



require_once('dbConnect.php');
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");




$r = getAllUser($conn,  $location_id);


  $specificUser = array();
  while($row=$r->fetch_array(MYSQLI_ASSOC)){
   $specificUser[] = $row ;
 }


 $response = array();
 $response['error'] = !(count($specificUser)>0);
 $response['data'] = array() ;
 $response['data'] = $specificUser ;

 echo json_encode($response) ;

}


 function getAllUser($conn, $location_id){
  $sql = "SELECT * FROM `parking_total_slot` WHERE `location_id`= '$location_id' " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }



 mysqli_close($conn) ;
 ?>
