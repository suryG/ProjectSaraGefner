import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Departments } from '../models/departments';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-empoloyees',
  templateUrl: './empoloyees.component.html',
  styleUrls: ['./empoloyees.component.scss']
})
export class EmpoloyeesComponent implements OnInit, AfterViewInit  {

  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id', 'name', 'age', 'salary', 'department'];
  isLoading = true;

  departments: Departments[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor(private employeesService: EmployeesService) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployees();
  }
  

  getDepartments(){
    this.employeesService.getDepartments().subscribe((data) =>{
      this.departments = data;
    },
    _error => { console.log("get departments api failed.")});
  }

  onDepartmentChange(department: any) {
   console.log(department);
    
    this.employeesService.getAllDepartments(department.value).subscribe((data2) => {
      setTimeout(() => {
        this.isLoading = false;
        let s=data2;
        this.dataSource.data = data2;
        console.log(s);
      }, 300);
    },
      _error => setTimeout(() => { this.isLoading = false; }, 300)
    );
  }
 

  getEmployees(){
    this.employeesService.getEmployees().subscribe((data) => {
      setTimeout(() => {
        this.isLoading = false;
        this.dataSource.data = data;
      }, 300);
    },
      _error => setTimeout(() => { this.isLoading = false; }, 300)
    );
  }
}
