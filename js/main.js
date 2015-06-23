$(document).ready(function($) {

	populateEvents();
	
    $('.accordion').find('.accordion-toggle').click(function(){

    	//Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');
      $(".accordion-content").not($(this).next()).removeClass("open");

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      $(this).next().toggleClass("open");

		$.each($(".accordion").contents(), function(index, section){
	      	if ($(section).find(".accordion-content").hasClass("open")) {
	      		$(section).find(".icon-expand-contract").attr("src", 'images/minus.png');
	      	} else {
	      		$(section).find(".icon-expand-contract").attr("src", 'images/plus.png');
	      	}
	      
      	});
    });    
  });

function populateEvents() {

	var eventDates = [
		[
			{
				"month": "June"
			},
			{
				"date": moment("2015-06-26 11"),
				"description" : "animeo IP Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/YZWH28H"
			},
			{
				"date": moment("2015-06-26 16"),
				"description" : "Motor Systems Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/YZGWBQ8"
			}
		],
		[
			{
				"month": "July"
			},
			{
				"date": moment("2015-07-10 11"),
				"description" : "TruePerformance Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/63RJMF9"
			},
			{
				"date": moment("2015-07-10 16"),
				"description" : "RTS Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/6GXF9W9"
			},
			{
				"date": moment("2015-07-17 11"),
				"description" : "animeo IP Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RJLGF5"
			},
			{
				"date": moment("2015-07-17 16"),
				"description" : "RTS Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RWCJ6S"
			},
			{
				"date": moment("2015-07-24 11"),
				"description" : "Intelligent-RS485 Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RT96KT"
			},
			{
				"date": moment("2015-07-24 16"),
				"description" : "Motor Systems Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RMSNHF"
			}
		],
		[
			{
				"month": "August"
			},
			{
				"date": moment("2015-08-07 11"),
				"description" : "Intelligent-RS485 Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RNTBBB"
			},
			{
				"date": moment("2015-08-07 16"),
				"description" : "Standard Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RGW26P"
			},
			{
				"month" : "Aug",
				"date" : "12-14",
				"time" : "8:00 AM",
				"description" : "Level 2 Training",
				"location" : "Middleton, WI",
				"link" : "http://www.cvent.com/d/1rqx3n"
			},
			{
				"date": moment("2015-08-21 11"),
				"description" : "animeo IP Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5RPS2YC"
			},
			{
				"date": moment("2015-08-21 16"),
				"description" : "Standard Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TK2X3G"
			},
			{
				"date": moment("2015-08-28 11"),
				"description" : "Standard Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TVNTTK"
			},
			{
				"date": moment("2015-08-28 16"),
				"description" : "Motor Systems Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TDDV92"
			}
		],
		[
			{
				"month": "September"
			},
			{
				"date": moment("2015-09-04 11"),
				"description" : "TrueOutlook Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5T22Y7Q"
			},
			{
				"date": moment("2015-09-04 16"),
				"description" : "animeo IP Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TJFCM2"
			},
			{
				"date": moment("2015-09-18 11"),
				"description" : "Intelligent-RS485 Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TWXKCK"
			},
			{
				"date": moment("2015-09-18 16"),
				"description" : "TrueOutlook Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TRF72V"
			},
			{
				"month" : "Sep",
				"date" : "23-25",
				"time" : "8:00 AM",
				"description" : "Level 3 Training<span style='color:#E60505;'>*</span>",
				"location" : "Middleton, WI",
				"link" : "#September"
			}
		],
		[
			{
				"month": "October"
			},
			{
				"date": moment("2015-10-02 11"),
				"description" : "TruePerformance Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TMYPM8"
			},
			{
				"date": moment("2015-10-02 16"),
				"description" : "Selecting Motorization Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5T3MX3N"
			},
			{
				"month" : "Oct",
				"date" : "5-7",
				"time" : "8:00 AM",
				"description" : "Level 2 Training<span style='color:#E60505;'>*</span>",
				"location" : "Somfy, CA",
				"link" : "#October"
			},
			{
				"month" : "Oct",
				"date" : "7-9",
				"time" : "8:00 AM",
				"description" : "Level 2 Training<span style='color:#E60505;'>*</span>",
				"location" : "Somfy, CA",
				"link" : "#October"
			},
			{
				"date": moment("2015-10-16 11"),
				"description" : "TrueOutlook Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TH2NXC"
			},
			{
				"date": moment("2015-10-16 16"),
				"description" : "Selecting Motorization Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5T6JBMW"
			},
			{
				"month" : "Oct",
				"date" : "21-23",
				"time" : "8:00 AM",
				"description" : "Level 2 Training<span style='color:#E60505;'>*</span>",
				"location" : "TBD",
				"link" : "#October"
			},
			{
				"date": moment("2015-10-30 11"),
				"description" : "Standard Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5TH2NXC"
			},
			{
				"date": moment("2015-10-30 16"),
				"description" : "RTS Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5MLKR9H"
			}
		],
		[
			{
				"month": "November"
			},
			{
				"date": moment("2015-11-06 11"),
				"description" : "animeo IP Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5M99ZGF"
			},
			{
				"date": moment("2015-11-06 16"),
				"description" : "TrueOutlook Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5M2QQCT"
			},
			{
				"date": moment("2015-11-20 11"),
				"description" : "Motor Systems Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5MJST2N"
			},
			{
				"date": moment("2015-11-20 16"),
				"description" : "Intelligent-RS485 Motor Webinar",
				"location" : "Online",
				"link" : "https://www.surveymonkey.com/s/5MQ6BJ9"
			}
		],
		[
			{
				"month": "December"
			},
			{
				"month" : "Dec",
				"date" : "2-4",
				"time" : "8:00 AM",
				"description" : "Level 2 Training<span style='color:#E60505;'>*</span>",
				"location" : "Somfy, FL",
				"link" : "#December"
			}
		]
	];


	var monthList = document.getElementById("events");

	var section, h2, div, ul, li, a, eventHtml = "";

	var numberOfMonths = eventDates.length;
	for(var i = 0; i < numberOfMonths; i++) {
	
		section = document.createElement("section");
		section.id = eventDates[i][0].month;

		h2 = document.createElement('h2');
		div = document.createElement("div");
		ul = document.createElement("ul");
		img = document.createElement("img");
		
		img.alt = "Expand";
		img.className = "icon-expand-contract";
		
		h2.className = "accordion-toggle";
		h2.innerHTML = eventDates[i][0].month;
		h2.appendChild(img);
		section.appendChild(h2);
		if (i === 0) {
			div.className = "accordion-content open";
			img.src = 'images/minus.png';
		} else {
			div.className = "accordion-content";
			img.src = 'images/plus.png';
		}

		var numberOfEvents = eventDates[i].length;

		for(var j = 1; j < numberOfEvents; j++){
			a = document.createElement('a');
			li = document.createElement("li");
		
			if (eventDates[i][j].location === "Online") {
				eventHtml = "<div class=\"calendar\"><h5>" + eventDates[i][j].date.format("MMM D") + "<br />" + eventDates[i][j].date.format("h:mm A") + "</h5></div>" +
						   "<div class='event-info'><h3>" + eventDates[i][j].description + "<hr /><img class='icon-location' src='images/location.png' alt='Location Symbol' /> " + eventDates[i][j].location + ", "+ eventDates[i][j].date.format("h:mm A") + " EST/" + eventDates[i][j].date.subtract(1, "h").format("h:mm A") +" CST</h3></div>";
			} else {
				eventHtml = "<div class=\"calendar\"><h5>" + eventDates[i][j].month + " " + eventDates[i][j].date + "<br />" + eventDates[i][j].time + "</h5></div>" +
						   "<div class='event-info'><h3>" + eventDates[i][j].description + "<hr /><img class='icon-location' src='images/location.png' alt='Location Symbol' /> " + eventDates[i][j].location + "</h3></div>";
			}
			li.innerHTML = eventHtml;
			a.appendChild(li);
			if(eventDates[i][j].link.substring(0,1) !== "#"){
				a.target = "_blank";
			}
			a.href = eventDates[i][j].link;
			ul.appendChild(a);
			if (eventDates[i][j].location !== "Online") {
				li = document.createElement("li");
								li.className = "emptyLi";
				ul.appendChild(li);
			}
		}
		div.appendChild(ul);
		section.appendChild(div);
		monthList.appendChild(section);
	}
	
}