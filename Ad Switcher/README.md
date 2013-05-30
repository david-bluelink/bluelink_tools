BlueLink Ad Switcher
==============
by David Holmes<br/>

This plugin helps create Google Adsense style ads using many different services.
<h2>Screen Shot</h2>
<img src="example.png">
<h2>Services Supported</h2>
<ul>
     <li>Yahoo Feeds</li>
     <li>Search 123 Feeds</li>
     <li>Bluelink Feeds</li>
     <li>Bluelink Run Of Network Feeds</li>
</ul>
<h2>Example And Parameters</h2>
     
                   <?php 
                    $_GET['bluelink_get_ad_ad_type'] = 'yahoo'; // THIS IS THE DEFUALT AD TO SERVE
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,bluelink'; IF DEFUALT AD DOESNT HAVE RESULTS TRY THESE OTHER 
                    $_GET['bluelink_get_ad_search_keyword'] = 'cars'; // THIS IS THE KEYWORD TO SEARCH FOR 
                    $_GET['bluelink_get_ad_start_index'] = 0; // THIS IS THE START INDEX EX SHOW 10 RESULTS BUT START AT 3
                    $_GET['bluelink_get_ad_limit'] = 1; // HOW MANY ADS DO YOU WANT TO SHOW 
                    $_GET['bluelink_get_ad_bluelink_id'] = 5; // YOUR BLUELINK ID 
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ; // YOUR YAHOO AD ID 
                    $_GET['bluelink_get_ad_search_123_id'] = 8759; // YOUR SEARCH 123 ID 
                    bluelink_get_ad_init(); // THIS STARTS THE PROCESS 
                    ?>

