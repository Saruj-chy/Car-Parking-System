<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
  $id = $_POST['id'];



require_once('dbConnect.php');
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");



  $r = getAllData($conn, $id) ;


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

  function getAllData($conn, $id){
   $sql = "SELECT * FROM `parking_slot_status` INNER JOIN location_check WHERE parking_slot_status.location_id = location_check.location_id AND `id` = '$id' " ;
   $r = mysqli_query($conn,$sql) ;
   return $r ;
  }




 mysqli_close($conn) ;
 ?>
