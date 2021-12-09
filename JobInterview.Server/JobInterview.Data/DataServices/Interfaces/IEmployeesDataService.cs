using System.Collections.Generic;

namespace JobInterview.Data.DataServices.Interfaces
{
    public interface IEmployeesDataService
    {
        IEnumerable<Employee> GetAllEmployees();
        IEnumerable<Department> GetDepartments();
        IEnumerable<Employee> GetAllDepartments(Department Department);
    }
}
