package plansoft.gestionecompetenze.dipendente;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Dipendente {

	@Id
	private String id;
	private String nome;
	private String cognome;
	
	
	
	public Dipendente() {

	}
	public Dipendente(String id, String nome, String cognome) {
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	
	
}
