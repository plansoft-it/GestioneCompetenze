package plansoft.gestionecompetenze.area;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Area {
	
	@Id
	private int id;
	private String descrizione;
	
	public Area() {
		
	}
	
	public Area(int id, String descrizione) {
		this.id = id;
		this.descrizione = descrizione;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
}