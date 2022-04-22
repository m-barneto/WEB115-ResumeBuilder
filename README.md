# WEB115-ResumeBuilder
Blackboard Username: mrbarneto
Class Section: WEB.115.0005

# Rubric:
1. ~Do some research into resumes. Sketch out a rough idea of the end layout you plan to generate.~
2. ~Create an HTML document named finalProject.html. The title (tab) should read WEB-115 Final Project.~    
3. ~Create a banner for your HTML form that includes your name, course and section number. This banner should also include the words "Build Your Resume". Format this banner professionally (developers discretion).~ 
4. ~Create an external JavaScript document (with the .js file extension) named projectJS.js.~ 
5. ~In your HTML document named finalProject.html, code the script element after the opening BODY tag that will link to your external JavaScript document named projectJS.js.  Test your link using an alert() method. After you have confirmed that the .js file is linked to your Web page, remove the alert() method. All of your JavaScript must appear in your external projectJS.js file.~
6. ~Use break and paragraph tags in order to make all of the following form elements easy to read and understand.~      
7. ~Create the appropriate labels and text boxes that the user will use to populate their resume. Suggestions for the heading include but are not limited to: name, city, state, zip code, phone, email, social media links, portfolio link etc. You are given leeway so that you can personalize this program. Include a minimum of 8 entry areas.~
8. Create the appropriate labels and text boxes so that the user can enter their skill set. These can include but are not limited to: coding skills, work ethic, writing skills etc. You are given leeway so that you can personalize this program. Include a minimum of 3 entry area for this category. 
9. Create the appropriate labels and text boxes so that the user can enter their technical skills such as JavaScript and PHP. You are given leeway so that you can personalize this program. Include a minimum of 2 entry area for this category. 
10. Use the form textarea element to create a text entry area with the appropriate label so that the user knows to enter their Educational background.
11. Create a text box with the appropriate label so that the user knows to enter the entry and exit dates of their most recent employment experience. IMPORTANT! For this item you must use the input type = "date" element. Example: 
mm/dd/yyyy
 which will generate a calendar when clicked. Use the value property to extract the user's selection. Example: var firstDate = document.getElementById("myDate1").value      
12. Use the form textarea tag to create a text entry area with the appropriate label so that the user knows to enter the details of their most recent employment experience.
13. Repeat steps 11 and 12 to allow for 2 more prior employment experience data entry areas. 
14. Use the form textarea tag to create a text entry area with the appropriate label so that the user knows to enter the details of their business references.
15. Create a form button named Create Resume. When clicked this button should call a function that generates a new Web page displaying a resume based on the user input. Use the document.write() method to populate the newly generated Web page with all of the HTML elements, formatting, and variable values needed to produce the desired output in Web (.htm) format. HINT: a monospaced font will allow text wrapping in your output. You may also provide for this using CSS. Important! No resume should be generated until a proper email address is entered. This is the only validation requirement for this form.