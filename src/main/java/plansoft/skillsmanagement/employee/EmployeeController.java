package plansoft.skillsmanagement.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@RequestMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeService.getAllEmployees();
	}

	@RequestMapping("/employees/{id}")
	public Optional<Employee> getEmployee(@PathVariable int id) {
		return employeeService.getEmployee(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/employees")
	public void addEmployee(@RequestBody Employee employee) {
		employeeService.addEmployee(employee);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/employees/{id}")
	public void updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
		employeeService.updateEmployee(employee, id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/employees/{id}")
	public void deleteEmployee(@PathVariable int id) {
		employeeService.deleteEmployee(id);
	}

}
