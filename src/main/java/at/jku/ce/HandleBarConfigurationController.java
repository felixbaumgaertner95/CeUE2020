package at.jku.ce;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import java.util.LinkedList;
import java.util.List;

@Controller
public class HandleBarConfigurationController {

    String material;
    List<String> materialList;
    String[] materialArray;

    public HandleBarConfigurationController() {
    }

    public HandleBarConfigurationController(String material) {
        this.material = material;
        this.materialList = new LinkedList<String>();
        this.material.replace("[", "");
        this.material.replace("]", "");
        this.materialArray = material.split(",");
        for(int i = 0; i < materialArray.length; i++) {
            this.materialList.add(materialArray[i]);
        }
    }

    @ModelAttribute("materialList")
    public List<String> getMaterialList() {
        return this.materialList;
    }

    @RequestMapping(value="/material.html")
    public void material()  {

        System.out.println("Material method called ");

    }
    @RequestMapping("/handlebar.html")
    public void handlebar() {
        System.out.println("handlebar called");
    }

}
