<?php
$tweet = $_POST['tweet'];
//call to sql and save the tweet

if($tweet === '')
{
echo json_encode('warning');
}
else
{

//save to data base
// insertsql
echo json_encode($tweet);
}
?>