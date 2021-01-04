package plansoft.skillsmanagement.area;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AreaService {

	@Autowired
	private AreaRepository areaRepository;

	public List<Area> getAreas() {
		List<Area> areas = new ArrayList<>();
		areaRepository.findAll().forEach(areas::add);
		return areas;
	}

	public Optional<Area> getArea(int id) {
		return areaRepository.findById(id);
	}

	public void addArea(Area area) {
		areaRepository.save(area);
	}

	public void updateArea(Area area, int id) {
		Area currentArea = areaRepository.findById(id).get();
		currentArea.setDescription(area.getDescription());
		areaRepository.save(currentArea);
	}

	public void deleteArea(int id) {
		areaRepository.deleteById(id);
	}

}