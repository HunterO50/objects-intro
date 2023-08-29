const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
//Names of partime and fulltime employees
console.log(` Part time employees are ${nashvilleSoftwareSchool.instructors.partTime}.`)
console.log(` Full time employees are ${nashvilleSoftwareSchool.instructors.fullTime}.`)
//Only Andy and Zoe.
const KeyDirector = "director" 
const nashvilleSoftwareSchoolDirector = nashvilleSoftwareSchool[KeyDirector]
console.log(nashvilleSoftwareSchool.instructors.partTime[0], nashvilleSoftwareSchoolDirector)


