/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Vignesh Kannan",
    "role": "Systems programmer",
    "welcomeMessage": "I am a Software engineering graduate student looking for full time opportunities",
    "image": "images/bio.jpg",
    "contacts": { "Mobile" : "480-208-3172",
                   "Email" : "vkannan7@asu.edu",
                   "github" : "thisisgaara",
                   "Location" : "Tempe"
    },
    "skills":["C", "CUDA", "JAVA", "JavaScript", "Python", "Haskell", "Embedded systems programming"]
    };




var work = {
            "jobs":[
                    {"employer": "Aricent Technologies",
                     "title": "Software Engineer - Trainee",
                     "location": "Gurgaon, India",
                     "dates": "Sep 13 2010 - Dec 13 2010",
                     "description": "Training on Data structures, Computer systems, Unix environment. Implemented DNS as final project using Linux Socket API's. Cache implementation was done as well"
                    },
                    {"employer":"Aricent Technologies",
                     "title": "Software Engineer",
                     "location": "Bangalore",
                     "dates": "Dec 13, 2010 - Feb 10, 2012",
                     "description": "Implemented SRIO, EMAC module in LTE chipsets"
                    },
                    {"employer": "Samsung India Software operations",
                     "title": "Senior Software Engineer",
                     "location": "Bangalore",
                     "dates": "Feb 20, 2012 - July 20, 2014",
                     "description": "Took ownership of LTE control stack including RRM, L1LC and HAL modules.  Performed TDD verification activities. Worked on MBSFN, RSTD."
                    },
                    {"employer": "Arizona State University",
                     "title": "Graduate student worker - Tutor at TRIO Center",
                     "location": "ASU-Polytechnic, Mesa",
                     "dates":"Aug 2014 - Aug 2015",
                     "description": "Tutor Undergrad engineering students in Software engineering, Maths and Physics"
                    },
                    {"employer": "Arizona State University",
                     "title": "Teaching Assistant",
                     "location": "ASU-Polytechnic, Mesa",
                     "dates":"Aug 2015 - Dec 2015",
                     "description": "Teaching assistant for Graduate level Computer Architecture course as well as Undergraduate level Microcomputer Architecture and coding in PLP Assembly"
                    },
                    {"employer": "Arizona State University",
                     "title": "Teaching Assistant",
                     "location": "ASU-Polytechnic, Mesa",
                     "dates":"Jan 2015 - May 2016",
                     "description": "Teaching assistant for Undergraduate level Microcomputer Architecture and coding in PLP Assembly"
                    },
                    {"employer": "Arizona State University",
                     "title": "Grader",
                     "location": "ASU-Polytechnic, Mesa",
                     "dates":"Jan 2015 - May 2016",
                     "description": "Graduate student services assistant(Grader) for Undergraduate level Microcomputer Architecture and PLP coding"
                    }
                ]
            };


/* Have not included academic projects yet */
var projects = {
                "project" :
                [
                 {
                    "title": "DNS Implementation",
                    "dates": "Nov 10, 2010 - Dec 10, 2010",
                    "description": "DNS server and client implementation in C using Linux sockets, encrypting the messages, and cache implementation to speed-up lookup",
                    "images" : ""  //Assumption. Just an URL. Not an arraty of urls. If that;s the case, edit projects.display
                    },
                    {
                    "title": "LTE domain: SRIO implementation",
                    "dates": " Dec 13, 2010 - Feb 10, 2012",
                    "description": "In cavium board, implement SRIO interface to transfer high speed data among the DSP's",
                    "images" : ""
                    },
                    {
                    "title": "LTE domain: AS verification" ,
                    "dates": "Feb 2012 - Dec 2012",
                    "description": "Worked on various LTE board for bug fixing and verification",
                    "images" : ""
                }
                ]
                };
var education = {
    "schools":
    [
     { "name": "TMHNU Hr.Sec.School",
       "location": "Theni, Tamil nadu, India",
       "degree":"12th grade", 
       "majors":"Computer science intermediate",
       "dates": "Aug 2004 - Aug 2006",
       "url":"http://www.tmhnumat.org/"
    },
    { "name": "SASTRA University",
       "location": "Trichy, Tamil nadu, India",
       "degree": "B.Tech",
       "majors": "Electronics and communication",
       "dates": "Aug 2006 - Aug 2010",
       "url":"http://www.sastra.edu/"
    },
    { "name": "Arizona State University",
       "location": "Tempe",
       "degree": "Master of Science",
       "majors": "Software Engineering",
       "dates": "Aug 2014 - Aug 2016",
       "url": "www.asu.edu"
    }
    ]
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};



work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);