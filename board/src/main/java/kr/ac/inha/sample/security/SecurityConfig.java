package kr.ac.inha.sample.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	DataSource dataSource;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		log.info("security config.....");
		
		//http.authorizeRequests().antMatchers("/board/**").permitAll();
		http.authorizeRequests().antMatchers("/board/**").hasAnyRole("ADMIN", "USER");
		
		http.csrf().ignoringAntMatchers("/login/**").ignoringRequestMatchers();
		http.csrf().ignoringAntMatchers("/board/**").ignoringRequestMatchers();
		
		// 기본 제공 로그인 페이지
		//http.formLogin();
		
		// 사용자 정의 로그인 페이지
		http.formLogin().loginPage("/login/login.do");
		
		// 권한 없을때 띄울 페이지
		http.exceptionHandling().accessDeniedPage("/sbadmin/index.do");
		
		// 로그아웃시 지정 페이지로 이동
		http.logout().logoutSuccessUrl("/sbadmin/index.do").invalidateHttpSession(true);
	}
	
	@Autowired
	public void confgureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		String query1 = "SELECT user_id username, CONCAT('{noop}', user_pass) password, " +
						" CASE WHEN enabled = 'Y' THEN true else false END enabled" +
						" FROM members WHERE user_id = ?";
		String query2 = "SELECT user_id, role_name role" +
						" FROM members WHERE user_id = ?";
		
		auth.jdbcAuthentication().dataSource(dataSource).usersByUsernameQuery(query1).rolePrefix("ROLE_").authoritiesByUsernameQuery(query2);
	}

}
