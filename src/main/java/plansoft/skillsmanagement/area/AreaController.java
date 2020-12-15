package plansoft.skillsmanagement.area;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class AreaController {
	
	@Autowired
	private AreaService areaService;
	
	@RequestMapping("/areas")
	public List<Area> getAreas() {
		return areaService.getAreas();
	}
	
	@RequestMapping("/areas/{id}")
	public Optional<Area> getArea(@PathVariable int id) {
		return areaService.getArea(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/areas")
	public void addArea(@RequestBody Area area) {
		areaService.addArea(area);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/areas/{id}")
	public void updateArea(@RequestBody Area area, @PathVariable int id) {
		areaService.updateArea(area, id);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/areas/{id}")
	public void deleteArea(@PathVariable int id) {
		areaService.deleteArea(id);
	}
}