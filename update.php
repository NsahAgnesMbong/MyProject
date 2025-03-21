<?php
require_once "connecting_to_MYSQL_database.php";
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name= $_POST["name"];
    $phone =$_POST["phone"];
    $email =$_POST["email"];
    $password =$_POST["password"];
     if(empty($name) || empty($phone) || empty($email) || empty($password)){
        echo "fill the empty fields";
        header("location:update.html");
        exit();
     }
     $query = "UPDATE client SET  name= '$name', phone ='$phone' , email ='$email' ,password ='$password' WHERE id=2;";
     if(mysqli_query($con,$query)){
        echo "Customer details successfully updated";
     }
     else{
        echo "Something went wrong";
     }
}