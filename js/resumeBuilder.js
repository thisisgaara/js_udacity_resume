/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = 'Vignesh Kannan';
var Role = "Systems programmer";
formattedName = HTMLheaderName.replace("%data%",name);
formattedRole = HTMLheaderRole.replace("%data%", Role);
//Append the values to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
    "Name" : "Vignesh Kannan",
    "Role": "Systems programmer",
    "Welcome_Message": "I am a Software engineering graduate student looking for full time opportunities",
    "Image": "https://assets.about.me/background/users/t/h/i/thisisvignesh_1425838838_94.jpg",
    "Contacts": { "Mobile" : "480-208-3172",
                   "Email" : "vkannan7@asu.edu",
                   "Github_handle" : "thisisgaara",
                   "Location" : "Tempe"
    },
    "Skills":["C", "CUDA", "JAVA", "JavaScript", "Python", "Haskell", "Embedded systems programming"]
    };




var work = {
            "jobs":[
                    {"Employer": "Aricent Technologies",
                     "Title": "Software Engineer - Trainee",
                     "Location": "Gurgaon, India",
                     "Dates": "Sep 13 2010 - Dec 13 2010",
                     "Description": "Training on Data structures, Computer systems, Unix environment. Implemented DNS as final project using Linux Socket API's. Cache implementation was done as well"
                    },
                    {"Employer":"Aricent Technologies",
                     "Title": "Software Engineer",
                     "Location": "Bangalore",
                     "Dates": "Dec 13, 2010 - Feb 10, 2012",
                     "Description": "Implemented SRIO, EMAC module in LTE chipsets"
                    },
                    {"Employer": "Samsung India Software operations",
                     "Title": "Senior Software Engineer",
                     "Location": "Bangalore",
                     "Dates": "Feb 20, 2012 - July 20, 2014",
                     "Description": "Took ownership of LTE control stack including RRM, L1LC and HAL modules.  Performed TDD verification activities. Worked on MBSFN, RSTD."
                    },
                    {"Employer": "Arizona State University",
                     "Title": "Graduate student worker - Tutor at TRIO Center",
                     "Location": "ASU-Polytechnic, Mesa",
                     "Dates":"Aug 2014 - Aug 2015",
                     "Description": "Tutor Undergrad engineering students in Software engineering, Maths and Physics"
                    },
                    {"Employer": "Arizona State University",
                     "Title": "Teaching Assistant",
                     "Location": "ASU-Polytechnic, Mesa",
                     "Dates":"Aug 2015 - Dec 2015",
                     "Description": "Teaching assistant for Graduate level Computer Architecture course as well as Undergraduate level Microcomputer Architecture and coding in PLP Assembly"
                    },
                    {"Employer": "Arizona State University",
                     "Title": "Teaching Assistant",
                     "Location": "ASU-Polytechnic, Mesa",
                     "Dates":"Jan 2015 - May 2016",
                     "Description": "Teaching assistant for Undergraduate level Microcomputer Architecture and coding in PLP Assembly"
                    },
                    {"Employer": "Arizona State University",
                     "Title": "Grader",
                     "Location": "ASU-Polytechnic, Mesa",
                     "Dates":"Jan 2015 - May 2016",
                     "Description": "Graduate student services assistant(Grader) for Undergraduate level Microcomputer Architecture and PLP coding"
                    }
                ]
            };


/* Have not included academic projects yet */
var projects = {
                "project" :
                [
                 {
                    "Title": "DNS Implementation",
                    "Dates": "Nov 10, 2010 - Dec 10, 2010",
                    "Description": "DNS server and client implementation in C using Linux sockets, encrypting the messages, and cache implementation to speed-up lookup",
                    "images" : ""  //Assumption. Just an URL. Not an arraty of urls. If that;s the case, edit projects.display
                    },
                    {
                    "Title": "LTE domain: SRIO implementation",
                    "Dates": " Dec 13, 2010 - Feb 10, 2012",
                    "Description": "In cavium board, implement SRIO interface to transfer high speed data among the DSP's",
                    "images" : ""
                    },
                    {
                    "Title": "LTE domain: AS verification" ,
                    "Dates": "Feb 2012 - Dec 2012",
                    "Description": "Worked on various LTE board for bug fixing and verification",
                    "images" : ""
                }
                ]
                };
var education = {
    "schools":
    [
     { "Name": "TMHNU Hr.Sec.School",
       "Location": "Theni, Tamil nadu, India",
       "Degree":"12th grade", 
       "Majors":"Computer science intermediate",
       "Dates": "Aug 2004 - Aug 2006",
       "URL":"http://www.tmhnumat.org/"
    },
    { "Name": "SASTRA University",
       "Location": "Trichy, Tamil nadu, India",
       "Degree": "B.Tech",
       "Majors": "Electronics and communication",
       "Dates": "Aug 2006 - Aug 2010",
       "URL":"http://www.sastra.edu/"
    },
    { "Name": "Arizona State University",
       "Location": "Tempe",
       "Degree": "Master of Science",
       "Majors": "Software Engineering",
       "Dates": "Aug 2014 - Aug 2016",
       "URL": "www.asu.edu"
    }
    ]
};
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].Name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].Degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].Dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].Location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].Majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};
projects.display = function()
{
    for (item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedtitle = HTMLprojectTitle.replace("%data%", projects.project[item].Title);
        $(".project-entry:last").append(formattedtitle);
        var formatteddate = HTMLprojectDates.replace("%data%", projects.project[item].Dates);
        $(".project-entry:last").append( formatteddate);
        var formatteddesc = HTMLprojectDescription.replace("%data%", projects.project[item].Description);
        $(".project-entry:last").append( formatteddesc);
        if (projects.project[item].images.length > 0) {
            var formattedimage = HTMLprojectImage.replace("%data%", projects.project[item].images);
            $(".project-entry:last").append( formattedimage);
        }
    }
};
bio.display = function()
{
 	var formattedName = HTMLheaderName.replace("%data%",bio.Name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.Role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.Image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.Welcome_Message);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.Skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.Skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.Contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.Contacts[contact].Mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.Contacts[contact].Email);
		var formattedgithub= HTMLcontactGeneric.replace("%contact%","Github").replace("%data%",bio.Contacts[contact].Github_handle);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedgithub);
	};
};
work.display = function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
            var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
            $(".work-entry:last").append( formattedemployer + formattedtitle);
            var formattedloc = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
            $(".work-entry:last").append(formattedloc);
            var formatteddates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
            $(".work-entry:last").append(formatteddates);
            var formatteddesc = HTMLworkDescription.replace("%data", work.jobs[job].Description);
            $(".work-entry:last").append(formatteddesc);  
        }   
};


$(document).click(function(loc){
   logClicks(loc.clientX, loc.clientY)
});

var locationizer = function(work)
{
    var array = [];
    for (job in work.jobs) {
        array.push(work.jobs[job].Location);
        //code
    }
    return array;
};

var inname = function(string)
{
    var temp = string.trim().split(" ");
    console.log(temp);
    return temp[0][0].toUpperCase() + temp[0].slice(1) + " " + temp[1].toUpperCase();
};

work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);