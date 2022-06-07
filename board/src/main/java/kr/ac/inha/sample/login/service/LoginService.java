package kr.ac.inha.sample.login.service;

import kr.ac.inha.sample.login.dto.MembersDto;
import kr.ac.inha.sample.login.dto.RegistDto;

public interface LoginService {
	String saveRegisterInfo(RegistDto mbr) throws Exception;
	String saveCertification(MembersDto mbr) throws Exception;
	String checkUser(MembersDto mbr) throws Exception;
}
