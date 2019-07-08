import{Component}from '@angular/core';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'//`Employee Id is {{empId}} <br/>
  //  Employee Name is {{empName}}<br/>
    //Employee Salary is {{empSalary}}<br/>''
})     
export class AddEmployeeComponent{
empId:number=1001;
empName:string="ABCD";
empSalary:number=9999.11;
addEmployee():any{
    alert("Employee Added....");
}
}