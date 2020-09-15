<?php
    header('Access-Control-Allow-Origin: *');
    $jsondata = file_get_contents('data.json');
    $json = json_decode($jsondata,true);
    
    $dataCount = count($json['data']);
    $articleArray = array();

    for ($x = 0; $x <= $dataCount; $x++) {
        if (isset($json["data"][$x]['attachments'])) {
            array_push($articleArray,  (object) [
                'title' => $json['data'][$x]['attachments'][0]['title'],
                'image' => $json['data'][$x]['attachments'][0]['image_url'],
                'link' => $json['data'][$x]['attachments'][0]['original_url']
                ] );
        }
    }
    
    echo json_encode($articleArray);
?>