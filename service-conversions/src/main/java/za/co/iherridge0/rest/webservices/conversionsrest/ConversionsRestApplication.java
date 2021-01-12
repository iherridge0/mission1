package za.co.iherridge0.rest.webservices.conversionsrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ConversionsRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConversionsRestApplication.class, args);
	}

}
