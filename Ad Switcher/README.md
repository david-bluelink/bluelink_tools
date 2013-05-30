BlueLink Ad Switch
==============
by David Holmes<br/>

This plugin helps create Google Adsense style ads using many different services.
<h2>Services Supported</h2>
<ul>
     <li>Yahoo Feeds</li>
     <li>Search 123 Feeds</li>
     <li>Bluelink Feeds</li>
     <li>Bluelink Run Of Network Feeds</li>
<ul>
<h2>Example And Parameters</h2>
     
                   <?php 

                    $_GET['bluelink_get_ad_ad_type'] = 'yahoo';
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,bluelink';
                    $_GET['bluelink_get_ad_search_keyword'] = 'cars';
                    $_GET['bluelink_get_ad_start_index'] = 0;
                    $_GET['bluelink_get_ad_limit'] = 1;
                    $_GET['bluelink_get_ad_bluelink_id'] = 5;
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ;
                    $_GET['bluelink_get_ad_search_123_id'] = 8759;
                    bluelink_get_ad_init();
                    ?>

