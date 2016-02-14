/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var name = 'Vignesh Kannan';
var Role = "Systems programmer";
formattedName = HTMLheaderName.replace("%data%",name);
formattedRole = HTMLheaderRole.replace("%data%", Role);
//Append the values to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

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
                     "Description": "Teaching assistant for Graduate level Computer Architecture course as well as Undergraduate level Microcomputer Architecture and PLP coding"
                    },
                    {"Employer": "Arizona State University",
                     "Title": "Teaching Assistant",
                     "Location": "ASU-Polytechnic, Mesa",
                     "Dates":"Jan 2015 - May 2016",
                     "Description": "Teaching assistant for Undergraduate level Microcomputer Architecture and PLP coding"
                    },
                    {"Employer": "Arizona State University",
                     "Title": "Teaching Assistant",
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
                    },
                    {
                    "Title": "LTE domain: SRIO implementation",
                    "Dates": " Dec 13, 2010 - Feb 10, 2012",
                    "Description": "In cavium board, implement SRIO interface to transfer high speed data among the DSP's",
                    },
                    {
                    "Title": "LTE domain: AS verification" ,
                    "Dates": "Feb 2012 - Dec 2012",
                    "Description": "Worked on various LTE board for bug fixing and verification",
                    },
                    {
                    "Title": "LTE domain: AS verification" ,
                    "Dates": "Feb 2012 - Dec 2012",
                    "Description": "Worked on various LTE board for bug fixing and verification",
},
                    ]
                };
var bio = {
    "Name" : "Vignesh Kannan",
    "Role": "Systems programmer",
    "Welcome Message": "Hi, Thanks for viewing my resume",
    "Contacts": { "Mobile" : "480-208-3172",
                   "email" : "vkannan7@asu.edu",
                   "github handle" : "thisisgaara",
                   "Location" : "Tempe, AZ"
    },
    "Skills":["C", "CUDA", "JAVA", "JavaScript", "Python", "Haskell", "Embedded systems programming"]
    };

var education = {
    "schools":
    [
     { "Name": "TMHNU",
       "Location": "Theni, Tamil nadu, India",
       "Degree":"12th grade", 
       "Majors":"Computer science intermediate",
       "Dates": "Aug 2004 - Aug 2006",
       "URL":"http://www.tmhnumat.org/"
    },
    { "Name": "SASTRA",
       "Location": "Trichy, Tamil nadu, India",
       "Degree": "B.Tech",
       "Majors": "Electronics and communication",
       "Dates": "Aug 2006 - Aug 2010",
       "URL":"http://www.sastra.edu/"
    },
    { "Name": "ASU",
       "Location": "Tempe, Arizona",
       "Degree": "Master of Science",
       "Majors": "Software Engineering",
       "Dates": "Aug 2014 - Aug 2016",
       "URL": "www.asu.edu"
    }
    ]
};