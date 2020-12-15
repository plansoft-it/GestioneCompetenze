package plansoft.skillsmanagement.skill;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SkillRepository extends CrudRepository<Skill, Integer>{

	public List<Skill> findByAreaId(int id);
}