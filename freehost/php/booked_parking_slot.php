<?php
if($_SERVER['REQUEST_METHOD']=='POST'){

  $location_id = $_POST['location_id'];
  $slot_number = $_POST['slot_number'];
  $status = $_POST['status'];
  $id = $_POST['id'];



require_once('dbConnect.php');
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");



if($status == "Booked"){
  $r1 = insertData($conn,  $location_id, $slot_number, "booked", $id);

}else if($status == "Unbooked"){
  $r1 = deleteData($conn,   $location_id, $slot_number, $id);
  
}


  $r = getAllData($conn, $location_id, $id) ;


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


 function deleteData( $conn,  $location_id, $slot_number, $id ){
  $sql = "DELETE FROM `parking_slot_status` WHERE `location_id`= '$location_id' AND `slot_numb` = '$slot_number' AND `id` = '$id' " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }

 function insertData( $conn,  $location_id, $slot_number, $status, $id ){
  $sql = "INSERT INTO `parking_slot_status`(`location_id`,`slot_numb`,`status`, `id`) VALUES (?,?,?,?)";
  $stmt = $conn->prepare($sql) ;
  $stmt -> bind_param('iisi',$location_id, $slot_number, $status, $id ) ;
  $stmt -> execute();
  $stmt->close() ;
  return $stmt ;
 }


  function getAllData($conn, $location_id, $id){
   $sql = "SELECT * FROM `parking_slot_status` WHERE `location_id`= '$location_id' AND `id` = '$id' " ;
   $r = mysqli_query($conn,$sql) ;
   return $r ;
  }




 mysqli_close($conn) ;
 ?>
