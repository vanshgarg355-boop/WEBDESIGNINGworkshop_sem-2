
package com.example.demo.service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Service {

    @Autowired
    EmployeeRepository repository;

    // Add Employee
    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Get All Employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // Get Employee By ID
    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    // Update Employee
    public Employee updateEmployee(int id, Employee updatedEmployee) {

        Employee emp = repository.findById(id).orElse(null);

        if (emp != null) {
            emp.setName(updatedEmployee.getName());
            emp.setDepartment(updatedEmployee.getDepartment());
            emp.setSalary(updatedEmployee.getSalary());

            return repository.save(emp);
        }

        return null;
    }

    // Delete Employee
    public String deleteEmployee(int id) {
        repository.deleteById(id);
        return "Employee Deleted";
    }
}