'use strict';
var bio =
{ 
	"name": "Aaron",
	"age": "37",
	"role": "Software Developer",
	"contacts": { 
		"mobile":"805-794-5084",
		"email": "aaronmk2@yahoo.com",
		"github": "akatz6",
		"location": "Seattle"
	},
	"welcomeMessage": "Hello, I like to code",
	"skills":  [
	"Programming", "Java Script", "C++", "C#"
	],
	"biopic": "images/fry.jpg",
	display: function(){
		$("#header").append(HTMLheaderName.replace("%data%", "Aaron Katz"));
		$("#header").append(HTMLheaderRole.replace("%data%", " Web Developer"));
		$("#header").append(HTMLbioPic.replace("%data%", "images/fry.jpg"));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", "Welcome to my online resume"));


		function displayContactInfo(tag, info){
			$("#topContacts").append(tag.replace("%data%", info));
			$("#footerContacts").append(tag.replace("%data%", info));
		};

		if(bio.skills.length > 0){
			displayContactInfo(HTMLmobile, bio.contacts.mobile);
			displayContactInfo(HTMLemail, bio.contacts.email);
			displayContactInfo(HTMLgithub, bio.contacts.github);
			displayContactInfo(HTMLlocation, bio.contacts.location);


			$("#header").append(HTMLskillsStart);
			for(var skill in bio.skills){	
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
			}
		}
	}
};

var work = {
	"jobs":[
	{
		"title": "Software Engineer",
		"employer": "WideOrbit",
		"location": "Lynnwood",
		"dates": "09/2015 - present",
		"description": "Creating UI in Java Script for seller side and implement the UI with C# server code"
	},
	{
		"title": "Software Engineer",
		"employer": "InsighGlobal/Microsoft",
		"location": "Redmond",
		"dates": "03/2015 - 09/2015",
		"description": "Created powershell for linux"
	},
	{
		"title": "Software Engineer",
		"employer": "Praxis Resource",
		"location": "Gilbert",
		"dates": "01/2014 - 08/2014",
		"description": "Wrote software for testing devices"
	},
	{
		"title": "Software Engineer",
		"employer": "Boeing",
		"location": "Mesa",
		"dates": "07/2012 - 01/2014",
		"description": "Developed software for virtual maintence of the Chinnook Aircraft"
	}
	],
	display: function(){
		for(var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDate);

			var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};


var education = {
	"schools":[ 
	{
		"name": "Boston University",
		"location":  "Boston",
		"degree": "BA",
		"majors": ["Internationl Relations"],
		"dates": "2000",
		"url": "BostonUniversity.com"
	},
	{
		"name": "Seattle University",
		"location":  "Seattle",
		"degree": "BS",
		"majors": ["Computer Science"],
		"dates": "2012",
		"url": "SeattleUniversity.com"
	}
	],
	"onlineCourses":[
	{
		"title": "Front End Web Development",
		"school": "Udacity",
		"date": "March - present",
		"url": "Udacity.com"
	}
	],
	display: function(){
		for(var school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", 
				education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", 
				education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", 
				education.schools[school].majors));
		}
		for(var onlineSchool in education.onlineCourses){
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			var formattedSchoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineSchool].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineSchool].school);
			$(".education-entry").append(formattedSchoolTitle + formattedSchool);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", 
 			education.onlineCourses[onlineSchool].date));
 			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", 
 			education.onlineCourses[onlineSchool].url));
		}
	}
};

var projects = {
	"projects": [
	{
		"title": "Resume",
		"dates": "2016",
		"description": "My Resume as a web page",
		"images": ["images/resume.jpg"]
	},
	{
		"title": "First Project",
		"dates": "2016",
		"description": "First Project for front end development",
		"images": ["images/FirstProject.jpg"]
	}
	],	
	display: function(){
		for(var project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var test = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(test);
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", 
				projects.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", 
				projects.projects[project].description));
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", 
				projects.projects[project].images));
		}
	}
};

bio.display();
work.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);

initializeMap();


