// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Ali",
    lastName: "Noor",
    age: 32,
    location: "Amman"
};

const student2: Student = {
    firstName: "Mona",
    lastName: "Ahmad",
    age: 33,
    location: "Cairo"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create and append the table to the DOM
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
