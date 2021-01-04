package plansoft.skillsmanagement.skill;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService {

	@Autowired
	private SkillRepository skillRepository;

	public List<Skill> getSkills(int id) {
		List<Skill> skills = new ArrayList<>();
		skillRepository.findByAreaId(id).forEach(skills::add);
		return skills;
	}

	public Optional<Skill> getSkill(int id) {
		return skillRepository.findById(id);
	}

	public void addSkill(Skill skill) {
		skillRepository.save(skill);
	}

	public void updateSkill(Skill skill, int id) {
		Skill currentSkill = skillRepository.findById(id).get();
		currentSkill.setName((skill.getName()));
		skillRepository.save(currentSkill);
	}

	public void deleteSkill(int id) {
		skillRepository.deleteById(id);
	}
}