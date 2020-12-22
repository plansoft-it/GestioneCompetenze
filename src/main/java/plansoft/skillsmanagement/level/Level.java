package plansoft.skillsmanagement.level;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Level {

	@Id
	private int id;
	private String description;
	private int levelOrder;

	public Level() {

	}

	public Level(int id, String description,  int levelOrder) {
		this.id = id;
		this.description = description;
		this.levelOrder = levelOrder;
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
	
	public int getLevelOrder() {
		return levelOrder;
	}
	
	public void setLevelOrder(int levelOrder) {
		this.levelOrder = levelOrder;
	}
}