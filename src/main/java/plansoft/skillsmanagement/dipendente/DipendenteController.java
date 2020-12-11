package plansoft.gestionecompetenze.dipendente;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DipendenteController {

	@Autowired
	private DipendenteService dipendenteService;
	
	@RequestMapping("/dipendenti")
	public List<Dipendente> getAllDipendenti(){
		return dipendenteService.getAllDipendenti();
	}
	
	@RequestMapping("/dipendenti/{id}")
	public Optional<Dipendente> getDipendente(@PathVariable String id) {
		return dipendenteService.getDipendente(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/dipendenti")
	public void addDipendente(@RequestBody Dipendente dipendente) {
		dipendenteService.getDipendente(dipendente);
	}
	
	@RequestMapping(method= RequestMethod.PUT, value="/dipendenti/{id}")
	public void updateDipendente(@RequestBody Dipendente dipendente, @PathVariable String id) {
		dipendenteService.updateDipendente(dipendente,id);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value= "/dipendenti/{id}")
	public void deleteDipendente(@PathVariable String id) {
		dipendenteService.deleteDipendente(id);
	}
	
}
