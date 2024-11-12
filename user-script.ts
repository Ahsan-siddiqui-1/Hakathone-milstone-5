let myName: any = document.getElementById("name");
let desig: any = document.getElementById("desig");
let phone: any = document.getElementById("phone");
let email: any = document.getElementById("email");
let address: any = document.getElementById("address");
let skills: any = document.getElementById("skills");
let skills1: any = document.getElementById("skills1");
let skills2: any = document.getElementById("skills2");
let skills3: any = document.getElementById("skills3");
let skills4: any = document.getElementById("skills4");
let lang: any = document.getElementById("lang");
let lang1: any = document.getElementById("lang1");
let intermediate: any = document.getElementById("intermediate");
let passing: any = document.getElementById("passing");
let percentage: any = document.getElementById("percentage");
let secondry: any = document.getElementById("secondry");
let passing1: any = document.getElementById("passing1");
let percentage1: any = document.getElementById("percentage1");
let company: any = document.getElementById("company");
let work: any = document.getElementById("work");
let work1: any = document.getElementById("work1");
let btn = document.getElementById("btn");
let form = document.getElementById("form");
let pic: any = document.getElementById("pic");



form?.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.setItem('myName' , myName.value);
    
    localStorage.setItem('desig' , desig.value);
    localStorage.setItem('phone' , phone.value);
    localStorage.setItem('email' , email.value);
    localStorage.setItem('address' , address.value);
    localStorage.setItem('pic' , pic.value);
    localStorage.setItem('skills' , skills.value);
    localStorage.setItem('skills1' , skills1.value);
    localStorage.setItem('skills2' , skills2.value);
    localStorage.setItem('skills3' , skills3.value);
    localStorage.setItem('skills4' , skills4.value);
    localStorage.setItem('lang' , lang.value);
    localStorage.setItem('lang1' , lang1.value);
    localStorage.setItem('intermediate' , intermediate.value);
    localStorage.setItem('passing' , passing.value);
    localStorage.setItem('percentage' , percentage.value);
    localStorage.setItem('secondry' , secondry.value);
    localStorage.setItem('passing1' , passing1.value);
    localStorage.setItem('percentage1' , percentage1.value);
    localStorage.setItem('company' , company.value);
    localStorage.setItem('work' , work.value);
    localStorage.setItem('work1' , work1.value);
    
    

    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            let textImg :any = reader.result;
            localStorage.setItem('profile_pic', textImg);
        })
        reader.readAsDataURL(pic.files[0]);
        
    }

    
    
    
    window.location.href ="./versel per deny wali cv/index.html"
    
    
})

