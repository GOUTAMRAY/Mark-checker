
/***
 * 
 *** alert function  
 */

const createAlert = (msg , type = "danger") => {
  return `
    <p class="alert alert-${type} d-flex justify-content-between">${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
    </p> 
`
};




/***
 * 
 * get gpa & grade function 
 */


const getResult = (marks) => {


  let gpa;
  let grade;

  if (marks >= 0 && marks < 33) {
      gpa = 0;
      grade = F;
  }else if (marks >= 33 && marks < 40) {
      gpa = 1;
      grade = "D";
  }else if (marks >= 40 && marks < 50) {
      gpa = 2;
      grade = "C";
  }else if (marks >= 50 && marks < 60) {
      gpa = 3;
      grade = "B";
  }else if (marks >= 60 && marks < 70) {
      gpa = 3.5;
      grade = "A-";
  }else if (marks >= 70 && marks < 80) {
      gpa = 4;
      grade = "A";
  }else if (marks >= 80 && marks <= 100) {
      gpa = 5;
      grade = "A+";
  }else{
      gpa = "invalid gpa";
      grade = "invalid grade";

  };

   return{
     gpa : gpa,
     grade : grade
   };

};

















