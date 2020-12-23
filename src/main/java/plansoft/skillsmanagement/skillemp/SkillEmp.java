package plansoft.skillsmanagement.skillemp;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SkillEmp {

	@Id
	private int id;

	private int idemp;
	private int idsk;
	private int idlev;

	public SkillEmp() {
		super();
	}

	public SkillEmp(int id, int idemp, int idsk, int idlev) {
		super();
		this.id = id;
		this.idemp = idemp;
		this.idsk = idsk;
		this.idlev = idlev;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdemp() {
		return idemp;
	}

	public void setIdemp(int idemp) {
		this.idemp = idemp;
	}

	public int getIdsk() {
		return idsk;
	}

	public void setIdsk(int idsk) {
		this.idsk = idsk;
	}

	public int getIdlev() {
		return idlev;
	}

	public void setIdlev(int idlev) {
		this.idlev = idlev;
	}



}
