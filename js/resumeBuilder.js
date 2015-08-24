/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var role = "Web Developer";
var bio = {
	"name": "Tianle",
	"role": "Front-End Web Developer",
	"contacts": {
		"email": "ericchentianle@gmail.com",
		"mobile": "716-446-3553",
		"location": "San Jose",
		"github": "TianleChen"
	},
	"picURL": "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpa1/t31.0-8/10463721_1555879551306237_7970200940595882766_o.jpg",
	"welcomeMsg": "Hello! Welcome to my resume page!",
	"age": 24,
	"skills": [
		"HTML5", "CSS3", "Javascript", "Angularjs", "Bootstrap", "Nodejs"
	]
};
var education = {
	"schools": [
		{
			"name": "University at Buffalo, the State University of New York",
			"location": "Buffalo, NY, US",
			"major": "Electrical Engineering",
			"dates": "September 2013 - February 2015",
			"degree": "Master of Science"
		},
		{
			"name": "Udacity",
			"location": "San Jose, CA, US",
			"major": "Front-end Web Developer",
			"dates": "August 2015 - Present",
			"degree": "Nanodegree"
		}
	]
};
var work = {
	"jobs": [
		{
			"employer": "Shanghai Automotive Industry Corporation",
			"position": "intern",
			"location": "Shanghai, China",
			"dates": "December 2012 - February 2013",
			"description": "Dealt with daily routine and improved factory components by analyzing performance data.<br>Utilized AutoCAD to design broken machine parts such as a pilot pin."
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "Principles of Modern Digital Communications Graduate Project",
			"dates": "September 2014 - December 2014",
			"description": "Analyzed the communication system using PAM and QAM modulation and demodulation. Simulated the system with binary-PAM, 4-PAM and 4-QAM to find out the SER over SNR curve. Compared the simulation result with theoretical result and further calculated the BER for both situations.",
			"images": "images/p1.png",
		},
		{
			"title": "MIMO Wireless Communications System",
			"dates": "February 2014 - June 2014",
			"description": "Utilized Jakes’ fading simulator to generate independent fading channels. Combined the fading channels with the specific signal matrix to simulate different MIMO systems. Analyzed the relationship between symbol error rate and signal to noise ratio with MATLAB.",
			"images": "images/p2.png",
		},
		{
			"title": "Embedded System Design based on Arm Cortex M3",
			"dates": "September 2013 - December 2013",
			"description": "Utilized C and LPC1768 Development Board to design a classic game. Combined UART, LCD screen, Joystick, Speaker and many other hardware resources together. Created two matrices with one-to-one correspondence for different data to simplify the logical complexity.",
			"images": "images/p3.jpg",
		},
		{
			"title": "Array Pattern Synthesis Using Phase Control",
			"dates": "August 2011 - November 2011",
			"description": "Combined fast iterative methods and muti-beam synthesis by phase control for antenna arrays. Excogitated phase control with the magnitude ratio and the phase difference of the main lobes controlled. Simulated the theoretical model with MATLAB.",
			"images": "images/p4.jpg",
		}
	]
};

/*Name and Role*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*Contact*/
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedGithub);

/*Photo*/
var formattedbioPic = HTMLbioPic.replace("%data%", "images/portfolio.jpg");
$("#header").append(formattedbioPic);

/*Welcome!*/
var formattedWel = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWel);

/*Skills*/
if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill, i;
	for (i = 0; i < bio.skills.length; i++) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
};

/*Display Work*/
work.display = function() {
	var workEmployer, jobPosition, workDate, workDes;
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		jobPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		workDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		workDes = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(workEmployer + jobPosition);
		$(".work-entry:last").append(workDate);
		$(".work-entry:last").append(workDes);
	};
}
work.display();

/*Display Project*/
projects.display = function() {
	var projectTitle, projectDates, projectDes, projectImg;
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		projectDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		projectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDes);
		$(".project-entry:last").append(projectImg);
	}
};
projects.display();

/*Display Education*/
education.display = function(){
	var schoolName, schoolLocation, schoolMajor, schoolDates, schoolDegree;
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(schoolName + schoolDegree);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		$(".education-entry:last").append(schoolMajor);
	};
};
education.display();

/*Add Map*/
$("#mapDiv").append(googleMap);

/*Click function*/
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});
/*Internationalize Button*/
// $("#main").append(internationalizeButton);
// function inName (name) {
// 	name = name.trim().split(" ");
// 	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	name[1] = name[1].toUpperCase();
// 	return name[0] + " " + name[1];
// }