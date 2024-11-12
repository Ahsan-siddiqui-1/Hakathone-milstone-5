let MyName = localStorage.getItem("myName");
window.addEventListener("load", () => {
  let desig = localStorage.getItem("desig");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let address = localStorage.getItem("address");
  let picture = localStorage.getItem("profile_pic");
  let skills = localStorage.getItem("skills");
  let skills1 = localStorage.getItem("skills1");
  let skills2 = localStorage.getItem("skills");
  let skills3 = localStorage.getItem("skills3");
  let skills4 = localStorage.getItem("skills4");
  let lang = localStorage.getItem("lang");
  let lang1 = localStorage.getItem("lang1");
  let intermediate = localStorage.getItem("intermediate");
  let passing = localStorage.getItem("passing");
  let percentage = localStorage.getItem("percentage");
  let secondry = localStorage.getItem("secondry");
  let passing1 = localStorage.getItem("passing1");
  let percentage1 = localStorage.getItem("percentage1");
  let company = localStorage.getItem("company");
  let work = localStorage.getItem("work");
  let work1 = localStorage.getItem("work1");

  let resumeName: any = document.getElementById("resume-name");
  resumeName.textContent = MyName;

  let designation: any = document.getElementById("designation");
  designation.textContent = desig;

  let resumePhone: any = document.getElementById("resume-phone");
  resumePhone.textContent = phone;

  let resumeEmail: any = document.getElementById("resume-email");
  resumeEmail.textContent = email;

  let resumeAddress: any = document.getElementById("resume-address");
  resumeAddress.textContent = address;

  let resumeImg: any = document.getElementById("resume-img");
  resumeImg.src = picture;

  let resumeSkills: any = document.getElementById("resume-skills");
  resumeSkills.textContent = skills;

  let resumeSkills1: any = document.getElementById("resume-skills1");
  resumeSkills1.textContent = skills1;

  let resumeSkills2: any = document.getElementById("resume-skills2");
  resumeSkills2.textContent = skills2;

  let resumeSkills3: any = document.getElementById("resume-skills3");
  resumeSkills3.textContent = skills3;

  let resumeSkills4: any = document.getElementById("resume-skills4");
  resumeSkills4.textContent = skills4;

  let resumeLang: any = document.getElementById("resume-lang");
  resumeLang.textContent = lang;

  let resumeLang1: any = document.getElementById("resume-lang1");
  resumeLang1.textContent = lang1;

  let resumeCollage: any = document.getElementById("resume-collage");
  resumeCollage.textContent = intermediate;

  let resumePassing: any = document.getElementById("resume-passing");
  resumePassing.textContent = passing;

  let resumePercentage: any = document.getElementById("resume-percentage");
  resumePercentage.textContent = percentage;

  let resumeSecondry: any = document.getElementById("resume-secondry");
  resumeSecondry.textContent = secondry;

  let resumePassing1: any = document.getElementById("resume-passing1");
  resumePassing1.textContent = passing1;

  let resumePercentage1: any = document.getElementById("resume-percentage1");
  resumePercentage1.textContent = percentage1;

  let companyName: any = document.getElementById("company-name");
  companyName.textContent = company;

  let companyWork: any = document.getElementById("company-work");
  companyWork.textContent = work;

  let companyWork1: any = document.getElementById("company-work1");
  companyWork1.textContent = work1;
});

/// Download as PDF
let Print = document.getElementById("print");
Print?.addEventListener("click", () => {
  window.print();
});

// Shareable Link
let share_btn: any = document.getElementById("share-btn");
let anc: any = document.getElementById("anc");

let userName;
if (MyName) {
  userName = encodeURIComponent(MyName.toLowerCase().split(" ").join("-"));
} else {
  userName = "user";
}
let base_url =
  "http://127.0.0.1:5500/versel%20per%20deny%20wali%20cv/index.html";
let url = `${base_url}?/${userName}`;
share_btn.addEventListener("click", () => {
  anc?.setAttribute("href", url);

  // LINK COPY
  navigator.clipboard.writeText(url).then(() => {
    alert("Your Link Copy Successfull!");
  });
});
