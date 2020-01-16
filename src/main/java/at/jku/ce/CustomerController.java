package at.jku.ce;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

@Controller
public class CustomerController {

    @RequestMapping("/greeting")
    public void greeting(@RequestParam(value="name", defaultValue="World") String name) {
        System.out.println("Greeting");
    }

    @RequestMapping(value="/hello.html")
    public ModelAndView loginUser(@RequestParam(value="firstname", defaultValue="Hugo") String firstname, @RequestParam(value="lastname", defaultValue = "Hansi") String lastname)  {

        System.out.println("Post method called " + firstname + " " + lastname);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("hello");
        return modelAndView;
    }
}
