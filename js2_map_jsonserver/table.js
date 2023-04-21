const students = [{ name: "or", age: 25, email: "or@or.com", grades: [89, 90, 99] },
{ name: "margalit", age: 24, email: "margalit@margalit.com", grades: [89, 89, 100] },
{ name: "daniel", age: 22, email: "daniel@daniel.com", grades: [99, 95, 100] }
]

const resultHTML = students.map(student => `<tr>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.email}</td>
    <td>${student.grades}</td>
    </tr>`).join('');
studentTable = "<tr><th>Student</th><th>Age</th><th>Email</th></tr>" + resultHTML;

console.log(studentTable);