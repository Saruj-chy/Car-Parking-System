<?php 
if($_SERVER['REQUEST_METHOD']=='POST'){

  $latitude = $_POST['latitude'];
  $longitude = $_POST['longitude'];

}

require_once('dbConnect.php'); 
mysqli_query($conn,'SET CHARACTER SET utf8');
mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");

if(strlen($latitude) >0 ){

  $r = getAllUser($conn);


  $locationAll = array();
  while($row=$r->fetch_array(MYSQLI_ASSOC)){
   $locationAll[] = $row ;
  }
  
  
  
  $response = array();
  
  $response['error'] = !(count($locationAll)>0);
  
  $response['data'] = array();
  $response['data'] = $locationAll;
  
  
  
  echo json_encode($response) ;
}


 function getAllUser($conn){
  $sql = "SELECT * FROM `location_check` " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }


 mysqli_close($conn) ;

 ?>