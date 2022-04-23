function getValue(id) {
  return document.getElementById(id).value;
}

document.getElementById("submit").addEventListener("click", generateResume);

function generateResume() {
  if (!document.getElementById("email").validity.valid) return;
  let name = getValue("name");
  let email = getValue("email");
  let phone = getValue("phone");
  let linkedin = getValue("linkedin");
  let portfolio = getValue("portfolio");
  let state = getValue("state");
  let city = getValue("city");
  let zip = getValue("zip");
  let address = getValue("address");

  let objective = getValue("objective");
  let devskills = getValue("devskills");
  let project = getValue("project");
  let projectlink = getValue("projectlink");

  let languages = getValue("languages");
  let frameworks = getValue("frameworks");

  let schoolName1 = getValue("school1");
  let schoolLoc1 = getValue("schoollocation1");
  let graddate1 = getValue("graddate1");

  let schoolName2 = getValue("school2");
  let schoolLoc2 = getValue("schoollocation2");
  let graddate2 = getValue("graddate2");

  let certs = getValue("certs");

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

  let references = getValue("references");
}

document.getElementById("fillfields").addEventListener("click", fillFields);

function fillFields() {
  document.getElementById("name").value = "Matthew Barneto";
  document.getElementById("email").value = "email@waketech.edu";
  document.getElementById("phone").value = "(919) 895-5453";
  document.getElementById("linkedin").value = "https://www.linkedin.com/in/matthew-barneto-013bb2232";
  document.getElementById("portfolio").value = "https://m-barneto.github.io/";
  document.getElementById("state").value = "NC";
  document.getElementById("city").value = "Raleigh";
  document.getElementById("zip").value = "27123";
  document.getElementById("address").value = "123 Oakridge rd";


  document.getElementById("objective").value = "";
  document.getElementById("devskills").value = "";
  document.getElementById("project").value = "";
  document.getElementById("projectlink").value = "";


  document.getElementById("languages").value = "";
  document.getElementById("frameworks").value = "";


  document.getElementById("school1").value = "";
  document.getElementById("schoollocation1").value = "";
  document.getElementById("graddate1").value = "";

  document.getElementById("school2").value = "";
  document.getElementById("schoollocation2").value = "";
  document.getElementById("graddate2").value = "";


  document.getElementById("certs").value = "";


  document.getElementById("job1").value = "";
  document.getElementById("entrydate1").value = "";
  document.getElementById("exitdate1").value = "";
  document.getElementById("jobdesc1").value = "";

  document.getElementById("job2").value = "";
  document.getElementById("entrydate2").value = "";
  document.getElementById("exitdate2").value = "";
  document.getElementById("jobdesc2").value = "";

  document.getElementById("job3").value = "";
  document.getElementById("entrydate3").value = "";
  document.getElementById("exitdate3").value = "";
  document.getElementById("jobdesc3").value = "";


  document.getElementById("").value = "";
}