package kr.ac.inha.sample.login.dto;

import lombok.Data;

@Data
public class RegistDto {
	private String firstName;
	private String lastName;
	private String inputEmail;
	private String inputPassword;
	private String confirmPassword;
}
