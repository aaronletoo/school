package org.whut.management.business.customer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.whut.management.business.customer.entity.Customer;
import org.whut.management.business.customer.mapper.CustomerMapper;

import java.util.List;
import java.util.Map;

/**
 * Created by letoo on 2015/3/13.
 */
public class CustomerService {
    @Autowired
    private CustomerMapper customerMapper;
    public void add(Customer customer){
        customerMapper.add(customer);
    }
    public int update(Customer customer){
        return customerMapper.update(customer);
    }
    public int delete (Customer customer){
        return customerMapper.delete(customer);
    }
    public List<Map<String,String>> getList(long appId){
        return customerMapper.getList(appId);
    }
}
