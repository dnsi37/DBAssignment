package kr.ac.inha.sample.chart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.inha.sample.chart.dto.StockDto;
import kr.ac.inha.sample.chart.mapper.ChartMapper;

@Service
public class ChartServiceImpl implements ChartService {
	@Autowired
	private ChartMapper chartMapper;
	
	@Override
	public List<StockDto> selectStockByJongmok(String jongmokCode) throws Exception {
		return chartMapper.selectStockByJongmok(jongmokCode);
	}

}
