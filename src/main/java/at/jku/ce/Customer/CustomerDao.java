package at.jku.ce.Customer;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerDao extends JpaRepository<Customer, Long> {
    public Customer findCustomerByLastName(String lastName);
}
