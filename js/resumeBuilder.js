var formattedName = HTMLheaderName.replace("%data%", "Aaron Katz");

var formattedRole = HTMLheaderRole.replace("%data%", " Web Developer");

var image = HTMLbioPic.replace("%data%", "images/fry.jpg");



$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(image);


$("#header").append(HTMLwelcomeMsg.replace("%data%", "Welcome to my online resume"));

var bio =
{ 
	"name": "Aaron",
	"age": "37",
	"role": "Software Developer",
	"contacts": { 
		"cell":"805-794-5084",
		"email": "aaronmk2@yahoo.com",
		"github": "akatz6",
		"location": "Seattle"
	},
	"Welcome Message": "Hello, I like to code",
	"skills":  [
	"Programming", "Java Script", "C++", "C#"
	],
	"bioPic": "images/fry.jpg"
};

function displayContactInfo(tag, info){
	$("#header").append(tag.replace("%data%", info));
};

if(bio.skills.length >0){
	displayContactInfo(HTMLmobile, bio.contacts.cell);
	displayContactInfo(HTMLemail, bio.contacts.email);
	displayContactInfo(HTMLgithub, bio.contacts.github);
	displayContactInfo(HTMLlocation, bio.contacts.location);


	$("#header").append(HTMLskillsStart);
	for(skills in bio.skills){	
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
		$("#skills").append(formattedSkill);
	}
}


var work = {
	"jobs":[
	{
		"title": "Software Engineer",
		"employer": "WideOrbit",
		"location": "Lynnwood",
		"Length": "6 months",
		"Dates": "09/2015 - present",
		"Description": "Create UI in Java Script for seller side and" +
		"implment the UI with C# server code"
	},
	{
		"title": "Software Engineer",
		"employer": "InsighGlobal/Microsoft",
		"location": "Redmond",
		"Length": "6 months",
		"Dates": "03/2015 - 09/2015",
		"Description": "Create powershell for linux"
	},
	{
		"title": "Software Engineer",
		"employer": "Praxis Resource",
		"location": "Gilbert",
		"Length": "8 months",
		"Dates": "01/2014 - 08/2014",
		"Description": "Wriote software for auto testing devices"
	},
	{
		"title": "Software Engineer",
		"employer": "Boeing",
		"location": "Mesa",
		"Length": "1 year and 6 months",
		"Dates": "07/2012 - 01/2014",
		"Description": "Develop software for virtual maitenace of the Chinnook Aircraft"
	}
	]
};

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].Length);
		$(".work-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[job].Description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


var education = {
	"Schools":[ 
	{
		"name": "Boston University",
		"city":  "Boston",
		"degree": "BA",
		"major": "Internationl Relations",
		"dates": 2000,
		"url": "BostonUniversity.com"
	},
	{
		"name": "Seattle University",
		"city":  "Seattle",
		"degree": "BS",
		"major": "Computer Science",
		"dates": 2012,
		"url": "SeattleUniversity.com"
	}

	]
};

education.display = function(){
	for(school in education.Schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", 
			education.Schools[school].name));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", 
			education.Schools[school].city));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", 
			education.Schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", 
			education.Schools[school].dates));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", 
			education.Schools[school].major));
	}
};
education.display();

var projects = {
	"projects": [
	{
		"title": "Resume",
		"dates": 2016,
		"description": "My Resume as a web page",
		"url": "images/resume.jpg"
	},
	{
		"title": "First Project",
		"dates": 2016,
		"description": "First Project for front end development",
		"url": "images/FirstProject.jpg"
	}
	]
};

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var test = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(test);
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", 
			projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", 
			projects.projects[project].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", 
			projects.projects[project].url));
	}
};


projects.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

initializeMap();
     /*var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7392, lng: 275.644},
          scrollwheel: false,
          navigationControl: false,
          draggable: false,
          zoom: 4
        });
      }
initMap();

var marker = new google.maps.Marker({
    position: new google.maps.LatLng([37.7392], [275.644]),
    map: map*/
//});

