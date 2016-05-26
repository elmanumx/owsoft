<?php 
$ch = curl_init(); 
curl_setopt($ch,CURLOPT_URL,'http://www.frikipandi.com'); 
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0'); 
curl_setopt($ch,CURLOPT_HTTPHEADER,array('Accept-Language: es-es,en')); 
curl_setopt($ch,CURLOPT_TIMEOUT, 10); 
curl_setopt($ch,CURLOPT_FOLLOWLOCATION, 1); 
curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1); //Guardar pagina 
$result = curl_exec($ch); 
curl_close($ch); //Cerramos la conexion CURL. 

preg_match_all("(<title>(.*)<\/title>;)siU",$result,$matches1);
echo $result;


//$titulo = $matches1[1][0];
//echo "Titulo :".$título;
//
/*   content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-size: 100%;
    background: linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);
///*/

 ?>