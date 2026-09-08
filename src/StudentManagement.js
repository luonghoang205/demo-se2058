import React, { useState, useEffect } from 'react';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Xin chào, tôi là ${this.name}, ${this.age} tuổi.`;
  }
}

class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  calculateAverage() {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    return total / this.scores.length;
  }

  addScores(...newScores) {
    this.scores = [...this.scores, ...newScores];
  }

 
  getPassingScores() {
    return this.scores.filter(score => score >= 5);
  }

  
  getFormattedScores() {
    return this.scores.map(score => `${score}đ`);
  }
}


const createScores = (...scores) => scores;


const evaluateStudent = (student) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const avg = student.calculateAverage();
      if (avg >= 8) {
        resolve("Excellent Student");
      } else {
        resolve("Need Improvement");
      }
    }, 1000);
  });
};

function StudentManagement() {
  
  const initialScores = createScores(8, 9, 10);
  const student = new Student("Tạ Hoàng Lương", 20, initialScores);

  
  const { name, age } = student;

  
  const [evaluation, setEvaluation] = useState("Đang đánh giá...");

  useEffect(() => {
    evaluateStudent(student).then(result => setEvaluation(result));
  }, []);

 return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bài tập Quản lý Sinh viên (ES6)</h1>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '500px' }}>
        
        <h3>1 & 2. Person & Student Class</h3>
        <p><strong>Giới thiệu:</strong> {student.introduce()}</p>

        <h3>3. Rest Parameter</h3>
        <p><strong>Mảng điểm khởi tạo:</strong> {student.scores.join(', ')}</p>

        <h3>4. Destructuring</h3>
        <p>Tên: <b>{name}</b> | Tuổi: <b>{age}</b></p>

        <h3>5. Spread Operator</h3>
        <p><strong>Tất cả điểm hiện tại:</strong> {student.scores.join(', ')}</p>

        <h3>6. Array Methods</h3>
        <p><strong>reduce() - Điểm trung bình:</strong> {student.calculateAverage().toFixed(2)}</p>
        <p><strong>filter() - Điểm đạt (&gt;= 5):</strong> {student.getPassingScores().join(', ')}</p>
        <p><strong>map() - Định dạng điểm:</strong> {student.getFormattedScores().join(', ')}</p>

        <h3>7. Promise Evaluation</h3>
        <p><strong>Kết quả:</strong> <span style={{ color: 'blue', fontWeight: 'bold' }}>{evaluation}</span></p>

      </div>
    </div>
  );
}


export default StudentManagement;
