function calculateGrade(){
  var input = document.getElementById('gradeEntered');
  var grade = input.value;

  if (grade >= 90){
    document.getElementById('result').innerHTML = "A";
  } else if (grade >= 80) {
    document.getElementById('result').innerHTML = "B";
  } else if (grade >= 70) {
    document.getElementById('result').innerHTML = "C";
  } else if (grade >= 60) {
    document.getElementById('result').innerHTML = "D";
  } else {
    document.getElementById('result').innerHTML = "F";
  }
}
