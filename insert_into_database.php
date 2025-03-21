<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./css/bootstrap.min.css"rel="stylesheet">
    <script src="./js/bootstrap.bundle.min.js"></script>
    <title>stephshop</title>
</head>
<body>
<?php
include_once "connecting_to_MySQL_database.php";
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name=$_POST["name"];
    $phone=$_POST["phone"];
    $email=$_POST["email"];
    $password =$_POST["password"];
    if(empty($name) || empty($phone) || empty($email) ||empty($password)){
        header("location : ../form.php");
        exit();
    }
    $query="INSERT INTO `client` (`name`,`phone`,`email`,`password`) VALUES ('$name','$phone','$email','$password');";

    //$stmt = $pdo->prepare($query);
    //$stmt ->execute();
    //$pdo =null;
   // $stmt = null;
    if(mysqli_query($con,$query)){
        //header("Location: retrieving_from_db.php");
        echo"<div class='alert alert-danger alert-dismissible'>
        <button type='submit' class='close btn btn-success p-3 m-3 fs-5'
        data-dismiss='alert'>Done</button>
        New customer Was Created Successfully
        </div>";
    }
    else{
        echo"<div class='alert alert-danger alert-dismissible'>
        <button type='submit'class='close btn btn-success p-3 m-3 fs-5'
        data-dismiss='alert'>X</button>
        Error Creating new customer Because ".mysqli_error($con). "</div>";
    echo "inside off";}}
?>
    
    </body>
</html>