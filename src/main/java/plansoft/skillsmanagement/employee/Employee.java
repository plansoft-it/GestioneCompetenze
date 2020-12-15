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
	public Employee(String id, String nome, String cognome) {
		this.id = id;
		this.name = nome;
		this.surname = cognome;
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
	public void setNome(String nome) {
		this.name = nome;
	}
	public String getCognome() {
		return surname;
	}
	public void setCognome(String cognome) {
		this.surname = cognome;
	}
	
	
}
