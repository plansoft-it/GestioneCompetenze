package plansoft.skillsmanagement.employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public List<Employee> getAllEmployees() {
		List<Employee> employees = new ArrayList<>();
		employeeRepository.findAll().forEach(employees::add);
		return employees;

	}

	public Optional<Employee> getEmployee(int id) {
		return employeeRepository.findById(id);
	}

	public void addEmployee(Employee employee) {
		employeeRepository.save(employee);

	}

	public void updateEmployee(Employee employee, int id) {
		Employee currentEmployee = employeeRepository.findById(id).get();
		currentEmployee.setName(employee.getName());
		currentEmployee.setSurname(employee.getSurname());
		employeeRepository.save(currentEmployee);
	}

	public void deleteEmployee(int id) {
		employeeRepository.deleteById(id);
	}

}
