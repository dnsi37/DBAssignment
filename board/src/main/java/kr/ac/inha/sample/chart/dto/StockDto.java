package kr.ac.inha.sample.chart.dto;

import lombok.Data;

@Data
public class StockDto {
	private String jongmokCode;
	private String date;
	private String time;
	private int open;
	private int high;
	private long investorAgency;
	private int low;
	private int close;
	private long volume;
	private long tradingValue;
	private long beforeDay;
	private int beforeAmount;
	private String contrast;
}
