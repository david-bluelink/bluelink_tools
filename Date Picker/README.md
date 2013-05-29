  <h3>Bluelink Date Picker Generator </h3>
	By David Holmes

	
  Create Date Pickers with Quick Date Options very easily 
	You can do it by DIV if you have the bluelink.core.js file added
  
  <h3>Div Example </h3>

	<div id="date_picker" 
		 data-type="build_date_picker" 
		 data-onupdate="reload_data"
		 data-download_as_csv="#get_table_id"
		 data-start_date='2013-05-13'
		 data-end_date='2013-05-13'>
	</div>


<h3>Javascript Example </h3>

	$('#myDiv').html(build_date_picker({
		onupdate:'reload_data',
		download_as_csv:'#get_table_id',
		start_date:'2013-05-13',
		end_date:'2013-05-13'
	}))
