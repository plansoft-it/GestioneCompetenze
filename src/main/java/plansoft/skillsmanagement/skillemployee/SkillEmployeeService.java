package plansoft.skillsmanagement.skillemployee;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plansoft.skillsmanagement.level.Level;
import plansoft.skillsmanagement.level.LevelRepository;

@Service
public class SkillEmployeeService {

	@Autowired
	private SkillEmployeeRepository skillEmployeeRepository;

	@Autowired
	private LevelRepository levelRepository;

	public List<SkillEmployee> getAllSkillEmployee() {
		List<SkillEmployee> skillEmployees = new ArrayList<>();
		skillEmployeeRepository.findAll().forEach(skillEmployees::add);
		return skillEmployees;
	}

	// return a list of SkillEmp in which every element represents an employee who
	// has
	// the skill with id equal to id_skill
	public List<SkillEmployee> getAllSkillEmployeeByIdSkill(int idSkill) {
		List<SkillEmployee> skillsEmployees = new ArrayList<>();
		skillEmployeeRepository.findAllByIdSkill(idSkill).forEach(skillsEmployees::add);
		return skillsEmployees;
	}

	// return a list of SkillEmp in which every element represents an employee who
	// has
	// the skill with id equal to id_skill and the level equal or higher than id_lev
	public List<SkillEmployee> getAllSkillEmployeeByIdSkillAndIdLevel(int idSkill, int idLevel) {
		List<SkillEmployee> skillEmployeesToReturn = new ArrayList<>();
		int inputlevelOrder = levelRepository.findById(idLevel).get().getLevelOrder();
		Iterable<SkillEmployee> skillEmployeesByIdSkill = skillEmployeeRepository.findAllByIdSkill(idSkill);
		for (SkillEmployee skillEmployee : skillEmployeesByIdSkill) {
			Level currentLevel = levelRepository.findById(skillEmployee.getIdLevel()).get();
			if (currentLevel.getLevelOrder() >= inputlevelOrder)
				skillEmployeesToReturn.add(skillEmployee);
		}
		return skillEmployeesToReturn;
	}

	// return a list of SkillEmp in which every element represents a skill related
	// to an employee, who owns the skill itself
	public List<SkillEmployee> getAllSkillEmployeeByIdEmployee(int idEmployee) {
		List<SkillEmployee> skillsemps = new ArrayList<>();
		skillEmployeeRepository.findAllByIdEmployee(idEmployee).forEach(skillsemps::add);
		return skillsemps;
	}

	// change level of a skill related to an employee
	public void updateSkillEmployeeIdLevel(int idLevel, int idEmployee, int idSkill) {
		List<SkillEmployee> skillEmployees = new ArrayList<>();
		skillEmployeeRepository.findAllByIdEmployee(idEmployee).forEach(skillEmployees::add);// all skills of employee
																								// id_emp
		for (SkillEmployee skillEmployee : skillEmployees) {
			if (skillEmployee.getIdSkill() == idSkill) {
				skillEmployee.setIdLevel(idLevel);
			}
		}
	}

	public void addSkillEmployee(SkillEmployee skillEmployee) {
		skillEmployeeRepository.save(skillEmployee);

	}

	public void deleteSkillEmployee(int idEmployee, int idSkill) {
		List<SkillEmployee> skillEmployees = new ArrayList<>();
		skillEmployeeRepository.findAll().forEach(skillEmployees::add);
		for (SkillEmployee skillEmployee : skillEmployees) {
			if (skillEmployee.getIdEmployee() == idEmployee && skillEmployee.getIdSkill() == idSkill) {
				skillEmployeeRepository.delete(skillEmployee);
			}
		}
	}

}
