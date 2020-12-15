package plansoft.skillsmanagement.level;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Level {
	
	@Id
	private String id;
	private String description;
	
	
	public Level() {
		
	}
	public Level(String id, String description) {
		this.id = id;
		this.description = description;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
}
