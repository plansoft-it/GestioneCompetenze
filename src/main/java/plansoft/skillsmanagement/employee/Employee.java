package plansoft.skillsmanagement.employee;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	private String id;
	private String name;
	private String surname;
	
	
	
	public Employee() {

	}
	
	public Employee(String id, String name, String surname) {
		this.id = id;
		this.name = name;
		this.surname = surname;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getNome() {
		return name;
	}
	
	public void setNome(String name) {
		this.name = name;
	}
	
	public String getCognome() {
		return surname;
	}
	
	public void setCognome(String surname) {
		this.surname = surname;
	}
	
	
}
