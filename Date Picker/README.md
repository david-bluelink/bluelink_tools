  <h3>Bluelink Date Picker Builder </h3>
	By David Holmes

	
  Create A Date Picker very easily with parameters 
  Also it comes with a quick date feature that helps you choose dates very easily without any javascript needed for the date picker
 <h3>Dependencies</h3>
  Jquery<br/>
  Bootstrap<br/>
  Bluelink.core.js

  <h3>Screen Shot</h3>
  <img src="example.png"><br/>

<h3>DIV Example </h3>

	<div id="date_picker"  // create your own id
		 data-type="build_date_picker"  // this tells bluelink.core.js to build the datepicker
		 data-onupdate="reload_data" // this tells tells it to on update run this function
		 data-start_date='2013-05-13' // give it a start date 
		 data-end_date='2013-05-13' // give it an end date >
	</div>


<h3>Javascript Example </h3>
	<div id="myDiv"></div>

	$('#myDiv').html(build_date_picker({
		onupdate:'reload_data',
		start_date:'2013-05-13',
		end_date:'2013-05-13'
	}))
	
<h3>Full HTML Example </h3>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet">
	<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>

	<script src="date_picker.js"></script>


	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
	<html>
    <body>
	<br/><br/>

	<div id="date_picker" 
	data-type="build_date_picker" 
	data-onupdate="reload_data"
	data-download_as_csv="#get_table_id"
	data-start_date="2013-05-20"
	data-end_date="2013-05-20">
	</div>

	<script>
		function reload_data(){
		alert('I just reloaded data')
		}
		$('#from_date').val() // to get the from date value
		$('#to_date').val() // to get the to date value 
		</script>
    	</body>
		</html>
