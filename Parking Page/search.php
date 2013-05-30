<?php 
error_reporting(E_ALL);

	$yahoo =true;
	$search_123 =true;
	$bluelink =true;
	$ad_order = $_GET['bluelink_get_ad_ad_order'];

?>
	<style> 
	.bluelink_search_123_box{
		background: white;
		font-size: 12px;
		font-family: arial,sans-serif;
		padding: 5px;
		margin-top: 10px;
		margin-bottom: 10px;
		min-width: 250px;
		
		padding-left:20px;
		padding-top:10px;
	}	

	.bluelink_search_123_title{
		font-size: 15px;

		color: #12c;;


	}
	.bluelink_search_123_description{

		font-size: 12px;
				margin-top: 2px;
		color: #000;

	}

	.bluelink_search_123_display_url{
		font-size: 12px;
		
		color: #080;
		text-decoration: none;

	}
	.bluelink_search_123_sponsered{
		float: right;
		font-size: 11px;
		color: #c3c3c3;
		padding: 5px
	}
	</style>
<?

	function bluelink_get_ad_init(){
	$ad_type = $_GET['bluelink_get_ad_ad_type'];
	$results = call_user_func($ad_type);
	if (empty($results)) {
		$ad_order = split(',',$_GET['bluelink_get_ad_ad_order']);
		$count = count($ad_order);
		foreach ($ad_order as $key => $value) {

			$results = call_user_func($value);
			if(!$results[0]){
				display_results($results);
			}
			if($results[0] || $key == $count){

					break;

			}
			
		}

		
	}else{
display_results($results);
}
	}

	function search_123($start_index = 0,$limit = 10){
			$start_index 		=  $_GET['bluelink_get_ad_start_index'];
			$limit 				= $_GET['bluelink_get_ad_limit'];
			$account_id 		= 8759;
			if(!$keyword){
			$keyword 			= $_GET['bluelink_get_ad_search_keyword'];
			}
			$user_agent 		= $_SERVER['HTTP_USER_AGENT'];

//$site_url = get_site_url();
 		// get the protocol 
		if (getenv('HTTPS')) {
			$my_protocol 		= "https://";
						}
		else {
			$my_protocol 		= "http://";
						}
			$my_client_ref 		= $my_protocol . getenv('SERVER_NAME') . getenv('REQUEST_URI');
			// CREATE SESSION/ COOKIE FOR SEARCH 123 
		if(isset($HTTP_COOKIE_VARS['s123user'])) {
			$sSessionID 		= $HTTP_COOKIE_VARS['s123user'];
						}
		else {
			$sSessionID 		= hash('md5',$sPartnerAID
								     . $_SERVER['HTTP_USER_AGENT']
								     . $_SERVER['REMOTE_IP']
								     . $_SERVER['REQUEST_TIME']
														);
								  }
			$sSessionID 		= $sSessionID . '.' . time();

			setcookie('s123user', $sSessionID, time()+60*30, "/");
			// END OF SESSION / COOKIE FOR SEARCH 123 
		if (getenv('HTTP_X_FORWARDED_FOR')) {
			$ip_array 			= explode("," ,getenv('HTTP_X_FORWARDED_FOR'));
			$ipClick 			= $ip_array[0];
			$ipClick 			= trim($ipClick);
		}else{
			$ipClick 			= getenv('REMOTE_ADDR');
			}
			$ipClick 			='208.82.15.154'; // TEMP IP ADDRESS BECAUSE YOU CAN'T USE LOCALHOST
// URL FOR SEARCH 123 FEED
			$url 				= "http://cgi.search123.uk.com/cgi-bin/XMLFeed.cgi/$account_id?type=q&query=$keyword&ip=$ipClick&uid=1&client_ref=$my_client_ref&client_ua=$user_agent&usid=$sSessionID&start=$start_index&size=$limit";
		if(!empty($keyword)){
			$xml 				= new SimpleXMLElement($url,NULL,TRUE);
			//print_r($xml);

		if($xml->PARAMS->TOT_COUNT != 0){
			foreach ($xml->RETURN->LISTING as $row) {
				
				$title 			= $row->TITLE; 
				$description 	= $row->DESCRIPTION; 
				// The new word we want in place of the old one 
				$new_keyword 	= "<b>$keyword</b>"; 

				// Run through the text and replaces all occurrences of $oldText 
				$title 			= str_ireplace($keyword, $new_keyword , $title); 
				$description 	= str_ireplace($keyword, $new_keyword , $description); 

				
				$result['displayurl'] 		= $row->SITE_URL;
		   		$result['clickurl'] 		= $row->REDIRECT_URL;
		   		$result['title'] 			= $title;
		   		$result['description'] 		= $description;
		   		$results[] 					= $result;
		   }
		   }
			return $results;
		   } 



	}

	function yahoo(){
		if ($_GET['bluelink_get_ad_search_keyword'] == 'twitter'){
		//include_once('get_keyword.php');	
		//$keyword = get_keyword();
		//echo "keyword1: ".$keyword."<br>";
		//$yahoo_boss_keyword = new pw_yahoo_boss;
		//$yahoo_boss_keyword->yahoo_boss_keyword = $keyword;
		//print_r($yahoo_boss_keyword);
	}else{
		$keyword 		= $_GET['bluelink_get_ad_search_keyword'];
	}
	if ($keyword) {
		
		$id 			= '17154';
		$number 		= $_GET['bluelink_get_ad_limit'];
		$keyword 		= urlencode($keyword);
		if ($_SERVER['SERVER_NAME'] == 'dev'){
			$surl 		= 'http://www.trekworld.com';
		}else{
			$surl 		= "http://".$_SERVER['HTTP_HOST'] ||  get_site_url()  ;
		}
	
		$ua 			= $_SERVER['HTTP_USER_AGENT'];
		
		if (getenv('HTTP_X_FORWARDED_FOR')) {
			$ip_array 	= explode("," ,getenv('HTTP_X_FORWARDED_FOR'));
			$ipClick 	= $ip_array[0];
			$ipClick 	= trim($ipClick);
		}else{
			$ipClick 	= getenv('REMOTE_ADDR');
		}

		
		//get yahoo ads	
		$url 			= "http://yssads.ddc.com/x1.php?ua=$ua&n=$number&c=$id&kw=$keyword&cb=5760712572&surl=$surl&ip=$ipClick";
		
		$xml 			= new SimpleXMLElement($url,NULL,TRUE);
			
		if(!empty($keyword)){
			foreach ($xml->ads->ad as $row) {
		   		$result['displayurl'] 		= $row->url->attributes();
		   		$result['clickurl'] 		= $row->url;
		   		$result['title'] 			= $row->title;
		   		$result['description'] 		= $row->description;
		   		$results[] 					= $result;
		   }
		}
		//print_r($results);
		return $results;
	}
	}


	function bluelink(){
		$my_client_ref 		= $my_protocol . getenv('SERVER_NAME') . getenv('REQUEST_URI');
		$user_agent 		= $_SERVER['HTTP_USER_AGENT'];
		$limit 				= $_GET['bluelink_get_ad_limit'];
			if (getenv('HTTP_X_FORWARDED_FOR')) {
			$ip_array 			= explode("," ,getenv('HTTP_X_FORWARDED_FOR'));
			$ipClick 			= $ip_array[0];
			$ipClick 			= trim($ipClick);
		}else{
			$ipClick 			= getenv('REMOTE_ADDR');
			}
			$ipClick 			='208.82.15.154'; // TEMP IP ADDRESS BECAUSE YOU CAN'T USE LOCALHOST


		if ($_SERVER['SERVER_NAME'] == 'dev'){
			$surl 		= 'http://www.trekworld.com';
		}else{
			$surl 		= "http://".$_SERVER['HTTP_HOST'] ||  get_site_url()  ;
		}

		$keyword 		= $_GET['bluelink_get_ad_search_keyword'];
		$url 			= "http://blu484.bluelinkmarketing.com/xml.php?id_site=484&id_pub=947&q=$keyword&subid=bluelink&limit=$limit&ref=$surl&sref=$surl&ip=$ipClick&user_agent=$user_agent&dg=debugme33";
	
		$xml 			= new SimpleXMLElement($url,NULL,TRUE);
		foreach ($xml->result as $row) {
		   		$result['displayurl'] 		= $row->display_url;
		   		$result['clickurl'] 		= $row->click_url;
		   		$result['title'] 			= $row->title;
		   		$result['description'] 		= $row->description.'<br/>'.$row->description2;
		   		$results[] 					= $result;
		   }

	return $results;

	}
	function bluelink_ad_network(){
		$my_client_ref 		= $my_protocol . getenv('SERVER_NAME') . getenv('REQUEST_URI');
		$user_agent 		= $_SERVER['HTTP_USER_AGENT'];
		$limit 				= $_GET['bluelink_get_ad_limit'];
			if (getenv('HTTP_X_FORWARDED_FOR')) {
			$ip_array 			= explode("," ,getenv('HTTP_X_FORWARDED_FOR'));
			$ipClick 			= $ip_array[0];
			$ipClick 			= trim($ipClick);
		}else{
			$ipClick 			= getenv('REMOTE_ADDR');
			}
			$ipClick 			='208.82.15.154'; // TEMP IP ADDRESS BECAUSE YOU CAN'T USE LOCALHOST


		if ($_SERVER['SERVER_NAME'] == 'dev'){
			$surl 		= 'http://www.trekworld.com';
		}else{
			$surl 		= "http://".$_SERVER['HTTP_HOST'] ||  get_site_url()  ;
		}

		$keyword 		= $_GET['bluelink_get_ad_search_keyword'];
		$url 			= "http://blu483.bluelinkmarketing.com/xml.php?id_site=483&id_pub=947&q=$keyword&subid=bluelink&limit=$limit&ref=$surl&sref=$surl&ip=$ipClick&user_agent=$user_agent&dg=debugme33";
	
		$xml 			= new SimpleXMLElement($url,NULL,TRUE);
		foreach ($xml->result as $row) {
		   		$result['displayurl'] 		= $row->display_url;
		   		$result['clickurl'] 		= $row->click_url;
		   		$result['title'] 			= $row->title;
		   		$result['description'] 		= $row->description.'<br/>'.$row->description2;
		   		$results[] 					= $result;
		   }

	return $results;

	}





// This displays the results that we get all results should have
// Title, Click_URL,Display_URL and a Description 

	function display_results($results,$sponser){
		?>


		<div class="bluelink_search_123_box">

		
		<div class="bluelink_search_123_sponsered">Sponsered Results</div>
	
<?php if (!empty($results)) { ?>
	<?php $i=0; foreach ($results as $key => $result) { //if ($i++ == $limit) break; ?>



		<div class="bluelink_search_123">
			<a href="<?php echo $result['clickurl']; ?>" class="bluelink_search_123_title"  target="_blank"><?php  echo $result['title']; ?></a> 
		</div>
		<div class="bluelink_search_123_description"><?php echo $result['description']; ?></div>
		<div class="">
			<a href="<?php echo $result['clickurl']; ?>" class="bluelink_search_123_display_url"  target="_blank"><?php echo $result['displayurl']; ?></a>
		</div>

		<br/>
		<?php  } ?>

	<?php }else{  ?>
	<b> No Results</b>
	<?php } ?>
	
	</div>





	<?	} ?>