package org.whut.management.business.customer.entity;

import javax.xml.crypto.Data;

/**
 * Created by letoo on 2015/3/13.
 */
public class Customer {
    private long id;
    private String cus_name;
    private int cus_type;              //客户类型
    private String tel;
    private long campus_id;
    private String stu_name;
    private String stu_sex;
    private long grade_id;
    private String stu_tel;
    private String school_name;
    private String customer_from;
    private String teach_mode_id;
    private Data create_date;
    private String mark;
    private long record_user_id;      //录入人
    private int state;
    private long zxuser_id;      //咨询人
    private long appId;

    public long getAppId() {
        return appId;
    }

    public void setAppId(long appId) {
        this.appId = appId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCus_name() {
        return cus_name;
    }

    public void setCus_name(String cus_name) {
        this.cus_name = cus_name;
    }

    public int getCus_type() {
        return cus_type;
    }

    public void setCus_type(int cus_type) {
        this.cus_type = cus_type;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public long getCampus_id() {
        return campus_id;
    }

    public void setCampus_id(long campus_id) {
        this.campus_id = campus_id;
    }

    public String getStu_name() {
        return stu_name;
    }

    public void setStu_name(String stu_name) {
        this.stu_name = stu_name;
    }

    public String getStu_sex() {
        return stu_sex;
    }

    public void setStu_sex(String stu_sex) {
        this.stu_sex = stu_sex;
    }

    public long getGrade_id() {
        return grade_id;
    }

    public void setGrade_id(long grade_id) {
        this.grade_id = grade_id;
    }

    public String getStu_tel() {
        return stu_tel;
    }

    public void setStu_tel(String stu_tel) {
        this.stu_tel = stu_tel;
    }

    public String getSchool_name() {
        return school_name;
    }

    public void setSchool_name(String school_name) {
        this.school_name = school_name;
    }

    public String getCustomer_from() {
        return customer_from;
    }

    public void setCustomer_from(String customer_from) {
        this.customer_from = customer_from;
    }

    public String getTeach_mode_id() {
        return teach_mode_id;
    }

    public void setTeach_mode_id(String teach_mode_id) {
        this.teach_mode_id = teach_mode_id;
    }

    public Data getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Data create_date) {
        this.create_date = create_date;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public long getRecord_user_id() {
        return record_user_id;
    }

    public void setRecord_user_id(long record_user_id) {
        this.record_user_id = record_user_id;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public long getZxuser_id() {
        return zxuser_id;
    }

    public void setZxuser_id(long zxuser_id) {
        this.zxuser_id = zxuser_id;
    }
}
