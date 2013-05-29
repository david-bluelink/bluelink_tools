  <h3>Bluelink Date Picker Builder </h3>
	By David Holmes

	
  Create A Date Picker Very Easily With Parameters that allow you on update to use a function
  You can do it by DIV if you have the bluelink.core.js file added
  
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
