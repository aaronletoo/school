function isChecked(name){
	if( $("input[name="+name+"]:checked").val() == undefined){
		
		return false;
	}
	return true;
}



function displayInput(textId,inputId){
    $("#"+textId).parent().next().remove();
    document.getElementById(textId).style.display="none";
    document.getElementById(inputId).style.display="block";
}

function displayText(textId,inputId){
    document.getElementById(inputId).style.display="none";
    document.getElementById(textId).style.display="block";

}


function getWeek(v){
	var d = "";
	switch(v){
		case 2:
			d = "一";
		break;
		case 3:
			d = "二";
		break;
		case 4:
			d = "三";
		break;	
		case 5:
			d = "四";
		break;	
		case 6:
			d = "五";
		break;	
		case 7:
			d = "六";
		break;	
		case 1:
			d = "日";
		break;	
	}
	
	return d;
	
}

function getAge(b){
	var birthday=new Date(b.replace(/-/g, "\/"));
	var d=new Date(); 
	var age = d.getFullYear()-birthday.getFullYear()-((d.getMonth()<birthday.getMonth()|| d.getMonth()==birthday.getMonth() && d.getDate()<birthday.getDate())?1:0);
	return age;
}


function initSelect(activeId,dActiveId,url,fun){
	 $("#"+activeId).change(function(){
	    $("#"+dActiveId).empty();
	    $("#"+dActiveId).append("<option value=''>---请选择---</option>");
	   
   	$.get(url+$(this).val(), function(data){
   		var obj = eval(data);
   		
			for(var i=0;i<obj.length;i++){
   				var values = obj[i];
   				 $("#"+dActiveId).append("<option value='"+values.id+"'>"+values.text+"</option>");
   			}

		});
	  });
}


$.extend($.fn.validatebox.defaults.rules, {
    phoneAndMobile : {// 电话号码或手机号码  
        validator : function(value) {  
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value) || /^(13|15|18)\d{9}$/i.test(value);  
        },  
        message : '电话号码或手机号码格式不正确'  
    }
	
});

