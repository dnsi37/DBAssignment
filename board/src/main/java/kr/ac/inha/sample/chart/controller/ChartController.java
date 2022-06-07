package kr.ac.inha.sample.chart.controller;

import java.sql.Timestamp;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import kr.ac.inha.sample.chart.dto.StockDto;
import kr.ac.inha.sample.chart.service.ChartService;

@Controller
public class ChartController {
	Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ChartService chartService;
	
	@RequestMapping("/chart/chartjs.do")
	public ModelAndView chartjs() throws Exception {
		ModelAndView mv = new ModelAndView("/chart/chartjs");
		
		mv.addObject("timestamp", new Timestamp(System.currentTimeMillis()));
		
		return mv;
	}

	@RequestMapping("/chart/amchart.do")
	public ModelAndView amchart() throws Exception {
		ModelAndView mv = new ModelAndView("/chart/amchart");
		
		mv.addObject("timestamp", new Timestamp(System.currentTimeMillis()));
		
		return mv;
	}

	@RequestMapping("/chart/stockList.ajax")
	@ResponseBody
	public List<StockDto> stockList(String jongmokCode) throws Exception {
		List<StockDto> list = chartService.selectStockByJongmok(jongmokCode);
		return list;
	}
}
