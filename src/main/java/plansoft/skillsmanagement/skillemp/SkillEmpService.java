package plansoft.skillsmanagement.skillemp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plansoft.skillsmanagement.level.Level;
import plansoft.skillsmanagement.level.LevelRepository;
import plansoft.skillsmanagement.level.LevelService;

@Service
public class SkillEmpService {

	@Autowired
	private SkillEmpRepository skillEmpRepository;

	@Autowired
	private LevelRepository levelRepository;
	
	public List<SkillEmp> getAllSkillEmp() {
		List<SkillEmp> skillsemps = new ArrayList<>();
		skillEmpRepository.findAll().forEach(skillsemps::add);
		return skillsemps;
	}

	//return a list of SkillEmp in which every element represents an employee who has 
    //the skill with id equal to id_skill
	public List<SkillEmp> getAllSkillEmpById_sk(int id_skill) {
		List<SkillEmp> skillsemps = new ArrayList<>();
		skillEmpRepository.findAllByIdsk(id_skill).forEach(skillsemps::add);
		return skillsemps;
	}

	//return a list of SkillEmp in which every element represents an employee who has 
	//the skill with id equal to id_skill and the level equal or higher than id_lev
	public List<SkillEmp> getAllSkillEmpById_skLev(int id_skill, int idlev) {		
		List<SkillEmp> skillsempsToreturn = new ArrayList<>();
		int inputlevelOrder=levelRepository.findById(idlev).get().getLevelOrder();
		Iterable<SkillEmp> skillempsByidsk = skillEmpRepository.findAllByIdsk(id_skill);
		for (SkillEmp se : skillempsByidsk) {
			Level currentLevel=levelRepository.findById(se.getIdlev()).get();
			if (currentLevel.getLevelOrder()>=inputlevelOrder)
				skillsempsToreturn.add(se);
		}
		return skillsempsToreturn;
	}

	//return a list of SkillEmp in which every element represents a skill related to an employee, who owns the skill itself 
	public List<SkillEmp> getAllSkillEmpById_emp(int id_emp) {
		List<SkillEmp> skillsemps = new ArrayList<>();
		skillEmpRepository.findAllByIdemp(id_emp).forEach(skillsemps::add);
		return skillsemps;
	}


	//change level of a skill related to an employee
	public void updateSkillEmpLevel(int id_lev,int id_emp, int id_skill) {
		List<SkillEmp> skillsemps = new ArrayList<>();
		skillEmpRepository.findAllByIdemp(id_emp).forEach(skillsemps::add);//all skills of employee id_emp
		for(SkillEmp sk:skillsemps) {
			if (sk.getIdsk()==id_skill) {
				sk.setIdlev(id_lev);
			}
		}
	}
	
	
	public void addSkillEmpByIdemp(SkillEmp skillEmp) {
		skillEmpRepository.save(skillEmp);

	}

	
	
	public void deleteSkillEmp(int id_emp, int id_skill) {
		List<SkillEmp> skillsemps = new ArrayList<>();
		skillEmpRepository.findAll().forEach(skillsemps::add);
		for(SkillEmp sk: skillsemps) {
			if(sk.getIdemp()==id_emp && sk.getIdsk()==id_skill) {
				skillEmpRepository.delete(sk);
			}
		}
	}

}
