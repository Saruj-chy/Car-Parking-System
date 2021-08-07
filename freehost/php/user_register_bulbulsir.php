<?php 
 if($_SERVER['REQUEST_METHOD']=='POST'){

 isset($_POST['name']) ? $name = $_POST['name'] : $name = '' ;
 isset($_POST['username']) ? $username = $_POST['username'] : $username = '' ;
 isset($_POST['password']) ? $password = $_POST['password'] : $password = '' ;
 isset($_POST['email']) ? $email = $_POST['email'] : $email = '' ;
 isset($_POST['a_number']) ? $a_number = (int) $_POST['a_number'] : $a_number = 0 ;
 }

  
 require_once('dbConnect.php');
 mysqli_query($conn,'SET CHARACTER SET utf8');
 mysqli_query($conn,"SET SESSION collation_connection ='utf8_general_ci'");


 
$r = insertNewSnakeEntry($conn, $name, $username, $password, $email, $a_number );

$snake_id = $conn-> insert_id ;

$r1 = getAllUser($conn,  $username, $password);
while($row=$r1->fetch_array(MYSQLI_ASSOC)){
   $specificUser = $row ;
 }

$response = array();
 if($snake_id != 0){
   $response['state'] = "Success";
   $response['data'] = $specificUser;
 }else{
   http_response_code(401);
   $response['state'] = "Failed";
 }
 echo json_encode($response);




function insertNewSnakeEntry($conn, $name, $username, $password, $email, $a_number  ){
 $sql = "INSERT INTO `user_check`(`name`,`username`,`password`,`email`,`a_number`) VALUES (?,?,?,?,?)";  
 $stmt = $conn->prepare($sql) ;
 $stmt -> bind_param('ssssi',$name, $username, $password, $email, $a_number ) ;
 $stmt -> execute();
 $stmt->close() ;
 return $stmt ;
}

 function getAllUser($conn, $username, $password){
  $sql = "SELECT * FROM `user_check` WHERE `username`= '$username' AND `password`= '$password' " ;
  $r = mysqli_query($conn,$sql) ;
  return $r ;
 }

mysqli_close($conn) ;

?>