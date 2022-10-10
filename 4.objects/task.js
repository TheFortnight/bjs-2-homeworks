function Student(name, gender, age) {
    // Ваш код
this.name = name;
this.gender = gender;
this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (... marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  }
  else {
    this.marks = this.mark.concat(marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    console.log("no marks");
    return;
  }
  else {
    let count = 0;
    for (m of this.marks){
      count += m;
    };
    return this.average = count/this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}