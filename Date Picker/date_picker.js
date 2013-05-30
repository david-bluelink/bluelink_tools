 /*
	Bluelink Date Picker Generator 
	By David Holmes

	Create Date Pickers with Quick Date Options very easily 
	You can do it by DIV if you have the bluelink.core.js file added

	<div id="date_picker" 
		 data-type="build_date_picker" 
		 data-onupdate="reload_data"
		 data-download_as_csv="#get_table_id"
		 data-start_date="<?= $start_date;?>"
		 data-end_date="<?= $end_date;?>">
	</div>

	OR BY JAVASCRIPT

	$('#myDiv').html(build_date_picker({
		onupdate:'reload_data',
		download_as_csv:'#get_table_id',
		start_date:'2013-05-13',
		end_date:'2013-05-13'
	

	}))


 */
function change_dates(x){

         $('#from_date').val(minus_or_add_to_date(x))
         $('#to_date').val(new Date().yyyymmdd())
         $('#update_button').trigger('click')
 }

Date.prototype.yyyymmdd = function() {
               var yyyy = this.getFullYear().toString();
               var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
               var dd  = this.getDate().toString();
               return yyyy +'-'+ (mm[1]?mm:"0"+mm[0]) +'-'+ (dd[1]?dd:"0"+dd[0]); // padding
                  };

function minus_or_add_to_date(x){
                var today = new Date();
                var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()- +x);

                return nextweek.yyyymmdd();
                }



function build_date_picker(option){
var html = ''
console.log(option)
if(start_date == 'undefined'){
	var start_date = '2013-05-13'
	var end_date = '2013-05-13'

}
	html +='<div style="display:inline-block">'
	html +='<table>'
	html +='<tr>'
	html +='<td>'
	html +='<div class="input-prepend " style="display:inline-block">'
	html +='<div class="btn-group">'

	html +='<button class="btn dropdown-toggle" data-toggle="dropdown" >Quick Date<span class="caret"></span></button>'
	html +='<ul class="dropdown-menu" id="quick_date">'
	html +='<li><a href="javascript:change_dates(0);">Today</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(1);">Yesterday</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(7);">Last Week</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:this_month()">This Month</a></li>'	
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:last_month()">Last Month</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(90);">3 Months Ago</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(180);">6 Months Ago</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(270)">9 Months Ago</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(365);">1 year Ago</a></li>'
	html +='<li class="divider"></li>'
	html +='<li><a href="javascript:change_dates(730);">2 years Ago</a></li>'
	html +='</ul>'
	html +='</div>'
	html +='<input class="span2" id="from_date" value="'+option.start_date+'" type="text" style="min-height:30px" >  '
	html +='</div>'
	html +='</td>'
	html +='<td>'
	html +='  To '
	html +='<input class="span2" type="text" id="to_date" value="'+option.end_date+'" style="min-height:30px" >'
	html +='</td>'
html +='<td>'
	html +='<button class="btn btn-success" onclick="update_button(\''+option.onupdate+'\')" id="update_button" style="margin-bottom: 10px;margin-left: 10px;">Update</button>'
	html +='</td>'
	html +='<td class="hide">'
	html +='<button class="btn btn-primary"   id="download_as_csv_buton" style="margin-bottom: 10px;margin-left: 5px;">Download As CSV</button>'
	html +='</td></tr></table>'
	html +='</div>'
	html +='</div>'


	return html





}

$('#download_as_csv_buton').click(function(){

alert(true)

})
function update_button(option){

	if ($('#from_date').val() >   $('#to_date').val()){
            alert('The start date can not be greater then the end date');
            return;
          }


          console.log(option)
          window[option]()

}
function download_as_csv(option){

alert(option)
console.log(option)



}


var already_ran_functions = {}
 $(document).ready(function () {
 	console.log($('*[data-type]'));

 	$('*[data-type]').each(function(count,div){
		if(typeof  window[$(this).data('type')]  === 'function'){
			var data_tags =$(this).data()
				data_tags['id'] =  $(this).attr('id')
				data_tags['class'] =  $(this).attr('class')
			
			$(this).html(window[$(this).data('type')]($(this).data()))
		}
	})


	})

function last_month(){
	var date = new Date();
	var firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).yyyymmdd();
	var lastDay = new Date(date.getFullYear(), date.getMonth() , 0).yyyymmdd();

	$('#from_date').val(firstDay)
	$('#to_date').val(lastDay)
	      $('#update_button').trigger('click')
}

function this_month(){
var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).yyyymmdd();
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).yyyymmdd();
	$('#from_date').val(firstDay)
	$('#to_date').val(lastDay)
	      $('#update_button').trigger('click')
}
 $(document).ready(function () {


	$('#to_date').datepicker({
    format: 'yyyy-mm-dd'
  	}).on('changeDate', function (ev) {
	$(this).datepicker('hide')
	});;
	
	
	$('#from_date').datepicker({
    format: 'yyyy-mm-dd'
  	}).on('changeDate', function (ev) {
    $(this).blur();
  	$(this).datepicker('hide')
    $('#to_date').datepicker('show')
  	});


$('body').prepend("<style>.datepicker{top:0;left:0;padding:4px;margin-top:1px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker:before{content:'';display:inline-block;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-bottom-color:rgba(0,0,0,0.2);position:absolute;top:-7px;left:6px}.datepicker:after{content:'';display:inline-block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;position:absolute;top:-6px;left:7px}.datepicker>div{display:none}.datepicker table{width:100%;margin:0}.datepicker td,.datepicker th{text-align:center;width:20px;height:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker td.day:hover{background:#eee;cursor:pointer}.datepicker td.day.disabled{color:#eee}.datepicker td.old,.datepicker td.new{color:#999}.datepicker td.active,.datepicker td.active:hover{color:#fff;background-color:#006dcc;background-image:-moz-linear-gradient(top,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(top,#08c,#04c);background-image:-o-linear-gradient(top,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc',endColorstr='#ff0044cc',GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);*background-color:#04c;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}.datepicker td.active:hover,.datepicker td.active:hover:hover,.datepicker td.active:focus,.datepicker td.active:hover:focus,.datepicker td.active:active,.datepicker td.active:hover:active,.datepicker td.active.active,.datepicker td.active:hover.active,.datepicker td.active.disabled,.datepicker td.active:hover.disabled,.datepicker td.active[disabled],.datepicker td.active:hover[disabled]{color:#fff;background-color:#04c;*background-color:#003bb3}.datepicker td.active:active,.datepicker td.active:hover:active,.datepicker td.active.active,.datepicker td.active:hover.active{background-color:#039 \9}.datepicker td span{display:block;width:47px;height:54px;line-height:54px;float:left;margin:2px;cursor:pointer;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker td span:hover{background:#eee}.datepicker td span.active{color:#fff;background-color:#006dcc;background-image:-moz-linear-gradient(top,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(top,#08c,#04c);background-image:-o-linear-gradient(top,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc',endColorstr='#ff0044cc',GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);*background-color:#04c;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}.datepicker td span.active:hover,.datepicker td span.active:focus,.datepicker td span.active:active,.datepicker td span.active.active,.datepicker td span.active.disabled,.datepicker td span.active[disabled]{color:#fff;background-color:#04c;*background-color:#003bb3}.datepicker td span.active:active,.datepicker td span.active.active{background-color:#039 \9}.datepicker td span.old{color:#999}.datepicker th.switch{width:145px}.datepicker th.next,.datepicker th.prev{font-size:21px}.datepicker thead tr:first-child th{cursor:pointer}.datepicker thead tr:first-child th:hover{background:#eee}.input-append.date .add-on i,.input-prepend.date .add-on i{display:block;cursor:pointer;width:16px;height:16px}</style>")

})

/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
		this.picker = $(DPGlobal.template)
							.appendTo('body')
							.on({
								click: $.proxy(this.click, this),
								mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}
		this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}
		this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
		if (typeof this.viewMode === 'string') {
			switch (this.viewMode) {
				case 'months':
					this.viewMode = 1;
					break;
				case 'years':
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break;
			}
		}
		this.startViewMode = this.viewMode;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
				$(document).on('mousedown', $.proxy(this.hide, this));
			}
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},
		
		hide: function(){
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			this.set();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},
		
		set: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},
		
		setValue: function(newDate) {
			if (typeof newDate === 'string') {
				this.date = DPGlobal.parseDate(newDate, this.format);
			} else {
				this.date = new Date(newDate);
			}
			this.set();
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},
		
		update: function(newDate){
			this.date = DPGlobal.parseDate(
				typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
				this.format
			);
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(DPGlobal.dates.months[month]+' '+year);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() === this.weekStart) {
					html.push('<tr>');
				}
				clsName = '';
				if (prevMonth.getMonth() < month) {
					clsName += ' old';
				} else if (prevMonth.getMonth() > month) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() === currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day'+clsName+'">'+prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() === this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear === year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length === 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
								);
								this.fill();
								this.set();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						if (this.viewMode !== 0) {
							this.date = new Date(this.viewDate);
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						this.showMode(-1);
						this.fill();
						this.set();
						break;
					case 'td':
						if (target.is('.day')){
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);
							this.fill();
							this.set();
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						break;
				}
			}
		},
		
		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};
	
	$.fn.datepicker = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option === 'string') data[option](val);
		});
	};

	$.fn.datepicker.defaults = {
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/\-\s].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(),
				val;
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			if (parts.length === format.parts.length) {
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							date.setMonth(val - 1);
							break;
						case 'yy':
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							date.setFullYear(val);
							break;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&lsaquo;</th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next">&rsaquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery )



jQuery.fn.table2CSV = function(options) {
    var options = jQuery.extend({
        separator: ',',
        header: [],
        delivery: 'popup' // popup, value
    },
    options);

    var csvData = [];
    var headerArr = [];
    var el = this;

    //header
    var numCols = options.header.length;
    var tmpRow = []; // construct header avalible array

    if (numCols > 0) {
        for (var i = 0; i < numCols; i++) {
            tmpRow[tmpRow.length] = formatData(options.header[i]);
        }
    } else {
        $(el).filter(':visible').find('th').each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
    }

    row2CSV(tmpRow);

    // actual data
    $(el).find('tr').each(function() {
        var tmpRow = [];
        $(this).filter(':visible').find('td').each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
        row2CSV(tmpRow);
    });
    if (options.delivery == 'popup') {
        var mydata = csvData.join('\n');
        return popup(mydata);
    } else {
        var mydata = csvData.join('\n');
        return mydata;
    }

    function row2CSV(tmpRow) {
        var tmp = tmpRow.join('') // to remove any blank rows
        // alert(tmp);
        if (tmpRow.length > 0 && tmp != '') {
            var mystr = tmpRow.join(options.separator);
            csvData[csvData.length] = mystr;
        }
    }
    function formatData(input) {
        // replace " with â€œ
        var regexp = new RegExp(/["]/g);
        var output = input.replace(regexp, "â€œ");
        //HTML
        var regexp = new RegExp(/\<[^\<]+\>/g);
        var output = output.replace(regexp, "");
        if (output == "") return '';
        return '"' + output + '"';
    }
    function popup(data) {
        var generator = window.open('', 'csv', 'height=400,width=600');
        generator.document.write('<html><head><title>CSV</title>');
        generator.document.write('</head><body >');
        generator.document.write('<textArea cols=70 rows=15 wrap="off" >');
        generator.document.write(data);
        generator.document.write('</textArea>');
        generator.document.write('</body></html>');
        generator.document.close();
        return true;
    }
};


