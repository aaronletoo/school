package org.whut.management.business.customer.mapper;

import org.apache.ibatis.annotations.Param;
import org.whut.management.business.customer.entity.Customer;
import org.whut.platform.fundamental.orm.mapper.AbstractMapper;

import java.util.List;
import java.util.Map;

/**
 * Created by letoo on 2015/3/13.
 */
public interface CustomerMapper extends AbstractMapper<Customer>{
    public List<Map<String,String>> getList(@Param("appId")long appId);
}
