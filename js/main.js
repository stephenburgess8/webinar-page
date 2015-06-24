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
				"month": "July"
			},
			{
				"date": moment("2015-07-11 13"),
				"description" : "Foundations: Technical Requirements",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-07-11 18"),
				"description" : "Foundations: Action Items",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-07-15 08"),
				"description" : "WebCast Strategies<span style='color:#E60505;'>*</span>",
				"location" : "Online",
				"link" : "#July"
			},
			{
				"date": moment("2015-07-15 18"),
				"description" : "Hardware Overview",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-07-26 18"),
				"description" : "Promoting your Webinars",
				"location" : "Online",
				"link" : "http://sburgess.us"
			}
		],
		[
			{
				"month": "August"
			},
			{
				"date": moment("2015-08-02 09"),
				"description" : "Foundations: What to Expect",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-08-02 17"),
				"description" : "Foundations: Look your best!",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-08-20 07"),
				"description" : "WebCast Strategies and Technologies<span style='color:#E60505;'>*</span>",
				"location" : "Online",
				"link" : "#August"
			},
			{
				"date": moment("2015-08-20 19"),
				"description" : "Making a Website for your Webinar Series",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"month" : "Aug",
				"date" : "22-24",
				"time" : "8:00 AM",
				"description" : "Annual Webinar Convention",
				"location" : "Madison, WI",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-08-29 11"),
				"description" : "Presentation Tips and Tricks",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-08-29 18"),
				"description" : "Connecting with your Audience<span style='color:#E60505;'>*</span>",
				"location" : "Online",
				"link" : "#August"
			}
		],
		[
			{
				"month": "September"
			},
			{
				"date": moment("2015-09-07 10"),
				"description" : "Foundations: Deciding on a Webinar",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-09-07 19"),
				"description" : "Hardware Overview",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-09-17 09"),
				"description" : "Presentation Tips and Tricks",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-09-17 15"),
				"description" : "Foundations: Get the Most<span style='color:#E60505;'>*</span>",
				"location" : "Online",
				"link" : "#September"
			},
			{
				"month" : "Sep",
				"date" : "26-28",
				"time" : "8:00 AM",
				"description" : "Annual Webinar Convention",
				"location" : "Madison, WI",
				"link" : "http://sburgess.us"
			}
		],
		[
			{
				"month": "October"
			},
			{
				"date": moment("2015-10-01 12"),
				"description" : "WebCast Strategies and Technologies",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-10-01 16"),
				"description" : "Foundations: Deciding on a Webinar",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-10-16 06"),
				"description" : "Special Lecture by Steve Bezos<span style='color:#E60505;'>*</span>",
				"location" : "Online",
				"link" : "#October"
			},
			{
				"date": moment("2015-10-16 21"),
				"description" : "Special Webinar: In the News<span style='color:#E60505;'>*</span>",
				"location" : "Online",
				"link" : "#October"
			},
			{
				"date": moment("2015-10-22 13"),
				"description" : "Foundations: Action Items",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-10-22 22"),
				"description" : "Foundations: What to Expect",
				"location" : "Online",
				"link" : "http://sburgess.us"
			},
			{
				"date": moment("2015-10-31 23"),
				"description" : "Special Webinar: Halloween Promotions",
				"location" : "Online",
				"link" : "http://sburgess.us"
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