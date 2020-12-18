package plansoft.skillsmanagement.level;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LevelService {

	@Autowired
	private LevelRepository levelRepository;

	public List<Level> getAllLevels() {
		List<Level> levels = new ArrayList<>();
		levelRepository.findAll().forEach(levels::add);
		return levels;
	}

	public Optional<Level> getLevel(int id) {
		return levelRepository.findById(id);
	}

	public void addLevel(Level level) {
		levelRepository.save(level);
	}

	public void updateLevel(Level level, int id) {
		if (levelRepository.existsById(id)) {
			levelRepository.deleteById(id);
			levelRepository.save(level);
		}

	}

	public void deleteLevel(int id) {
		levelRepository.deleteById(id);
	}

}
