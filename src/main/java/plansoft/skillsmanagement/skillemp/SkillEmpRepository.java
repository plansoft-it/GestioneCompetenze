package plansoft.skillsmanagement.skillemp;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SkillEmpRepository extends CrudRepository<SkillEmp,Integer>{

	List<SkillEmp> findAllByIdsk(int idskill);

	List<SkillEmp> findAllByIdemp(int id_emp);

	void deleteByIdemp(int id_emp);

	//List<SkillEmp> findAllBySkillEmpIdId_emp(String id_emp);

	//findByEmployeeId
}
