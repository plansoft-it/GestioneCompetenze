package plansoft.gestionecompetenze.dipendente;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DipendenteService {
	
	@Autowired
	private DipendenteRepository dipendenteRepository;

	public List<Dipendente> getAllDipendenti() {
		List<Dipendente> dipendenti=new ArrayList<>();
		dipendenteRepository.findAll()
		.forEach(dipendenti::add);
		return dipendenti;
		
	}

	public Optional<Dipendente> getDipendente(String id) {
		return dipendenteRepository.findById(id);
	}

	public void getDipendente(Dipendente dipendente) {
		dipendenteRepository.save(dipendente);
		
	}

	public void updateDipendente(Dipendente dipendente, String id) {
		if(dipendenteRepository.existsById(id)) {
			dipendenteRepository.deleteById(id);
			dipendenteRepository.save(dipendente);
		}
		
	}

	public void deleteDipendente(String id) {
		dipendenteRepository.deleteById(id);
	}

	
	
}
