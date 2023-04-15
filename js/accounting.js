'use strict';
let AllEmployee = [];
let firstColumnArray = ["Administration", "Marketing", "Development", "Finance", "Total"];
let secondColumnArray = [];
let thirdColumnArray = [];
let fourthColumnArray = [];

function renderTable() {
    getEmployee();
    if (AllEmployee === null) {
        AllEmployee = [];
    }
    else {
        const container = document.getElementById('container');

        const header = document.createElement('h1');
        header.textContent = "Employess Table";
        container.appendChild(header);


        const divEl = document.createElement('div');
        divEl.setAttribute('class', 'tableContainer');
        container.appendChild(divEl);

        const table = document.createElement('table');
        table.setAttribute('id', 'employees');
        divEl.appendChild(table);

        const tableRow1 = document.createElement('tr');
        table.appendChild(tableRow1);

        const tableHeadrow1 = document.createElement('th');
        tableHeadrow1.textContent = 'Department';
        tableRow1.appendChild(tableHeadrow1);

        const tableHeadrow2 = document.createElement('th');
        tableHeadrow2.textContent = 'Number Of Employees';
        tableRow1.appendChild(tableHeadrow2);

        const tableHeadrow3 = document.createElement('th');
        tableHeadrow3.textContent = 'Total Salary';
        tableRow1.appendChild(tableHeadrow3);

        const tableHeadrow4 = document.createElement('th');
        tableHeadrow4.textContent = 'Average Salary';
        tableRow1.appendChild(tableHeadrow4);


        for (let i = 0; i < firstColumnArray.length; i++) {
            let tableRow = document.createElement('tr');
            table.appendChild(tableRow);

            let tableHead = document.createElement('td');
            tableHead.textContent = firstColumnArray[i]
            tableRow.appendChild(tableHead)

            let tableHead2 = document.createElement('td');
            tableHead2.textContent = secondColumnArray[i];
            tableRow.appendChild(tableHead2)

            let tableHead3 = document.createElement('td');
            tableHead3.textContent = thirdColumnArray[i];
            tableRow.appendChild(tableHead3)

            let tableHead4 = document.createElement('td');
            tableHead4.textContent = fourthColumnArray[i];
            tableRow.appendChild(tableHead4);
        }



    }
}


function getEmployee() {
    let JsonArray = localStorage.getItem('AllEmployee');
    let dataFromStorege = JSON.parse(JsonArray);
    AllEmployee = dataFromStorege;
}

// get the total salary of all emplyoees in all departments
function totalSalaryForAllEmployee() {
    let totalSalary = 0;
    AllEmployee.forEach(item => {
        totalSalary += item.salary;
    });
    return thirdColumnArray.push(totalSalary + '$');
}
// get the average salary for all employees in all departments
function averageSalaryForAllEmployees() {
    let averrageSalary = 0;
    AllEmployee.forEach(item => {
        averrageSalary += item.salary

    });
    averrageSalary = averrageSalary / AllEmployee.length;
    return fourthColumnArray.push(averrageSalary.toFixed(2));
}

function eachEmployeeDepartment() {
    let administrationCount = 0, marketingCount = 0, developmentCount = 0, financeCount = 0;
    let administrationSalary = 0, marketingSalary = 0, developmentSalary = 0, financeSalary = 0;
    let administrationDepartmentAverage = 0, marketingDepartmentAverage = 0, developmentDepartmentAverage = 0, financeDepartmentAverage = 0;

    AllEmployee.forEach(emp => {
        if (emp.Department === 'Administration') {
            administrationCount++;
            administrationSalary += emp.salary;
        }
        else if (emp.Department === 'Marketing') {
            marketingCount++;
            marketingSalary += emp.salary;
        }
        else if (emp.Department === 'Development') {
            developmentCount++;
            developmentSalary += emp.salary;
        }
        else if (emp.Department === 'Finance') {
            financeCount++;
            financeSalary += emp.salary;
        }
        
    });

    administrationDepartmentAverage = administrationSalary / administrationCount;
    marketingDepartmentAverage = marketingSalary / marketingCount;
    developmentDepartmentAverage = developmentSalary / developmentCount;
    financeDepartmentAverage = financeSalary / financeCount;

    secondColumnArray.push(administrationCount, marketingCount, developmentCount, financeCount, AllEmployee.length);

    thirdColumnArray.push(administrationSalary + '$', marketingSalary + '$', developmentSalary + '$', financeSalary + '$');

    fourthColumnArray.push(administrationDepartmentAverage.toFixed(2), marketingDepartmentAverage.toFixed(2), developmentDepartmentAverage.toFixed(2), financeDepartmentAverage.toFixed(2));

}
getEmployee();
eachEmployeeDepartment();
totalSalaryForAllEmployee();
averageSalaryForAllEmployees();
renderTable();