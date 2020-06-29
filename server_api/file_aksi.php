<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

if($postjson['aksi']=="add_register"){
    //$password = md5($postjson['pemandu_password']);
    $query = mysqli_query($mysqli, "INSERT INTO pemandu SET
        pemandu_fullname = '$postjson[pemandu_fullname]',
        pemandu_ic = '$postjson[pemandu_ic]',
        pemandu_username = '$postjson[pemandu_username]',
        pemandu_password = '$postjson[pemandu_password]'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
} 

else if($postjson['aksi']=="login"){
    //$password = md5($postjson['pemandu_password']);
    $query = mysqli_query($mysqli, "SELECT * FROM pemandu WHERE pemandu_username = '$postjson[pemandu_username]' AND pemandu_password = '$postjson[pemandu_password]'");
    $check = mysqli_num_rows($query);

    if($check>0){
        $data = mysqli_fetch_array($query);
        $datauser = array(
            'pemandu_id' => $data['pemandu_id'],
            'pemandu_fullname' => $data['pemandu_fullname'],
            'pemandu_ic' => $data['pemandu_ic'],
            'pemandu_username' => $data['pemandu_username'],
            'pemandu_password' => $data['pemandu_password']
        );

        if($query) $result = json_encode(array('success'=>true, 'result'=> $datauser));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    } else{
        
        $result = json_encode(array('success'=>false, 'msg'=>'unregister account'));
    }
   
    echo $result;
} 