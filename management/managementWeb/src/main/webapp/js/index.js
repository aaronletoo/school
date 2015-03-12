function addMainTab(name, url,closeable) {
	var c = true;
	if(closeable != undefined){
		c = false;
	}
	if(!$('#tabmain').tabs('exists',name)){
		$('#tabmain').tabs('add', {
			title : name,
			selected : true,
			closable:c
		});
		
		var tab = $('#tabmain').tabs('getSelected');

		$('#tabmain').tabs('update', {
			tab : tab,
			options : {
				title : name,
				href : url
			}
		});
	
	}
	$('#tabmain').tabs('select',name);
}


function menuHandler(item) {
	if (item.name == 'chargeList') {
		addMainTab('付费列表', ctx + '/charge/list');
	}if (item.name == 'chargeEdit') {
		addMainTab('付费', ctx + '/charge/toEdit');
	}if (item.name == 'roleManager') {
		addMainTab('角色管理', ctx + '/role/toRoleList');
	}if (item.name == 'depmentManager') {
		addMainTab('部门管理', ctx + '/org/toDepartmentList');
	}if (item.name == 'userManager') {
		addMainTab('用户管理', ctx + '/user/toUserList');
	}if (item.name == 'customManager') {
		addMainTab('客户信息管理', ctx + '/customer/toCustomer');
	}if (item.name == 'gradeManager') {
		addMainTab('年级管理', ctx + '/grade/toGradeList');
	}if (item.name == 'subManager') {
		addMainTab('科目管理', ctx + '/sub/toSubList');
	}if (item.name == 'sourceManager') {
		addMainTab('客户来源', ctx + '/source/toSourceList');
	}if (item.name == 'campusManager') {
		addMainTab('校区管理', ctx + '/campus/toCampusList');
	}if (item.name == 'studentManager') {
		addMainTab('学员管理', ctx + '/student/tostudentList');
	}if (item.name == 'depositRecord') {
		addMainTab('学员管理', ctx + '/student/toDepositRecord');
	}
	
}


function openSmallWindow(title, url) {

	openWin(title,url,320,250);
}

function openCommonWindow(title, url) {
	openWin(title,url,500,400);
}

function openWin(title,url,width,height){

		$('<div id="'+title+'"></div>').dialog({
			title : title,
			width : width,
			height : height,
			href : url,
			cache : true,
			modal : true,
			onClose:function(){
				$("#"+title+"").remove();
			}
		});
	//$('#'+title+'').dialog('refresh',url);
}

function refreshWin(url,title){
	$('#'+title+'').dialog('refresh',url);
}

function closeWin(title){
	$('#'+title+'').dialog('close');
	$('#'+title+'').dialog('destroy',true);
}



function openBigWindow() {
	
}

function openMessage(data) {
	
}

function endAction(data,fn){
	
	var obj = eval("("+data+")");
	if(obj.action == 'false'){
		$.messager.alert('提示',obj.msg,'error');
		return;
	}
	
	
	if(fn != undefined){
		fn(obj);
	}
	
}

function navMenuClick(){
	alert();
}


function menuOnclick(node){
	if(node.id  == 'chargeList'){
		addMainTab('付费列表', ctx + '/charge/list');
	}if (node.id == 'chargeEdit') {
		addMainTab('付费', ctx + '/charge/toEdit');
	}if (node.id == 'roleManager') {
		addMainTab('角色管理', ctx + '/role/toRoleList');
	}if (node.id == 'depmentManager') {
		addMainTab('部门管理', ctx + '/org/toDepartmentList');
	}if (node.id == 'userManager') {
		addMainTab('用户管理', ctx + '/user/toUserList');
	}if (node.id == 'customManager') {
		addMainTab('客户管理', ctx + '/customer/toCustomer');
	}if (node.id == 'ccustomManager') {
		addMainTab('客户管理', ctx + '/customer/toCustomer');
	}if (node.id == 'gradeManager') {
		addMainTab('年级管理', ctx + "/config/toList?configtype=grade");
	}if (node.id == 'subManager') {
		addMainTab('科目管理', ctx + '/sub/toSubList');
	}if (node.id == 'sourceManager') {
		addMainTab('客户来源', ctx + '/config/toList?configtype=ddlsource');
	}if (node.id == 'campusManager') {
		addMainTab('校区管理', ctx + '/campus/toCampusList');
	}if (node.id == 'studentManager') {
		addMainTab('学员管理', ctx + '/student/tostudentList');
	}if (node.id == 'studentCard') {
		addMainTab('学习卡', ctx + '/student/toCardList');
	}if (node.id == 'kinshipManager') {
		addMainTab('亲属关系', ctx + '/config/toList?configtype=kinship');
	}if (node.id == 'documentManager') {
		addMainTab('文档管理', ctx + '/config/toList?configtype=document');
	}if (node.id == 'ctimeManager') {
		addMainTab('上课时段', ctx + '/ctime/toCTList');
	}if (node.id == 'feeManager') {
		addMainTab('收费标准', ctx + '/fee/toFeeList');
	}if (node.id == 'wagesfessManager') {
		addMainTab('提成标准', ctx + '/fee/towFeeList');
	}if (node.id == 'modeManager') {
		addMainTab('学习模式', ctx + '/config/toList?configtype=teachmode');
	}if (node.id == 'globalManager') {
		addMainTab('全局参数', ctx + '/global/toGlobalList');
	}if (node.id == 'chargeManager') {
		addMainTab('合同列表', ctx + '/contract/toContractList');
	}if (node.id == 'ygManager') {
		addMainTab('员工列表', ctx + '/oa/toOAList');
	}if (node.id == 'levelManager') {
		addMainTab('员工级别', ctx + '/config/toList?configtype=llevel');
	}if (node.id == 'cardTManager') {
		addMainTab('卡级别', ctx + '/config/toList?configtype=car_type');
	}if (node.id == 'positionManager') {
		addMainTab('职位管理', ctx + '/config/toPosition');
	}if (node.id == 'leaveManager') {
		addMainTab('离职类别', ctx + '/config/toList?configtype=leave');
	}if (node.id == 'scoremodeManager') {
		addMainTab('考试模式', ctx + '/config/toList?configtype=scoremode');
	}if (node.id == 'pSManager') {
		addMainTab('岗位状态', ctx + '/config/toList?configtype=poststatus');
	}if (node.id == 'tdepmentManager') {
		addMainTab('部门管理', ctx + '/org/toDepartmentList');
	}if (node.id == 'troleManager') {
		addMainTab('角色管理', ctx + '/role/toRoleList');
	}if (node.id == 'tuserManager') {
		addMainTab('用户管理', ctx + '/user/toUserList');
	}if (node.id == 'coursesManager') {
		addMainTab('排课信息', ctx + '/courses/toCoursesList');
	}if (node.id == 'thisWeekCoursesManager') {
		addMainTab('本周课程', ctx + '/courses/toWeekCoursesList');
	}if (node.id == 'returnContractManager') {
		addMainTab('退费合同', ctx + '/contract/toReturnContractList');
	}if (node.id == 'periodManager') {
		addMainTab('课时列表', ctx + '/period/toPeriodList');
	}if (node.id == 'teachclass') {
		addMainTab('授课记录',ctx+'/period/toMyPeriodList');
	}if (node.id == 'hschoolManager') {
		addMainTab('家校互联',ctx+'/hschool/toHSList');
	}if (node.id == 'phschoolManager') {
		addMainTab('课时课表',ctx+'/hschool/toPHSList');
	}if (node.id == 'mycontract'){
		addMainTab('我的合同',ctx+'/hschool/toContractList');
	}if (node.id == 'smsList') {
		addMainTab('短信记录',ctx+'/hschool/toSms');
	}if (node.id == 'testMonthList') {
		addMainTab('月测记录',ctx+'/hschool/toTestMonth');
	}if (node.id == 'pullDocument'){
		addMainTab('挽单记录',ctx+'/contract/toPullDocumentList');
	}if (node.id == 'punchManager'){
		addMainTab('刷卡考勤',ctx+'/period/toPunchCard');
	}if (node.id == 'employeeRegister'){
		addMainTab('手工登记',ctx+'/period/toModifyPeriodList?action=3');
	}if (node.id == 'modifyPeriodList'){
		addMainTab('调课列表',ctx+'/period/toModifyPeriodList?action=2');
	}if (node.id == 'delPeriodList'){
		addMainTab('删课列表',ctx+'/period/toModifyPeriodList?action=1');
	}if (node.id == 'chatManager'){
		addMainTab('聊天室', ctx + '/chat/toChatMain');
	}if (node.id == 'commManager'){
		addMainTab('公告栏', ctx + '/chat/toAddCommList');
	}if (node.id == 'longhpManager'){
		addMainTab('财务统计', ctx + '/sts/caiwu');
	}if (node.id == 'ordersManager'){
		addMainTab('课时统计', ctx + '/sts/orders');
	}if (node.id == 'mechManager'){
		addMainTab('考勤机', ctx + '/config/toList?configtype=mech');
	}if (node.id == 'peopleManager'){
		addMainTab('人数统计', ctx + '/sts/people');
	}if (node.id == 'classoverrate'){
		addMainTab('课时完成率', ctx + '/sts/toClassOverRate');
	}if (node.id == 'wagesManager'){
		addMainTab('工资列表', ctx + '/oa/toWages');
	}if (node.id == 'tpcManager'){
		addMainTab('教案点评统计', ctx + '/period/toTeacherPC');
	}if (node.id == 'stuScore'){
		addMainTab('学员成绩', ctx + '/hschool/toStuScore');
	}if (node.id == 'toSpecialDiscountList'){
		addMainTab('特批管理', ctx + '/student/toSpecialDiscountList');
	}if (node.id == 'nightManager'){
		addMainTab('晚自习管理', ctx + '/hschool/toNight');
	}if (node.id == 'stuleaveManager'){
		addMainTab('离校管理', ctx + '/stuleave/toLeave');
	}if (node.id == 'oaCheckManager'){
		addMainTab('员工考勤', ctx + '/check/toCheck');
	}
	if (node.id == 'questionManager'){
		addMainTab('试题管理', ctx + '/exam/toQuestionList');
	}
	if (node.id == 'paperManager'){
		addMainTab('试卷管理', ctx + '/exam/toPaperList');
	}
	if (node.id == 'ratingT'){
		addMainTab('个性化测试', ctx + '/ratingtest/toPaper');
	}
	if (node.id == 'resultManager'){
		addMainTab('成绩管理', ctx + '/exam/toResultList');
	}
	if (node.id == 'rateManager'){
		addMainTab('提成率', ctx + '/oa/toRate');
	}
	
	if (node.id == 'depositRecord'){
		addMainTab('定金记录', ctx + '/student/toDepositRecord');
	}
	
	if (node.id == 'myteachplan'){
		addMainTab('我的教学计划', ctx + '/student/toTeachplan');
	}
	
	if (node.id == 'allteachplan'){
		addMainTab('全部教学计划', ctx + '/student/toAllTeachplan');
	}
	
	if (node.id == 'ststrend'){
		addMainTab('走势图', ctx + '/sts/trend');
	}
	
	//财务管理
	if (node.id == 'businessTypeBigManager'){
		addMainTab('业务大类', ctx + '/finance/toBigType');
	}
	if (node.id == 'businessTypeSmallManager'){
		addMainTab('业务小类', ctx + '/finance/toSmallType');
	}
	if (node.id == 'businessManager'){
		addMainTab('业务名称', ctx + '/finance/toBusinessManager');
	}
	if (node.id == 'businessflowRecordManager'){
		addMainTab('业务流水', ctx + '/finance/toBusinessFlowManager');
	}
	
	
	if (node.id == 'categoryBigManager'){
		addMainTab('物品大类', ctx + '/store/toBigCategory');
	}
	if (node.id == 'categorySmallManager'){
		addMainTab('物品小类', ctx + '/store/toSmallCategory');
	}
	if (node.id == 'itemNameManager'){
		addMainTab('物品名称', ctx + '/store/toItemManager');
	}
	if (node.id == 'inoutBillManager'){
		addMainTab('出入库单据', ctx + '/store/toBillManager');
	}
	
	if (node.id == 'storeSTS'){
		addMainTab('库存统计', ctx + '/store/toStoreSTS');
	}
	
	if (node.id == 'callbackCustomer'){
		addMainTab('客户回访统计', ctx + '/customer/toStoreSTS');
	}
	
	if (node.id == 'callbackStudent'){
		addMainTab('学员回访统计', ctx + '/student/toVisitSTS');
	}
	
	
	if (node.id == 'newContractDo'){
		addMainTab('咨询师提成计算', ctx + '/sts/toNewContractDoSTS');
	}
	
	if (node.id == 'leaverequest'){
		addMainTab('请假申请', ctx + '/employeeController/toLeaveManager');
	}
	
}


$(function(){

	$('#studentMenuTree').tree({
		onClick: menuOnclick
	});
	
	$('#customerMenuTree').tree({
		onClick: menuOnclick
	});
	
	$('#systemMenuTree').tree({
		onClick: menuOnclick
	});
	$('#chargeMenuTree').tree({
		onClick: menuOnclick
	});
	$('#periodMenuTree').tree({
		onClick: menuOnclick
	});
	$('#ccustomerMenuTree').tree({
		onClick: menuOnclick
	});
	$('#hschoolMenuTree').tree({
		onClick: menuOnclick
	});
	$('#oaMenuTree').tree({
		onClick: menuOnclick
	});
	$('#coursesMenuTree').tree({
		onClick: menuOnclick
	});	
	$('#stsMenuTree').tree({
		onClick: menuOnclick
	});
	$('#examMenuTree').tree({
		onClick: menuOnclick
	});	
	
	$('#tpTree').tree({
		onClick: menuOnclick
	});	
	
	$('#financemenuTree').tree({
		onClick: menuOnclick
	});	
	
	
	$('#storemenuTree').tree({
		onClick: menuOnclick
	});	
	
	
	//创建遮罩
	$('#commonmask').dialog({
		title:'系统处理中，请稍候...',
	    width: 150,
	    height: 0,
	    closed: true,
	    cache: true,
	    modal: true,
	    closable:false
	});

	
	
});


function openMask(){
	$('#commonmask').dialog('open');
}

function closeMask(){
	$('#commonmask').dialog('close');
}

 
