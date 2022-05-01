function getValue(id) {
  return document.getElementById(id).value;
}

function getDate(id) {
  let value = document.getElementById(id).value;
  if (value == "") return "Current";
  let date = new Date(value);
  let val = date.toLocaleString('default', { month: 'short' }) + " " + date.getFullYear();
  return val;
}

document.getElementById("submit").addEventListener("click", generateResume);
fillFields();
function generateResume() {
  if (!document.getElementById("email").validity.valid) return;
  let name = getValue("name").toString().split(' ');
  let firstname = name[0];
  let lastname = name[1];
  let email = getValue("email");
  let phone = getValue("phone");
  let linkedin = getValue("linkedin");
  let portfolio = getValue("portfolio");
  let picture = getValue("picture");

  let state = getValue("state");
  let city = getValue("city");
  let zip = getValue("zip");
  let address = getValue("address");

  let objective = getValue("objective");
  let devskills = getValue("devskills").toString().split('\n');
  let project = getValue("project");
  let projectlink = getValue("projectlink");
  let projectdesc = getValue("projectdesc");

  let languages = getValue("languages").toString().split('\n');
  let frameworks = getValue("frameworks").toString().split('\n');

  let schoolName1 = getValue("school1");
  let schoolLoc1 = getValue("schoollocation1");
  let schoolStart1 = getDate("schoolStart1");
  let schoolEnd1 = getDate("schoolEnd1");
  let schoolDeg1 = getValue("schoolDeg1");
  let schoolDesc1 = getValue("schoolDesc1");

  let schoolName2 = getValue("school2");
  let schoolLoc2 = getValue("schoollocation2");
  let schoolStart2 = getDate("schoolStart2");
  let schoolEnd2 = getDate("schoolEnd2");
  let schoolDeg2 = getValue("schoolDeg2");
  let schoolDesc2 = getValue("schoolDesc2");

  let certs = getValue("certs").toString().split('\n');

  let jobName1 = getValue("job1");
  let jobTitle1 = getValue("job1title");
  let jobLoc1 = getValue("job1location");
  let jobStart1 = getDate("entrydate1");
  console.log(jobStart1);
  let jobEnd1 = getDate("exitdate1");
  let jobDesc1 = getValue("jobdesc1");

  let jobName2 = getValue("job2");
  let jobTitle2 = getValue("job2title");
  let jobLoc2 = getValue("job2location");
  let jobStart2 = getDate("entrydate2");
  let jobEnd2 = getDate("exitdate2");
  let jobDesc2 = getValue("jobdesc2");

  let jobName3 = getValue("job3");
  let jobTitle3 = getValue("job3title");
  let jobLoc3 = getValue("job3location");
  let jobStart3 = getDate("entrydate3");
  let jobEnd3 = getDate("exitdate3");
  let jobDesc3 = getValue("jobdesc3");

  let references = getValue("references").toString().split('\n');

  let flyWindow = window.open('about:blank');
  let myText = `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>WEB-115 Final Project</title>
  <link rel="stylesheet" type="text/css" href="resumestyle.css" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
  <div class="container">
    <div class="sidebar">
      <div class="center-img">
        <img src="${picture}" alt="user picture">
      </div>
      <hr>
      <h3>OBJECTIVE</h3>
      <p>${objective}</p>
      <hr>
      <h3>CONTACT INFO</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <hr>
      <h3>SKILLS</h3>
      <ul>\n`;
  devskills.forEach(skill => {
    console.log(skill);
    myText += "<li>" + skill + "</li>\n";
  });
  myText +=
    `</ul>
    <hr>
      <h3>CERTIFICATES</h3>
      <ul>\n`
  certs.forEach(cert => {
    myText += `<li>${cert}</li>\n`;
    console.log(cert);
  });
  myText += `</ul>
      <hr>
      </div>
      <div class="content">
        <div class="heading">
          <div class="leftcol">
            <h1>${firstname + (name[1] == null ? "" : `<br>${lastname}`)}</h1>
          </div>
          <div class="rightcol">
            <div>
              <span class="material-icons">place</span>
              <p>${address}</p>
            </div>
            <div>
              <span class="material-icons">call</span>
              <p>${phone}</p>
            </div>
            <div>
              <span class="material-icons">mail</span>
              <p>${email}</p>
            </div>
          </div>
        </div>
        <div class="body">
          <hr id="top-hr">
            <h3>WORK EXPERIENCE</h3>
            <div class="job">\n`;
  if (jobName1 != "") {
    myText += `<div>
    <div class="leftcol">
      <h5>${jobName1}</h5>
      <h6>${jobStart1} - ${jobEnd1}</h6>
      <h6>${jobLoc1}</h6>
    </div>
    <div class="rightcol">
      <h5>${jobTitle1}</h5>
      <h6>${jobDesc1}</h6>
    </div>
  </div>\n`;
  }
  if (jobName2 != "") {
    myText += `<div>
    <div class="leftcol">
      <h5>${jobName2}</h5>
      <h6>${jobStart2} - ${jobEnd2}</h6>
      <h6>${jobLoc2}</h6>
    </div>
    <div class="rightcol">
      <h5>${jobTitle2}</h5>
      <h6>${jobDesc2}</h6>
    </div>
  </div>\n`;
  }
  if (jobName3 != "") {
    myText += `<div>
    <div class="leftcol">
      <h5>${jobName3}</h5>
      <h6>${jobStart3} - ${jobEnd3}</h6>
      <h6>${jobLoc3}</h6>
    </div>
    <div class="rightcol">
      <h5>${jobTitle3}</h5>
      <h6>${jobDesc3}</h6>
    </div>
  </div>\n`;
  }
  myText += `</div>
            <hr>
              <h3>EDUCATION</h3>
              <div class="education">\n`;
  if (schoolName1 != "") {
    myText += `<div>
    <div class="leftcol">
      <h5>${schoolName1}</h5>
      <h6>${schoolStart1} - ${schoolEnd1}</h6>
      <h6>${schoolLoc1}</h6>
    </div>
    <div class="rightcol">
      <h5>${schoolDeg1}</h5>
      <h6>${schoolDesc1}</h6>
    </div>
  </div>\n`;
  }
  if (schoolName2 != "") {
    myText += `<div>
    <div class="leftcol">
      <h5>${schoolName2}</h5>
      <h6>${schoolStart2} - ${schoolEnd2}</h6>
      <h6>${schoolLoc2}</h6>
    </div>
    <div class="rightcol">
      <h5>${schoolDeg2}</h5>
      <h6>${schoolDesc2}</h6>
    </div>
  </div>\n`;
  }
  myText += `</div>
              <hr>
                <h3>LANGUAGES/FRAMEWORKS</h3>
                <div class="skills">
                  <div class="leftcol">\n`;
  for (let i = 0; i < languages.length / 2; i++) {
    myText += `<h5>${languages[i]}</h5>\n<ul>\n`;
    let fw = frameworks[i].split(',');
    for (let j = 0; j < fw.length; j++) {
      myText += `<li>${fw[j]}</li>\n`;
    }
    myText += `</ul>\n`;
  }
  myText += `</div>
                  <div class="rightcol">\n`;
  for (let i = languages.length / 2; i < languages.length; i++) {
    myText += `<h5>${languages[i]}</h5>\n`;
    let fw = frameworks[i].split(',');
    if (fw.length == 0 || fw[0] == "") continue;
    myText += "<ul>\n";
    console.log(languages[i], fw);
    for (let j = 0; j < fw.length; j++) {
      myText += `<li>${fw[j]}</li>\n`;
    }
    myText += `</ul>\n`;
  }
  myText += `</div>
                </div>
                <hr>
                  <h3>SHOWCASE PROJECT</h3>
                  <div class="project">
                    <a href="${projectlink}" target="_blank">
                      <h5>${project} (Link)</h5>
                    </a>
                    <p>${projectdesc}</p>
                  </div>
                <hr>
                <h3>REFERENCES</h3>
                <div class="refs">\n`;
  references.forEach(ref => {
    myText += `<h4>${ref}</h4>`;
  })
  myText += `</div>
              </div>
            </div>
          </body>

        </html>
        `;
  flyWindow.document.write(myText);
  //flyWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}

document.getElementById("fillfields").addEventListener("click", fillFields);

function fillFields() {
  document.getElementById("name").value = "Matthew Barneto";
  document.getElementById("email").value = "email@waketech.edu";
  document.getElementById("phone").value = "(919) 895-5453";
  document.getElementById("linkedin").value = "https://www.linkedin.com/in/matthew-barneto-013bb2232";
  document.getElementById("portfolio").value = "https://m-barneto.github.io/";
  document.getElementById("picture").value = "https://drive.google.com/uc?id=1uYwFmerP8ov7vfTBt4XNjNBVC3hpUwc3";
  document.getElementById("state").value = "NC";
  document.getElementById("city").value = "Raleigh";
  document.getElementById("zip").value = "27123";
  document.getElementById("address").value = "123 Oakridge rd";


  document.getElementById("objective").value =
    `Current student at Wake Tech Community College. I'm pursuing an associates in programming and development with ` +
    `a specialization in C++ and Java. I'm looking for a job in software development but have experience with projects ` +
    `in a multitude of environments and stacks.`;
  document.getElementById("devskills").value =
    `Persistant, with the desire to create something I can be proud of being a part of.\n` +
    `Love trying new frameworks/languages and recreating/improving upon old projects to become familiar in new environments.\n` +
    `Familiar in Unix, Windows, and tinkering with microcontrollers like the Arduino and Teensy 3.`;
  document.getElementById("project").value = "Particle Flow Field";
  document.getElementById("projectdesc").value = "Particle system that uses Perlin noise to drive the movement of particles. Forming groups of particles that follow similar paths. Each particle paints a small amount onto the canvas to create a string-like pattern on the canvas.";
  document.getElementById("projectlink").value = "https://www.youtube.com/watch?v=8_zC0eIjtkM";


  document.getElementById("languages").value = "C++\nJavascript\nJava\nC#\nPython\nAutoHotkey";
  document.getElementById("frameworks").value = "SFML,SDL,Windows API,OpenFrameworks\nReactJS,NodeJS,Express\nProcessing,Fabric,Selenium\nASP.NET,Selenium,UnityEngine,WinForm\nOpenCL,Discord.py,PyGame\n,";


  document.getElementById("school1").value = "Wake STEM Early College High School";
  document.getElementById("schoollocation1").value = "Raleigh";
  document.getElementById("schoolStart1").value = "2015-08-01";
  document.getElementById("schoolEnd1").value = "2020-12-01";
  document.getElementById("schoolDeg1").value = "GED";
  document.getElementById("schoolDesc1").value = "Wake STEM focused on teamwork and project-based learning that has greatly benefited me in my current studies and out of school projects. All courses were honors level in order to allow us to take a full college courseload for our optional fifth year.";

  document.getElementById("school2").value = "Wake Tech Community College";
  document.getElementById("schoollocation2").value = "Raleigh";
  document.getElementById("schoolStart2").value = "2021-01-07";
  document.getElementById("schoolDeg2").value = "Associates in Computer Programming"
  document.getElementById("schoolDesc2").value = "Currently pursuing an associates in computer programming, undecided on where to transfer to complete my bachelors.";


  document.getElementById("certs").value = `C++ (Sololearn)\n` +
    `C# (Sololearn)`;


  document.getElementById("job1").value = "Coffee Shop";
  document.getElementById("job1title").value = "Barista";
  document.getElementById("entrydate1").value = "2020-04-04";
  document.getElementById("exitdate1").value = "";
  document.getElementById("jobdesc1").value = "Working as a barista I've developed a love for creating things with my hands. As well as creating and maintaining relationships with customers.";

  document.getElementById("job2").value = "";
  document.getElementById("job2title").value = "";
  document.getElementById("entrydate2").value = "";
  document.getElementById("exitdate2").value = "";
  document.getElementById("jobdesc2").value = "";

  document.getElementById("job3").value = "";
  document.getElementById("job3title").value = "";
  document.getElementById("entrydate3").value = "";
  document.getElementById("exitdate3").value = "";
  document.getElementById("jobdesc3").value = "";


  document.getElementById("references").value = "Roslyn S. (email@waketech.edu) - WEB115 Instructor\nFrank C. (email@waketech.edu) - CSC121 Instructor";
}