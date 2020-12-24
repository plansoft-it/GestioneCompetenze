package plansoft.skillsmanagement.skillemployee;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SkillEmployee {

	@Id
	private int id;

	private int idemployee;
	private int idskill;
	private int idlevel;

	public SkillEmployee() {
		super();
	}

	public SkillEmployee(int id, int idemployee, int idskill, int idlevel) {
		super();
		this.id = id;
		this.idemployee = idemployee;
		this.idskill = idskill;
		this.idlevel = idlevel;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdemployee() {
		return idemployee;
	}

	public void setIdemployee(int idemployee) {
		this.idemployee = idemployee;
	}

	public int getIdskill() {
		return idskill;
	}

	public void setIdskill(int idskill) {
		this.idskill = idskill;
	}

	public int getIdlevel() {
		return idlevel;
	}

	public void setIdlevel(int idlevel) {
		this.idlevel = idlevel;
	}

}
