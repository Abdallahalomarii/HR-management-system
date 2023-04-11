'use strict';

function Employee(EmployeeID, Fullname, Department, Level) {
    this.EmployeeID = EmployeeID;
    this.Fullname = Fullname;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = `./assets/${this.Fullname}.png`;
    
}
Employee.prototype.salary = function () {
    let max,min;
    const tax=7.5;
    let rndsalary;
    if(this.Level==="Senior")
    {
        max = 2000;
        min =1500;
        rndsalary= Math.floor(Math.random() * (max - min + 1) + min);

    }
    else if (this.Level==="Mid-Senior")
    {
        max = 1500;
        min =1000;
        rndsalary=  Math.floor(Math.random() * (max - min + 1) + min);


    }
    else if(this.Level==="Junior") {
        max = 1000;
        min =500;
        rndsalary=  Math.floor(Math.random() * (max - min + 1) + min);

    }
    let netsalary =  rndsalary -(rndsalary * tax/100);
    return Math.floor(netsalary);
}

Employee.prototype.render = function()
{
    document.write(`<span class="Name"><h2> Name: ${this.Fullname} </span> \t <span class="Salary"> Salary: ${this.salary()}$</h2></span>`);
    
}

let Ghazi = new Employee(1000,"ghazi samer","Administration","Senior");
let Lana = new Employee(1001,"Lana Ali","Finance","Senior");
let Tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let Safi = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let Omar = new Employee(1004,"Omar Zaid	","Development","Senior");
let Rana = new Employee(1005,"Rana Saleh	","Development","Junior");
let Hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();


