package at.jku.ce.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerService {

        @Autowired
        CustomerDao customerDao;

    @GetMapping(path = {"/all"})
    public List getAllCustomers() {
        return customerDao.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value="/name")
    public Customer getCustomerWithLastname(@RequestParam(value="name") String lastName) {
        return customerDao.findCustomerByLastName(lastName);
    }
    @RequestMapping(method = RequestMethod.POST, value="/add")
    public Customer saveCustomer(@RequestBody Customer customer) {
        return customerDao.save(customer);
    }
}
