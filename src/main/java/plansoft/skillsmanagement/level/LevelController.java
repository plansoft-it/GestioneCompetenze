package plansoft.skillsmanagement.level;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LevelController {

	@Autowired
	private LevelService levelService;

	@RequestMapping("/levels")
	public List<Level> getAllLevels() {
		return levelService.getAllLevels();
	}

	@RequestMapping("/levels/{id}")
	public Optional<Level> getLevel(@PathVariable String id) {
		return levelService.getLevel(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/levels")
	public void addLevel(@RequestBody Level level) {
		levelService.addLevel(level);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/levels/{id}")
	public void updateLevel(@RequestBody Level level, @PathVariable String id) {
		levelService.updateLevel(level, id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/levels/{id}")
	public void deleteLevel(@PathVariable String id) {
		levelService.deleteLevel(id);
	}
}
