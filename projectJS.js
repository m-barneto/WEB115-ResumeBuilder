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
}

document.getElementById("fillfields").addEventListener("click", fillFields);

function fillFields() {
  document.getElementById("name").value = "Matthew Barneto";
  document.getElementById("email").value = "email@waketech.edu";
  document.getElementById("phone").value = "(919) 895-5453";
  document.getElementById("linkedin").value = "https://www.linkedin.com/in/matthew-barneto-013bb2232";
  document.getElementById("portfolio").value = "https://mbarneto.github.io/";
  document.getElementById("state").value = "NC";
  document.getElementById("city").value = "Raleigh";
  document.getElementById("zip").value = "27123";
  document.getElementById("address").value = "123 Oakridge rd";
}