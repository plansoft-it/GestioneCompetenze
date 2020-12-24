package plansoft.skillsmanagement.skill;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import plansoft.skillsmanagement.area.Area;

@Entity
public class Skill {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;

	@ManyToOne
	private Area area;

	public Skill() {

	}

	public Skill(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}
}