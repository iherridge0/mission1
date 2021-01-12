package za.co.iherridge0.rest.webservices.conversions.conversionsrest.conversion.entity;

import com.fasterxml.jackson.annotation.JsonFilter;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import za.co.iherridge0.rest.webservices.conversions.Configuration;

@JsonFilter("ConversionFilter")
@ApiModel(description = "This API Model describes the Conversion model.")
public class Conversion {

	@ApiModelProperty(notes = "FORMULA: 1 Kelvin equals 273.15 Celcius")
	private double kelvin;
	
	@ApiModelProperty(notes = "FORMULA: 1 Celcius equals -273.15 Kelvin ")
	private double celcius;
	
	@ApiModelProperty(notes = "FORMULA: 1 Mile equals 1.609 Kilometre")
	private double miles;
	
	@ApiModelProperty(notes = "FORMULA: 1 Kilometre equals 1.609 Miles")
	private double km;
	
	protected Conversion() {
		
	}
	
	public Conversion(double value, String conversionType, Configuration config) {
		super();
		if(conversionType.equals(ConversionType.KTOC)) {
			this.kelvin = value;
			if(value==0)
				this.celcius = - config.getKelvin();
			else
				this.celcius = kelvin - config.getKelvin();
		} else if(conversionType.equals(ConversionType.CTOK)) {
			this.celcius = value;
			if(value==0)
				this.kelvin = config.getKelvin();
			else
				this.kelvin = celcius + config.getKelvin();
		} else if(conversionType.equals(ConversionType.MTOK)) {
			this.miles = value;
			if(value==0)
				this.km = 0;
			else
				this.km = miles * config.getMiles();
		} else if(conversionType.equals(ConversionType.KTOM)) {
			this.km = value;
			if(value==0)
				this.miles = 0;
			else
				this.miles = km / config.getMiles();
		}
	}

	public double getKelvin() {
		return kelvin;
	}

	public void setKelvin(double kelvin) {
		this.kelvin = kelvin;
	}

	public double getCelcius() {
		return celcius;
	}

	public void setCelcius(double celcius) {
		this.celcius = celcius;
	}

	public double getMiles() {
		return miles;
	}

	public void setMiles(double miles) {
		this.miles = miles;
	}

	public double getKm() {
		return km;
	}

	public void setKm(double km) {
		this.km = km;
	}
}
