

'use strict';

let AllEmployee = [];
let form = document.getElementById('form-account');
form.addEventListener('submit', addNewEmployee)

function Employee(Fullname, Department, Level, imageURL) {
    this.EmployeeID = 0;
    this.Fullname = Fullname[0] + " " + Fullname[1];
    this.Department = Department;
    this.Level = Level;
    this.imageURL = `./assets/${Fullname[0]}.png`;
    this.salary = 0;
    AllEmployee.push(this);
}
Employee.prototype.netSalary = function () {


    let max, min;
    const tax = 7.5;
    let rndsalary;
    if (this.Level === "Senior") {
        max = 2000;
        min = 1500;
        rndsalary = Math.floor(Math.random() * (max - min + 1) + min);

    }
    else if (this.Level === "Mid-Senior") {
        max = 1500;
        min = 1000;
        rndsalary = Math.floor(Math.random() * (max - min + 1) + min);


    }
    else if (this.Level === "Junior") {
        max = 1000;
        min = 500;
        rndsalary = Math.floor(Math.random() * (max - min + 1) + min);

    }
    let netsalary = rndsalary - (rndsalary * tax / 100);
    this.salary = Math.floor(netsalary);
}
Employee.prototype.UniqueID = function () {
    this.EmployeeID = randomID();
}
function randomID() {

    return Math.floor(Math.random() * (8999) + 1000);
}

function render() {





    const container = document.getElementById('container');//parent 


    getEmployee();

    if (AllEmployee === null) {
        AllEmployee = [];
        alert('please you have to fill all fields');
    }
    else {

        AllEmployee.forEach(item => {

            const employee = document.createElement('div');
            // employee.classList.add('employee', `${item.Department}`);
            employee.classList.add('employee', `${item.Department}`);
            container.appendChild(employee);


            const imgEl = document.createElement('img');
            const imgdiv = document.createElement('div');
            imgdiv.setAttribute('class', 'img-content');
            employee.appendChild(imgdiv);
            imgdiv.appendChild(imgEl);
            imgEl.src = item.imageURL;


            const pEl = document.createElement('p');
            pEl.setAttribute('class', 'employee-info');
            pEl.textContent = `Name: ${item.Fullname} - ID: ${item.EmployeeID}`;
            employee.appendChild(pEl);

            // set attribute ('class',`$this.Department`)
            const P2El = document.createElement('p');
            P2El.setAttribute('class', 'employee-Department');
            P2El.textContent = `Department: ${item.Department} - Level: ${item.Level}`;
            employee.appendChild(P2El);

            const P3El = document.createElement('p');
            P3El.setAttribute('class', 'employee-salary');
            P3El.textContent = `Salary: ${item.salary}`;
            employee.appendChild(P3El);
        });
    }





}


function addNewEmployee(event) {
    // event.preventDefault();
    let fname = event.target.fname.value;
    let lname = event.target.lastname.value;
    let department = event.target.department.value;
    let Level = event.target.level.value;
    let imageURL = event.target.imageURL.value;
    let fullname = [];
    fullname.push(fname, lname);
    let newEmployee = new Employee(fullname, department, Level, imageURL);
    newEmployee.UniqueID();
    newEmployee.netSalary();
    //step 1
    let JsonArray = JSON.stringify(AllEmployee);
    localStorage.setItem('AllEmployee', JsonArray);
}
// step 2
function getEmployee() {
    let JsonArray = localStorage.getItem('AllEmployee');
    let dataFromStorege = JSON.parse(JsonArray);
    AllEmployee = dataFromStorege;
}
getEmployee();
render();