<?php
session_start();
$_SESSION["username"]="NSAH AGNES MBONG";
?>
<!Doctype html>
<html lang="en">
<head>
    <title>seeion in php</title>
    <meta charset="utf-8">
    <meta name="viewport"content="width=device-width,initial-scale=1.0">
    <link href="./css.bootstrap.min.css"rel="stylesheet">
    <script src="./js/bootstrap.bundle.min.js"></script>
</head>  
<body>
    <?php
    echo $_SESSION["username"];
    ?>
</body>
</html>
