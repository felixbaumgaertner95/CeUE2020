package at.jku.ce;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class ServingWebContentApplication {

    private static final Logger log = LoggerFactory.getLogger(ServingWebContentApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(ServingWebContentApplication.class, args);
    }
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @Bean
    public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
        HandleBarConfigurationController configurationController = new HandleBarConfigurationController(restTemplate.getForObject("https://www.maripavi.at/produkt/material", String.class));
        return args -> {
            String quote = restTemplate.getForObject("https://www.maripavi.at/produkt/material", String.class);
            log.info(quote.toString());
        };
    }
}
