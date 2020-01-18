package at.jku.ce.Customer;


import javax.persistence.*;

@Entity
@Table(name = "CUSTOMER_TABLE")
public class Customer {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name="FIRST_NAME")
    private String firstName;


    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Customer() {

    }
}
