<?php
$server ="localhost";
$username ="root";
$password ="";
$database ="store";
$con = mysqli_connect($server,$username,$password,$database);
if($con){
}else{
    die("error conneecting".mysqli_error($con));
}
?>
//<!-- 
//$server ="localhost";
//$username ="root";
//$password ="";
//$database ="store";
//try{
   // $pdo = new PDO($server,$username,$password,$database);
  //  $pdo ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)
//}catch(PDOException $e){
  //  echo "connection failed".$e->getMessage();
//} -->
