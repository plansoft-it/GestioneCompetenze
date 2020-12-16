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

	public Optional<Employee> getEmployee(String id) {
		return employeeRepository.findById(id);
	}

	public void addEmployee(Employee employee) {
		employeeRepository.save(employee);

	}

	public void updateEmployee(Employee employee, String id) {
		if (employeeRepository.existsById(id)) {
			employeeRepository.deleteById(id);
			employeeRepository.save(employee);
		}

	}

	public void deleteEmployee(String id) {
		employeeRepository.deleteById(id);
	}

}
