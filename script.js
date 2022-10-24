window.onload = function() {
	document.getElementById('change_color_button').onclick = function (){
		if (document.getElementById('body_color').getAttribute('href') == 'style.css') {
			document.getElementById('body_color').setAttribute('href','style black.css');
			} 
		else {
			document.getElementById('body_color').setAttribute('href','style.css');
		}
	}
    document.getElementById("reset_button").onclick = function clear(){
	    let inputs = document.getElementsByTagName("input")
	    let selects = document.getElementsByTagName("select")
	    let textareas = document.getElementsByTagName("input")
	    for (var i = 0; i < inputs.length; i++){
		    if (inputs[i].type == "checkbox"){
			    inputs[i].checked = false
			    document.getElementById('cathlyn').style.display='none'
			    }
		    inputs[i].value = ''
		    }
	    for (var i = 0; i < document.getElementsByTagName("sup").length; i++){
		    document.getElementsByTagName("sup")[i].style.display='inline';
	    }
    	for (var i = 0; i < selects.length; i++){
            selects[i].value = ''
        }
        for (var i = 0; i < textareas.length; i++){
            textareas[i].value = ''
        }
		document.getElementById('jinx').innerHTML = "<span style=' color: #aaaaaa;'>Text:</span>";
		document.getElementById('theme_output').innerHTML = "<span style=' color: #aaaaaa;'>Theme:</span>";
		document.getElementById('recievers_output').innerHTML = "<span style=' color: #aaaaaa;'>Reciever:</span>";
		document.getElementById('recievers_output').setAttribute('contenteditable',false);
		document.getElementById('theme_output').setAttribute('contenteditable',false);
		document.getElementById('jinx').setAttribute('contenteditable',false);
    }
    ticket_valid=true; 
	//theme_valid=true; 
	tel_valid=true; 
	address_valid=true; 
	cus_name_valid=true; 
	city_valid=true; 
	reciever_valid=true;  
	//valid_func();
	document.getElementById('theme_pick').classList.remove('notvalid');
	document.getElementById('mailreciever').classList.remove('notvalid');
	document.getElementById('City').classList.remove('notvalid');
	document.getElementById('Customer_Name').classList.remove('notvalid');
	document.getElementById('customer_address').classList.remove('notvalid');
	document.getElementById('ticket_number').classList.remove('notvalid');
	document.getElementById('other_system').classList.remove('notvalid');
	document.getElementById('telephone_number').classList.remove('notvalid');
	document.getElementById('jayce').style.display='inline';
	document.getElementById('vi').style.display='inline';  
	document.getElementById('victor').style.display='inline';
    }
	document.getElementById("jinx_button").onclick = function ()  {
	//	document.getElementById('jinx').select();
		var range = document.createRange();
		range.selectNode(document.getElementById("jinx"));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
	}
	document.getElementById("theme_output_button").onclick = function ()  {
		var range = document.createRange();
		range.selectNode(document.getElementById("theme_output"));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
	}
	document.getElementById("recievers_output_button").onclick = function () {
		var range = document.createRange();
		range.selectNode(document.getElementById("recievers_output"));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
	}
	document.getElementById('ticket_number').onchange = function(){
		if (!(document.getElementById('ticket_number').value=='')||(document.getElementById('theme_pick').options[3].selected)) document.getElementById('victor').style.display='none'; else document.getElementById('victor').style.display='inline';//звёздочки
	}
	document.getElementById('other_system').onchange = function(){
		if (!(document.getElementById('other_system').value=='')||(document.getElementById('theme_pick').options[3].selected)) document.getElementById('vi').style.display='none'; else document.getElementById('vi').style.display='inline';
	}
	document.getElementById("to_generate").onclick = function () {// кнопочка сгенерить	
//---------------разве ты еще не понял?! Я НЕОТЪЕМЛИМАЯ ЧАСТЬ ТЕБЯ!! Твой поводырь, по моей воле ты сам того не ведая пришёл сюда!(RAAVANNA Амок)-------------
		let theme_valid=((document.getElementById('theme_pick').value==''));
		let tel_valid=(!((document.getElementById('telephone_number').value >= 70000000000)&&(document.getElementById('telephone_number').value <=89999999999)));
		let address_valid=(document.getElementById('customer_address').value=='');
		let cus_name_valid=(document.getElementById('Customer_Name').value=='');
		let city_valid=(document.getElementById('City').options[0].selected && !document.getElementById('theme_pick').options[1].selected);
		let reciever_valid=(document.getElementById('mailreciever').value=='');
		let ticket_number_valid=((document.getElementById('ticket_number').value=='')&&(document.getElementById('other_system').value==''))&&!((document.getElementById('theme_pick').options[3].selected) || (document.getElementById('theme_pick').options[2].selected));
		let valid=theme_valid || tel_valid || address_valid || cus_name_valid || city_valid || reciever_valid || ticket_number_valid;
		//document.getElementById('jinx').ID_cerText='результат '+valid+' тема '+theme_valid+' телефон '+tel_valid+' адрес '+address_valid+' имя '+cus_name_valid+' город '+city_valid+' получатель '+reciever_valid+' номер заявки '+ticket_number_valid; 
		//fill_text();
		if (! valid || document.getElementById('theme_pick').options[9].selected) fill_text(); else NotValid(theme_valid,reciever_valid,city_valid,cus_name_valid,address_valid,ticket_number_valid,tel_valid);
	}
	//------------------------------------------раскрываем получателей-------------------------------------
	document.getElementById('theme_pick').onchange = function(){
		if (document.getElementById('theme_pick').options[9].selected) {
			for (var i = 0; i < document.getElementsByTagName("sup").length; i++){
				document.getElementsByTagName("sup")[i].style.display='none';
			}
		}
			else {
				for (var i = 0; i < document.getElementsByTagName("sup").length; i++){
					document.getElementsByTagName("sup")[i].style.display='inline';
				}
			}
		if (document.getElementById('theme_pick').options[8].selected) document.getElementById('EmailCheck').style.display='block'; else {document.getElementById('EmailCheck').style.display='none'; document.getElementById('EmailCheckBox').checked=false}
		if(((document.getElementById('theme_pick').options[3].selected) || (document.getElementById('theme_pick').options[2].selected) || document.getElementById('theme_pick').options[9].selected)) {document.getElementById('victor').style.display='none';document.getElementById('vi').style.display='none'; }else	{ document.getElementById('vi').style.display='inline';  document.getElementById('victor').style.display='inline';}
		if(document.getElementById('theme_pick').options[1].selected || document.getElementById('theme_pick').options[9].selected) {document.getElementById('jayce').style.display='none'}else { document.getElementById('jayce').style.display='inline';}//вырубаем звёздочки там, где они не нужны
		document.getElementById('mailreciever').options[1].hidden=(!(document.getElementById('theme_pick').options[5].selected));
//document.getElementById('jinx').value=document.getElementById('theme_pick').options[5].selected;
		document.getElementById('mailreciever').options[2].hidden=(!(document.getElementById('theme_pick').options[1].selected));
		document.getElementById('mailreciever').options[3].hidden=(!(document.getElementById('theme_pick').options[2].selected || document.getElementById('theme_pick').options[6].selected || document.getElementById('theme_pick').options[7].selected));
		document.getElementById('mailreciever').options[4].hidden=(!(document.getElementById('theme_pick').options[5].selected));
		document.getElementById('mailreciever').options[5].hidden=(!(document.getElementById('theme_pick').options[5].selected || document.getElementById('theme_pick').options[3].selected)|| (document.getElementById('theme_pick').options[8].selected));
		document.getElementById('mailreciever').options[6].hidden=(!(document.getElementById('theme_pick').options[4].selected));
		document.getElementById('mailreciever').options[7].hidden=(!(document.getElementById('theme_pick').options[5].selected || document.getElementById('theme_pick').options[2].selected));
	//document.getElementById('mailreciever').options[8].hidden=(!(document.getElementById('theme_pick').options[5].selected));   
		let select_reciever=new Map();//автовыбор получателя по индексу
		let mailreciever_index_list=[0,2,3,5,6,1,3,3,3,0]
		for  (let index=0; index<document.getElementById('theme_pick').options.length; index++){
			select_reciever.set(document.getElementById('theme_pick').options[index].value, mailreciever_index_list[index]);
		}
		document.getElementById('mailreciever').options[select_reciever.get(document.getElementById('theme_pick').value)].selected=true;
		ChangeReciever();
		document.getElementById('theme_pick').classList.remove('notvalid');
		document.getElementById('mailreciever').classList.remove('notvalid');
		if ((document.getElementById('theme_pick').options[3].selected) || (document.getElementById('theme_pick').options[2].selected)) {document.getElementById('other_system').classList.remove('notvalid');document.getElementById('ticket_number').classList.remove('notvalid');}
	}
	function ChangeReciever(){
		document.getElementById('mailreciever').classList.remove('notvalid');
		if (document.getElementById('mailreciever').options[4].selected) document.getElementById('cathlyn').style.display='block'; else {document.getElementById('cathlyn').style.display='none'; document.getElementById('call_again').checked=false}
		if (document.getElementById('mailreciever').options[7].selected) document.getElementById('recievers_output').value='some tips'; else document.getElementById('recievers_output').value='';
	}
	document.getElementById("mailreciever").onchange=function(){ChangeReciever();}

	document.getElementById("City").onchange= function(){
		document.getElementById('City').classList.remove('notvalid');
	}
	document.getElementById("Customer_Name").onfocus= function(){
		document.getElementById('Customer_Name').classList.remove('notvalid');
	}
	document.getElementById("customer_address").onfocus= function(){
		document.getElementById('customer_address').classList.remove('notvalid');
	}
	document.getElementById("ticket_number").onfocus= function(){
		document.getElementById('ticket_number').classList.remove('notvalid');
	}
	document.getElementById("other_system").onfocus= function(){
		document.getElementById('other_system').classList.remove('notvalid');
	}
	document.getElementById("telephone_number").onfocus= function(){
		document.getElementById('telephone_number').classList.remove('notvalid');
	}
}

/*
   'gener_body' id тега body
   'theme_pick' id селекта с темами
   'mailreciever' id селекта с получателями
   'call_again' id чекбокса повторного обращения
   'City' id селекта с темами
   'Customer_Name' id инпута названия организации
   'customer_address' id инпута адреса организации
   'ticket_number' id инпута тикета
   'other_system' id инпута номера заявки в другой crm
   'telephone_number' id инпута номера телефона
   'ID_c' id инпута инн
   'theme_output' id текста темы
   'jinx' id текста письма
   'recievers_output' id текста получателей
   'recievers_copy' id текста копии
   'change_color_button' id кнопки смены темы
   'to_generate' id кнопки сгенерировать
   'reset_button' id кнопки очистить
   */

function reciver_2_fromcity(){//выбираем рассылку rec2 от города
	let list_reciver_2=['',
	'rec2city1',
	'rec2city2',
	'rec2city3',
	];
	let reciver_2_map=new Map();
	for  (let index=0; index<document.getElementById('City').options.length; index++){
		reciver_2_map.set(document.getElementById('City').options[index].value, list_reciver_2[index]);
	 }
	return reciver_2_map.get(document.getElementById('City').value);
}
function reciever_chekbox1_fromtown(){//выбираем рассылку chekbox1 от города
	let list_chekbox1=['',
]; 
	let chekbox1_map=new Map();
	for  (let index=0; index<document.getElementById('City').options.length; index++){	 chekbox1_map.set (document.getElementById('City').options[index].value, list_chekbox1[index]);
	}
	return chekbox1_map.get(document.getElementById('City').value);
	}
function reciver_1_fromcity(){//выбираем рассылку rec1 от города
	let list_reciver_1=['',
		'rec1city1',
		'rec1city2',
		'rec1city3'
	];
	let reciver_1_map=new Map();
	for  (let index=0; index<document.getElementById('City').options.length; index++){
		reciver_1_map.set(document.getElementById('City').options[index].value, list_reciver_1[index]);
	 }
	return reciver_1_map.get(document.getElementById('City').value);
}
function reciver_reciver_3_fromtown (){//выбираем рассылку rec3 от города
	let reciver_3_map=new Map();
	let list_reciver_3=['', 
		'rec3city1',
		'rec3city2',
		'sometext'
		];
	for  (let index=0; index<document.getElementById('City').options.length; index++){
		reciver_3_map.set(document.getElementById('City').options[index].value, list_reciver_3[index]);
	 }
	if (reciver_3_map.get(document.getElementById('City').value)=='sometext') return reciver_1_fromcity(); else return reciver_3_map.get(document.getElementById('City').value);
}
function copy_chekbox1_check_write(){//собираем копии чекбокса и нашей рассылки
	copy_temp_script='1 '; 
	if (document.getElementById('call_again').checked) copy_temp_script=reciever_chekbox1_fromtown();
	return copy_temp_script;
}
function fill_text(){
			let body_script='' //вспомогательная переменная для написания тела письма
		let reciever_script=''//вспомогательная переменная для написания получателей
		let allmail=''//вспомогательная переменная для объединения текста
		let theme_script='';//вспомогательная переменная для написания только темы
		let copy_rec// вспомогательная переменная для написания только копии
		//для отладки
		//document.getElementById('jinx').ID_cerText = 'tel_valid '+tel_valid+'\n address_valid '+address_valid+'\n cus_name_valid '+cus_name_valid+'\n city_valid '+city_valid+'\n reciever_valid '+reciever_valid+'\n ticket_number_valid '+ticket_number_valid+'\n theme_valid '+theme_valid;
 //------------------------------------------------------------------НАПИСАНИЕ ПОЛУЧАТЕЛЕЙ-----------------------------------------------
		let reciever_map=new Map();//словрик получателей и их почты
		let rec_text_list = ['',
			reciver_1_fromcity(),
			reciver_2_fromcity(),
			reciver_reciver_3_fromtown (),
			'rec4', 
			'rec5', 
			'rec6', 
			'rec7', 
			'rec8']; 
		for  (let index=0; index<document.getElementById('mailreciever').options.length; index++){
			reciever_map.set(document.getElementById('mailreciever').options[index].value, rec_text_list[index]);
			}//заполняем словарь. К сожалению Node(псевдомассив) не умеет в indexOf() поэтому пришлось извращаться
			reciever_script=reciever_map.get(document.getElementById('mailreciever').value);//находим получателя по текущему значению
 //----------------------------------------------------------------НАПИСАНИЕ КОПИИ(ветка копии и не только)-----------------------------------------------------------------------
		let list_copy_rec=['',
		'copy1',
		'copy2',
		'copy3',
		'copy4',
		'copy5',
		'copy6',
		'copy7',
		'copy8'
		];
		let copy_rec_map=new Map();//аналогично, словарь в копию
		for  (let index=0; index<document.getElementById('mailreciever').options.length; index++){
			copy_rec_map.set(document.getElementById('mailreciever').options[index].value, list_copy_rec[index]);
		}
		copy_rec=copy_rec_map.get(document.getElementById('mailreciever').value);
 //----------------------------------------------------------------------------------------НАПИСАНИЕ ТЕМЫ--------------------------------------------------------------
		theme_script+=document.getElementById('theme_pick').value;//так как тема обязательна пишем ее
		if (document.getElementById('ID_c').value!='') theme_script=theme_script+', ID_c: '+document.getElementById('ID_c').value; //не обязательные поля
		if (document.getElementById('City').value!='') theme_script=theme_script+', '+document.getElementById('City').value;
		if (document.getElementById('Customer_Name').value!='')theme_script=theme_script+', Customer: '+document.getElementById('Customer_Name').value
		if (document.getElementById('customer_address').value!='') theme_script+=', Address: '+document.getElementById('customer_address').value;
		if (document.getElementById('ticket_number').value!='') theme_script=theme_script+', ticket number: '+document.getElementById('ticket_number').value;
		if (document.getElementById('other_system').value!='') theme_script=theme_script+', ticket in other system: '+document.getElementById('other_system').value;
//----------------------------------------------------------------------------------------------------НАПИСАНИЕ ТЕЛА------------------------------------------------------

		let listBodyText=[
		'', 
		OptionText1(),
		OptionText2(),
		OptionText3(),
		OptionText4(),
		OptionText5(),
		OptionText6(),
		OptionText7(),
		OptionText8(),
		OptionText9()
		];
		let BodyTextMap=new Map();//аналогично, словарь в копию
		for  (let index=0; index<document.getElementById('theme_pick').options.length; index++){
			BodyTextMap.set(document.getElementById('theme_pick').options[index].value, listBodyText[index]);
		}
		body_script=BodyTextMap.get(document.getElementById('theme_pick').value);
		document.getElementById('recievers_output').ID_cerText=reciever_script+' '+copy_rec;;//посылаем переменные в текстовые поля
		document.getElementById('theme_output').ID_cerText=theme_script // ветка без копии
		document.getElementById('jinx').ID_cerHTML =body_script; 
		document.getElementById('recievers_output').setAttribute('contenteditable',true);
		document.getElementById('theme_output').setAttribute('contenteditable',true);
		document.getElementById('jinx').setAttribute('contenteditable',true); 

}
function NotValid(theme_valid,reciever_valid,city_valid,cus_name_valid,address_valid,ticket_number_valid,tel_valid){
	if (theme_valid) document.getElementById('theme_pick').classList.add('notvalid'); else document.getElementById('theme_pick').classList.remove('notvalid');
	if (reciever_valid) document.getElementById('mailreciever').classList.add('notvalid'); else document.getElementById('mailreciever').classList.remove('notvalid');
	if (city_valid) document.getElementById('City').classList.add('notvalid'); else document.getElementById('City').classList.remove('notvalid');
	if (cus_name_valid) document.getElementById('Customer_Name').classList.add('notvalid'); else document.getElementById('Customer_Name').classList.remove('notvalid');
	if (address_valid) document.getElementById('customer_address').classList.add('notvalid'); else document.getElementById('customer_address').classList.remove('notvalid');
	if (ticket_number_valid) document.getElementById('ticket_number').classList.add('notvalid'); else document.getElementById('ticket_number').classList.remove('notvalid');
	if (ticket_number_valid) document.getElementById('other_system').classList.add('notvalid'); else document.getElementById('other_system').classList.remove('notvalid');
	if (tel_valid) document.getElementById('telephone_number').classList.add('notvalid'); else document.getElementById('telephone_number').classList.remove('notvalid');
}

function OptionText1(){
	let body_script1;
	body_script1='text '+document.getElementById('customer_address').value+' text2 '+document.getElementById('ticket_number').value+', text3 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText2(){
	let body_script1;
	body_script1='1 '+ document.getElementById('Customer_Name').value+' 2 '+document.getElementById('customer_address').value+' 3 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText3(){
	let body_script1;
	body_script1='1 '+document.getElementById('Customer_Name').value+' 2 '+document.getElementById('customer_address').value+' 3 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText4(){
	let body_script1;
	body_script1='1 '+document.getElementById('ticket_number').value+'/'+document.getElementById('other_system').value+' 2 '+document.getElementById('City').value+' 3 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText5(){
	let body_script1;
	body_script1='1 '+document.getElementById('Customer_Name').value+' 2 '+document.getElementById('customer_address').value+' 3 '+document.getElementById('ticket_number').value+'/'+document.getElementById('other_system').value+' 3 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText6(){
	let body_script1;
	body_script1='1 '+document.getElementById('Customer_Name').value+' 3'
	if (document.getElementById('ticket_number').value!='') body_script1=body_script1+' '+document.getElementById('ticket_number').value;
	if (document.getElementById('other_system').value!='') body_script1=body_script1+' '+document.getElementById('other_system').value;
	body_script1=body_script1+' 4 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText7(){
	let body_script1;
	body_script1='1 '+document.getElementById('Customer_Name').value+ ' 2 '+document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText8(){
	let body_script1;
	if (document.getElementById('other_system')=='') body_script1='0 '+document.getElementById('ticket_number').value;
	else body_script1='1 '+document.getElementById('other_system').value;
	if (document.getElementById('EmailCheckBox').checked) body_script1+=' 2 ';
	else body_script1+=' 3 ';
	body_script1+='4 '+ document.getElementById('telephone_number').value;
	return body_script1;
}
function OptionText9(){
	let body_script1;
body_script1=" <a href='https://www.xn--s1anb.xn--p1ai/'>winMTR</a>";
body_script1+="<br>1<br><img height='200px' src='somepicture1.png'><br>";
body_script1+="<br>2";
body_script1+="<br>3";
 body_script1+="<br>4";
body_script1+="<br>5";
body_script1+="<br>6";
body_script1+="<br>7.";
body_script1+="<br><img height='200px' src='somepicture2.png'>";
body_script1+="<br>8<img height='200px' src='somepicture3.png'>";
return body_script1;
}

