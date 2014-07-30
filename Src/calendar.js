var frame;
var year = 2014;
var month = 5;

var month_names = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"];
var month_days = [31,28,31,30,31,30,31,31,30,31,30,31];
var week_days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function initialize(){
	style();
	document.write("<div id='calendarOuterFrame' style='width: 250px; height: 250px; margin: 0 auto; text-align: center;'><h3>Birth Day Calendar</h3><br><div id='calendarDBFrame'>Loading...</div></div>");
	frame = document.getElementById("calendarDBFrame");
	
	yearFrame();
}

function style(){
	content = "";
	
	content += "<style>"+
					"#calendarOuterFrame{"+
						"width: 250px;"+
						"height: 250px;"+
						"margin: 0 auto;"+
						"text-align: center;"+
					"}"+
					"#calendarOuterFrame h3{"+
						"margin: 0 0 5px;"+
					"}"+
					"#calendarOuterFrame table{"+
						"width: 100%;"+
						"border: 1px solid #AAA;"+
						"border-collapse: collapse;"+
					"}"+
					"#calendarOuterFrame td{"+
						"border: 1px solid #AAA;"+
					"}"+
					"#calendarOuterFrame th{"+
						"background: #CCC;"+
					"}"+
					"#calendarOuterFrame th.title{"+
						"background: #FFF;"+
					"}"+
				"</style>";
				
	document.write(content);
}

function yearFrame(){
	var content = "";
	
	content += "<form name='year_select' action='javascript:monthFrame(this.year_select.year.value);'>";
		content += "Birth Year<br>";
		content += "<input type='text' name='year'><br>";
		content += "<input type='submit' value='Months'>";
	content += "</form>";
	
	frame.innerHTML = content;
}

function monthFrame(year_value){
	year = year_value;
	
	var content = "";
	
	content += "<form name='month_select' action='javascript:generateCalendar(this.month_select.month.value);'>";
		content += "Birth Month<br>";
		content += "<select name='month'>";
			
			for(var i=0; i<12; i++){
				content += "<option value='"+i+"'>"+month_names[i]+"</option>";
			}
			
		content += "</select><br>";
		content += "<input type='submit' value='Calendar'>";
	content += "</form>";
	
	frame.innerHTML = content;
}

function generateCalendar(month_value){
	month = month_value;
	
	var content = "";
	var first_day = new Date(year, month, 1);
	var start_day = first_day.getDay();
	
	var tick = 0;
	
	content += "<table>";
		content += "<tr><th colspan='7' class='title'>"+month_names[month]+" - "+year+"</th></tr>";
		content += "<tr>";
			
			for(var d=0; d<7; d++){
				content += "<th>"+week_days[d]+"</th>";
			}
		
		content += "</tr>";
	
		content += "<tr>";
			
			while(tick < start_day){
				content += "<td>&nbsp;</td>";
				
				tick++;
			}
			
			for(var i=1; i<=month_days[month]; i++){
				if(tick > 6){
					content += "</tr>";
					content += "<tr>";
					tick = 0;
				}
				content += "<td>"+i+"</td>";
				tick++;
			}
			
			while(tick <= 6){
				content += "<td>&nbsp;</td>";
				tick++;
			}
	
		content += "</tr>";
	content += "</table>";
	
	frame.innerHTML = content;
}

initialize();