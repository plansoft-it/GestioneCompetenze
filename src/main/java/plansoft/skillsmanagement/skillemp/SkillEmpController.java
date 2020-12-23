package plansoft.skillsmanagement.skillemp;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkillEmpController {
	
	
	@Autowired
	private SkillEmpService skillEmpService;
	
	@RequestMapping("/skillemps")
	public List<SkillEmp> getAllSkillEmp(){
		return skillEmpService.getAllSkillEmp();
	}
	
	
	@RequestMapping("/skillemps/skills/{id_skill}")//get all employees by a skill 
	public List<SkillEmp> getAllSkillEmpById_sk(@PathVariable int id_skill){
		return skillEmpService.getAllSkillEmpById_sk(id_skill);
	}
	
	@RequestMapping("/skillemps/skills/{id_skill}/levels/{id_lev}")
	public List<SkillEmp> getAllSkillEmpById_skLev(@PathVariable int id_skill, @PathVariable int id_lev){
		return skillEmpService.getAllSkillEmpById_skLev(id_skill, id_lev);
	}
	
	
	@RequestMapping("/skillemps/employees/{id_emp}")//get all skills by id_emp 
	public List<SkillEmp> getAllSkillEmpById_emp(@PathVariable int id_emp){
		return skillEmpService.getAllSkillEmpById_emp(id_emp);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/skillemps/employees/{id_emp}/skills/{id_skill}")
	public void updateSkillEmpLevel(@RequestParam int idlev,@PathVariable int id_emp, @PathVariable int id_skill) {
		skillEmpService.updateSkillEmpLevel( idlev,id_emp,  id_skill);
	}
	
	
	@RequestMapping(method= RequestMethod.POST,value="/skillemps")
	public void addSkillEmpByIdemp(@RequestBody SkillEmp skillEmp) {
		skillEmpService.addSkillEmpByIdemp(skillEmp);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/skillemps/employees/{id_emp}/skills/{id_skill}")
	public void deleteSkillEmp(@PathVariable int id_emp,@PathVariable int id_skill) {
		skillEmpService.deleteSkillEmp( id_emp, id_skill);
	}
	
}
