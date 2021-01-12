package za.co.iherridge0.rest.webservices.conversionsrest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import za.co.iherridge0.rest.webservices.conversionsrest.Configuration;
import za.co.iherridge0.rest.webservices.conversionsrest.entity.Conversion;
import za.co.iherridge0.rest.webservices.conversionsrest.entity.ConversionType;

@Component
public class ConversionDaoService {
	
	@Autowired
	Configuration config;
	
	public Conversion convertK2C(double kelvin) {
		return new Conversion(kelvin, ConversionType.KTOC, config);
	}
	
	public Conversion convertC2K(double celcius) {
		return new Conversion(celcius, ConversionType.CTOK, config);
	}

	public Conversion convertM2K(double miles) {
		return new Conversion(miles, ConversionType.MTOK, config);
	}

	public Conversion convertK2M(double km) {
		return new Conversion(km, ConversionType.KTOM, config);
	}
}
