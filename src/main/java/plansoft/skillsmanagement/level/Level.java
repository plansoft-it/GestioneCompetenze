package plansoft.skillsmanagement.level;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Level {

	@Id
	private int id;
	private String description;
	private int level_order;

	public Level() {

	}

	public Level(int id, String description,  int level_order) {
		this.id = id;
		this.description = description;
		this.level_order = level_order;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public int getLevel_order() {
		return level_order;
	}
	
	public void setLevel_order(int level_order) {
		this.level_order = level_order;
	}
}