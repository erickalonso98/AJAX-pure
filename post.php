<?php 
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username=='' || $password==''){
        echo json_encode('error');
    }else{
        echo json_encode('Bienvendo<br>'.$username.'<br>'.$password);
    }
?>