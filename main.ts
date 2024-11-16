document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    const educationOutput = document.getElementById("educationOutput") as HTMLUListElement;
    const experienceOutput = document.getElementById("experienceOutput") as HTMLUListElement;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const education = formData.get("education") as string;
      const skills = formData.get("skills") as string;
      const experience = formData.get("experience") as string;
      const languages = formData.get("languages") as string;
  
      const skillsList = skills.split(",").map((skill) => `<li>${skill.trim()}</li>`).join("");
      const languagesList = languages.split(",").map((language) => `<li>${language.trim()}</li>`).join("");
      const educationList = education.split("\n").map((edu) => `<li>${edu.trim()}</li>`).join("");
      const experienceList = experience.split("\n").map((exp) => `<li>${exp.trim()}</li>`).join("");
  
      const resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Skills</h4>
        <ul>${skillsList}</ul>
        <h4>Languages</h4>
        <ul>${languagesList}</ul>
      `;
  
      resumeOutput.innerHTML = resumeHTML;
  
      educationOutput.innerHTML = educationList;
      experienceOutput.innerHTML = experienceList;
  
      resumePreview.classList.remove("hidden");
    });
  });
  