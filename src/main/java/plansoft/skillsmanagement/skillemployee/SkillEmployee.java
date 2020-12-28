package plansoft.skillsmanagement.skillemployee;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SkillEmployee {

	@Id
	private int id;

	private int idEmployee;
	private int idSkill;
	private int idLevel;

	public SkillEmployee() {
		super();
	}

	public SkillEmployee(int id, int idEmployee, int idSkill, int idLevel) {
		super();
		this.id = id;
		this.idEmployee = idEmployee;
		this.idSkill = idSkill;
		this.idLevel = idLevel;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdEmployee() {
		return idEmployee;
	}

	public void setIdEmployee(int idEmployee) {
		this.idEmployee = idEmployee;
	}

	public int getIdSkill() {
		return idSkill;
	}

	public void setIdSkill(int idSkill) {
		this.idSkill = idSkill;
	}

	public int getIdLevel() {
		return idLevel;
	}

	public void setIdLevel(int idLevel) {
		this.idLevel = idLevel;
	}

}
