alert("To view perfect scale, hit Ctrl+P and under more settings, set margins to none, and draw background graphics.");
let jobDiv = document.getElementsByClassName("job")[0];
let jobs = jobDiv.children;
let jobHeight = 20;
for (let i = 0; i < jobs.length; i++) {
  let job = jobs[i];
  jobHeight += Math.max(job.children[0].offsetHeight, job.children[1].offsetHeight);
}
jobDiv.style.height = `${jobHeight}px`;

let eduDiv = document.getElementsByClassName("education")[0];
let edus = eduDiv.children;
let eduHeight = 30;
for (let i = 0; i < edus.length; i++) {
  let edu = edus[i];
  eduHeight += Math.max(edu.children[0].offsetHeight, edu.children[1].offsetHeight);
}
eduDiv.style.height = `${eduHeight}px`;

let skillsDiv = document.getElementsByClassName("skills")[0];
let skills = skillsDiv.children;
console.log(skills[0].offsetHeight);
console.log(skills[1].offsetHeight);
let skillsHeight = 40 + Math.max(skills[0].offsetHeight, skills[1].offsetHeight);

skillsDiv.style.height = `${skillsHeight}px`;

