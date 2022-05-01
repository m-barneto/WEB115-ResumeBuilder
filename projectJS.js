function getValue(id) {
  return document.getElementById(id).value;
}

document.getElementById("submit").addEventListener("click", generateResume);
fillFields();
function generateResume() {
  if (!document.getElementById("email").validity.valid) return;
  let name = getValue("name");
  let email = getValue("email");
  let phone = getValue("phone");
  let linkedin = getValue("linkedin");
  let portfolio = getValue("portfolio");
  let picture = getValue("picture");
  console.log(picture);

  let state = getValue("state");
  let city = getValue("city");
  let zip = getValue("zip");
  let address = getValue("address");

  let objective = getValue("objective");
  let devskills = getValue("devskills").toString().split('\n');
  let project = getValue("project");
  let projectlink = getValue("projectlink");

  let languages = getValue("languages").toString().split('\n');
  let frameworks = getValue("frameworks").toString().split('\n');

  let schoolName1 = getValue("school1");
  let schoolLoc1 = getValue("schoollocation1");
  let graddate1 = getValue("graddate1");

  let schoolName2 = getValue("school2");
  let schoolLoc2 = getValue("schoollocation2");
  let graddate2 = getValue("graddate2");

  let certs = getValue("certs").toString().split('\n');

  let jobName1 = getValue("job1");
  let jobTitle1 = getValue("job1title");
  let jobStart1 = getValue("entrydate1");
  let jobEnd1 = getValue("exitdate1");
  let jobDesc1 = getValue("jobdesc1");

  let jobName2 = getValue("job2");
  let jobTitle2 = getValue("job2title");
  let jobStart2 = getValue("entrydate2");
  let jobEnd2 = getValue("exitdate2");
  let jobDesc2 = getValue("jobdesc2");

  let jobName3 = getValue("job3");
  let jobTitle3 = getValue("job3title");
  let jobStart3 = getValue("entrydate3");
  let jobEnd3 = getValue("exitdate3");
  let jobDesc3 = getValue("jobdesc3");

  let references = getValue("references").toString().split('\n');

  let flyWindow = window.open('about:blank', 'myPop');
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
        <img src="` + "picture" + `" alt="user picture">
      </div>
      <hr>
      <h3>OBJECTIVE</h3>
      <p>Current student at Wake Tech Community College. I'm pursuing an associates in programming and development with
        a specialization in C++ and Java.
        I'm looking for a job in software development but have experience with projects in a multitude of environments
        and stacks.</p>
      <hr>
      <h3>CONTACT INFO</h3>
      <p>Email: email@waketech.edu</p>
      <p>Phone: (919) 895-5453</p>
      <hr>
      <h3>SKILLS</h3>
      <ul>
        <li>Persistant, with the desire to create something I can be proud of being a part of.</li>
        <li>Love trying new frameworks/languages and recreating/improving upon old projects to become familiar in
          new environments.</li>
        <li>Familiar in Unix, Windows, and tinkering with microcontrollers like the Arduino and Teensy 3.</li>
      </ul>
      <hr>
      <h3>CERTIFICATES</h3>
      <ul>
        <li>C++ (Sololearn)</li>
        <li>C# (Sololearn)</li>
      </ul>
      <hr>
    </div>
    <div class="content">
      <div class="heading">
        <div class="leftcol">
          <h1>MATTHEW<br>BARNETO</h1>
        </div>
        <div class="rightcol">
          <div>
            <span class="material-icons">place</span>
            <p>Address</p>
          </div>
          <div>
            <span class="material-icons">call</span>
            <p>Phone #</p>
          </div>
          <div>
            <span class="material-icons">mail</span>
            <p>Email</p>
          </div>
        </div>
      </div>
      <div class="body">
        <hr id="top-hr">
        <h3>WORK EXPERIENCE</h3>
        <div class="job">
          <div>
            <div class="leftcol">
              <h5>Coffee Shop</h5>
              <h6>Apr 2020 - Current</h6>
              <h6>Raleigh, NC</h6>
            </div>
            <div class="rightcol">
              <h5>Barista</h5>
              <h6>Working as a barista I've developed a love for creating things with my hands. As well as creating and
                maintaining relationships with customers.</h6>
            </div>
          </div>
        </div>

        <hr>
        <h3>EDUCATION</h3>
        <div class="education">
          <div>
            <div class="leftcol">
              <h5>Wake Tech Community College</h5>
              <h6>Dec 2020 - Current</h6>
              <h6>Raleigh, NC</h6>
            </div>
            <div class="rightcol">
              <h5>Associates in Computer Programming</h5>
              <h6>Currently pursuing an associates in computer programming, undecided on where to transfer to complete
                my bachelors.</h6>
            </div>
          </div>
          <div>
            <div class="leftcol">
              <h5>Wake STEM Early College High School</h5>
              <h6>Aug 2015 - Dec 2020</h6>
              <h6>Raleigh, NC</h6>
            </div>
            <div class="rightcol">
              <h5>GED</h5>
              <h6>Wake STEM focused on teamwork and project-based learning that has greatly benefited me in my current
                studies and out of school projects. All courses were honors level in order to allow us to take a full
                college courseload for our optional fifth year.</h6>
            </div>
          </div>
        </div>
        <hr>
        <h3>LANGUAGES/FRAMEWORKS</h3>
        <div class="skills">
          <div class="leftcol">
            <h5>C++</h5>
            <ul>
              <li>SFML</li>
              <li>SDL</li>
              <li>Windows API</li>
              <li>OpenFrameworks</li>
            </ul>
            <h5>Javascript</h5>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Express</li>
            </ul>
            <h5>Java</h5>
            <ul>
              <li>Processing</li>
              <li>Fabric</li>
              <li>Selenium</li>
            </ul>
          </div>
          <div class="rightcol">
            <h5>C#</h5>
            <ul>
              <li>ASP.NET</li>
              <li>Selenium</li>
              <li>UnityEngine</li>
              <li>WinForm</li>
            </ul>
            <h5>Python</h5>
            <ul>
              <li>OpenCL</li>
              <li>Discord.py</li>
              <li>PyGame</li>
            </ul>
            <h5>AutoHotKey</h5>
          </div>
        </div>
        <hr>
        <h3>SHOWCASE PROJECT</h3>
        <div class="project">
          <a href="https://www.youtube.com/watch?v=8_zC0eIjtkM" target="_blank">
            <h5>Particle Flow Field (Video)</h5>
          </a>
          <p>Particle system that uses Perlin noise to drive the movement of particles. Forming groups of particles
            that follow similar paths. Each particle paints a small amount onto the canvas to create a string-like
            pattern on the canvas.</p>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
  `;
  flyWindow.document.write(myText);
  flyWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
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
    `Current student at Wake Tech Community College. I'm pursuing an associates in programming and development with a specialization in C++ and Java. 
    I'm looking for a job in software development but have experience with projects in a multitude of environments and stacks.`;
  document.getElementById("devskills").value =
    `Persistant, with a desire to create something I can be proud to be a part of.\n
    Love trying new frameworks and languages and recreating/improving upon old projects to become familiar in new environments.\n
    Familiar in Unix, Windows, and tinkering with microcontrollers like the Arduino and Teensy 3.
    `;
  document.getElementById("project").value = "Particle Flow Field";
  document.getElementById("projectdesc").value = "Particle system that uses Perlin noise to drive the movement of particles. Forming groups of particles that follow similar paths. Each particle paints a small amount onto the canvas to create a string-like field.";
  document.getElementById("projectlink").value = "https://www.youtube.com/watch?v=8_zC0eIjtkM";


  document.getElementById("languages").value = "C++\nJavascript\nJava\nC#\nPython\nAutoHotkey";
  document.getElementById("frameworks").value = "SFML,SDL,Windows API,OpenFrameworks\nReactJS,NodeJS,Express\nProcessing,Fabric,Selenium\nASP.NET,Selenium,UnityEngine,WinForm\nOpenCL,Discord.py,PyGame\n,";


  document.getElementById("school1").value = "Wake STEM Early College High School";
  document.getElementById("schoollocation1").value = "Raleigh";
  document.getElementById("graddate1").value = "2020-12-12";
  document.getElementById("graddeg1").value = "GED"

  document.getElementById("school2").value = "Wake Tech Community College";
  document.getElementById("schoollocation2").value = "Raleigh";
  document.getElementById("graddate2").value = "";
  document.getElementById("graddeg2").value = "Associates in Computer Programming"


  document.getElementById("certs").value = "SoloLearn: C++, C#";


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