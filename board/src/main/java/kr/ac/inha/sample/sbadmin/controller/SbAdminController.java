package kr.ac.inha.sample.sbadmin.controller;

import java.sql.Timestamp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SbAdminController {
	Logger log = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping("/sbadmin/index.do")
	public ModelAndView index() throws Exception {
		ModelAndView mv = new ModelAndView("/index");
		
		mv.addObject("timestamp", new Timestamp(System.currentTimeMillis()));
		
		return mv;
	}
}
