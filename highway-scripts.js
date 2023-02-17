function characterCountAppender(field){
    
    $('#dform_widget_' + field).parent().append('<div class=character-count aria-live=polite id=characterCounter' + field + '></div>');
    characterCounter(field);
    
}

function characterCounter(field){
    
    var string = KDF.getVal(field);
    var stringLength = string.length;
    var idConcat = 'characterCounter' + field;
    document.getElementById(idConcat).innerHTML=document.getElementById("dform_widget_"+ field).maxLength - stringLength + ' characters remaining';
    
}

function setRouting(route,locator,reporter){
    
    KDF.setVal('route',route);
    KDF.setVal('locator',locator);
    KDF.hideSection('area_request_type');
    KDF.hideSection('area_mapsearch');
    KDF.hideSection('area_propsearch');
    KDF.hideSection('area_no_address');
    
	if (locator === 'Address'){
        KDF.showSection('area_propsearch');
        if (route === 'Information'){
            KDF.showSection('area_request_type');
            KDF.showSection('area_no_address');
        }
    } else {
        KDF.showSection('area_mapsearch');
    }
    
    KDF.setVal('txt_mandatory',reporter)
    checkAnonymous();
    
}

function submitFormHighways(){
    
    if (KDF.getVal('le_object_type') === 'organisation') {
        KDF.setVal('le_associated_obj_type', 'C2');
    } else {
        KDF.setVal('le_associated_obj_type', 'C1');
    }
    
    if (KDF.getVal('level_1_data')){
        if (KDF.getVal('route') === 'Information'){
            setCaseTitle('Information request about ');
        } else {
            setCaseTitle('Report about ');
        }
        
    	if (KDF.getVal('txt_agentteam') === 'backoffice@crm.com'
    	|| KDF.getVal('txt_agentteam') === 'firstpoint@crm.com'
    	|| KDF.getVal('txt_agentteam') === 'admin@crm.com'){
    		KDF.setVal('txt_channel', 'EMAI');
    		KDF.setVal('txt_receivedby', 'CSC');
    	} else {
    		if (KDF.getVal('route') === 'Information'){
    			KDF.setVal('txt_channel', 'WTCF');
    			KDF.setVal('txt_receivedby', 'CSC');
    		} else {
    			KDF.setVal('txt_channel', 'TELE');
    			KDF.setVal('txt_receivedby', 'CSC');
    		}
    	}
    
        function setCaseTitle(le_title){
            
            KDF.setVal('le_title',le_title + KDF.getVal('level_1_data'));
            if (KDF.getVal('level_2_data')){
                KDF.setVal('le_title', KDF.getVal('le_title') + ' - ' + KDF.getVal('level_2_data'));
                if (KDF.getVal('level_3_data')){
                    KDF.setVal('le_title', KDF.getVal('le_title') + ' - ' + KDF.getVal('level_3_data'));
                }
            }
            
        }
        
        if (KDF.getVal('rad_road_traffic_incident') === 'RTI - Water/Ice Present'
        || KDF.getVal('rad_road_traffic_incident') === 'RTI - Water/Ice Not Present'){
            KDF.setVal('txta_report_details',KDF.getVal('txta_report_details') + ' - ' + KDF.getVal('rad_road_traffic_incident'));
        }
    
        KDF.setVal('faultinfo', KDF.getVal('le_title') + ' - ' + KDF.getVal('txta_report_details'));
        KDF.setVal('locinfo', KDF.getVal('site_name') + ' - ' + KDF.getVal('txta_location_details'));

        KDF.custom('kdf-save-crm','_submit_function','le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type,le_associated_obj_id,le_form_name,service_code,subject_code,txt_organisation,txt_title,txt_firstname,txt_surname,txt_dob,txt_phone,txt_email,level_1_data,level_2_data,level_3_data,txt_streetdescription,txt_usrn,txt_streetid,txt_fulladdress,txt_uprn,txt_propertyid,txt_postcodearea,txta_report_details,txta_location_details,txt_agentteam,sel_requesttype,txt_channel,locinfo,faultinfo,txt_receivedby,doctitle,docpath,txt_customertype,secondcustomer,linkedcaseid,asset_type,asset_type_id,central_asset_id,asset_responsibility,object_id,txt_prestige,longitude_x,latitude_y,site_name,site_code,empref,confirmenq,confirmjobid,gis_map,gis_map_lat,gis_map_lon,locator,file_upload,route,rad_bridge_type,rad_wall_retaining,txt_bridge_name_plate','le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type,le_associated_obj_id,le_form_name,service_code,subject_code',true,true,true);
    } else {
        KDF.showError('Oops, something has gone wrong. Please restart and try again.');
    }
}

function resolveEnquiry(le_eventcode,le_queue,le_title,le_description){
    
	KDF.setVal('le_eventcode',le_eventcode);
	KDF.setVal('le_queue',le_queue);
	KDF.setVal('le_title',le_title);
	KDF.setVal('le_description',le_description);
	KDF.custom('kdf-save-general-enquiry', '_but_resolve_enquiry', 'le_channel, le_title, le_description, le_queue, le_eventcode, le_associated_obj_type, le_associated_obj_id', 'le_channel, le_title, le_description, le_queue, le_eventcode, le_associated_obj_type, le_associated_obj_id', true, true, true);

}

function searchUserID(){
    
    if (KDF.getVal('txt_userid') === '' || KDF.getVal('txt_agentteam') ===''){
        KDF.custom('look-up-user-details', 'searchUserID_Function', '', '', true, true, true);
    }
    
}

function routeSearches(){

    if (KDF.getVal('txt_searchtype').substring(0,8) == 'Property'){
        if (KDF.getVal('txt_propertyid') === ''){
            KDF.gotoPage('page_property_search',false,true,true);
        } else {
            KDF.gotoPage('page_customer_search',false,true,true);
        }
    }
    
}

function checkForID(){
    
    if (($(location).attr("hostname").substring(6, 8) === 'de' && KDF.getVal('le_associated_obj_id') === '101000612659')
        || ($(location).attr("hostname").substring(6, 8) === 'qa' && KDF.getVal('le_associated_obj_id') === '101000000791')
        || ($(location).attr("hostname").substring(6, 8) === 'sh' && KDF.getVal('le_associated_obj_id') === '101000000791')){
            checkAnonymous();
    } else {
        if (KDF.getVal('txt_customerid') !== ''){
            KDF.hideSection('area_searchtype');
            $('.individual').show();
            $('.searchRecord').hide();
            updateObject();
        } else if (KDF.getVal('txt_organisationid') !== ''){
            KDF.hideSection('area_searchtype');
            $('.organisation').show();
            $('.searchRecord').hide();
            updateObject();
        } else {
            checkAnonymous();
        }
    }
    
}

function checkAnonymous(){
    
    if (KDF.getVal('txt_mandatory').toLowerCase() === 'optional'){
        KDF.showWidget('but_continue_anonymous');
        KDF.showWidget('ahtm_anon_submit');
        KDF.showWidget('but_submit_anonymously_page_about_the_location');
        KDF.showWidget('ahtm_anonymouse_submit_warning_page_about_the_location');
        KDF.showWidget('but_submit_anonymously_page_about_you');
        KDF.showWidget('ahtm_anonymouse_submit_warning_page_about_you');
    } else {
        KDF.hideWidget('but_continue_anonymous');
        KDF.hideWidget('ahtm_anon_submit');
        KDF.hideWidget('but_submit_anonymously_page_about_the_location');
        KDF.hideWidget('ahtm_anonymouse_submit_warning_page_about_the_location');
        KDF.hideWidget('but_submit_anonymously_page_about_you');
        KDF.hideWidget('ahtm_anonymouse_submit_warning_page_about_you');
    }
    
}

function setAnonymous(){
    
    resetSearch();
    
    if ($(location).attr("hostname").substring(6, 8) === 'de'){
	    KDF.setVal('le_reporter_obj_id','101000612659');
	}
    if ($(location).attr("hostname").substring(6, 8) === 'qa'){
        KDF.setVal('le_reporter_obj_id','101000000791');
    }
    if ($(location).attr("hostname").substring(6, 8) === 'sh'){
        KDF.setVal('le_reporter_obj_id','101001971935');
    }
    
    continueWithEnquiry('form');
    
}

function setAnonymousHighways(){
    
	resetSearch();
	
    if ($(location).attr("hostname").substring(6, 8) === 'de'){
        KDF.setVal('le_associated_obj_id','101000612659');
    }
    if ($(location).attr("hostname").substring(6, 8) === 'qa'){
        KDF.setVal('le_associated_obj_id','101000000791');
    }
    if ($(location).attr("hostname").substring(6, 8) === 'sh'){
        KDF.setVal('le_associated_obj_id','101001971935');
    }
    
    setBriefDetails();
    
    submitFormHighways();
    
}

function setBriefDetails(){
    
    const customer_information = document.querySelectorAll('.customer_information');
    var x = document.getElementsByClassName("customer_information");
    for (var i = 0; i < x.length; i++)
	if (KDF.getVal('txt_organisationid') === '' && KDF.getVal('txt_customerid') === '' && KDF.getVal('le_associated_obj_id') === '')
		x[i].innerHTML = '<p/><b><font size="4" color="#096">Customer Details:</font></b> ' + 'Details have not been set.<p/>';
    else {
        if (($(location).attr("hostname").substring(6, 8) === 'de' && (KDF.getVal('le_associated_obj_id') === '101000612659' || KDF.getVal('txt_customerid') === '101000612659'))
            || ($(location).attr("hostname").substring(6, 8) === 'qa' && (KDF.getVal('le_associated_obj_id') === '101000000791' || KDF.getVal('txt_customerid') === '101000000791'))
            || ($(location).attr("hostname").substring(6, 8) === 'sh' && (KDF.getVal('le_associated_obj_id') === '101001971935' || KDF.getVal('txt_customerid') === '101001971935'))){
            x[i].innerHTML = '<b><font size="4" color="#096">Reporter Details:</font></b> ' + 'Reporter Wishes to Remain Anonymous';
        } else {
			if (KDF.getVal('txt_organisationid') !== ''){
				x[i].innerHTML = '<p/><b><font size="4" color="#096">Organisation Details:</font></b> <b>Organisation: </b>' + KDF.getVal('txt_firstname') + ' - <b>Address:</b> ' + KDF.getVal('txt_cusaddressnumber') + ', ' + KDF.getVal('txt_cusaddressline1') + ', ' + KDF.getVal('txt_custown') + ', ' + KDF.getVal('txt_cuspostcode') + ' - <b>Phone Number:</b> ' + KDF.getVal('txt_phone') + ' - <b>Email Address: </b>' + KDF.getVal('txt_email') + '<p/>';
			} else if (KDF.getVal('txt_customerid') !== ''){
				x[i].innerHTML = '<p/><b><font size="4" color="#096">Individual Details:</font></b> <b>Name: </b>' + KDF.getVal('txt_title') + ' ' + KDF.getVal('txt_firstname') + ' ' + KDF.getVal('txt_surname') + ' - <b>Address:</b> ' + KDF.getVal('txt_cusaddressnumber') + ', ' + KDF.getVal('txt_cusaddressline1') + ', ' + KDF.getVal('txt_custown') + ', ' + KDF.getVal('txt_cuspostcode') + ' - <b>Phone Number:</b> ' + KDF.getVal('txt_phone') + ' - <b>Email Address: </b>' + KDF.getVal('txt_email') + '<p/>';
			}
		}
	}
}

function capitalisation(field){
	if (KDF.getVal(field)){
		str = KDF.getVal(field);
		var splitStr = str.toLowerCase().split(' ');
		for (var i = 0; i < splitStr.length; i++){
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		KDF.setVal(field, splitStr.join(' '));
	}
}

function searchObjectType(le_object_type){
    
    KDF.setVal('le_object_type',le_object_type);
    
    if (le_object_type === 'organisation'){
        $('.organisation').show();
        KDF.hideWidget('but_organisation_search');
        $('.individual').hide();
        KDF.showWidget('but_individual_search');
        KDF.setVal('search_forename','');
        KDF.setVal('search_surname','');
        KDF.setVal('search_dob','');
    } else {
        $('.organisation').hide();
        KDF.showWidget('but_organisation_search');
        $('.individual').show();
        KDF.hideWidget('but_individual_search');
        KDF.setVal('search_organisation_name','');
    }
}

function resetSearch(){
    
    $('.searchRecord').show();
    $('.anonymousRecord').hide();
    $('.updateRecord').hide();
    $('.housingHubScrean').hide();
    
    searchObjectType('individual');

    KDF.setVal('search_forename','');
    KDF.setVal('search_surname','');
    KDF.setVal('search_dob','');
    KDF.setVal('search_organisation_name','');
    KDF.setVal('search_phone_number','');
    KDF.setVal('search_email_address','');
    KDF.setVal('search_number','');
    KDF.setVal('search_street_name','');
    KDF.setVal('search_postcode','');
    
    KDF.setVal('object_search_result','');
    KDF.hideSection('area_clickcomment');
	KDF.hideSection('area_search_results');
    KDF.hideSection('area_object_not_found');
    
    KDF.setVal('txt_fullname','');
    KDF.setVal('txt_title','');
    KDF.setVal('txt_firstname','');
    KDF.setVal('txt_surname','');
    KDF.setVal('txt_dob','');
    KDF.setVal('txt_organisation','');
    KDF.setVal('txt_phone','');
    KDF.setVal('txt_email','');
    KDF.setVal('lookup_postcode','');
    
    KDF.hideWidget('ahtm_fulladdress');
    
    KDF.setVal('address_search_result','');
    
    KDF.setVal('txt_cusfulladdress','');
    KDF.setVal('txt_cusaddressnumber','');
    KDF.setVal('txt_cusaddressline1','');
    KDF.setVal('txt_cusaddressline2','');
    KDF.setVal('txt_custown','');
    KDF.setVal('txt_cuspostcode','');
    
    KDF.setVal('txt_customerid','');
    KDF.setVal('txt_organisationid','');
    KDF.setVal('txt_nameid','');
    KDF.setVal('txt_phoneid','');
    KDF.setVal('txt_emailid','');
    KDF.setVal('txt_cusaddressid','');
    
    KDF.setVal('txt_cusuprn','');
    KDF.setVal('txt_cususrn','');
    
    KDF.setVal('txt_personpin','');
    KDF.setVal('txt_customercode','');
    KDF.setVal('txt_cusohmsuprn','');
    
    KDF.setVal('txt_click','0');
    KDF.setVal('txt_clickpostcode','0');
    KDF.setVal('txt_restartsearch','0');
    
    KDF.hideSection('area_clickcomment');
    KDF.hideSection('area_search_results');
    KDF.hideWidget('ahtm_HUBpersonnotes');
    KDF.hideSection('area_hubupdates');
    KDF.hideSection('area_createcustomer');
    KDF.hideSection('area_createfields');
    KDF.hideSection('area_address_clickcomment');
    KDF.hideSection('area_address_search_result');
    KDF.hideSection('area_address_not_found');
    KDF.hideSection('area_address_fields');
    KDF.hideSection('area_object_not_found');
    KDF.hideWidget('but_contact_history');

    checkAnonymous();
    setBriefDetails();
    
}

function searchObject(){
    
    if ((KDF.getVal('search_forename') === '' || KDF.getVal('search_forename') === null || KDF.getVal('search_forename') === undefined)
        && (KDF.getVal('search_surname') === '' || KDF.getVal('search_surname') === null || KDF.getVal('search_surname') === undefined)
        && (KDF.getVal('search_dob') === '' || KDF.getVal('search_dob') === null || KDF.getVal('search_dob') === undefined)
        && (KDF.getVal('search_organisation_name') === '' || KDF.getVal('search_organisation_name') === null || KDF.getVal('search_organisation_name') === undefined)
        && (KDF.getVal('search_phone') === '' || KDF.getVal('search_phone') === null || KDF.getVal('search_phone') === undefined)
        && (KDF.getVal('search_email') === '' || KDF.getVal('search_email') === null || KDF.getVal('search_email') === undefined)
        && (KDF.getVal('search_number') === '' || KDF.getVal('search_number') === null || KDF.getVal('search_number') === undefined)
        && (KDF.getVal('search_street_name') === '' || KDF.getVal('search_street_name') === null || KDF.getVal('search_street_name') === undefined)
        && (KDF.getVal('search_postcode') === '' || KDF.getVal('search_postcode') === null || KDF.getVal('search_postcode') === undefined)){
        KDF.showWarning('Please enter search information');
    } else {
        KDF.custom('search-object', '_but_search_object', 'le_object_type,search_forename,search_surname,search_dob,search_organisation_name,search_phone,search_email,search_number,search_street_name,search_postcode', 'le_object_type', true, true, true);
    }
    
}

function createObject(){
    
	KDF.hideWidget('but_individual_search');
	KDF.hideWidget('but_organisation_search');
	
	KDF.setVal('ahtm_create_update_record','<h4>Create Record</h4>');
	$('.searchRecord').hide();
	$('.anonymousRecord').hide();
	$('.updateRecord').show();
	$('.housingHubScrean').hide();
	KDF.setVal('txt_customer_action','Create');
	KDF.hideWidget('but_contact_history');
	
	KDF.setVal('object_search_result','');
    KDF.hideSection('area_clickcomment');
	KDF.hideSection('area_search_results');
    KDF.hideSection('area_object_not_found');

    KDF.setVal('txt_fullname','');
    KDF.setVal('txt_title','');
    KDF.setVal('txt_firstname',KDF.getVal('search_forename'));
    KDF.setVal('txt_surname',KDF.getVal('search_surname'));
    KDF.setVal('txt_dob',KDF.getVal('search_dob'));
    KDF.setVal('txt_organisation',KDF.getVal('search_organisation_name'));
    KDF.setVal('txt_phone',KDF.getVal('search_phone_number'));
    KDF.setVal('txt_email',KDF.getVal('search_email_address'));
    KDF.setVal('lookup_postcode','');
    
    KDF.hideWidget('ahtm_fulladdress');
    
    KDF.setVal('address_search_result','');
    
    KDF.setVal('txt_cusfulladdress','');
    KDF.setVal('txt_cusaddressnumber',KDF.getVal('search_number'));
    KDF.setVal('txt_cusaddressline1',KDF.getVal('search_street_name'));
    KDF.setVal('txt_cusaddressline2','');
    KDF.setVal('txt_custown','');
    KDF.setVal('txt_cuspostcode',KDF.getVal('search_postcode'));
    
    KDF.setVal('txt_customerid','');
    KDF.setVal('txt_organisationid','');
    KDF.setVal('txt_nameid','');
    KDF.setVal('txt_phoneid','');
    KDF.setVal('txt_emailid','');
    KDF.setVal('txt_addressid','');
    
    KDF.setVal('txt_cusuprn','');
    KDF.setVal('txt_cususrn','');
    
    KDF.setVal('txt_personpin','');
    KDF.setVal('txt_customercode','');
    KDF.setVal('txt_cusohmsuprn','');
    
    setBriefDetails();
    
}

function searchAddress(){
    
    if (KDF.getVal('lookup_postcode') === ''){
        KDF.showWarning('Please enter a postcode');
    } else {
        KDF.custom('search-address', '_but_search_address', 'lookup_postcode', 'lookup_postcode', true, true, true);
    }

}

function createAddress(){
    
    KDF.hideSection('area_address_clickcomment');
	KDF.hideSection('area_address_search_result');
	KDF.hideSection('area_address_not_found');
	KDF.showSection('area_address_fields');
	
	KDF.setVal('txt_cusfulladdress','');
    KDF.setVal('txt_cusaddressnumber','');
    KDF.setVal('txt_cusaddressline1','');
    KDF.setVal('txt_cusaddressline2','');
    KDF.setVal('txt_custown','');
    KDF.setVal('txt_cuspostcode','');
	
}

function updateObject(){

    setBriefDetails();
	
	KDF.hideWidget('but_individual_search');
	KDF.hideWidget('but_organisation_search');
	
	$('.housingHubScrean').hide();
	$('.anonymousRecord').hide();
	$('.updateRecord').hide();
	
	if (KDF.getVal('txt_personpin') !== '' && KDF.getVal('txt_agentteam') === "housing@crm.com"){
		$('.housingHubScrean').show();
		$('.updateRecord').hide();
		let hubperson = KDF.getVal('txt_personpin');
		let agentId = KDF.getVal('txt_userid');
		let hublink = 'https://forms-qa-sheffieldcc.squiz.cloud/CRMHousing/default.asp?screenId=personDetails&crmAgentId=' + agentId + '&hmsPersonId=' + hubperson + '&refreshParam=<xref1>&dummy=<!2!/CurrentTime/Time!>';
		let hublink2 = 'https://forms-qa-sheffieldcc.squiz.cloud/CRMHousing/default.asp?screenId=GLO8&entityType=PERSON&eventCategory=PERSONNOTES&entityId1=' + hubperson + '&crmAgentId=' + agentId + '&refreshParam=<xref1>&dummy=<!2!/CurrentTime/Time!>';

		var ifrm1 = document.createElement('iframe');
		ifrm1.setAttribute('id', 'ifrm1');
		ifrm1.setAttribute('width', '100%');
		ifrm1.setAttribute('height', '500');
		ifrm1.setAttribute('src', hublink);

		var ifrm2 = document.createElement('iframe');
		ifrm2.setAttribute('id', 'ifrm2');
		ifrm2.setAttribute('width', '100%');
		ifrm2.setAttribute('height', '250');
		ifrm2.setAttribute('src', hublink2);
		KDF.setVal('ahtm_HUBupdate', ifrm1);

		KDF.setVal('ahtm_HUBpersonnotes', ifrm2);
	} else {
        if ($(location).attr("hostname").substring(6, 8) === 'de' && KDF.getVal('txt_customerid') === '101000612659'){
    	    $('.anonymousRecord').show();
    	} else if ($(location).attr("hostname").substring(6, 8) === 'qa' && KDF.getVal('txt_customerid') === '101000000791'){
            $('.anonymousRecord').show();
        } else if ($(location).attr("hostname").substring(6, 8) === 'sh' && KDF.getVal('txt_customerid') === '101001971935'){
            $('.anonymousRecord').show();
        } else {
    		$('.housingHubScrean').hide();
    		KDF.setVal('ahtm_create_update_record','<h4>Customer Record</h4>');
    		$('.updateRecord').show();
    		KDF.showWidget('ahtm_fulladdress');
	    }
	}
	
	showWarningMessages();
	
	KDF.setVal('txt_customer_action','Update');
	KDF.showWidget('but_contact_history');
	KDF.hideWidget('but_continue_anonymous');
	KDF.hideWidget('ahtm_anon_submit');
	
	setBriefDetails();
	
}

function searchProperty(){
    
    if (KDF.getVal('search_property_number') === ''
        && KDF.getVal('search_property_street') === ''
        && KDF.getVal('search_property_postcode') === ''){
        KDF.showWarning('Please enter search information');
    } else {
        KDF.custom('search-property', '_but_search_address', 'search_property_number,search_property_street,search_property_postcode', '', true, true, true);
    }
    
}

function createProperty(){
    
	KDF.hideSection('area_property_clickcomment');
    KDF.hideSection('area_property_searchresults');
    KDF.hideSection('area_selected_property');
    KDF.hideSection('area_property_not_found');
    KDF.showSection('area_property_fields');
    
    KDF.setVal('txt_fulladdress','');
    KDF.setVal('txt_addressnumber','');
    KDF.setVal('txt_addressline1','');
    KDF.setVal('txt_addressline2','');
    KDF.setVal('txt_town','');
    KDF.setVal('txt_postcode','');
    
}

function objectCreateUpdate(route){
    
    KDF.setVal('txt_route',route);
    if (KDF.getVal('le_object_type') === 'organisation'){
        if (KDF.getVal('txt_organisation') === ''){
            KDF.showWarning('Please ensure all required fields are complete');
        } else {
            KDF.custom('create-organisation', '_but_continue_with_enquir', 'txt_organisation,txt_phone,txt_email,txt_cusaddressnumber,txt_cusaddressline1,txt_cusaddressline2,txt_custown,txt_cuspostcode,txt_cusuprn', 'txt_organisation', true, true, true);
        }
    } else {
       if ((KDF.getVal('txt_firstname') === '' || KDF.getVal('txt_firstname') === null || KDF.getVal('txt_firstname') === undefined)
        || (KDF.getVal('txt_surname') === '' || KDF.getVal('txt_surname') === null || KDF.getVal('txt_surname') === undefined)
        || (KDF.getVal('txt_dob') === '' || KDF.getVal('txt_dob') === null || KDF.getVal('txt_dob') === undefined)){
            KDF.showWarning('Please ensure all required fields are complete');
        } else {
            KDF.custom('create-individual', '_but_continue_with_enquir', 'txt_title,txt_firstname,txt_surname,txt_dob,txt_phone,txt_email,txt_cusaddressnumber,txt_cusaddressline1,txt_cusaddressline2,txt_custown,txt_cuspostcode,txt_cusuprn', 'txt_firstname,txt_surname,txt_dob', true, true, true);
        }
    }
    
}

function continueWithEnquiry(){
    
    if (KDF.getVal('txt_route') === 'Contact History'){
        gotoContactHistory();
    } else {
        if (KDF.getVal('txt_searchtype') === "CustomerProperty"){
		    KDF.gotoPage('page_property_search',true,true,true);
		} else {
			progressToForm();
		}
    }
    
}

function gotoContactHistory(){
    
    if (KDF.getVal('le_object_type') === 'organisation'){
	    contactHistory(KDF.getVal('txt_organisationid'));
	} else {
	    contactHistory(KDF.getVal('txt_customerid'));
	}
}

function continueWithEnquiryProperty(){
    
    setFullAddress();
    if (KDF.getVal('txt_addressline1') === ''
        || KDF.getVal('txt_town') === ''
        || KDF.getVal('txt_postcode') === ''){
        KDF.showWarning('Please ensure all required fields are complete');
    } else {
        if (KDF.getVal('txt_searchtype') === "PropertyCustomer"){
		    KDF.gotoPage('page_customer_search',true,true,true);
		} else {
			progressToForm();
		}
    }
    
}

function progressToForm(){
    
	agentparamsfunction(); 
	customerparamsfunction();
	propertyparamsfunction();
	window.location = ('https://forms-qa-sheffieldcc.squiz.cloud/form/launch/' + KDF.getVal('txt_expectedform') + '?' + 'txt_expectedpage=' + KDF.getVal('txt_expectedpage') + '&txt_mandatory=' + KDF.getVal('txt_mandatory') + '&txt_searchtype=' + KDF.getVal('txt_searchtype') + agentparams + customerparams + propertyparams);
    
}

function returnToForm(){
    
    if (KDF.getVal('txt_searchtype') === "PropertyCustomer" && KDF.getVal('txt_currentpage') === "page_customer_search"){
        KDF.gotoPage('page_property_search',false,true,true);
    } else if (KDF.getVal('txt_searchtype') === "CustomerProperty" && KDF.getVal('txt_currentpage') === "page_property_search"){
        KDF.gotoPage('page_customer_search',false,true,true);
    } else {
        agentparamsfunction(); 
        customerparamsfunction();
        window.location = ('https://forms-qa-sheffieldcc.squiz.cloud/form/launch/' + KDF.getVal('txt_previousform') + '?' + 'txt_previouspage=' + KDF.getVal('txt_previouspage') + agentparams + customerparams);
    }
    
}

function showWarningMessages(){
    
    if (KDF.getVal('txt_customerid') == '101002172126'){
	    alert("Please do not give out any personal details until the customer has passed all data protection and confirmed the password '9vesagerose7'. Please note the customer has recently moved to 18 Longley Hall Road");
	}
    
}

function showFaxingInfomration(){
    
    if (KDF.getVal('txt_agentteam') === "housing@crm.com"){
		KDF.showSection('area_ahtmcallingtransfer');
	} else {
		KDF.hideSection('area_ahtmcallingtransfer');
	}
	
}

function setFullAddress(){
    
    if (KDF.getVal('txt_fulladdress') === ''){
        KDF.setVal('txt_fulladdress',KDF.getVal('txt_addressnumber') + ' ' + KDF.getVal('txt_addressline1') + ', ' + KDF.getVal('txt_town') + ', ' + KDF.getVal('txt_postcode'))
    }
    
}

function propertyparamsfunction(){
	var propertyidfield = "&txt_propertyid=";
	var propertyidvalue = KDF.getVal('txt_propertyid');
	var addressidfield = "&txt_addressid=";
	var addressidvalue = KDF.getVal('txt_addressid');
	var fulladdressfield = "&txt_fulladdress=";
	var fulladdressvalue = KDF.getVal('txt_fulladdress');
	var addressnumberfield = "&txt_addressnumber=";
	var addressnumbervalue = KDF.getVal('txt_addressnumber');
	var addressline1field = "&txt_addressline1=";
	var addressline1value = KDF.getVal('txt_addressline1');
	var addressline2field = "&txt_addressline2=";
	var addressline2value = KDF.getVal('txt_addressline2');
	var addressline3field = "&txt_addressline3=";
	var addressline3value = KDF.getVal('txt_addressline3');
	var addressline4field = "&txt_addressline4=";
	var addressline4value = KDF.getVal('txt_addressline4');
	var addressline5field = "&txt_addressline5=";
	var addressline5value = KDF.getVal('txt_addressline5');
	var addressline6field = "&txt_addressline6=";
	var addressline6value = KDF.getVal('txt_addressline6');
	var townfield = "&txt_town=";
	var townvalue = KDF.getVal('txt_town');
	var postcodefield = "&txt_postcode=";
	var postcodevalue = KDF.getVal('txt_postcode');
	var postcodeareafield = "&txt_postcodearea=";
	var postcodeareavalue = KDF.getVal('txt_postcodearea');
	var uprnfield = "&txt_uprn=";
	var uprnvalue = KDF.getVal('txt_uprn');
	var ohmsuprnfield = "&txt_ohmsuprn=";
	var ohmsuprnvalue = KDF.getVal('txt_ohmsuprn');
	var nbofield = "&txt_nbo=";
	var nbovalue = KDF.getVal('txt_nbo');
	var nbocontactfield = "&txt_nbocontact=";
	var nbocontactvalue = KDF.getVal('txt_nbocontact');
	var mgntareacodfield = "&txt_mgntareacode=";
	var mgntareacodvalue = KDF.getVal('txt_mgntareacode');
	var propertyclassfield = "&txt_propertyclass=";
	var propertyclassvalue = KDF.getVal('txt_propertyclass');
	var propertytypfield = "&txt_propertytype=";
	var propertytypvalue = KDF.getVal('txt_propertytype');
	var longitudefield = "&longitude_x=";
	var longitudevalue = KDF.getVal('longitude_x');
	var latitudefield = "&latitude_y=";
	var latitudevalue = KDF.getVal('latitude_y');
	var propertyparamsfunction = (propertyidfield + propertyidvalue + addressidfield + addressidvalue + fulladdressfield + fulladdressvalue + addressnumberfield + addressnumbervalue + addressline1field + addressline1value + addressline2field + addressline2value + addressline3field + addressline3value + addressline4field + addressline4value + addressline5field + addressline5value + addressline6field + addressline6value + townfield + townvalue + postcodefield + postcodevalue + postcodeareafield + postcodeareavalue + uprnfield + uprnvalue + ohmsuprnfield + ohmsuprnvalue + nbofield + nbovalue + nbocontactfield + nbocontactvalue + propertyclassfield + propertytypvalue + longitudefield + longitudevalue + latitudefield + latitudevalue);
	return propertyparams = propertyparamsfunction;
}

function contactHistory(historyID){
    
	showHistoryButtons();
	KDF.setVal('txt_view_history_of', historyID);
	KDF.custom('contact-history-table', 'function_contactHistory', 'txt_view_history_of,txt_chreferencefilter,sel_chstatusfilter,sel_chtitlefilter', 'txt_view_history_of,txt_chreferencefilter,sel_chstatusfilter,sel_chtitlefilter', true, true, true);

}

function showHistoryButtons(){
    
	KDF.showWidget('but_history_switch_to_person');
	KDF.showWidget('but_history_switch_to_property');
	KDF.showWidget('but_history_switch_to_street');
	if (KDF.getVal('txt_customerid') === ''
	    && KDF.getVal('txt_organisationid') === ''){
		KDF.hideWidget('but_history_switch_to_person');
	}
	if (KDF.getVal('txt_propertyid') === ''){
		KDF.hideWidget('but_history_switch_to_property');
	}
	if (KDF.getVal('txt_streetid') === ''){
		KDF.hideWidget('but_history_switch_to_street');
	}
	
}

function setChannelType(){
	if (['housing@crm.com','housingsolutionsgeneric@sheffield.gov.uk','neighbourhoods+burngreave&shiregreen@sheffield.gov.uk','neighbouhood+city&west@sheffield.gov.uk','neighbourhoods+east@sheffield.gov.uk','neighbourhoods+firthppark&southey@sheffield.gov.uk','neighbourhoods+north@sheffield.gov.uk','salaih.zahir@sheffield.gov.uk','homesarease@sheffield.gov.uk','hrmcustomerservices@sheffield.gov.uk'].includes(KDF.getVal('txt_agentteam'))){
		if (['Burngreave','Crystal Peaks','Darnall','Firth Park','Chapeltown','Hillsborough','Howden House Firstpoint','Manor Library','Jordanthorpe','Low Edges','Newfield Green','Stocksbridge','Wordsworth Avenue','The Sheffield Property Shop'].includes(KDF.getVal('txt_agentlocation'))){
			KDF.setVal('le_channel', 'face_to_face');
		} else {
		    KDF.setVal('le_channel', 'voice_in');
		}
	} else if (KDF.getVal('txt_agentteam') === 'admin@crm.com' || KDF.getVal('txt_agentteam') === 'utt@sheffield.gov.uk'){
		if (['Burngreave','Crystal Peaks','Darnall','Firth Park','Chapeltown','Hillsborough','Howden House Firstpoint','Manor Library','Jordanthorpe','Low Edges','Newfield Green','Stocksbridge','Wordsworth Avenue','The Sheffield Property Shop'].includes(KDF.getVal('txt_agentlocation'))){
			KDF.setVal('le_channel', 'face_to_face');
		} else {
			KDF.setVal('le_channel', 'voice_in');
		}
	} else if (KDF.getVal('txt_agentteam') === 'backoffice@crm.com'){
		KDF.setVal('le_channel', 'email_in');
	} else if (KDF.getVal('txt_agentteam') === 'firstpoint@crm.com'){
		KDF.setVal('le_channel', 'face_to_face');
	} else {
		KDF.setVal('le_channel', 'voice_in');
	}
}

function formReady(event,kdf){
    
	//searchUserID();
	
	accordion();
	
	routeSearches();
	
	checkForID();
	
	setTimeDate();
	
	setChannelType();
	
	setBriefDetails();
	
	showFaxingInfomration();
	
    $('.returnbutt').click(function() {
        if (KDF.getVal('txt_agentlocation') === 'Howden House Firstpoint' || KDF.getVal('txt_agentlocation') === 'The Sheffield Property Shop') {
            KDF.setVal('txt_branch', 'firstpoint');
            allParamsFormJump('a_menu', 'firstpoint');
        } else if(['Burngreave','Burngreave - Telephone','Crystal Peaks', 'Crystal Peaks - Telephone', 'Darnall', 'Darnall - Telephone', 'Firth Park','Firth Park - Telephone', 'Chapeltown', 'Chapeltown - Telephone', 'Hillsborough', 'Hillsborough - Telephone', 'Manor Library', 'Manor Library - Telephone', 'Jordanthorpe', 'Jordanthorpe - Telephone', 'Low Edges', 'Low Edges - Telephone', 'Newfield Green', 'Newfield Green - Telephone', 'Stocksbridge', 'Stocksbridge - Telephone', 'Wordsworth Avenue', 'Wordsworth Avenue - Telephone'].includes(KDF.getVal('txt_agentlocation'))) {
            KDF.setVal('txt_branch', 'page_hsgipmenu');
            allParamsFormJump('hsg_menu', 'page_hsgipmenu');
        } else if (KDF.getVal('le_channel') === 'voice_in'
        && KDF.getVal('txt_agentlocation') === 'Contact Centre') {
            allParamsFormJump('hsg_menu','page_hsgccmenu');
        } else {
            allParamsFormJump('a_menu', 'page_corpccmenu'); 
        }
    });
	
	$('#dform_widget_button_but_individual_search').click(function(){
	    searchObjectType('individual');
	});
	
	$('#dform_widget_button_but_organisation_search').click(function(){
	    searchObjectType('organisation');
	});
	
	$('#dform_widget_button_but_reset_search').click(function(){
		resetSearch();
	});
	
	$('#dform_widget_button_but_search_object').click(function(){
	    searchObject();
	});
	
	$('#dform_widget_object_search_results').change(function(){
    	if (KDF.getVal('object_search_results') !== ''){
	        if (KDF.getVal('le_object_type') === 'organisation'){
	            KDF.custom('retrieve-organisation', '_object_search_results', 'object_search_results', 'object_search_results', true, true, true);
	        } else {
	            KDF.custom('retrieve-individual', '_object_search_results', 'object_search_results', 'object_search_results', true, true, true);
	        }
	    } else {
	        KDF.showWarning('Please ensure a record is selected');
	    }
	});
	
	$('#dform_widget_button_but_search_address').click(function(){
	    searchAddress();
	});
	
    $('#dform_widget_address_search_results').change(function(){
	    if (KDF.getVal('address_search_results') !== ''){
	       KDF.custom('retrieve-address', '_address_search_results', 'address_search_results', 'address_search_results', true, true, true);
	    } else {
	        KDF.showWarning('Please ensure an address is selected');
	    }
	});
	
	$('#dform_widget_button_but_address_not_found').click(function(){
		createAddress();
	});
	
	$('#dform_widget_button_but_object_not_found').click(function(){
        createObject();
	});
	
	$('#dform_widget_button_but_previous_search_object').click(function(){
        returnToForm();
	});
	
	$('#dform_widget_button_but_continue_with_enquiry').click(function(){
        objectCreateUpdate('form');
	});
	
	$('#dform_widget_button_but_continue_anonymous').click(function(){
		setAnonymous();
	});
	
	$('#dform_widget_button_but_contact_history').click(function(){
		objectCreateUpdate('Contact History');
	});
	
	$('#dform_widget_button_but_search_property').click(function(){
	    searchProperty();
	});
	
	$('#dform_widget_button_but_property_not_found').click(function(){
		createProperty();
	});
	
	$('#dform_widget_button_but_previous_search_property').click(function(){
        returnToForm();
	});
	
	$('#dform_widget_property_search_result').change(function(){
	    if (KDF.getVal('property_search_result') !== ''){
	       KDF.custom('retrieve-property', '_property_search_result', 'property_search_result', 'property_search_result', true, true, true)
	    } else {
	        KDF.showWarning('Please ensure a property is selected');
	    }
	});
	
	$('#dform_widget_button_but_continue_with_enquiry_property').click(function(){
		continueWithEnquiryProperty();
	});
	
	$('#dform_widget_button_but_contact_history_property').click(function(){
		setFullAddress();
		contactHistory(KDF.getVal('txt_propertyid'));
	});
	
	$('#dform_widget_button_but_previous_contact_history').click(function(){
		
	});
	
	$('#dform_widget_button_but_history_switch_to_object').click(function(){
		if (KDF.getVal('le_object_type') === 'organisation'){
		    contactHistory(KDF.getVal('txt_organisationid'));
		} else {
		    contactHistory(KDF.getVal('txt_customerid'));
		}
	});

	$('#dform_widget_button_but_history_switch_to_property').click(function(){
		contactHistory(KDF.getVal('txt_propertyid'));
	});

	$('#dform_widget_button_but_history_switch_to_street').click(function(){
		contactHistory(KDF.getVal('txt_streetid'));
	});
	
    $('#dform_widget_button_but_finish_interaction').click(function(event){
    	autoCloseCase();
    	finishInteraction();
    });
    
    $('#dform_widget_button_but_additional_enquiry').click(function(event){
    	autoCloseCase();
	    if (KDF.getVal('txt_agentlocation') === 'Howden House Firstpoint'
	        || KDF.getVal('txt_agentlocation') === 'The Sheffield Property Shop') {
			KDF.setVal('txt_branch', 'firstpoint');
			allParamsFormJump('a_menu', 'firstpoint');
		} else if(['Burngreave','Burngreave - Telephone','Crystal Peaks', 'Crystal Peaks - Telephone', 'Darnall', 'Darnall - Telephone', 'Firth Park','Firth Park - Telephone', 'Chapeltown', 'Chapeltown - Telephone', 'Hillsborough', 'Hillsborough - Telephone', 'Manor Library', 'Manor Library - Telephone', 'Jordanthorpe', 'Jordanthorpe - Telephone', 'Low Edges', 'Low Edges - Telephone', 'Newfield Green', 'Newfield Green - Telephone', 'Stocksbridge', 'Stocksbridge - Telephone', 'Wordsworth Avenue', 'Wordsworth Avenue - Telephone'].includes(KDF.getVal('txt_agentlocation'))) {
			KDF.setVal('txt_branch', 'page_hsgipmenu');
			allParamsFormJump('hsg_menu', 'page_hsgipmenu');
		} else if (KDF.getVal('le_channel') === 'voice_in' && KDF.getVal('txt_agentlocation') === 'Contact Centre') {
			allParamsFormJump('hsg_menu','page_hsgccmenu');
		} else {
			allParamsFormJump('a_menu');
		}
	});
}

function pageChange(event,kdf,currentpageid,targetpageid){
	
	$('div[data-type="page"][data-pos="' + targetpageid + '"]').each(function()
	{
		let search_currentpage = this.id.slice(11);
		KDF.setVal('txt_currentpage', search_currentpage);
	});
}

function mapReady(map,marker){
    
    mapParams.map = map;
    vmap = new VMap(mapParams);
    var mapExtentChange = map.on("extent-change", extentChanged);

    drawAssetLayer(marker);
    
}

function mapClicked(map,marker){
    
    mapParams.map = map;

    clearMapData();

    if (KDF.getVal('txt_agentteam') === '07000000004'){
        queryGMSitesHousing(marker);
    } else {
        queryLayer(marker);
    }
    
}

function customAction(action,response){
    
	KDF.hideMessages();
	
	if (action === 'search-object'){
        var clicks = KDF.getVal('txt_click');
		clicks++;
		
		KDF.setVal('txt_click', clicks);
		KDF.hideSection('area_clickcomment');
		KDF.hideSection('area_search_results');
		
		if (response.data.object_search_results.length === 0){
			KDF.showSection('area_clickcomment');
			if (clicks == 1){
				KDF.setVal('ahtm_clickcomment', '<h4 id="NoCustomer">Unable to find customer, please confirm details and try again.</h4>');
			} else if (clicks >= 2){
				KDF.setVal('ahtm_clickcomment', '<h4 id="NoCustomer">No customers found, please create customer.</h4>');
				KDF.showSection('area_object_not_found');
			}
		} else {
			KDF.showSection('area_search_results');
			if (clicks >= 2){
				KDF.showSection('area_object_not_found');
			}
		}
    }
    
    if (action === 'retrieve-individual' || action === 'retrieve-organisation'){
        updateObject();
    }

    if (action === 'search-address'){
        var clicks = KDF.getVal('txt_clickpostcode');
		clicks++;
		
		KDF.setVal('txt_clickpostcode', clicks);
		KDF.hideSection('area_address_clickcomment');
		KDF.hideSection('area_address_search_result');
		
		if (response.data.address_search_results.length === 0){
			KDF.showSection('area_address_clickcomment');
			if (clicks == 1){
				KDF.setVal('ahtm_address_clickcomment', '<h4 id="NoCustomer">Unable to find customer, please confirm details and try again.</h4>');
			} else if (clicks >= 2){
				KDF.setVal('ahtm_address_clickcomment', '<h4 id="NoCustomer">No customers found, please create customer.</h4>');
				KDF.showSection('area_address_not_found');
			}
		} else {
			KDF.showSection('area_address_search_result');
			if (clicks >= 2){
				KDF.showSection('area_address_not_found');
			}
		}
    }

    if (action === 'retrieve-address'){
        capitalisation("txt_cusfulladdress");
        KDF.setVal('txt_cusfulladdress',KDF.getVal('txt_cusfulladdress').slice(0, -7) + KDF.getVal('txt_cusfulladdress').substr(-7).toUpperCase());
        KDF.hideSection('area_address_clickcomment');
        KDF.hideSection('area_address_search_result');
        KDF.hideSection('area_address_fields');
        KDF.hideSection('area_address_not_found');
        KDF.showWidget('ahtm_fulladdress');
    }

	if (action === 'search-property'){
	    var propclick = KDF.getVal('txt_propclick');
		propclick++;
		
		KDF.setVal('txt_propclick', propclick);
		KDF.hideSection('area_property_clickcomment');
		KDF.hideSection('area_property_searchresults');
		KDF.hideSection('area_selected_property');
		KDF.hideSection('area_property_not_found');
		KDF.hideSection('area_property_fields');
		
		if (response.data.property_search_result.length === 0){
			KDF.showSection('area_property_clickcomment');
			if (propclick == 1){
				KDF.setVal('ahtm_property_clickcomment', '<h3 id="NoProperty">Unable to find address, please confirm details and try again.</h3>');
			}
			if (propclick >= 2){
				KDF.setVal('ahtm_property_clickcomment', '<h3 id="NoProperty">Property not found, type it in manually and contact the admin team so they can update the property database.</h3>');
				if (KDF.getVal('txt_agentteam') !== "housing@crm.com"){
				    KDF.showSection('area_property_not_found');
				}
			}
			nopropertysearchfocus.scrollIntoView(true);
		} else {
			KDF.showSection('area_property_searchresults');
			if (propclick >= 2){
				if (KDF.getVal('txt_agentteam') !== "housing@crm.com"){
				    KDF.showSection('area_property_not_found');
				}
			}
		}
	}
	
	if (action === 'retrieve-property'){
	    capitalisation("txt_fulladdress");
	    KDF.setVal('txt_fulladdress',KDF.getVal('txt_fulladdress').slice(0, -7) + KDF.getVal('txt_fulladdress').substr(-7).toUpperCase());
	    capitalisation("site_name");
	    KDF.setVal('site_name',KDF.getVal('site_name').slice(0, -7) + KDF.getVal('site_name').substr(-7).toUpperCase());
        KDF.hideSection('area_property_clickcomment');
        KDF.hideSection('area_property_searchresults');
        KDF.showSection('area_selected_property');
        KDF.hideSection('area_property_not_found');
        KDF.hideSection('area_property_fields');
    }
    
    if (action === 'create-individual' || action === 'update-individual' || action === 'create-organisation' || action === 'update-organisation'){
        KDF.hideSection('area_searchtype');
        $('.searchRecord').hide();
        KDF.hideSection('area_clickcomment');
	    KDF.hideSection('area_search_results');
	    KDF.hideSection('');
	    KDF.hideSection('area_address_clickcomment');
        KDF.hideSection('area_address_not_found');
        continueWithEnquiry();
    }
    
    if (action === 'contact-history-table'){
        KDF.gotoPage('page_contact_history',true,true,true);
    }
	
	if (action === 'kdf-save-crm' || action === 'kdf-save-general-enquiry'){
		KDF.showPage('page_confirmation');
        KDF.gotoPage('page_confirmation',false,false,false);
    }
    
}

function customError(action){
    
    KDF.showError('Error: ' + action + ' has failed to run. Try it again. If this error persists, report it via the ServiceNow portal.');
    
}

var vmap;
var mapParams ={
    WKID: 27700, // Map Spatial reference
    assetMaxDrawZoom: 17, //zoom level from which to trigger drawing feature layer
    assetClick:{
        radius: 3,
        radiusUnit: "esriMeters"
    }, //default query circle geometry properties
    hostUrl: "https://" + $(location).attr("hostname")
    //hostUrl: "https://forms-sheffieldcc.squiz.cloud"
};

var featureLayers = {
    //Start: Bourday Line
        boundary: {id:0, url:"/usrsvcs/servers/97cfdc3a164c48219826b907c0a5064f/rest/services/AGOL/Boundaries/MapServer"},
    //Finish: Bourday Line
    
    //Start: LLPG
        //LLPG: {id:0, url:"/usrsvcs/servers/af62c54a431540369ce04b70ea3cf51a/rest/services/LLPGCascade/CASCADE/GeocodeServer"},
        //https://utility.arcgis.com/usrsvcs/servers/af62c54a431540369ce04b70ea3cf51a/rest/services/LLPGCascade/CASCADE/GeocodeServer
    //Finish: LLPG
    
    //Start: Highways Feature Layers
        signs: {id:0, url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        trafficsignals: {id:41, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        drains: {id:2, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        gritbins: {id:3, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        litterbins: {id:4, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        streetfurniture: {id:5, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        streetlights: {id:6, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        structures: {id:7, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        fences: {id:8, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        // pavements: {id:9, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        pavements: {id: 57, url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        // roads: {id:12, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        roads: {id: 55, url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},

        //Start: Cleaning Layers
            citycentre: {id:14, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
            hotspotasspss: {id:15, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
            hotspotschools: {id:16, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
            principalshopsite: {id:17, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
            neighbourhoodshopsite: {id:18, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
            gateway: {id:19, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
            prowflytipping: {id:23, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        //Finish: Cleaning Layers
        
        vegetation: {id:24, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        trees: {id:27, url:"/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
    //Finish: Highways Feature Layers
    
    //Start: Other Feature Layers
        adoptedhighways: {id:4, url:"/usrsvcs/servers/f5c0484e329e41188ea83b3f7076f75f/rest/services/Portal/Highways_Internal/MapServer"},
        parks: {id: 49, url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer"},
        openfaults: {id:11, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        otherdesignatedland: {id:21, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        nonadoptedgm: {id:22, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        gmsites: {id:29, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        shmisc: {id:30, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        ptleases: {id:43, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
        ptholdings: {id:34, url:"/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer"},
    //Finish: Other Feature Layers

    url(layer) 
    {
        // return vmap.getMapParams().hostUrl + layer.url;
        return layer.url;
    },
    getQueryLayer(layer) 
    {
        return {url: this.url(layer) + '/' + layer.id, wkid: layer.wkid};
    }
};

var queriesComplete = 0;
var queryCount = 0;
var retrievedFeatures = [];

function clearMapData(){
    KDF.setVal("object_id", "");
    KDF.setVal("longitude_x", "");
    KDF.setVal("latitude_y", "");
    KDF.setVal("asset_type", "");
    KDF.setVal("asset_type_id", "");
    KDF.setVal("central_asset_id", "");
    KDF.setVal("asset_responsibility", "");
    KDF.setVal("site_name", "");
    KDF.setVal("txt_streetdescription", "");
    KDF.setVal("site_code", "");
    KDF.setVal("txt_usrn", "");
    KDF.setVal("txt_prestige", "");
    
    KDF.showWidget('but_next_page_about_the_location');
	KDF.showWidget('but_submit_anonymously_page_about_the_location');
	KDF.hideWidget('but_resolve_enquiry_page_about_the_location');
}

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(reverseGEOCode);
        KDF.hideMessages();
    } else {
        KDF.showWarning('Geolocation is not supported by this browser.');
    }
}

function reverseGEOCode(position){
    KDF.setVal('lnglat',position.coords.longitude+','+position.coords.latitude);
    KDF.custom('web_reverse_geocoding', 'function_reverseGEOCode', 'lnglat', 'lnglat', true, true, true);
}
    
function showPosition(position){
    require(["esri/geometry/Point", "esri/tasks/GeometryService", "esri/tasks/ProjectParameters", "esri/SpatialReference", "dojo/domReady!"],
        function(Point, GeometryService, ProjectParameters, SpatialReference){
            var outSR = "27700";
            var geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
            var inputpoint = new Point({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            });
            
            var projectParams = new ProjectParameters();
            projectParams.geometries = [inputpoint];
            projectParams.outSR = new SpatialReference({
                wkid: outSR
            });

            geometryService.project(projectParams, (result) =>{
                let outputpoint = result[0];
                KDF.setVal('latitude_y', outputpoint.y);
                KDF.setVal('longitude_x', outputpoint.x);
                KDF.setVal('gis_map_lat', outputpoint.y);
                KDF.setVal('gis_map_lon', outputpoint.x);
                setLocator('Current Location');
            });
        });
}

function extentChanged(evt){
    vmap.zoomLevelChanged(evt, zoomChanged);
}

function zoomChanged(evt){
    setClickRadius(evt.lod.level);
    if (vmap.getMapParams().assetMaxDrawZoom){
        if (evt.lod.level >= vmap.getMapParams().assetMaxDrawZoom){
            drawLayer(evt);
        }
    } else{
        removeLayer(evt);
        if (evt.lod.level >= 6){
            drawLayer(evt);
        }
    }
}

function drawLayer(evt){

    if (KDF.getVal('level_1_data') === 'Gulley'){
        drawDrains();
    }
    if (KDF.getVal('level_1_data') === 'Fence' ||
        KDF.getVal('level_1_data') === 'Handrail' ||
        KDF.getVal('level_1_data') === 'Pedestrian Barrier' ||
        KDF.getVal('level_1_data') === 'Vehicle Barrier/Safety Fence'){
        drawFences();
    }
    if (KDF.getVal('level_1_data') === 'Grit Bin'){
        drawGritBins();
    }
    if (KDF.getVal('level_1_data') === 'Litter Bin'){
        drawLitterBins();
    }
    if (KDF.getVal('level_1_data') === 'Cameras / Electronic Signs' ||
        KDF.getVal('level_1_data') === 'Illuminated Road Signs' ||
        KDF.getVal('level_1_data') === 'Lit Bollard' ||
        KDF.getVal('level_1_data') === 'Non-Illuminated Road Signs' ||
        KDF.getVal('level_1_data') === 'Street Name Plates'){
        drawSigns();
    }
    if (KDF.getVal('level_1_data') === 'Art or Sculpture' ||
        KDF.getVal('level_1_data') === 'Bollard' ||
        KDF.getVal('level_1_data') === 'Cycle Barrier' ||
        KDF.getVal('level_1_data') === 'Cycle Stand' ||
        KDF.getVal('level_1_data') === 'Seat or Bench' ||
        KDF.getVal('level_1_data') === 'Tree or Branch'){
        drawStreetFurniture();
    }
    if (KDF.getVal('level_1_data') === 'Street Light'){
        drawStreetLights();
    }
    if (KDF.getVal('level_1_data') === 'Bridge' ||
        KDF.getVal('level_1_data') === 'Culvert' ||
        KDF.getVal('level_1_data') === 'Earth Bank / Cutting' ||
        KDF.getVal('level_1_data') === 'Gantry' ||
        KDF.getVal('level_1_data') === 'Retaining Wall' ||
        KDF.getVal('level_1_data') === 'Subway'){
        drawStructures();
    }
    if (KDF.getVal('level_1_data') === 'Traffic Signals'){
        drawTrafficSignals();
    }
    if (KDF.getVal('level_1_data') === 'Tree or Branch' ||
        KDF.getVal('level_1_data') === 'Tree Grille'){
        drawTrees();
    }
    if (KDF.getVal('level_1_data') === 'Box Planter' ||
        KDF.getVal('level_1_data') === 'Grass Verge' ||
        KDF.getVal('level_1_data') === 'Hedge' ||
        KDF.getVal('level_1_data') === 'Plants or Planted Area'){
        drawVegetation();
    }
}

function drawAssetLayer(marker){
    drawBoundary();
    drawPROWFlyTippingLayer();

    if (KDF.getVal('latitude_y') !== '' && KDF.getVal('longitude_x') !== ''){
        vmap.getMapParams().assetClick.radius = 21;
        queryLayer(marker);
    }
    else
   {
        vmap.getMapParams().assetClick.radius = 3;
    }

    if (KDF.getVal('level_1_data') === 'Gulley'){
        drawDrains();
    }
    if (KDF.getVal('level_1_data') === 'Fence' ||
        KDF.getVal('level_1_data') === 'Handrail' ||
        KDF.getVal('level_1_data') === 'Pedestrian Barrier' ||
        KDF.getVal('level_1_data') === 'Vehicle Barrier/Safety Fence'){
        drawFences();
    }
    if (KDF.getVal('level_1_data') === 'Grit Bin'){
        drawGritBins();
    }
    if (KDF.getVal('level_1_data') === 'Litter Bin'){
        drawLitterBins();
    }
    if (KDF.getVal('level_1_data') === 'Cameras / Electronic Signs' ||
        KDF.getVal('level_1_data') === 'Illuminated Road Signs' ||
        KDF.getVal('level_1_data') === 'Lit Bollard' ||
        KDF.getVal('level_1_data') === 'Non-Illuminated Road Signs' ||
        KDF.getVal('level_1_data') === 'Street Name Plates'){
        drawSigns();
    }
    if (KDF.getVal('level_1_data') === 'Art or Sculpture' ||
        KDF.getVal('level_1_data') === 'Bollard' ||
        KDF.getVal('level_1_data') === 'Cycle Barrier' ||
        KDF.getVal('level_1_data') === 'Cycle Stand' ||
        KDF.getVal('level_1_data') === 'Seat or Bench' ||
        KDF.getVal('level_1_data') === 'Tree or Branch'){
        drawStreetFurniture();
    }
    if (KDF.getVal('level_1_data') === 'Street Light'){
        drawStreetLights();
    }
    if (KDF.getVal('level_1_data') === 'Bridge' ||
        KDF.getVal('level_1_data') === 'Culvert' ||
        KDF.getVal('level_1_data') === 'Earth Bank / Cutting' ||
        KDF.getVal('level_1_data') === 'Gantry' ||
        KDF.getVal('level_1_data') === 'Retaining Wall' ||
        KDF.getVal('level_1_data') === 'Subway'){
        drawStructures();
    }
    if (KDF.getVal('level_1_data') === 'Traffic Signals'){
        drawTrafficSignals();
    }
    if (KDF.getVal('level_1_data') === 'Tree or Branch' ||
        KDF.getVal('level_1_data') === 'Tree Grille'){
        drawTrees();
    }
    if (KDF.getVal('level_1_data') === 'Box Planter' ||
        KDF.getVal('level_1_data') === 'Grass Verge' ||
        KDF.getVal('level_1_data') === 'Hedge' ||
        KDF.getVal('level_1_data') === 'Plants or Planted Area'){
        drawVegetation();
    }
}

function queryLayer(marker){

    if (KDF.getVal('level_1_data') === 'Gulley'){
        queryDrains(marker);
    } else if (KDF.getVal('level_1_data') === 'Fence' ||
        KDF.getVal('level_1_data') === 'Handrail' ||
        KDF.getVal('level_1_data') === 'Pedestrian Barrier' ||
        KDF.getVal('level_1_data') === 'Vehicle Barrier/Safety Fence'){
        queryFences(marker);
    } else if (KDF.getVal('level_1_data') === 'Grit Bin'){
        queryGritBins(marker);
    } else if (KDF.getVal('level_1_data') === 'Litter Bin'){
        queryLitterBins(marker);
    } else if (KDF.getVal('level_1_data') === 'Cameras / Electronic Signs' ||
        KDF.getVal('level_1_data') === 'Illuminated Road Signs' ||
        KDF.getVal('level_1_data') === 'Lit Bollard' ||
        KDF.getVal('level_1_data') === 'Non-Illuminated Road Signs' ||
        KDF.getVal('level_1_data') === 'Street Name Plates'){
        querySigns(marker);
    } else if (KDF.getVal('level_1_data') === 'Art or Sculpture' ||
        KDF.getVal('level_1_data') === 'Bollard' ||
        KDF.getVal('level_1_data') === 'Cycle Barrier' ||
        KDF.getVal('level_1_data') === 'Cycle Stand' ||
        KDF.getVal('level_1_data') === 'Seat or Bench' ||
        KDF.getVal('level_1_data') === 'Tree or Branch'){
        queryStreetFurniture(marker);
    } else if (KDF.getVal('level_1_data') === 'Street Light'){
        queryStreetLights(marker);
    } else if (KDF.getVal('level_1_data') === 'Bridge' ||
        KDF.getVal('level_1_data') === 'Culvert' ||
        KDF.getVal('level_1_data') === 'Earth Bank / Cutting' ||
        KDF.getVal('level_1_data') === 'Gantry' ||
        KDF.getVal('level_1_data') === 'Retaining Wall' ||
        KDF.getVal('level_1_data') === 'Subway'){
        queryStructures(marker);
    } else if (KDF.getVal('level_1_data') === 'Traffic Signals'){
        queryTrafficSignals(marker);
    } else if (KDF.getVal('level_1_data') === 'Tree or Branch' ||
        KDF.getVal('level_1_data') === 'Tree Grille'){
        queryTrees(marker);
    } else if (KDF.getVal('level_1_data') === 'Box Planter' ||
        KDF.getVal('level_1_data') === 'Grass Verge' ||
        KDF.getVal('level_1_data') === 'Hedge' ||
        KDF.getVal('level_1_data') === 'Plants or Planted Area'){
        queryVegetation(marker);
    } else{
        queryRoads(marker);
    }
}

function setClickRadius(zoomLevel){
    switch (zoomLevel){
        case 14:
            vmap.getMapParams().assetClick.radius = 34;
            break;
        case 15:
            vmap.getMapParams().assetClick.radius = 21;
            break;
        case 16:
            vmap.getMapParams().assetClick.radius = 13;
            break;
        case 17:
            vmap.getMapParams().assetClick.radius = 8;
            break;
        case 18:
            vmap.getMapParams().assetClick.radius = 5;
            break;
        case 18:
            vmap.getMapParams().assetClick.radius = 3;
            break;
        default:
            vmap.getMapParams().assetClick.radius = 50;
    }
}

function drawBoundary(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.boundary),
        codes: [featureLayers.boundary.id],
        id: "boundaryLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}

function drawDrains(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.drains),
        codes: [featureLayers.drains.id],
        id: "drainsLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeDrains(){
    var layerConfig ={
        id: "drainsLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryDrains(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.drains);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawFences(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.fences),
        codes: [featureLayers.fences.id],
        id: "fencesLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeFences(){
    var layerConfig ={
        id: "fencesLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryFences(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.fences);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawGritBins(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.gritbins),
        codes: [featureLayers.gritbins.id],
        id: "gritbinsLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeGritBins(){
    var layerConfig ={
        id: "gritbinsLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryGritBins(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.gritbins);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawLitterBins(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.litterbins),
        codes: [featureLayers.litterbins.id],
        id: "litterbinsLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeLitterBins(){
    var layerConfig ={
        id: "litterbinsLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryLitterBins(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.litterbins);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawSigns(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.signs),
        codes: [featureLayers.signs.id],
        id: "signsLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeSigns(){
    var layerConfig ={
        id: "signsLayer"
    };
    vmap.removeLayer(layerConfig);
}
function querySigns(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.signs);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawStreetFurniture(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.streetfurniture),
        codes: [featureLayers.streetfurniture.id],
        id: "streetFurnitureLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeStreetFurniture(){
    var layerConfig ={
        id: "streetFurnitureLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryStreetFurniture(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.streetfurniture);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawStreetLights(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.streetlights),
        codes: [featureLayers.streetlights.id],
        id: "streetlightsLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeStreetLights(){
    var layerConfig ={
        id: "streetlightsLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryStreetLights(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.streetlights);
    vmap.findFeaturesNear(marker, queryLayer, genericFeatureSetHandler, genericErrorHandler);
}

function drawStructures(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.structures),
        codes: [featureLayers.structures.id],
        id: "structuresLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeStructures(){
    var layerConfig ={
        id: "structuresLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryStructures(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.structures);
    vmap.findFeaturesNear(marker, queryLayer, structuresFeatureSetHandler, genericErrorHandler);
}

function genericFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        KDF.setVal("asset_type", attributes["featuretypename"]);
        KDF.setVal("asset_type_id", attributes["featureid"]);
        KDF.setVal("central_asset_id", attributes["centralassetid"]);
        KDF.setVal("asset_responsibility", attributes["responsibility"]);
        KDF.setVal("site_name", attributes["sitename"]);
        KDF.setVal("txt_streetdescription", attributes["sitename"]);
        KDF.setVal("site_code", attributes["sitecode"]);
        KDF.setVal("txt_usrn", attributes["sitecode"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: "<strong>" + attributes["featuretypename"] + ":</strong> " + attributes["sitename"]
        });
        if (attributes["sitecode"].startsWith('PF') ||
            attributes["sitecode"].startsWith('0') ||
            attributes["sitecode"].valueOf('')){
            queryPavements2(marker);
        }
        queryCityCentre(marker);
    } else{
        queryRoads(marker);
    }
    vmap.centerAtLonLat({
        lon: marker.geometry.x,
        lat: marker.geometry.y
    });
}

function structuresFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        KDF.setVal("asset_type", attributes["featuretypename"]);
        KDF.setVal("asset_type_id", attributes["featureid"]);
        KDF.setVal("central_asset_id", attributes["centralassetid"]);
        KDF.setVal("asset_responsibility", "Structures");
        KDF.setVal("site_name", attributes["sitename"]);
        KDF.setVal("txt_streetdescription", attributes["sitename"]);
        KDF.setVal("site_code", attributes["sitecode"]);
        KDF.setVal("txt_usrn", attributes["sitecode"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: "<strong>" + attributes["featuretypename"] + ":</strong> " + attributes["sitename"]
        });
        if (attributes["sitecode"].startsWith('PF') ||
            attributes["sitecode"].startsWith('0') ||
            attributes["sitecode"].valueOf('')){
            queryPavements2(marker);
        }
        queryCityCentre(marker);
    } else{
        queryRoads(marker);
    }
    vmap.centerAtLonLat({
        lon: marker.geometry.x,
        lat: marker.geometry.y
    });
}

function queryRoads(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.roads);
    vmap.findFeaturesNear(marker, queryLayer, roadsFeatureSetHandler, genericErrorHandler);
}
function roadsFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        // KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        // KDF.setVal("asset_type", attributes["feature_ty"]);
        // KDF.setVal("asset_type_id", attributes["feature_id"]);
        // KDF.setVal("central_asset_id", attributes["central_as"]);
        if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility", "AMEY (PFI)");
        }
        KDF.setVal("site_name", attributes["streetname"]);
        KDF.setVal("txt_streetdescription", attributes["streetname"]);
        KDF.setVal("txt_fulladdress", attributes["streetname"]);
        KDF.setVal("site_code", attributes["usrn"]);
        KDF.setVal("txt_usrn", attributes["usrn"]);
        KDF.showSection('area_lacation_description');

        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: attributes["streetname"]
        });
        queryCityCentre(marker);
    } else{
        queryPavements(marker);
    }
    vmap.centerAtLonLat({
        lon: marker.geometry.x,
        lat: marker.geometry.y
    });
}

function queryPavements(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.pavements);
    vmap.findFeaturesNear(marker, queryLayer, pavementsFeatureSetHandler, genericErrorHandler);
}
function pavementsFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
//      KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
//      KDF.setVal("asset_type", attributes["feature_ty"]);
//      KDF.setVal("asset_type_id", attributes["feature_id"]);
//      KDF.setVal("central_asset_id", attributes["central_as"]);
        if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility", "AMEY (PFI)");
        }
        KDF.setVal("site_name", attributes["streetname"]);
        KDF.setVal("txt_streetdescription", attributes["streetname"]);
        KDF.setVal("txt_fulladdress", attributes["streetname"]);
        KDF.setVal("site_code", attributes["usrn"]);
        KDF.setVal("txt_usrn", attributes["usrn"]);

        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: attributes["streetname"]
        });
        queryCityCentre(marker);
    } else{
        queryAdoptedHighways(marker);
    }
}
function queryPavements2(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.pavements);
    vmap.findFeaturesNear(marker, queryLayer, pavementsFeatureSetHandler2, genericErrorHandler);
}
function pavementsFeatureSetHandler2(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("site_name", attributes["streetname"]);
        KDF.setVal("txt_streetdescription", attributes["streetname"]);
        KDF.setVal("site_code", attributes["usrn"]);
        KDF.setVal("txt_usrn", attributes["usrn"]);
    }
}

function drawTrafficSignals(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.trafficsignals),
        codes: [featureLayers.trafficsignals.id],
        id: "trafficsignalsLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeTrafficSignals(){
    var layerConfig ={
        id: "trafficsignalsLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryTrafficSignals(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.trafficsignals);
    vmap.findFeaturesNear(marker, queryLayer, signalsFeatureSetHandler, genericErrorHandler);
}
function signalsFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        KDF.setVal("asset_type", attributes["featuretypename"]);
        KDF.setVal("asset_type_id", attributes["featureid"]);
        KDF.setVal("central_asset_id", attributes["centralassetid"]);
        KDF.setVal("asset_responsibility", attributes["responsibility"]);
        KDF.setVal("site_name", attributes["sitename"]);
        KDF.setVal("txt_streetdescription", attributes["sitename"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: "<strong>Traffic Signal:</strong> " + attributes["sitename"]
        });
        queryAdoptedHighways2(marker);
        queryCityCentre(marker);
    } else{
        queryRoads(marker);
    }
    vmap.centerAtLonLat({
        lon: marker.geometry.x,
        lat: marker.geometry.y
    });
}

function drawTrees(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.trees),
        codes: [featureLayers.trees.id],
        id: "treesLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeTrees(){
    var layerConfig ={
        id: "treesLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryTrees(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.trees);
    vmap.findFeaturesNear(marker, queryLayer, treeFeatureSetHandler, genericErrorHandler);
}
function treeFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        KDF.setVal("asset_type", "Tree");
        KDF.setVal("asset_type_id", attributes["featureid"]);
        KDF.setVal("central_asset_id", attributes["centralassetid"]);
        KDF.setVal("asset_responsibility", "AMEY (PFI)");
        KDF.setVal("site_name", attributes["featurelocation"] + " " + attributes["sitename"]);
        KDF.setVal("txt_streetdescription", attributes["sitename"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: "<strong>Tree:</strong> " + attributes["featurelocation"] + " " + attributes["sitename"]
        });
        queryAdoptedHighways2(marker);
        queryCityCentre(marker);
    } else{
        queryRoads(marker);
    }
    vmap.centerAtLonLat({
        lon: marker.geometry.x,
        lat: marker.geometry.y
    });
}

function drawVegetation(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.vegetation),
        codes: [featureLayers.vegetation.id],
        id: "vegetationLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removeVegetation(){
    var layerConfig ={
        id: "vegetationLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryVegetation(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.vegetation);
    vmap.findFeaturesNear(marker, queryLayer, vegetationFeatureSetHandler, genericErrorHandler);
}
function vegetationFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
		KDF.setVal("object_id", attributes["objectid"]);
		KDF.setVal("longitude_x", marker.geometry.x);
		KDF.setVal("latitude_y", marker.geometry.y);
		KDF.setVal("asset_type",attributes["featuretypename"]);
		KDF.setVal("asset_type_id",attributes["featureid"]);
		KDF.setVal("central_asset_id",attributes["centralassetid"]);
		KDF.setVal("asset_responsibility",attributes["responsibility"]);
		KDF.setVal("site_name",attributes["sitename"]);
		KDF.setVal("txt_streetdescription", attributes["sitename"]);
		KDF.setVal("site_code",attributes["sitecode"]);
		KDF.setVal("txt_usrn",attributes["sitecode"]);
		vmap.setInfoWindow({
			xcoord: marker.geometry.x,
			ycoord: marker.geometry.y,
			title: "Details",
			content: "<strong>Feature:</strong> " + attributes["featuretypename"] + "<br/><strong>Site Name:</strong> " + attributes["sitename"]
		});
        queryCityCentre(marker);
    } else{
        queryRoads(marker);
    }
    vmap.centerAtLonLat({
        lon: marker.geometry.x,
        lat: marker.geometry.y
    });
}

function queryAdoptedHighways(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.adoptedhighways);
    vmap.findFeaturesNear(marker, queryLayer, adoptedhighwaysSetHandler, genericErrorHandler);
}
function adoptedhighwaysSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        KDF.setVal("site_name", attributes["name"]);
        KDF.setVal("txt_streetdescription", attributes["name"]);
        KDF.setVal("site_code", attributes["usrn"]);
        KDF.setVal("txt_usrn", attributes["usrn"]);
        if (attributes["status"].startsWith('U')){
            KDF.setVal("asset_responsibility", "Unadopted Highway");
            if (KDF.getVal('level_1_data') === 'Fly-Tipping' ||
                KDF.getVal('level_1_data') === 'Dead Animal' ||
                KDF.getVal('level_1_data') === 'Dog Fouling' ||
                KDF.getVal('level_1_data') === 'Needles / Syringes' ||
                KDF.getVal('level_1_data') === 'Giant Hogweed' ||
                KDF.getVal('level_1_data') === 'Japanese Knotweed' ||
                ((KDF.getVal('level_1_data') === 'Hedge' || KDF.getVal('level_1_data') === 'Tree or Branch') && KDF.getVal('level_2_data') === 'Overgrown')){
                KDF.setVal("asset_responsibility","Environmental");
                vmap.setInfoWindow({
                    xcoord: marker.geometry.x,
                    ycoord: marker.geometry.y,
                    title: "Details",
                    content: "<strong>Site Name:</strong> " + attributes["name"]
                });
            } else {
                vmap.setInfoWindow({
                    xcoord: marker.geometry.x,
                    ycoord: marker.geometry.y,
                    title: "Details",
                    content: "<strong>Site Name:</strong> " + attributes["name"]
                });
                KDF.hideWidget('but_next_page_about_the_location');
                KDF.hideWidget('but_submit_anonymously_page_about_the_location');
			    KDF.showWidget('but_resolve_enquiry_page_about_the_location');
            }
        } else if (attributes["status"].startsWith('A')){
            KDF.setVal("asset_responsibility", "AMEY (PFI)");
            vmap.setInfoWindow({
                xcoord: marker.geometry.x,
                ycoord: marker.geometry.y,
                title: "Details",
                content: "<strong>Site Name:</strong> " + attributes["name"]
            });
            queryCityCentre(marker);
        } else {
            queryParks(marker);
        }
    } else {
        queryParks(marker);
    }
}

function queryAdoptedHighways2(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.adoptedhighways);
    vmap.findFeaturesNear(marker, queryLayer, adoptedhighwaysSetHandler2, genericErrorHandler);
}
function adoptedhighwaysSetHandler2(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("site_code", attributes["usrn"]);
        KDF.setVal("txt_usrn", attributes["usrn"]);
    }
}

function queryParks(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.parks);
    vmap.findFeaturesNear(marker, queryLayer, parksFeatureSetHandler, genericErrorHandler);
}
function parksFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        KDF.setVal("asset_type", attributes["site_type"]);
        if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility", "Parks and Public Realms");
        }
        KDF.setVal("site_name", attributes["site_name"]);
        KDF.setVal("txt_streetdescription", attributes["site_name"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: "<strong>" + attributes["site_type"] + ':</strong> ' + attributes["site_name"]
        });
    } else{
        queryGMSites(marker);
    }
}

function queryGMSites(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.gmsites);
    vmap.findFeaturesNear(marker, queryLayer, gmsitesSetHandler, genericErrorHandler);
}
function gmsitesSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("asset_type", attributes["type"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility", attributes["customer"]);
        }
        KDF.setVal("site_name", attributes["sitename"]);
        KDF.setVal("txt_streetdescription", attributes["site_name"]);
        KDF.setVal("txt_prestige", attributes["locality"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: attributes["sitename"]
        });
    } else{
        queryPTLease(marker);
    }
}
function queryGMSitesHousing(marker){
    const queryLayer = featureLayers.getQueryLayer(featureLayers.gmsites);
    vmap.findFeaturesNear(marker, queryLayer, gmsitesSetHandlerHousing, genericErrorHandler);
}
function gmsitesSetHandlerHousing(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        
        KDF.setVal("object_id", attributes["objectid"]);
        KDF.setVal("asset_type", attributes["type"]);
        KDF.setVal("longitude_x", marker.geometry.x);
        KDF.setVal("latitude_y", marker.geometry.y);
        if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility", attributes["customer"]);
        }
        KDF.setVal("site_name", attributes["sitename"]);
        KDF.setVal("txt_streetdescription", attributes["site_name"]);
        KDF.setVal("txt_prestige", attributes["locality"]);
        vmap.setInfoWindow({
            xcoord: marker.geometry.x,
            ycoord: marker.geometry.y,
            title: "Details",
            content: attributes["sitename"]
        });
    } else{
        queryPTHoldingsHousing(marker);
    }
}

function queryPTLease(marker){
	const queryLayer = featureLayers.getQueryLayer(featureLayers.ptleases);
	vmap.findFeaturesNear(marker, queryLayer, leaseSetHandler, genericErrorHandler);
}
function leaseSetHandler(marker, featureSet){
    console.log('leaseSetHandler');
	if (featureSet.features.length >= 1){
		var asset = featureSet.features[0];
	    var attributes = asset.attributes;
   	
   	    KDF.setVal("object_id", attributes["objectid"]);
		KDF.setVal("longitude_x", marker.geometry.x);
		KDF.setVal("latitude_y", marker.geometry.y);
		KDF.setVal("asset_type",attributes["leasetype"]);
		if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility","Leased Site");
        }
		KDF.setVal("site_name",attributes["description"]);
		KDF.setVal("txt_streetdescription", attributes["description"]);
   	
		vmap.setInfoWindow({
			xcoord: marker.geometry.x,
			ycoord: marker.geometry.y,
			title: "Details",
			content: "<strong>Status:</strong> Leased Site<br/></strong>Site Description:</strong> " + attributes["description"]
		});
	} else {
		queryPTHoldings(marker);
	}
}

function queryPTHoldings(marker){
	const queryLayer = featureLayers.getQueryLayer(featureLayers.ptholdings);
	vmap.findFeaturesNear(marker, queryLayer, holdingsSetHandler, genericErrorHandler);
}
function holdingsSetHandler(marker, featureSet) {
	if (featureSet.features.length >= 1){
		var asset = featureSet.features[0];
	    var attributes = asset.attributes;
   	    KDF.setVal("object_id", attributes["objectid"]);
		KDF.setVal("longitude_x", marker.geometry.x);
		KDF.setVal("latitude_y", marker.geometry.y);
		if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility","Unidentified Council Land");
        }
   	
		vmap.setInfoWindow({
			xcoord: marker.geometry.x,
			ycoord: marker.geometry.y,
			title: "Details",
			content:"<strong>Site:</strong> Unidentified Council Land"
		});
	} else {
		KDF.setVal("longitude_x", marker.geometry.x);
		KDF.setVal("latitude_y", marker.geometry.y);
		KDF.setVal("asset_responsibility","Private Land");
   	
		vmap.setInfoWindow({
			xcoord: marker.geometry.x,
			ycoord: marker.geometry.y,
			title: "Details",
			content:"<strong>Site:</strong> Private Land"
		});
		
		// Page Buttons
		if (KDF.getVal('level_1_data') === 'Fly-Tipping'
			|| KDF.getVal('level_1_data') === 'Dead Animal'
			|| KDF.getVal('level_1_data') === 'Dog Fouling'
			|| KDF.getVal('level_1_data') === 'Needles / Syringes'
			|| KDF.getVal('level_1_data') === 'Giant Hogweed'
		    || KDF.getVal('level_1_data') === 'Japanese Knotweed'
            || ((KDF.getVal('level_1_data') === 'Hedge' || KDF.getVal('level_1_data') === 'Tree or Branch') && KDF.getVal('level_2_data') === 'Overgrown'))
		{
			KDF.setVal("asset_responsibility","Environmental");
		}
		else
		{
			KDF.hideWidget('but_next_page_about_the_location');
			KDF.hideWidget('but_submit_anonymously_page_about_the_location');
			KDF.showWidget('but_resolve_enquiry_page_about_the_location');
		}
	}
}
function queryPTHoldingsHousing(marker){
	const queryLayer = featureLayers.getQueryLayer(featureLayers.ptholdings);
	vmap.findFeaturesNear(marker, queryLayer, holdingsSetHandlerHousing, genericErrorHandler);
}
function holdingsSetHandlerHousing(marker, featureSet) {
	if (featureSet.features.length >= 1){
		var asset = featureSet.features[0];
	    var attributes = asset.attributes;
   	
   	    KDF.setVal("object_id", attributes["objectid"]);
		KDF.setVal("longitude_x", marker.geometry.x);
		KDF.setVal("latitude_y", marker.geometry.y);
		if (KDF.getVal('Level_1_data') === 'Fly-Tipping' && KDF.getVal('Level_2_data') === 'Known'){
            KDF.setVal("asset_responsibility", "");
        } else {
            KDF.setVal("asset_responsibility","Housing");
        }
   	
		vmap.setInfoWindow({
			xcoord: marker.geometry.x,
			ycoord: marker.geometry.y,
			title: "Details",
			content:"<strong>Site:</strong> Council Land"
		});
	} else {
		queryLayer(marker);
	}
}


function queryCityCentre(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.citycentre);
    vmap.findFeaturesNear(marker, queryLayer, citycentreFeatureSetHandler, genericErrorHandler);
}
function citycentreFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        if (attributes["status"].startsWith('Co')){
            KDF.setVal("txt_prestige", "Copper");
        } else if (attributes["status"].startsWith('B')){
            KDF.setVal("txt_prestige", "Bronze");
        } else if (attributes["status"].startsWith('S')){
            KDF.setVal("txt_prestige", "Silver");
        } else if (attributes["status"].startsWith('G')){
            KDF.setVal("txt_prestige", "Gold");
        } else if (attributes["status"].startsWith('P')){
            KDF.setVal("txt_prestige", "Platinum");
        } else{
            KDF.setVal("txt_prestige", attributes["status"]);
        }
    } else{
        queryHotspotAssPSS(marker);
    }
}
function queryHotspotAssPSS(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.hotspotasspss);
    vmap.findFeaturesNear(marker, queryLayer, hotspotasspssFeatureSetHandler, genericErrorHandler);
}
function hotspotasspssFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("txt_prestige", attributes["type"]);
        KDF.setVal("txt_prestige", "Cleansing Hotspot");
    } else{
        queryHotspotSchools(marker);
    }
}
function queryHotspotSchools(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.hotspotschools);
    vmap.findFeaturesNear(marker, queryLayer, hotspotschoolsFeatureSetHandler, genericErrorHandler);
}
function hotspotschoolsFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("txt_prestige", attributes["type"]);
    } else{
        queryPrincipalShopsite(marker);
    }
}
function queryPrincipalShopsite(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.principalshopsite);
    vmap.findFeaturesNear(marker, queryLayer, principalshopsiteFeatureSetHandler, genericErrorHandler);
}
function principalshopsiteFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("txt_prestige", attributes["type"]);
    } else{
        queryNeighbourhoodShopsite(marker);
    }
}
function queryNeighbourhoodShopsite(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.neighbourhoodshopsite);
    vmap.findFeaturesNear(marker, queryLayer, neighbourhoodshopsiteFeatureSetHandler, genericErrorHandler);
}
function neighbourhoodshopsiteFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        KDF.setVal("txt_prestige", attributes["type"]);
    } else{
        queryGateway(marker);
    }
}
function queryGateway(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.gateway);
    vmap.findFeaturesNear(marker, queryLayer, gatewayFeatureSetHandler, genericErrorHandler);
}
function gatewayFeatureSetHandler(marker,featureSet){
    if (featureSet.features.length >= 1){
        var asset = featureSet.features[0];
        var attributes = asset.attributes;
        KDF.setVal("txt_prestige", attributes["type"]);
    }
}
function drawPROWFlyTippingLayer(){
    var layerConfig ={
        url: featureLayers.url(featureLayers.prowflytipping),
        codes: [featureLayers.prowflytipping.id],
        id: "PROWFlyTippingLayer"
    };
    vmap.drawDynamicLayer(layerConfig);
}
function removePROWFlyTippingLayer(){
    var layerConfig ={
        id: "PROWFlyTippingLayer"
    };
    vmap.removeLayer(layerConfig);
}
function queryPROWFlytipping(marker){
    var queryLayer = featureLayers.getQueryLayer(featureLayers.nonadoptedgm);
    vmap.findFeaturesNear(marker, queryLayer, prowflytippingSetHandler, genericErrorHandler);
}

function genericErrorHandler(e){
    //KDF.showError("Error querying map features");
    console.log(e);
    vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Error",
        content: "</strong>Please click on the map again.</strong>"
    });
}
function multiErrorHandler(error){
    console.error("error performing query");
    console.log(error);
    queriesComplete++;
    $('#dform_' + window.location.href.split('/').pop().split('?')[0]).trigger("_GIS_queryComplete");
}

class VMap
{
	constructor(mapParams)
	{
		this.mapParams = mapParams;
	}
	getMapParams()
	{
		return this.mapParams;
	}
}
VMap.prototype.extentChanged = function extentChanged(evt, layerDrawingFunc)
{
	if (evt["levelChange"] == true)
	{
		if (this.getMapParams().assetMaxDrawZoom)
		{
			if (evt.lod.level >= this.getMapParams().assetMaxDrawZoom)
			{
				layerDrawingFunc(evt);
			}
			else
			{
				this.getMapParams().map.graphics.clear();
			}
		}
		else
		{
			if (evt.lod.level >= 6)
			{
				layerDrawingFunc(evt);
			}
			else
			{
				this.getMapParams().map.graphics.clear();
			}
		}
	}
};
VMap.prototype.zoomLevelChanged = function zoomLevelChanged(evt, zoomChanged)
{
	if (evt["levelChange"] == true)
	{
		zoomChanged(evt);
	}
};
VMap.prototype.drawDynamicLayer = function drawDynamicLayer(layerConfig)
{
	//layerConfig{url, code, id}
	var layer = new esri.layers.ArcGISDynamicMapServiceLayer(layerConfig.url,
	{
		id: layerConfig.id
	});
	layer.setVisibleLayers(layerConfig.codes);
	layer.setOpacity(0.9);
	this.getMapParams().map.addLayer(layer);
};
VMap.prototype.removeLayer = function removeLayer(layerConfig)
{
	//layerConfig{id}
	var layer = this.getMapParams().map.getLayer(layerConfig.id);
	this.getMapParams().map.removeLayer(layer);
};
VMap.prototype.removeAllLayers = function removeAllLayers()
{
	this.getMapParams().map.removeAllLayers();
};
VMap.prototype.loadCaseMarkers = function loadCaseMarkers(response, selectedCaseCallback)
{
	var map = this.getMapParams().map;
	var mapParams = this.getMapParams();
	map.graphics.clear();
	require([
		"esri/geometry/Point",
		"esri/symbols/PictureMarkerSymbol",
		"esri/graphic",
		"esri/layers/GraphicsLayer",
		"dojo/domReady!"
	], function(Point, PictureMarkerSymbol, Graphic, GraphicsLayer)
	{
		var newlayer = new GraphicsLayer(
		{
			id: "custom_marker_layer"
		});
		$.each(response.data, function()
		{
			var markerinfo = this;
			var point = new Point(
				Number(markerinfo.longitude),
				Number(markerinfo.latitude),
				new esri.SpatialReference(mapParams.WKID)
			);
			var markerSymbol = new PictureMarkerSymbol(markerinfo.icon, 20, 32);
			markerSymbol.setOffset(0, 0); //0,32
			var marker = new Graphic(point, markerSymbol);
			marker.setAttributes(
			{
				title: "",
				description: '<img src="/dformresources/content/ajax-loader.gif" />',
				caseid: markerinfo.title
			});
			newlayer.add(marker);
		});
		newlayer.on("click", function(event)
		{
			setTimeout(function()
			{
				selectedCaseCallback(event.graphic);
			}, 200);
		});
		map.addLayer(newlayer);
	});
};
VMap.prototype.centerAtLonLat = function centerAtLonLat(centerConfig)
{
	var params = this.getMapParams();
	var config = centerConfig;
	require(["esri/geometry/Point", "esri/SpatialReference"], function(Point, SpatialReference)
	{
		var point = new Point(Number(config.lon), Number(config.lat), new SpatialReference(params.WKID));
		params.map.centerAt(point);
	});
};
VMap.prototype.geoLocate = function geoLocate(success, error)
{
	if (navigator.geolocation)
	{
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};
		navigator.geolocation.getCurrentPosition(success, error, options);
	}
	else
	{
		//console.log("navigator.geolocation undefined");
	}
};
VMap.prototype.setInfoWindow = function setInfoWindow(infoWindowConfig)
{
	var wkid = this.getMapParams().WKID;
	var map = this.getMapParams().map;
	require(["esri/geometry/Point", "esri/SpatialReference"], function(Point, SpatialReference)
	{
		var point = new Point(infoWindowConfig.xcoord, infoWindowConfig.ycoord, new SpatialReference(wkid));
		map.infoWindow.setTitle(infoWindowConfig.title);
		map.infoWindow.setContent(infoWindowConfig.content);
		map.infoWindow.show(point);
		// map.infoWindow.reposition();
	});
};
VMap.prototype.findFeaturesNear = function findFeaturesNear(marker, layerConfig, featureSetHandler, errorCallback)
{
	var assetClick = this.getMapParams().assetClick;
	var wkid = this.getMapParams().WKID;
	var map = this.getMapParams().map;
	var queryLayerConfig = layerConfig;
	require([
		"esri/InfoTemplate",
		"esri/layers/FeatureLayer",
		"esri/geometry/Circle",
		"esri/tasks/query",
		"esri/SpatialReference"
	], function(InfoTemplate, FeatureLayer, Circle, Query, SpatialReference)
	{
		var infoTemplate = new InfoTemplate("Attributes", "${*}");
		var featureLayer = new FeatureLayer(queryLayerConfig.url,
		{
			mode: FeatureLayer.MODE_ONDEMAND,
			infoTemplate: infoTemplate,
			outFields: ["*"]
		});
		var circle = new Circle(marker.geometry,
		{
			radius: assetClick.radius,
			radiusUnit: assetClick.radiusUnit
		});
		if (queryLayerConfig.wkid)
		{
			circle.spatialReference = new SpatialReference(queryLayerConfig.wkid);
		}
		var query = new Query();
		query.geometry = circle;
		query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;
		query.returnGeometry = true;
		query.outFields = ["*"];
		featureLayer.queryFeatures(query, function(featureSet)
		{
			featureSetHandler(marker, featureSet);
		}, function(error)
		{
			errorCallback(error);
		});
	});
};
VMap.prototype.addPoint = function addPoint(pointConfig)
{
	var config = pointConfig;
	var mapParams = this.getMapParams();
	require([
		"esri/geometry/Point",
		"esri/symbols/PictureMarkerSymbol",
		"esri/graphic",
		"esri/layers/GraphicsLayer",
		"dojo/domReady!"
	], function(Point, PictureMarkerSymbol, Graphic, GraphicsLayer)
	{
		var point = new Point(
			Number(config.longitude),
			Number(config.latitude),
			new esri.SpatialReference(
			{
				wkid: Number(mapParams.WKID)
			})
		);
		var markerSymbol = new PictureMarkerSymbol(config.marker.url, config.marker.width, config.marker.height);
		markerSymbol.setOffset(0, 20);
		var graphic = new Graphic(point, markerSymbol);
		var markerLayer = new GraphicsLayer(config.layer);
		mapParams.map.addLayer(markerLayer, 0);
		markerLayer.add(graphic);
	});
};
VMap.prototype.removePoints = function removePoints(layerId)
{
	if (this.getMapParams().map.getLayer(layerId))
	{
		this.getMapParams()
			.map.getLayer(layerId)
			.clear();
	}
};
VMap.prototype.convertLonLat = function convertLonLat(config)
{
	var result = proj4(config.inputProjection.projection, config.outputProjection.projection, config.coordinates);
	config.successCallBack(result);
};
VMap.prototype.addSearch = function addSearch()
{
	var mapParams = this.getMapParams();
	require(["esri/config", "esri/dijit/Search"], function(esriConfig, Search)
	{
		esriConfig.defaults.geometryService = mapParams.hostUrl + mapParams.geometryService;
		var search = new Search(
			{
				map: mapParams.map
			},
			"search"
		);
		search.startup();
	});
};

function finishInteraction() {
	agentparamsfunction();
	if (KDF.getVal('txt_agentlocation') === 'Howden House Firstpoint' || KDF.getVal('txt_agentlocation') === 'The Sheffield Property Shop') {
			KDF.setVal('txt_branch', 'firstpoint');
			window.location = ('https://forms-qa-sheffieldcc.squiz.cloud/form/launch/a_menu?branch=firstpoint' + agentparams);
	} else if(['Burngreave','Burngreave - Telephone','Crystal Peaks', 'Crystal Peaks - Telephone', 'Darnall', 'Darnall - Telephone', 'Firth Park','Firth Park - Telephone', 'Chapeltown', 'Chapeltown - Telephone', 'Hillsborough', 'Hillsborough - Telephone', 'Manor Library', 'Manor Library - Telephone', 'Jordanthorpe', 'Jordanthorpe - Telephone', 'Low Edges', 'Low Edges - Telephone', 'Newfield Green', 'Newfield Green - Telephone', 'Stocksbridge', 'Stocksbridge - Telephone', 'Wordsworth Avenue', 'Wordsworth Avenue - Telephone'].includes(KDF.getVal('txt_agentlocation'))) {
		KDF.setVal('txt_branch', 'page_hsgipmenu');
		window.location = ('https://forms-qa-sheffieldcc.squiz.cloud/form/launch/hsg_menu?branch=page_hsgipmenu' + agentparams);
	} else if (KDF.getVal('le_channel') === 'voice_in' && KDF.getVal('txt_agentlocation') === 'Contact Centre') {
		window.location = ('https://forms-qa-sheffieldcc.squiz.cloud/form/launch/hsg_menu?branch=page_hsgccmenu' + agentparams);
	} else {
		window.location = ('https://forms-qa-sheffieldcc.squiz.cloud/form/launch/a_menu?' + agentparams); 
	}
}