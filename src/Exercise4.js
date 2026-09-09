import React, { useState, useEffect } from 'react';


class Shape {
  constructor(color = "red") { this.color = color; }
  getArea() { return 0; }
  toString() { return `Shape[color=${this.color}]`; }
}

class Rectangle extends Shape {
  constructor(color, length = 1, width = 1) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() { return this.length * this.width; }
  toString() { return `Rectangle[${super.toString()}, length=${this.length}, width=${this.width}]`; }
}

class Triangle extends Shape {
  constructor(color, base = 1, height = 1) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() { return 0.5 * this.base * this.height; }
  toString() { return `Triangle[${super.toString()}, base=${this.base}, height=${this.height}]`; }
}

export default function Exercise4() {
  
  const courses = ["React", "React Native", "NodeJs"];
  
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const retailCompanies = companies
    .filter(c => c.category === "Retail")
    .map(c => ({ ...c, start: c.start + 1 }));

  
  const [promiseResult, setPromiseResult] = useState('');

  const handlePromiseCheck = () => {
    const checkNumber = new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber > 5) {
        resolve(`Success! Random number: ${randomNumber}`);
      } else {
        reject("Error");
      }
    });

    checkNumber
      .then(res => setPromiseResult(res))
      .catch(err => setPromiseResult(`Notice: ${err}`));
  };

  
  useEffect(() => {
    console.log("--- BÀI TAP ES6 ---");
    const rect = new Rectangle("blue", 10, 5);
    console.log(rect.toString(), "Area:", rect.getArea());
    const tri = new Triangle("green", 6, 4);
    console.log(tri.toString(), "Area:", tri.getArea());
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>EXERCISE 4: JSX AND ES6</h1>
      <hr />

      {/* 1. Hello React */}
      <h2>1. Hello React</h2>
      <h1 style={{ textAlign: 'center' }}>
        Hello <span style={{ color: 'blue', fontWeight: 'bold' }}>React</span>
      </h1>
      <hr />

      {/* 2. Logo */}
      <h2>2. React Logo</h2>
      <div style={{ textAlign: 'center' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          alt="React Logo" 
          style={{ width: '120px' }}
        />
        <p style={{ fontStyle: 'italic', color: '#0056b3' }}>This is the React logo!</p>
        <p style={{ fontSize: '12px', color: '#666' }}>(I don't know why it is here either)</p>
        <p>The library for web and native user interfaces</p>
      </div>
      <hr />

      {/* 3. Navbar */}
      <h2>3. Navbar</h2>
      <nav style={{ backgroundColor: '#444', padding: '10px', display: 'flex', gap: '10px' }}>
        <a href="#home" style={{ backgroundColor: '#2e7d32', color: 'white', padding: '5px 10px', textDecoration: 'none' }}>Home</a>
        <a href="#search" style={{ color: 'white', padding: '5px 10px', textDecoration: 'none' }}>Search</a>
        <a href="#contact" style={{ color: 'white', padding: '5px 10px', textDecoration: 'none' }}>Contact</a>
        <a href="#login" style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', textDecoration: 'none' }}>Login</a>
      </nav>
      <hr />

      {/* 4. Display Text */}
      <h2>4. Display text</h2>
      <h1 style={{ color: 'blue' }}>This is JSX</h1>
      <hr />

      {/* 5. Course list */}
      <h2>5. Display list of course</h2>
      <h3>Course names</h3>
      <ul>
        {courses.map((item, idx) => (
          <li key={idx} style={{ fontWeight: 'bold' }}>{item}</li>
        ))}
      </ul>
      <hr />

      {/* Table Retail Companies */}
      <h2>Retail Companies Table (Start + 1)</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {retailCompanies.map((c, i) => (
            <tr key={i}>
              <td><b>{c.name}</b></td>
              <td><b>{c.start}</b></td>
              <td><b>{c.end}</b></td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />

      {/* Promises */}
      <h2>5. Promises</h2>
      <button onClick={handlePromiseCheck} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Generate Random Number
      </button>
      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{promiseResult}</p>
    </div>
  );
}
