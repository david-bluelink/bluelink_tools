<?   include 'search.php'; ?>
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet">
<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<title> Parking Page</title>
<html>
<style>


.search-area-wrapper{-webkit-background-clip: border-box;
-webkit-background-origin: padding-box;
-webkit-background-size: 100%;
background-attachment: scroll;
background-clip: border-box;
background-color: rgb(53, 59, 101);
/*background-image: url(http://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Liverpool_Skyline_with_HMS_Ark_Royal.jpg/1200px-Liverpool_Skyline_with_HMS_Ark_Royal.jpg);*/
background-image: url(http://fc06.deviantart.net/fs71/i/2010/320/5/6/liverpool_skyline_by_the_queen_of_spades-d32yr7z.jpg);
background-origin: padding-box;
background-size: 100%;
color: rgb(111, 117, 121);
display: block;
font-family: 'Open Sans', sans-serif;
font-size: 13px;
height: 290px;
line-height: 22px;
min-height: 290px;
padding-top: 75px;

}

form.search-form input.search-term {
font-size: 14px;
height: 54px;
line-height: 24px;
padding: 12px;
width: 72%;
color: #858c91;
margin-right: 10px;
margin-bottom: 0;
}

form.search-form input.search-btn {
background-color: #3f4b55;
font-size: 14px;
line-height: 19px;
font-weight: 600;
padding: 14px 30px 15px;
color: #fff;
}
body{
  margin:0 0 0 0px;
}
</style>
 <div style="background-color: rgb(59, 67, 72);width:100%;height:40px;color:white;margin:0 0 0 0px">
<a href="?" style="color:white" ><h3 style="margin: 0 0 0 0px;margin-left:2%;"> Your Site Name Here </h3></a>
</div>
<body background="">
   
<div class="search-area-wrapper">

                        <div class="search-area container">
                                <h3 class="search-header" style="color:white;background:black;width:250px;">Have a Question?</h3>
                                <p class="search-tag-line"  style="color:white;background:black;width:550px;">If you have any question you can ask below or enter what you are looking for!</p>

                                <form id="search-form" class="search-form clearfix" method="get" action="" autocomplete="off" novalidate="novalidate">
                                        <input class="search-term required" type="text" id="s" name="s" value="<?= $_GET['s'];?>" placeholder="Type your search terms here" title="* Please enter a search term!" autocomplete="off">
                                        <input class="search-btn" type="submit" value="Search">
                                        <div id="search-error-container"></div>
                                </form>
                        </div>
                </div>
<style>
#ad_list > li {
  background:white;
}
</style>
  <? if(isset($_GET['s'])) { ?>
  <div style="" class="container">


                   <?php 

                    $_GET['bluelink_get_ad_ad_type'] = 'search_123';
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,yahoo,bluelink';
                    $_GET['bluelink_get_ad_search_keyword'] = $_GET['s'];
                    $_GET['bluelink_get_ad_start_index'] = 0;
                    $_GET['bluelink_get_ad_limit'] = 10;
                    $_GET['bluelink_get_ad_bluelink_id'] = 5;
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ;
                    $_GET['bluelink_get_ad_search_123_id'] = 8759;
                    bluelink_get_ad_init();
                    ?>
                   <?php 

                    $_GET['bluelink_get_ad_ad_type'] = 'bluelink';
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,yahoo,bluelink';
                    $_GET['bluelink_get_ad_search_keyword'] = $_GET['s'];
                    $_GET['bluelink_get_ad_start_index'] = 0;
                    $_GET['bluelink_get_ad_limit'] = 10;
                    $_GET['bluelink_get_ad_bluelink_id'] = 1;
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ;
                    $_GET['bluelink_get_ad_search_123_id'] = 8759;
                    bluelink_get_ad_init();
                    ?> 
                     <?php 

                    $_GET['bluelink_get_ad_ad_type'] = 'yahoo';
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,yahoo,bluelink';
                    $_GET['bluelink_get_ad_search_keyword'] = $_GET['s'];
                    $_GET['bluelink_get_ad_start_index'] = 0;
                    $_GET['bluelink_get_ad_limit'] = 10;
                    $_GET['bluelink_get_ad_bluelink_id'] = 5;
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ;
                    $_GET['bluelink_get_ad_search_123_id'] = 8759;
                    bluelink_get_ad_init();
                    ?>
</div>

  <? } ?>
<? if( !isset($_GET['s']) ) { ?>
<div class="row-fluid">
<ul class="thumbnails" style="margin-left:2%;margin-top:1%;margin-right:2%" id="ad_list">
      
              <li class="span3">
                <div class="thumbnail">
                   <div style="border-bottom:1px solid #eee;background-image:url('"> <img src="http://www.iconshock.com/img_jpg/STROKE/transportation/jpg/128/cars_icon.jpg" width="75" height="75"><font size="3" style="width:100%"> Cars</font> </div>

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
                </div>
              </li>
              <li class="span3">
                <div class="thumbnail">
                   <div style="border-bottom:1px solid #eee;"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDV5JaEVAZ7frN62jukVYGMymthNDcxkLkjdKOH7NCXYPWQWi" width="75" height="75"><font size="3" style="width:100%"> Insurance</font> </div>

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
                </div>
              </li>
             
              <li class="span3" >

                <div class="thumbnail">
          
                   <div style="border-bottom:1px solid #eee;"> <font size="3" style="width:100%"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMmZYkqIdTtnjSLJux3uHW0_GTbCsd2rR48mLVjmUMQaCqbYeFA" width="75" height="75"> Travel</font> </div>
                   <?php 

                    $_GET['bluelink_get_ad_ad_type'] = 'search_123';
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,yahoo,bluelink';
                    $_GET['bluelink_get_ad_search_keyword'] = 'travel';
                    $_GET['bluelink_get_ad_start_index'] = 0;
                    $_GET['bluelink_get_ad_limit'] = 1;
                    $_GET['bluelink_get_ad_bluelink_id'] = 5;
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ;
                    $_GET['bluelink_get_ad_search_123_id'] = 8759;
                    bluelink_get_ad_init();


                ?>
                </div>
              </li>
                 
              <li class="span3 " >

                <div class="thumbnail">
                   <div style="border-bottom:1px solid #eee;"> <font size="3" style="width:100%"><img src="https://lh4.googleusercontent.com/-EAt5oUMH4HQ/TsGxq-GbZtI/AAAAAAAAABM/H8FQHp7OyFM/s128/attorney-legal.jpg" width="75" height="75"> Criminal Attorney</font> </div>
                   <?php 

                    $_GET['bluelink_get_ad_ad_type'] = 'search_123';
                    $_GET['bluelink_get_ad_ad_order'] = 'search_123,yahoo,bluelink';
                    $_GET['bluelink_get_ad_search_keyword'] = 'Criminal Attorney';
                    $_GET['bluelink_get_ad_start_index'] = 0;
                    $_GET['bluelink_get_ad_limit'] = 1;
                    $_GET['bluelink_get_ad_bluelink_id'] = 5;
                    $_GET['bluelink_get_ad_yahoo_id'] = 17154 ;
                    $_GET['bluelink_get_ad_search_123_id'] = 8759;
                    bluelink_get_ad_init();


                ?>  
                </div>
              </li>
    
            </ul>
          </div>
            <?php } ?>
</body>
</html>

<?php 



?>
