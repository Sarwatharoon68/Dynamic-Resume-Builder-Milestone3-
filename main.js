document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var resumePreview = document.getElementById("resumePreview");
    var educationOutput = document.getElementById("educationOutput");
    var experienceOutput = document.getElementById("experienceOutput");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var phone = formData.get("phone");
        var education = formData.get("education");
        var skills = formData.get("skills");
        var experience = formData.get("experience");
        var languages = formData.get("languages");
        var skillsList = skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
        var languagesList = languages.split(",").map(function (language) { return "<li>".concat(language.trim(), "</li>"); }).join("");
        var educationList = education.split("\n").map(function (edu) { return "<li>".concat(edu.trim(), "</li>"); }).join("");
        var experienceList = experience.split("\n").map(function (exp) { return "<li>".concat(exp.trim(), "</li>"); }).join("");
        var resumeHTML = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Skills</h4>\n        <ul>").concat(skillsList, "</ul>\n        <h4>Languages</h4>\n        <ul>").concat(languagesList, "</ul>\n      ");
        resumeOutput.innerHTML = resumeHTML;
        educationOutput.innerHTML = educationList;
        experienceOutput.innerHTML = experienceList;
        resumePreview.classList.remove("hidden");
    });
});
