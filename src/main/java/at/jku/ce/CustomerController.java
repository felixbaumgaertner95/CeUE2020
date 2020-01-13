package at.jku.ce;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class CustomerController {

    @RequestMapping("/greeting")
    public void greeting(@RequestParam(value="name", defaultValue="World") String name) {
        System.out.println("Greeting");
    }

    @RequestMapping(value="/hello.html")
    public void loginUser(@RequestParam(value="firstname", defaultValue="Hugo") String firstname, @RequestParam(value="lastname", defaultValue = "Hansi") String lastname)  {
        try {
            System.out.println("Post method called");
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}
