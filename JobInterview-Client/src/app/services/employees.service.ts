import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { Departments } from '../models/departments';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl: string = "https://localhost:5001/"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees/getEmployees`);
  }
  getDepartments(): Observable<Departments[]> {
    return this.http.get<Departments[]>(`${this.apiUrl}employees/getDepartments`);
  }
  getAllDepartments(department:Departments): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.apiUrl}employees/getAllDepartments`,department);
  }
  // getDepartments(): Observable<Departments[]> {

  //   let departments: Departments[] = [
  //     {value: '1', viewValue: 'department1'},
  //     {value: '2', viewValue: 'department2'},
  //     {value: '3', viewValue: 'department3'},
  //   ];

  //   return of(departments);
  // }
}
