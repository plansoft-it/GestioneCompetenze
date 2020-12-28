package plansoft.skillsmanagement.skillemployee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkillEmployeeController {

	@Autowired
	private SkillEmployeeService skillEmployeeService;

	@RequestMapping("/skillemployees")
	public List<SkillEmployee> getAllSkillEmployee() {
		return skillEmployeeService.getAllSkillEmployee();
	}

	@RequestMapping("/skillemployees/skills/{idskill}")
	public List<SkillEmployee> getAllSkillEmployeeByIdSkill(@PathVariable("idskill") int idSkill) {
		return skillEmployeeService.getAllSkillEmployeeByIdSkill(idSkill);
	}

	@RequestMapping("/skillemployees/skills/{idskill}/levels/{idlevel}")
	public List<SkillEmployee> getAllSkillEmployeeByIdSkillAndIdLevel(@PathVariable("idskill") int idSkill,
			@PathVariable("idlevel") int idLevel) {
		return skillEmployeeService.getAllSkillEmployeeByIdSkillAndIdLevel(idSkill, idLevel);
	}

	@RequestMapping("/skillemployees/employees/{idemployee}")
	public List<SkillEmployee> getAllSkillEmpByIdEmployee(@PathVariable("idemployee") int idEmployee) {
		return skillEmployeeService.getAllSkillEmployeeByIdEmployee(idEmployee);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/skillemployees/employees/{idemployee}/skills/{idskill}")
	public void updateSkillEmployeeIdLevel(@RequestParam int idLevel, @PathVariable("idemployee") int idEmployee,
			@PathVariable("idskill") int idSkill) {
		skillEmployeeService.updateSkillEmployeeIdLevel(idLevel, idEmployee, idSkill);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/skillemployees")
	public void addSkillEmployee(@RequestBody SkillEmployee skillEmployee) {
		skillEmployeeService.addSkillEmployee(skillEmployee);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/skillemps/employees/{idemployee}/skills/{idskill}")
	public void deleteSkillEmp(@PathVariable("idemployee") int idEmployee, @PathVariable("idskill") int idSkill) {
		skillEmployeeService.deleteSkillEmployee(idEmployee, idSkill);
	}

}
