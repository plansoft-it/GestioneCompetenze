package plansoft.skillsmanagement.skill;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import plansoft.skillsmanagement.area.Area;

@RestController
public class SkillController {

	@Autowired
	private SkillService skillService;
	
	@RequestMapping("/areas/{id}/skills")
	public List<Skill> getSkills(@PathVariable int id) {
		return skillService.getSkills(id);
	}
	
	@RequestMapping("/areas/{areasId}/skills/{id}")
	public Optional<Skill> getSkill(@PathVariable int id) {
		return skillService.getSkill(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/areas/{areasId}/skills")
	public void addSkill(@RequestBody Skill skill, @PathVariable int areasId) {
		skill.setArea((new Area(areasId, "")));
		skillService.addSkill(skill);
	}
}