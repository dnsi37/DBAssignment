package kr.ac.inha.sample.login.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.ac.inha.sample.login.dto.MembersDto;

@Mapper
public interface LoginMapper {
	List<MembersDto> selectMembers(String userId) throws Exception;	
	void insertMembers(MembersDto membersDto) throws Exception;
	void updateMembersCert(MembersDto membersDto) throws Exception;
}
