//Object Destructuring

const course  = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"

}
//console.log(course.courseInstructor);

//destructor syntax
const {courseInstructor: instructor} = course
console.log(instructor);