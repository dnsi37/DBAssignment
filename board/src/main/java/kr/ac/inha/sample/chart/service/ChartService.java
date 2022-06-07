package kr.ac.inha.sample.chart.service;

import java.util.List;

import kr.ac.inha.sample.chart.dto.StockDto;

public interface ChartService {
	List<StockDto> selectStockByJongmok(String jongmokCode) throws Exception;
}
