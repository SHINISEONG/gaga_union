package com.gaga.bo.service.payment;

import com.gaga.bo.service.domain.Payment;


public interface PaymentService {
	
	//���� ���� �߰�
	public void addPayment(Payment payment) throws Exception;
	
	//���� ���� ��ȸ
	public Payment getPayment(String payNo) throws Exception;

}
