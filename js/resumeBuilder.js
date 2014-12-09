/****************************************Bio Information ****************************/
var name = 'Jenny Zheng';
var role = "Application Developer";
var skills = ["Webphere and RAD", "Java", "Web Development", "J2EE"];

var bio = {
    "name" : name,
    "role" : role,
    "contacts" :{
        "mobile" : "925-216-8261",
        "email" : "jennyzhengyr@google.com",
        "twitter" : "jenny",
        "githublink" : "https://github.com/yz2483",             
        "location" : "Seattle, WA"
    },
    "pictureURL" : "./images/fry.jpg",
     "welcome_message" : "Welcome!",
     "skills" : skills
};
bio.display = function () {
    var formarttedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var githubLink = HTMLgithub.replace("%data%", bio.contacts.githublink);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
    var formattedPicURL = HTMLbioPic.replace("%data%", bio.pictureURL);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").append(formarttedName);
    $("#header").append(formattedRole);

    $("#header").append(formattedEmail);
    $("#header").append(githubLink);
    $("#header").append(location);

    $("#header").append(formattedPicURL);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        $("#header").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
        $("#header").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
        $("#header").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
        $("#header").append(formattedSkills);
    }
}

/****************************************Work Information ****************************/

var work = {"jobs" :[
   {"Employer": "AT&T",
    "Title": "SPECIALIST-APPLICATIONS DEVELOPER",
    "Dates" : "2006 to future",
    "location" : "Bothell, WA98012",
    "Description" : "Support Member Profile System, Production Support Tools"
    },
    {"Employer": "SBC",
    "Title": "APPLICATIONS DEVELOPER",
    "Dates" : "2004 to 2006",
    "location" : "San Ramon, CA94583",
    "Description" : "Impement Web Develope work"
    }]
};

work.display = function () {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formarttedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
        var formarttedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
        var formarttedEmployerTitle = formarttedWorkEmployer + formarttedWorkTitle;
        var formarttedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
        var formarttedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formarttedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
        $(".work-entry:last").append(formarttedEmployerTitle);
        $(".work-entry:last").append(formarttedWorkDates);
        $(".work-entry:last").append(formarttedWorkDescription);
    }
}

/****************************************Education Information ****************************/

var education = { "schools":
   [{ "name": "California State University of EastBay",
       "degree": "Master",
       "dates": "2002 - 2004",
       "location": "Hayward of California",
       "school_link":"http://www20.csueastbay.edu/",
       "major": ["Computer Science"]
   }, 
   {
       "name": "Luoyang Institute of Technology",
       "degree": "Bachelor",
       "dates": "1992",
       "location": "Luoyang, Heinan, China",
       "school_link":"http://www.haust.edu.cn/",
       "major": ["Mechanical Engineering"]       
   }],
   "onlineCourses" : [
        {"title": "Frontend Web Developer NonDegree",
         "school" : "Udacity",
         "dates" : "2014",
         "URL" : "https://www.udacity.com"
        }
   ]
};

education.display = function () {

    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // start the HTML
        for (school in education["schools"]) {
            $("#education").append(HTMLschoolStart);
            if (education.schools.hasOwnProperty(school)) {
                formattedHtml = HTMLschoolName.replace("%data%", education.schools[school].name);
                formattedHtml = formattedHtml.replace("#", education.schools[school].school_link);
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
                $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
            }
        }
        if (education["onlineCourses"].length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (course in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                if (education.onlineCourses.hasOwnProperty(course)) {
                    formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    $(".education-entry:last").append(formattedHtml);
                    $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school));
                    $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates));
                    $(".education-entry:last").append(HTMLonlineURL.replace('%data%', education.onlineCourses[course].URL))
                }
            }
        }
    }
}
 /*****************************************Project information******************************/

var projects = {"projects" :
   [{ "title": "HTML Mockup",
      "Dates": "October 2014",
      "Description": "Using HTML to create the mockup for a website",
      "images": ["images/Porforlio.jpg"]
    },
    { "title": "JavaScript Resume",
      "Dates": "October 2014",
      "Description": "Using JavaScript to create an interactive resume",
      "images": ['']
    },
    {"title" : "MPS Developer", 
      "Dates" : "2008 to 2014", 
      "Description" : "Support MPS/PST Suites",
      "images" : ['images/ust1.jpg','images/ust2.jpg','images/ust3.jpg']},
     ]
};
projects.display = function () {
   
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formarttedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formarttedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].Dates);
        var formarttedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
        $(".project-entry:last").append(formarttedProjectTitle);
        $(".project-entry:last").append(formarttedProjectDates);
        $(".project-entry:last").append(formarttedProjectDescription);

        for (image in projects.projects[project].images) {
            var formarttedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formarttedProjectImage);
        }
    }

}

function inName(){
    var xname = name.trim().split(' ');
    console.log(xname);

    xname[1] = xname[1].toUpperCase();   
    xname[0] = xname[0].slice(0, 1).toUpperCase() +xname[0].slice(1).toLowerCase() ;    

    return xname[0] + " " + xname[1]; 
};




/*********************************main************************/
bio.display();
work.display();
projects.display();
education.display();

//Internationalize
$('#main').append(internationalizeButton);


// Log clicks
$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

//Add google map
$('#mapDiv').append(googleMap);



