<?php 
if($_SERVER['REQUEST_METHOD']=='POST'){

  $location_id = $_POST['location_id'];

}

require_once('dbConnect.php'); 
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");




$r = getAllUser($conn, $location_id);


$locationAll = array();
$response = array();

while($row=$r->fetch_array(MYSQLI_ASSOC)){
  // echo $row['total'] ;
 $locationAll[] = $row ;

 $response['total'] = $row["total"];
  $response['free'] = $row["free"];
  $response['booked'] = $row["booked"];

}
$response['error'] = !(count($locationAll)>0);



// if(!count($locationAll)>0){
//   $response['data'] = "No data Here";
// }else{
//  echo array_map('array: ',$locationAll, $b) ;
//   // while($row=$locationAll->fetch_array(MYSQLI_ASSOC)){
//     $response['total'] = $row["total"];
//   $response['free'] = $row["free"];
//   $response['booked'] = $row["booked"];
//   // }
  
// }

// $response['data'] = array();
// $response['data'] = $locationAll;



echo json_encode($response) ;


 function getAllUser($conn, $location_id){
  $sql = "SELECT * FROM `checkpoint_details` WHERE `location_id`= '$location_id' " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }

 mysqli_close($conn) ;
 ?>