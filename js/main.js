
  $(document).ready(function($) {
    $('.accordion').find('.accordion-toggle').click(function(){

    	//Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');
      $(".accordion-content").not($(this).next()).removeClass("open");

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      $(this).next().toggleClass("open");

      $.each($(".accordion").contents(), function(index, section){
      	if (index % 2 === 1){
	      	console.log(index + " " + section);
	      	if ($(section).find(".training-summary").hasClass("open")) {
	      		$(section).find(".icon-expand-contract").attr("src", 'images/minus.png');
	      	} else {
	      		$(section).find(".icon-expand-contract").attr("src", 'images/plus.png');
	      		console.log("hey girl");
	      	}
	      }
      	/*
      	if (section.children(".training-summary").hasClass("open")) {
      		console.log(index + " " + section);
      		section.find(".icon-expand-contract").attr("src", 'images/minus.png');
      	} else {
      		section.find(".icon-expand-contract").attr("src", 'images/plus.png');
      	}*/
      });



    });
  });


var eventDates = [
	{
		"month" : "May",
		"date" : "15",
		"time" : "5:30 PM",
		"description" : "animeo IP Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "May",
		"date" : "15",
		"time" : "5:30 PM",
		"description" : "Intelligent-RS485 Motor Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "May",
		"date" : "29",
		"time" : "5:30 PM",
		"description" : "animeo IP Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "May",
		"date" : "29",
		"time" : "5:30 PM",
		"description" : "Intelligent-RS485 Motor Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "June",
		"date" : "12",
		"time" : "5:30 PM",
		"description" : "animeo IP Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "June",
		"date" : "12",
		"time" : "5:30 PM",
		"description" : "TrueOutlook Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "June",
		"date" : "17-19",
		"time" : "5:30 PM",
		"description" : "Level 3 Training",
		"location" : "Middleton, WI",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "June",
		"date" : "26",
		"time" : "5:30 PM",
		"description" : "Motor Systems Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "June",
		"date" : "26",
		"time" : "5:30 PM",
		"description" : "Standard Motor Webinar",
		"location" : "Online",
		"link" : "http://www.cvent.com/d/8rq28m"
	},
	{
		"month" : "July",
		"date" : "15-17",
		"time" : "5:30 PM",
		"description" : "Level 2 Training",
		"location" : "Somfy, CA",
		"link" : "http://www.cvent.com/d/8rq28m"
	}
];

var eventList = document.getElementById("events");

var a = document.createElement('a');
var li = document.createElement("li");
var eventHtml = "";
var numberOfEvents = eventDates.length;

for(var i = 0; i < numberOfEvents; i++) {
	li = document.createElement("li");
	eventHtml = "<div class=\"calendar\"><h5>" + eventDates[i].month + " " + eventDates[i].date + "<br />" + eventDates[i].time + "</h5></div>"
				  + "<div class='event-info'><h3>" + eventDates[i].description + "<hr /><img class='icon-location' src='images/location.png' alt='Location Symbol' /> " + eventDates[i].location + "</h3></div>";
	li.innerHTML = eventHtml;
	a.appendChild(li);
	a.href = eventDates[i].link;
	a.target = "_blank";
	eventList.appendChild(a);
}