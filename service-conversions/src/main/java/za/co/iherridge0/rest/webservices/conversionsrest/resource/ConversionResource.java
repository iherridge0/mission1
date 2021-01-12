package za.co.iherridge0.rest.webservices.conversionsrest.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

import za.co.iherridge0.rest.webservices.conversionsrest.entity.Conversion;
import za.co.iherridge0.rest.webservices.conversionsrest.service.ConversionDaoService;


@RestController
public class ConversionResource {
	
	@Autowired
	ConversionDaoService conversionDaoService;
	
	@PostMapping("conversions/ktoc")
	public MappingJacksonValue convertK2C(@RequestBody double kelvin) {
		Conversion conversion = conversionDaoService.convertK2C(kelvin);
		
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("kelvin", "celcius");
		
		FilterProvider filters = new SimpleFilterProvider().addFilter("ConversionFilter", filter);
		
		MappingJacksonValue mapping = new MappingJacksonValue(conversion);
		mapping.setFilters(filters);
		
		return mapping;
	}

	@PostMapping("conversions/ctok")
	public MappingJacksonValue convertC2K(@RequestBody double celcius) {
		Conversion conversion = conversionDaoService.convertC2K(celcius);
		
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("kelvin", "celcius");
		
		FilterProvider filters = new SimpleFilterProvider().addFilter("ConversionFilter", filter);
		
		MappingJacksonValue mapping = new MappingJacksonValue(conversion);
		mapping.setFilters(filters);
		
		return mapping;
	}
	
	@PostMapping("conversions/mtok")
	public MappingJacksonValue convertM2K(@RequestBody double miles) {
		Conversion conversion = conversionDaoService.convertM2K(miles);
		
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("miles", "km");
		
		FilterProvider filters = new SimpleFilterProvider().addFilter("ConversionFilter", filter);
		
		MappingJacksonValue mapping = new MappingJacksonValue(conversion);
		mapping.setFilters(filters);
		
		return mapping;
	}
	
	@PostMapping("conversions/ktom")
	public MappingJacksonValue convertK2M(@RequestBody double km) {
		Conversion conversion = conversionDaoService.convertK2M(km);
		
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("miles", "km");
		
		FilterProvider filters = new SimpleFilterProvider().addFilter("ConversionFilter", filter);
		
		MappingJacksonValue mapping = new MappingJacksonValue(conversion);
		mapping.setFilters(filters);
		
		return mapping;
	}
}
