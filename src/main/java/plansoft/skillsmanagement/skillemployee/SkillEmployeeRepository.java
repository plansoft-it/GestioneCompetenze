package plansoft.skillsmanagement.skillemployee;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SkillEmployeeRepository extends CrudRepository<SkillEmployee, Integer> {

	List<SkillEmployee> findAllByIdskill(int idskill);

	List<SkillEmployee> findAllByIdemployee(int id_emp);

	void deleteByIdemployee(int id_emp);

}
