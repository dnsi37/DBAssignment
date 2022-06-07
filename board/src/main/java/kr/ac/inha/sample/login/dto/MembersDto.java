package kr.ac.inha.sample.login.dto;

import lombok.Data;

@Data
public class MembersDto {
	private String userNo;
	private String userId;
	private String userPass;
	private String firstName;
	private String lastName;
	private String roleName;
	private String enabled;
	private String registDate;
	private String certificationDate;
}
