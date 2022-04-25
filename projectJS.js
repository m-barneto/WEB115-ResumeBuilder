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
  let jobStart1 = getValue("entrydate1");
  let jobEnd1 = getValue("exitdate1");
  let jobDesc1 = getValue("jobdesc1");

  let jobName2 = getValue("job2");
  let jobStart2 = getValue("entrydate2");
  let jobEnd2 = getValue("exitdate2");
  let jobDesc2 = getValue("jobdesc2");

  let jobName3 = getValue("job3");
  let jobStart3 = getValue("entrydate3");
  let jobEnd3 = getValue("exitdate3");
  let jobDesc3 = getValue("jobdesc3");

  let references = getValue("references").toString().split('\n');

  let flyWindow = window.open('about:blank', 'myPop');
  let myText = `
  <!DOCTYPE html>
  <html>
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>WEB-115 Final Project</title>
    <link rel="stylesheet" type="text/css" href="resumestyle.css" />
  </head>
  
  <body>
    <img src="${picture}"></img>
  </body>
  
  </html>
  `;
  flyWindow.document.write(myText);
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
    `Hardworking, with a desire to create something I can be proud to show and represent.\n
    Love trying new frameworks and languages and recreating/improving upon old projects to become familiar in new environments.\n
    Familiar in Unix, Windows, and tinkering with microcontrollers like the Arduino and Teensy 3.
    `;
  document.getElementById("project").value = "Particle system that uses Perlin noise to drive the movement of particles. Forming groups of particles that follow similar paths. Each particle paints a small amount onto the canvas to create a string-like field.";
  document.getElementById("projectlink").value = "https://www.youtube.com/watch?v=8_zC0eIjtkM";


  document.getElementById("languages").value = "C++\nC#\nJava\nJavascript\nPython\nAutoHotkey";
  document.getElementById("frameworks").value = "SFML\nSDL\nUnityEngine\nASP.NET\nWinForm\nSelenium\nProcessing\nFabric\nReactJS\nDiscord";


  document.getElementById("school1").value = "Wake STEM Early College High School";
  document.getElementById("schoollocation1").value = "Raleigh";
  document.getElementById("graddate1").value = "2020-12-12"; //2020

  document.getElementById("school2").value = "Wake Tech Community College";
  document.getElementById("schoollocation2").value = "Raleigh";
  document.getElementById("graddate2").value = "";


  document.getElementById("certs").value = "SoloLearn: C++, C#";


  document.getElementById("job1").value = "Coffee Shop";
  document.getElementById("entrydate1").value = "2020-04-04";
  document.getElementById("exitdate1").value = "";
  document.getElementById("jobdesc1").value = "Working as a barista I've developed a love for creating things with my hands. As well as creating and maintaining relationships with customers.";

  document.getElementById("job2").value = "";
  document.getElementById("entrydate2").value = "";
  document.getElementById("exitdate2").value = "";
  document.getElementById("jobdesc2").value = "";

  document.getElementById("job3").value = "";
  document.getElementById("entrydate3").value = "";
  document.getElementById("exitdate3").value = "";
  document.getElementById("jobdesc3").value = "";


  document.getElementById("references").value = "Roslyn S. (email@waketech.edu) - WEB115 Instructor\nFrank C. (email@waketech.edu) - CSC121 Instructor";
}