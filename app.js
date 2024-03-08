function displayPosition(company_name, job_title, description) {
    console.log("%s at %s - %s", job_title, company_name, description)
}

function displaySkill(skill_name, is_cool=false) {
    if (is_cool) {
        console.log(" * BAM: %s", skill_name)
    }
    else {
        console.log(" * %s", skill_name)
    }
}

console.log("Name: " + "Dalton Brown".toUpperCase())
console.log("Career: Cyber Security Sepcialist/Automation Engineer")
console.log("Description: I am a cyber security specialist with additional focuses on automation engineering, software engineering, and full-stack develpment.")
console.log("I am currently employed at New York City Office of Technology and Innovation as an automation engineer.")
console.log("However, I would be open to any position in the field of cyber security or software engineering that sounds interesting, and preferably full-remote.")
console.log("\n")
console.log("My interests:")
console.log(" * Automation")
console.log(" * Hacking (Ethically)")
console.log(" * Marvel Movies")
console.log(" * Gaming (Runescape)")
console.log(" * Working out")
console.log("\n")
console.log("My Previous Experience:")
displayPosition("NYC OTI", "Automation Engineer", "Automated processes for NYC's SOC and other teams.")
displayPosition("Towson University", "Cyber Security Researcher", "Built a Terraform script to automate the creation of a cyber range.")
console.log("\n")
console.log("My Skills:")
displaySkill("Spanish")
displaySkill("Italian", true)
displaySkill("Python", true)
displaySkill("Java")
displaySkill("Javascript", true)
displaySkill("C / C++")
displaySkill("SOAR Automation", true)