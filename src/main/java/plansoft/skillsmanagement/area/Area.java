package plansoft.skillsmanagement.area;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Area {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String description;
	
	public Area() {
		
	}

	public Area(int id, String description) {
		this.id = id;
		this.description = description;
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
}