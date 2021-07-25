<?php
if($_SERVER['REQUEST_METHOD']=='POST'){

  $location_id = $_POST['location_id'];
  $slot_number = $_POST['slot_number'];
  $status = $_POST['status'];



require_once('dbConnect.php');
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");



if($status == "Booked"){
  $r1 = insertData($conn,  $location_id, $slot_number, "booked");

}else if($status == "Unbooked"){
  $r1 = deleteData($conn,   $location_id, $slot_number);
  
}


  $r = getAllData($conn, $location_id) ;


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


 function deleteData( $conn,  $location_id, $slot_number ){
  $sql = "DELETE FROM `parking_slot_status` WHERE `location_id`= '$location_id' AND `slot_numb` = '$slot_number' " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }

 function insertData( $conn,  $location_id, $slot_number, $status ){
  $sql = "INSERT INTO `parking_slot_status`(`location_id`,`slot_numb`,`status`) VALUES (?,?,?)";
  $stmt = $conn->prepare($sql) ;
  $stmt -> bind_param('iis',$location_id, $slot_number, $status ) ;
  $stmt -> execute();
  $stmt->close() ;
  return $stmt ;
 }


  function getAllData($conn, $location_id){
   $sql = "SELECT * FROM `parking_slot_status` WHERE `location_id`= '$location_id' " ;
   $r = mysqli_query($conn,$sql) ;
   return $r ;
  }




 mysqli_close($conn) ;
 ?>
