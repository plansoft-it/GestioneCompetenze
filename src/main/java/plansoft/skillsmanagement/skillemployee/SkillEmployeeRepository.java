package plansoft.skillsmanagement.skillemployee;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SkillEmployeeRepository extends CrudRepository<SkillEmployee, Integer> {

	List<SkillEmployee> findAllByIdSkill(int idSkill);

	List<SkillEmployee> findAllByIdEmployee(int idEmployee);

}
