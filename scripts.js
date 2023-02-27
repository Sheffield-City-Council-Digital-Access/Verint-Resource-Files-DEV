//Start: Establish Environment
if (window.location.href.includes('forms-sheffield')) {
	var serverEnvironment = 'https://forms-sheffield.squiz.cloud';
	var anonID = '101001971935';
} else if (window.location.href.includes('forms-qa-sheffield')) {
	var serverEnvironment = 'https://forms-qa-sheffield.squiz.cloud';
	var anonID = '101001971935';
} else if (window.location.href.includes('forms-dev-sheffield')) {
	var serverEnvironment = 'https://forms-dev-sheffield.squiz.cloud';
	var anonID = '101001971935';
}
//Finish: Establish Environment

//Start: Classify Fields Function

function classifyFields(title,eventcode,queue)
{
	KDF.setVal('le_title',title);
	KDF.setVal('le_eventcode',eventcode);
	KDF.setVal('le_queue',queue);
}

//Finish: Classify Fields Function

//Start: Classify Function

function classifyType(le_title,le_eventcode,le_queue,txt_associatewith,le_description)
{
	KDF.setVal('le_title',le_title);
	KDF.setVal('le_eventcode',le_eventcode);
	KDF.setVal('le_queue',le_queue);
	KDF.setVal('txt_associatewith',txt_associatewith);
	KDF.setVal('le_description',le_description);

	if (KDF.getVal('txt_associatewith') === '')
	{
		KDF.setVal('txt_associatewith','Customer');
	}
	
	if (KDF.getVal('txt_customerid') === '')
	{
		KDF.setVal('txt_customerid',anonID);
		setBriefDetails();
	}

	switch (KDF.getVal('txt_associatewith'))
	{
		case 'Customer':
			KDF.setVal('le_associated_obj_type', 'C1');
			KDF.setVal('le_associated_obj_id', KDF.getVal('txt_customerid'));
			KDF.setVal('txt_reportedbyid', KDF.getVal('txt_customerid'));
			break;

		case 'Organisation':
			KDF.setVal('le_associated_obj_type', 'C2');
			KDF.setVal('le_associated_obj_id', KDF.getVal('txt_customerid'));
			KDF.setVal('txt_reportedbyid', KDF.getVal('txt_organisation_id'));
			break;

		case 'Property':
			KDF.setVal('le_associated_obj_type', 'D3');
			KDF.setVal('le_associated_obj_id', KDF.getVal('txt_propertyid'));
			KDF.setVal('txt_reportedbyid', KDF.getVal('txt_customerid'));
			break;

		case 'Street':
			KDF.setVal('le_associated_obj_type', 'D4');
			KDF.setVal('le_associated_obj_id', KDF.getVal('txt_streetid'));
			KDF.setVal('txt_reportedbyid', KDF.getVal('txt_customerid'));
			break;

		default:
			KDF.showError('Associated Object ID not found');
	}
}

//Finish: Classify Function

//Start: Check Person

function searches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox)
{
	KDF.setVal('txt_mandatory', mandatory);
	if (searchtype === 'Customer')
	{
		if (KDF.getVal('txt_customerid') !== '')
		{
			if (KDF.getVal('txt_customerid') === anonID && KDF.getVal('txt_mandatory') == 'Mandatory')
			{
				passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
			}
			else
			{
				whereToJump(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
			}
		}
		else
		{
			passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
	}
	else
	if (searchtype === 'Property')
	{
		if (KDF.getVal('txt_propertyid') === '')
		{
			passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
		else
		{
			whereToJump(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
	}
	else
	if (searchtype === 'CustomerProperty' | searchtype === 'PropertyCustomer')
	{
		if (KDF.getVal('txt_customerid') == '')
		{
			passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
		else
		if (KDF.getVal('txt_propertyid') == '')
		{
			passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
		else
		{
			if (KDF.getVal('txt_customerid') === anonID && KDF.getVal('txt_mandatory') == 'Mandatory')
			{
				passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
			}
			else
			{
				whereToJump(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
			}
		}
	}
}

function whereToJump(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox)
{
	formTitle = window.location.href.split('/').pop().split('?')[0]
	if (expectedform == formTitle)
	{
		KDF.gotoPage(expectedpage,true,true,true);  
	}
	else
	{
		expectedForm(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);   
	}
}

function searchesForm(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox)
{
	KDF.setVal('txt_mandatory', mandatory);
	if (searchtype === 'Customer')
	{
		if (KDF.getVal('txt_customerid') !== '')
		{
			if (KDF.getVal('txt_customerid') === anonID)
			{
				passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
			}
			else
			{
				expectedForm(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
			}
		}
		else
		{
			passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
	}
	else
	if (searchtype === 'Property')
	{
		if (KDF.getVal('txt_propertyid') === '')
		{
			passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
		else
		{
			expectedForm(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
		}
	}
	else
	{
		passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox);
	}
}

function passToSearches(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox)
{
	agentparamsfunction();
	customerparamsfunction();
	var PreviousForm = '&txt_previousform=' + previousform;
	var PreviousPage = '&txt_previouspage=' + previouspage;
	var ExpectedForm = '&txt_expectedform=' + expectedform;
	var ExpectedPage = '&txt_expectedpage=' + expectedpage;
	var Mandatory = '&txt_mandatory=' + mandatory;
	var ServiceArea = '&txt_servicearea=' + servicearea;
	var SearchType = '&txt_searchtype=' + searchtype;
	var ScrollBox = '&txt_scrollbox=' + scrollbox;
	window.location = ('a_help_searches?' + PreviousForm + PreviousPage + ExpectedForm + ExpectedPage + Mandatory + ServiceArea + SearchType + ScrollBox + agentparams + customerparams);
}
   
function expectedForm(previousform, previouspage, expectedform, expectedpage, mandatory, servicearea, searchtype, scrollbox)
{
	agentparamsfunction();
	customerparamsfunction();
	var PreviousForm = '&txt_previousform=' + previousform;
	var PreviousPage = '&txt_previouspage=' + previouspage;
	var ExpectedForm = '&txt_expectedform=' + expectedform;
	var ExpectedPage = '&txt_expectedpage=' + expectedpage;
	var Mandatory = '&txt_mandatory=' + mandatory;
	var ServiceArea = '&txt_servicearea=' + servicearea;
	var SearchType = '&txt_searchtype=' + searchtype;
	var ScrollBox = '&txt_scrollbox=' + scrollbox;
	window.location = (serverEnvironment + '/form/launch/' + expectedform + '?' + PreviousForm + PreviousPage + ExpectedForm + ExpectedPage + Mandatory + ServiceArea + SearchType + ScrollBox + agentparams + customerparams);
}

//Finish: Check Person

//Start: Customer Search Functions

//Start: Set Customers Brief Details

	function setBriefDetails()
	{
		const customer_information = document.querySelectorAll('.customer_information');
		var x = document.getElementsByClassName("customer_information");
		for (var i = 0; i < x.length; i++)
			if (KDF.getVal('txt_customerid') === '')
			{
				x[i].innerHTML = '<p><b><font color="#096">Customer Details:</font></b> Customer Not Set</p>';
			}
		else
		{
			if (KDF.getVal('txt_customerid') === anonID)
			{
				x[i].innerHTML = '<p><b><font size="4" color="#096">Customer Details:</font></b> ' + 'Customer Wishes to Remain Anonymous</p>';
			}
			else
			{
				x[i].innerHTML = '<p><b><font size="4" color="#096">Customer Details:</font></b> ' + ' <b>Fullname: </b>' + KDF.getVal('txt_fullname') + ' - <b>Full Address:</b> ' + KDF.getVal('txt_cusfulladdress') + ' - <b>Phone Number:</b> ' + KDF.getVal('txt_phone') + ' - <b>Email Address: </b>' + KDF.getVal('txt_email') + '</p>';
			}
		}
	}

//Finish: Set Customers Brief Details

//Start: Reset Customer Search Page

	function resetCustomerSearch(le_associated_obj_type)
	{
		KDF.setVal('txt_resetsearch', 'Restarted');
		KDF.setVal('txt_housingpinattempt', '0');
		KDF.setVal('le_associated_obj_type', le_associated_obj_type);

		//Start: Reset Click Counter
		{
			KDF.setVal('txt_click', '0');
		}
		//Finish: Reset Click Counter

		//Start: Reset Search Type Buttons
		{
			KDF.hideWidget('but_individual_search');
			KDF.hideWidget('but_organisation_search');
		}
		//Finish: Reset Search Type Buttons

		//Start: Reset Search Widgets
		{
			$('.searchcustomer').show();
			KDF.hideWidget('txt_searchforename');
			KDF.setVal('txt_searchforename', '');
			KDF.hideWidget('txt_searchsurname');
			KDF.setVal('txt_searchsurname', '');
			KDF.hideWidget('txt_searchdob');
			KDF.setVal('txt_searchdob', '');
			KDF.hideWidget('txt_searchorganisation');
			KDF.setVal('txt_searchorganisation', '');
			KDF.setVal('txt_searchaddressnumber', '');
			KDF.setVal('txt_searchaddressline1', '');
			KDF.setVal('txt_searchpostcode', '');
			KDF.setVal('txt_searchphone', '');
			KDF.setVal('txt_searchemail', '');
			KDF.hideSection('area_clickcomment');
			KDF.hideSection('area_search_results');
			KDF.setVal('customer_search_result', '');
			KDF.setVal('organisation_search_result', '');
			KDF.hideWidget('but_search_individual');
			KDF.hideWidget('but_search_organisation');
		}
		//Finish: Reset Search Widget

		//Start: Reset Housing Hub
		{
			$('.housinghub').hide();
		}
		//Finish: Reset Housing Hub

		//Start: Reset Update Widgets
		{
			resetUpdateCustomer();
		}
		//Finish: Reset Update Widgets

		//Start: Reset Create Widgets
		{
			resetCreateCustomer();
		}
		//Finish: Reset Create Widgets

		//Start: Reset Manual Address
		{
			resetManualAddress();
		}
		//Finish: Reset Manual Address

		//Start: Reset Buttons
		{
			if (KDF.getVal('txt_anonymous') === 'Optional')
			{
				KDF.showWidget('but_continue_anonymous');
				KDF.showWidget('ahtm_anon_submit');
			}
			else
			{
				KDF.hideWidget('but_continue_anonymous');
				KDF.hideWidget('ahtm_anon_submit');
			}
			KDF.hideWidget('but_next_aboutyou');
			KDF.hideWidget('but_continue_customer');
			KDF.hideWidget('but_update_individual');
			KDF.hideWidget('but_update_organisation');
			KDF.hideWidget('but_create_individual');
			KDF.hideWidget('but_create_organisation');
			KDF.hideWidget('but_create_customer');
			KDF.hideWidget('but_contact_history');
			KDF.hideWidget('but_additional_info');
			KDF.hideWidget('but_individual_not_found');
			KDF.hideWidget('but_organisation_not_found');
		}
		//Finish: Reset Buttons

		//Start: Reset Add Further Information
		{
			$('.furtherinfomration').hide();
			KDF.setVal('txta_adminhelp', '');
		}
		//Finish: Reset Add Further Information

		//Start: Reset Hidden Felds
		{
			resetCustomerHiddenFields();
		}
		//Finish: Reset Hidden Fields

		//Start: Reset Contact Admin
		{
			KDF.hideSection('area_admintext');
		}
		//Finish: Reset Contact Admin

		//Start: Show Individual Fields
		{
			if (KDF.getVal('le_associated_obj_type') === 'C1')
			{
				KDF.showWidget('but_organisation_search');
				KDF.showWidget('but_search_individual');
				KDF.showWidget('txt_searchforename');
				KDF.showWidget('txt_searchsurname');
				KDF.showWidget('txt_searchdob');
				KDF.showWidget('sel_titlecreate');
				KDF.showWidget('txt_firstnamecreate');
				KDF.showWidget('txt_surnamecreate');
				KDF.showWidget('txt_dobcreate');
				KDF.showWidget('ahtm_whyweneeddob');
			}
		}
		//Finish:Show Individual Fields

		//Start: Show Organisation Field
		{
			if (KDF.getVal('le_associated_obj_type') === 'C2')
			{
				KDF.showWidget('but_individual_search');
				KDF.showWidget('but_search_organisation');
				KDF.showWidget('txt_searchorganisation');
				KDF.showWidget('txt_organisationcreate');
				KDF.showWidget('txt_organisationupdate');
			}
		}
		//Finish: Show Organisation Field
	}

//Finish: Reset Customer Search Page

//Start: Reset Update Customer Widgets

	function resetUpdateCustomer()
	{
		$('.updatecustomer').hide();
		KDF.hideSection('area_address_clickcomment');
		KDF.hideWidget('txt_titleupdate');
		KDF.setVal('txt_titleupdate', '');
		KDF.hideWidget('txt_firstnameupdate');
		KDF.setVal('txt_firstnameupdate', '');
		KDF.hideWidget('txt_surnameupdate');
		KDF.setVal('txt_surnameupdate', '');
		KDF.hideWidget('dt_dobupdate');
		KDF.setVal('dt_dobupdate', '');
		KDF.setVal('txt_phoneupdate', '');
		KDF.setVal('txt_emailupdate', '');
		KDF.setVal('txt_postcodesearchupdate', '');
		KDF.setVal('sel_updateaddressresults', '');
		KDF.hideWidget('txt_organisationupdate');
		KDF.setVal('txt_organisationupdate', '');
	}

//Finish: Reset Update Customer Widgets

//Start: Reset Create Customer Widgets

	function resetCreateCustomer()
	{
		$('.createcustomer').hide();
		KDF.hideWidget('sel_titlecreate');
		KDF.setVal('sel_titlecreate', 'Please select..');
		KDF.hideWidget('txt_firstnamecreate');
		KDF.setVal('txt_firstnamecreate', '');
		KDF.hideWidget('txt_surnamecreate');
		KDF.setVal('txt_surnamecreate', '');
		KDF.hideWidget('txt_dobcreate');
		KDF.setVal('txt_dobcreate', '');
		KDF.hideWidget('ahtm_whyweneeddob');
		KDF.setVal('txt_phonecreate', '');
		KDF.setVal('txt_emailcreate', '');
		KDF.setVal('txt_createpostcodesearch', '');
		KDF.hideWidget('txt_organisationcreate');
		KDF.setVal('txt_organisationcreate', '');
	}

//Finish: Reset Create Customer Widgets

//Start: Reset Manual Address Widgets

	function resetManualAddress()
	{
		KDF.hideSection('area_addressfields');
		KDF.setVal('txt_addressnumcreate', '');
		KDF.setVal('txt_addressline1create', '');
		KDF.setVal('txt_addressline2create', '');
		KDF.setVal('txt_addressline3create', '');
		KDF.setVal('txt_addressline4create', '');
		KDF.setVal('txt_addressline5create', '');
		KDF.setVal('txt_towncreate', '');
		KDF.setVal('txt_postcodecreate', '');
		KDF.hideSection('area_addressadded');
	}

//Finish: Reset Manual Address Widgets

//Start: Reset Customer Hidden Field Widgets

	function resetCustomerHiddenFields()
	{
		KDF.setVal('txt_customerid', '');
		KDF.setVal('txt_dob', '');
		KDF.setVal('txt_nameid', '');
		KDF.setVal('txt_anonymous', '');
		KDF.setVal('txt_email', '');
		KDF.setVal('txt_nameitemupdate', '');
		KDF.setVal('txt_title', '');
		KDF.setVal('txt_emailid', '');
		KDF.setVal('txt_customercode', '');
		KDF.setVal('txt_firstname', '');
		KDF.setVal('txt_emailitemupdate', '');
		KDF.setVal('txt_personpin', '');
		KDF.setVal('txt_surname', '');
		KDF.setVal('txt_phone', '');
		KDF.setVal('txt_organisationid', '');
		KDF.setVal('txt_organisation', '');
		KDF.setVal('txt_fullname', '');
		KDF.setVal('txt_phoneid', '');
		KDF.setVal('txt_addressitemupdate', '');
		KDF.setVal('txt_cusaddressid', '');
		KDF.setVal('txt_phoneitemupdate', '');
		KDF.setVal('txt_cusfulladdress', '');
		KDF.setVal('txt_cusaddressnumber', '');
		KDF.setVal('txt_cusaddressline1', '');
		KDF.setVal('txt_cusaddressline2', '');
		KDF.setVal('txt_cusaddressline3', '');
		KDF.setVal('txt_cusaddressline4', '');
		KDF.setVal('txt_cusaddressline5', '');
		KDF.setVal('txt_cusaddressline6', '');
		KDF.setVal('txt_custown', '');
		KDF.setVal('txt_cusuprn', '');
		KDF.setVal('txt_cuspostcode', '');
		KDF.setVal('txt_cusohmsuprn', '');
		KDF.setVal('txt_cusstreetid', '');
		KDF.setVal('txt_cususrn', '');
		setBriefDetails();
	}

//Finish: Reset Customer Hidden Field Widgets

//Start: Rehide Customer Search Results

	function rehideCustomerSearch()
	{
		KDF.hideSection('area_clickcomment');
		KDF.hideSection('area_search_results');
		KDF.hideWidget('customer_search_result');
		KDF.hideWidget('organisation_search_result');
		$('.housinghub').hide();
		$('.updatecustomer').hide();
		$('.createcustomer').hide();
		KDF.hideSection('area_addressfields');
		KDF.hideWidget('but_next_aboutyou');
		KDF.hideWidget('but_continue_anonymous');
		KDF.hideWidget('but_continue_customer');
		KDF.hideWidget('but_update_individual');
		KDF.hideWidget('but_update_organisation');
		KDF.hideWidget('but_create_individual');
		KDF.hideWidget('but_create_organisation');
		KDF.hideWidget('but_contact_history');
		KDF.hideWidget('but_additional_info');
		KDF.hideWidget('but_individual_not_found');
		KDF.hideWidget('but_organisation_not_found');
	}

//Finish: Rehide Customer Search Results

//Start: Set Create Customer Widget Values and Hide Customer Search and Update

	function setCreateCustomer()
	{
		KDF.showSection('area_clickcomment');
		KDF.setVal('ahtm_clickcomment', '<h3 id="NoCustomer">Customers not found, please create customer.</h3>');

		$('.searchcustomer').hide();
		$('.housinghub').hide();
		$('.updatecustomer').hide();
		$('.createcustomer').show();
		KDF.hideSection('area_address_clickcomment');
		KDF.hideSection('area_address_search_result');
		KDF.hideSection('area_addressfields');
		KDF.hideWidget('but_continue_anonymous');
		KDF.hideWidget('but_continue_customer');
		KDF.hideWidget('but_update_individual');
		KDF.hideWidget('but_update_organisation');
		KDF.hideWidget('but_create_individual');
		KDF.hideWidget('but_create_organisation');
		KDF.hideWidget('but_contact_history');
		KDF.hideWidget('but_additional_info');
		KDF.hideWidget('but_individual_not_found');
		KDF.hideWidget('but_organisation_not_found');
	}

//Finish: Set Create Customer Widget Values and Hide Customer Search and Update

//Start: Check to see if customer data needs inserting or updating

	function checkUpdateInsert()
	{
		//Start: Check Name - Should always be Update

		//if Name ID is blank
		if (KDF.getVal('txt_nameid') === '' || KDF.getVal('txt_nameid') === null || KDF.getVal('txt_nameid') === undefined)
		{
			KDF.setVal('txt_nameitemupdate', 'Update');
		}
		else
		{
			KDF.setVal('txt_nameitemupdate', 'Update');
		}

		//Finish: Check Name

		//Start: Check Address

		//if address id is blank
		if (KDF.getVal('txt_cusaddressid') === '' || KDF.getVal('txt_cusaddressid') === null || KDF.getVal('txt_cusaddressid') === undefined)
		{
			KDF.setVal('txt_addressitemupdate', 'Insert');
		}
		else
		{
			KDF.setVal('txt_addressitemupdate', 'Update');
		}

		//Finish: Check Address

		//Start: Check Phone

		//if Phone ID is blank
		if (KDF.getVal('txt_phoneid') === '' || KDF.getVal('txt_phoneid') === null || KDF.getVal('txt_phoneid') === undefined)
		{
			KDF.setVal('txt_phoneitemupdate', 'Insert');
		}
		else
		{
			KDF.setVal('txt_phoneitemupdate', 'Update');
		}

		//Finish: Check Phone

		//Start: Check Email

		//if email ID is blank
		if (KDF.getVal('txt_emailid') === '' || KDF.getVal('txt_emailid') === null || KDF.getVal('txt_emailid') === undefined)
		{
			KDF.setVal('txt_emailitemupdate', 'Insert');
		}
		else
		{
			KDF.setVal('txt_emailitemupdate', 'Update');
		}

		//Finish: Check Email
	}

//Finish: Check to see if customer data needs inserting or updating

//Start: Continue Enquiry Function

	function continueEnquiry()
	{
		agentparamsfunction(); 
		customerparamsfunction();
		window.location = (serverEnvironment + '/form/launch/' + KDF.getVal('txt_expectedform') + '?' + 'txt_expectedpage=' + KDF.getVal('txt_expectedpage') + '&txt_mandatory=' + KDF.getVal('txt_mandatory') + '&txt_searchtype=' + KDF.getVal('txt_searchtype') + agentparams + customerparams);
	}

//Finish: Continue Enquiry Function

//Finish: Customer Search Functions

//Start: Contact History Functions

//Start: Load Contact History Function

	function contactHistory(historyID)
	{
		showHistoryButtons();
		KDF.setVal('txt_view_history_of', historyID);
		KDF.custom('a_contacthistorytable', '', 'txt_view_history_of,txt_chreferencefilter,sel_chstatusfilter,sel_chtitlefilter', 'txt_view_history_of,txt_chreferencefilter,sel_chstatusfilter,sel_chtitlefilter', true, true, true);
	}

//Finish: Load Contact History Function

//Start: Show Switch History Buttons Function

	function showHistoryButtons()
	{
		KDF.showWidget('but_history_switch_to_person');
		KDF.showWidget('but_history_switch_to_property');
		KDF.showWidget('but_history_switch_to_street');
		if (KDF.getVal('txt_customerid') === '')
		{
			KDF.hideWidget('but_history_switch_to_person');
		}
		if (KDF.getVal('txt_propertyid') === '')
		{
			KDF.hideWidget('but_history_switch_to_property');
		}
		if (KDF.getVal('txt_streetid') === '')
		{
			KDF.hideWidget('but_history_switch_to_street');
		}
	}

//Finish: Show Switch History Buttons Function

//Finish: Contact History Functions

//Start: Fill Postcode Area

function postcodeslice()
{
	KDF.setVal('txt_postcodearea', KDF.getVal('txt_postcode').slice(0, 3));
}

//Finish: Fill Postcode Area

//Start: Set Channel Type

function setChannelType() {
if (KDF.getVal('txt_agentteam') === '07000000004') {
	if(['Burngreave','Burngreave - Telephone','Crystal Peaks', 'Crystal Peaks - Telephone', 'Darnall', 'Darnall - Telephone', 'Firth Park','Firth Park - Telephone', 'Chapeltown', 'Chapeltown - Telephone', 'Hillsborough', 'Hillsborough - Telephone', 'Manor Library', 'Manor Library - Telephone', 'Jordanthorpe', 'Jordanthorpe - Telephone', 'Low Edges', 'Low Edges - Telephone', 'Newfield Green', 'Newfield Green - Telephone', 'Stocksbridge', 'Stocksbridge - Telephone', 'Wordsworth Avenue', 'Wordsworth Avenue - Telephone', 'The Sheffield Property Shop'].includes(KDF.getVal('txt_agentlocation'))) {
		KDF.setVal('le_channel', 'face_to_face');
	} else {
		KDF.setVal('le_channel', 'voice_in');
	}
} else if (KDF.getVal('txt_agentteam') === '07000000000') {
	if(['Burngreave','Burngreave - Telephone','Crystal Peaks', 'Crystal Peaks - Telephone', 'Darnall', 'Darnall - Telephone', 'Firth Park','Firth Park - Telephone', 'Chapeltown', 'Chapeltown - Telephone', 'Hillsborough', 'Hillsborough - Telephone', 'Manor Library', 'Manor Library - Telephone', 'Jordanthorpe', 'Jordanthorpe - Telephone', 'Low Edges', 'Low Edges - Telephone', 'Newfield Green', 'Newfield Green - Telephone', 'Stocksbridge', 'Stocksbridge - Telephone', 'Wordsworth Avenue', 'Wordsworth Avenue - Telephone', 'The Sheffield Property Shop'].includes(KDF.getVal('txt_agentlocation'))) {
		KDF.setVal('le_channel', 'face_to_face');
	} else {
		KDF.setVal('le_channel', 'voice_in');
	}
} else if (KDF.getVal('txt_agentteam') === '07000000002') {
	KDF.setVal('le_channel', 'email_in');
} else if (KDF.getVal('txt_agentteam') === '07000000001') {
	KDF.setVal('le_channel', 'face_to_face');
} else {
	KDF.setVal('le_channel', 'voice_in');
}
}
//Finish: Set Channel Type

//Start: Time and Date

function setTimeDate()
{
	//Start: Establish Variables
	{
		today = new Date();
		year = today.getYear() + 1900;
		yearShort = year.toString();
		yearShort = yearShort.slice(2);
		month = today.getMonth() + 1;
		date = today.getDate();
		day = today.getDay();
		hour = today.getHours();
		minute = today.getMinutes();
		second = today.getSeconds();
		dateString = new Date().toISOString().slice(0, 10);
		
		//Start: Correct <10's
		{
			//Start: Month
			{
				if (month < 10)
				{
					month = '0' + month;
				}
			}
			//Finish: Month
			
			//Start: Date
			{
				if (date < 10)
				{
					date = '0' + date;
				}
			}
			//Finish: Date
			
			//Start: Hour
			{
				if (hour < 10)
				{
					hour = '0' + hour;
				}
			}
			//Finish: Hour
			
			//Start: Minute
			{
				if (minute < 10)
				{
					minute = '0' + minute;
				}
			}
			//Finish: Minute
			
			//Start: Second
			{
				if (second < 10)
				{
					second = '0' + second;
				} 
			}
			//Finish: Second
		}
		//Finish: Correct <10's
		
		ddmmyyyy = date + '/' + month + '/' + year;
		ddmmyy = date + '/' + month + '/' + yearShort;
		yyyymmdd = year + '-' + month + '-' + date;
		
		//Start: Written days of the week
		{
			switch(day)
			{
				case 1:
					dayOfWeek = 'Monday';
				break;
				
				case 2:
					dayOfWeek = 'Tuesday';
				break;
				
				case 3:
					dayOfWeek = 'Wednesday';
				break;
				
				case 4:
					dayOfWeek = 'Thursday';
				break;
				
				case 5:
					dayOfWeek = 'Friday';
				break;
				
				case 6:
					dayOfWeek = 'Saturday';
				break;
				
				case 0:
					dayOfWeek = 'Sunday';
				break;
			}
		}
		//Finish: Written days of the week
	}
	//Finish: Establish Variables
	
	//Start: Day of the Year (1-366)
	{
		dayOfYear = (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(today.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
	}
	//Finish: Day of the Year (1-366)
	
	//Start: Week of Year (1 - 52)
	{
		var first = new Date(today.getFullYear(),0,1);
		var dayms = 1000 * 60 * 60 * 24;
		var numday = ((today - first)/dayms);
		weekOfYear = Math.ceil((numday + first.getDay()+1) / 7) ; 
	}
	//Finish: Week of the Year (1 - 52)
	
	//Start: Week of Year 2 (1 - 53)
	{
		var first2 = new Date(today.getFullYear(),0,4);
		var dayms2 = 1000 * 60 * 60 * 24;
		var numday2 = ((today - first2)/dayms2);
		weekOfYear2 = Math.ceil((numday2 + first2.getDay()+1) / 7) ; 
	}
	//Finish: Week of Year 2 (1 - 53)
	
	return (today, year, yearShort, weekOfYear, weekOfYear2, dayOfYear, month, date, day, dayOfWeek, hour, minute, second, ddmmyyyy, ddmmyy, yyyymmdd);
}

//Finish: Time and Date

//Start: Accordion

accordion();

function accordion()
{
	accordionCycle('accordion','accordion2','accordion3','accordion4','accordion5','accordion6','accordion7','accordion8','accordion9','accordion10','searchaccordion','searchaccordion2','searchaccordion3','searchaccordion4','searchaccordion5');
}

function accordionCycle()
{
	
	for (var k = 0, j = arguments.length; k < j; k++)
	{
		var acc = document.getElementsByClassName(arguments[k]);
		for (var i = 0; i < acc.length; i++)
		{
			acc[i].addEventListener("click", function()
			{
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.display === "block")
				{
					panel.style.display = "none";
				}
				else
				{
					panel.style.display = "block";
				}
			});
		} 
	}
} 


//Finish: Accordion 

//Start: Top of Forms

//Start: Top of Form Buttons

	function resetTopFormButtons()
	{
		//Quick Links
		KDF.setVal('txt_navigationvalue', '0');
		$('.quicklinkbuttons').hide();

		//Hide Emergency
		KDF.setVal('txt_emergencyvalue', '0');
		$('.emergencybuttons').hide();
	}

//Finish: Top of Form Buttons

//Start: Service Updates
{
	function serviceUpdates()
	{
		if (KDF.getVal('txt_updatesvalue') === '0')
		{
			//Start: Updates Change
			{
				KDF.setVal('txt_updatesvalue', '1');
				$('.updates').show();
			}
			//Finish: Updates Change
			
			//Start: Navigation Change
			{
				KDF.setVal('txt_navigationvalue', '0');
				$('.quicklinkbuttons').hide();
			}
			//Finish: Navigation Change
			
			//Start: Emergency Change
			{
				KDF.setVal('txt_emergencyvalue', '0');
				$('.emergencybuttons').hide();
			}
			//Finish: Emergency Change
		}
		else
		if (KDF.getVal('txt_updatesvalue') === '1')
		{
			KDF.setVal('txt_updatesvalue', '0');
			$('.updates').hide();
		}
	}
}
//Finish: Service Updates

//Start: Navigation

	function navigation()
	{
		if (KDF.getVal('txt_navigationvalue') === '0')
		{
			//Start: Service Updates
			{
				KDF.setVal('txt_updatesvalue', '0');
				$('.updates').hide();
			}
			//Finish: Service Updates
			
			//Start: Navigation
			{
				KDF.setVal('txt_navigationvalue', '1');
				$('.quicklinkbuttons').show();
			}
			//Finish: Navigation

			//Start: Emergency
			{
				KDF.setVal('txt_emergencyvalue', '0');
				$('.emergencybuttons').hide();
			}
			//Finish: Emergency
		}
		else
		if (KDF.getVal('txt_navigationvalue') === '1')
		{
			KDF.setVal('txt_navigationvalue', '0');
			$('.quicklinkbuttons').hide();
		}
	}

//Finish: Navigation

//Start: CIH Navigation

	function cih()
	{
		if (KDF.getVal('txt_emergencyvalue') === '0')
		{
			//Start: Service Updates
			{
				KDF.setVal('txt_updatesvalue', '0');
				$('.updates').hide();
			}
			//Finish: Service Updates
			
			//Start: Navigation
			{
				KDF.setVal('txt_navigationvalue', '0');
				$('.quicklinkbuttons').hide();
			}
			//Finish: Navigation

			//Start: Emergency
			{
				KDF.setVal('txt_emergencyvalue', '1');
				$('.emergencybuttons').show();
			}
			//Finish: Emergency
			
			
		}
		else
		if (KDF.getVal('txt_emergencyvalue') === '1')
		{
			KDF.setVal('txt_emergencyvalue', '0');
			$('.emergencybuttons').hide();
		}
	}

//Finish: CIH Navigation

//Finish Top of Forms

//Start: Form Jump

function allParamsFormJump(formjump,branch)
{
	agentparamsfunction(); 
	customerparamsfunction();
	window.location = (serverEnvironment + '/form/launch/' + formjump + '?branch=' + branch + agentparams + customerparams);
}

//Finish: Form Jump

//Start: Finish Interaction

function finishInteraction()
{
	agentparamsfunction();
	window.location = (serverEnvironment + '/form/launch/a_menu?' + agentparams);
}

//Finish: Finish Interaction

//Start: Housing Save Function

function HousingSave()
{
	/* This could be updated in the future to include classifyType to do it in one call rather than multiple
	for instance if we're setting the values then saving it, have them just written in this function call
	if the values had already been set earlier and are now just being sent, then KDF.getVal would work for the params */

	agentLocation = KDF.getVal('txt_agentlocation');
	if(agentLocation.includes(' - Telephone'))
	{
		KDF.setVal('le_channel', 'voice_in');
	}
	KDF.save();
}
//Finish: Housing Save Function

//Start: Auto Close Case

function autoCloseCase()
{
	if (KDF.getVal('le_queue') === "Auto Close")
	{
		if (KDF.getVal('txt_addcasenotes') === '')
		{
			KDF.setVal('txt_casenote', "Case Completed by: " + KDF.getVal('txt_username'));
		}
		else
		{
			KDF.setVal('txt_casenote', "Final note added by: " + KDF.getVal('txt_username') + " - " + KDF.getVal('txt_addcasenotes'));
		}
		KDF.custom('a_autoclose', '', 'txt_reference,txt_casenote', 'txt_reference,txt_casenote', false, false, false);
	}
}

//Finish: Auto Close Case

//Start: Update Case

function updateNoAction(le_queue)
{
	KDF.setVal('le_queue', le_queue);
	KDF.setVal('txt_casenote', KDF.getVal('txt_username') + " has accessed the form but released no action taken");
	KDF.custom('a_casemanagementnoaction', '', 'txt_reference,le_queue,txt_casenote', 'txt_reference,le_queue,txt_casenote', false, false, false);
	KDF.showSuccess("Saving & Returning");
}

function updateSaveAndReturn(le_queue)
{
	KDF.setVal('le_queue', le_queue);
	KDF.setVal('txt_casenote', KDF.getVal('txt_username') + " added the following update - " + KDF.getVal('txta_hc_addcasenote'));
	KDF.custom('a_casemanagementsaveandreturn', '', 'txt_reference,le_queue,le_title,txt_casenote', 'txt_reference,le_queue,le_title,txt_casenote', false, false, false);
	KDF.showSuccess("Saving & Updating");
}

function updateSaveAndClose()
{
	KDF.setVal('txt_casenote', "Final note added by " + KDF.getVal('txt_username') + " - " + KDF.getVal('txta_hc_addcasenote'));
	KDF.custom('a_casemanagementsaveandclose', '', 'txt_reference,txt_casenote', 'txt_reference,txt_casenote', false, false, false);
	KDF.showSuccess("Saving & Closing");
}

//Finish: Update Case

//Start: Email Function

function sendEmail(email_to,email_body,email_subject,linkurl,linkLabel)
{
	setTimeDate();
	if (hour >= '0' && hour < '12')
	{
		KDF.setVal('txt_greeting', 'Good Morning');
	}
	else if (hour >= '12' && hour < '18')
	{
		KDF.setVal('txt_greeting', 'Good Afternoon');
	}
	else if (hour >= '18')
	{
		KDF.setVal('txt_greeting', 'Good Evening');
	}
	
	if (email_to !=='')
	{
		KDF.setVal('email_to', email_to);
	}
	if (email_subject !=='')
	{
		KDF.setVal('email_subject', email_subject);
	}
	
	if (linkurl !== undefined)
	{
		var url = '<a Title="Opens new tab or window" href=';
		var url2 = linkurl;
		var url3 = ' onClick="showPopup(this.href);return(false);" style="color:#0645AD" target="_blank">';
		var url4 = '';
		if (linkLabel !== undefined)
		{
			url4 = linkLabel;
		}
		else
		{
			url4 = linkurl;
		}
		var url5 = '</a>';
		KDF.setVal('txt_link', url + url2 + url3 + url4 + url5);
	}
	else
	{
		KDF.setVal('txt_link','');
	}
	if (email_body !=='')
	{
		KDF.setVal('txta_emailbody',KDF.getVal(email_body));
	}
	KDF.custom('email_generic','_KDF_save', 'email_from,email_to,email_cc,email_bcc,email_subject,txt_reference,txt_greeting,txta_emailbody','email_to,email_from',true,true,true);
}    	

function send_email(email_value, email_field, button_name, mainbody, link, linkDisplay) {
	const hours = new Date().getHours();
	KDF.setVal('txt_timecurrent', hours);
	if (hours >= '0' && hours < '12') {
		KDF.setVal('txt_greeting', 'Good Morning');
	} else if (hours >= '12' && hours < '18') {
		KDF.setVal('txt_greeting', 'Good Afternoon');
	} else if (hours >= '18') {
		KDF.setVal('txt_greeting', 'Good Evening');
	}

	if (email_value !=='') {
		if (mainbody === '' || mainbody === null || mainbody === undefined) {
			mainbody = KDF.getVal('txta_emailbody');
		}
		if (link !== '') {
			if (linkDisplay === '' || linkDisplay === null || linkDisplay === undefined) {
				linkDisplay = link;
			}
			var email_body = KDF.getVal('txt_greeting') + "<br/><br/>\
			Thanks for contacting Sheffield City Council regarding a Children's Travel Pass.\
			<br/><br/>" + mainbody + " " + "<a href=" + link + ">" + linkDisplay + "</a>\
			<br/><br/>Kind Regards<br/>Customer Services"
		} else {
			var email_body = KDF.getVal('txt_greeting') + "<br/><br/>\
			Thanks for contacting Sheffield City Council regarding a Children's Travel Pass.\
			<br/><br/>" + mainbody + " <br/><br/>Kind Regards<br/>Customer Services"
		}
		
		KDF.customdata('a_emailsend', 'dform_widget_button_' + button_name, true, true, {
			'email_to': email_value,
			'email_from': KDF.getVal('email_to'),
			'email_cc': KDF.getVal('email_cc'),
			'email_bcc': KDF.getVal('email_bcc'),
			'email_subject': KDF.getVal('email_subject'),
			'txta_emailbody': email_body
		});
		
		KDF.showSuccess('<font color="#4CAF50">✔</font> An Email has been sent');
	} else {
		KDF.showWarning('<font color="#ff9800">⚠</font> Please enter an email address');
		$('#dform_widget_' + email_field).addClass("dform_fielderror");
	}
}

//Finish: Email Function

//Start: Params

//Start: Agent Params

	function agentparamsfunction()
	{
		var useridfield = "&txt_userid=";
		var useridvalue = KDF.getVal('txt_userid');
		var usernamefield = "&txt_username=";
		var usernamevalue = KDF.getVal('txt_username');
		var agentteamfield = "&txt_agentteam=";
		var agentteamvalue = KDF.getVal('txt_agentteam');
		var agentlocationfield = "&txt_agentlocation=";
		var agentlocationvalue = KDF.getVal('txt_agentlocation');
		var agentparamsfunction = (useridfield + useridvalue + usernamefield + usernamevalue + agentteamfield + agentteamvalue + agentlocationfield + agentlocationvalue);
		return agentparams = agentparamsfunction;
	}

//Finish: Agent Params

//Start: Customer Params

	function customerparamsfunction()
	{
		var interactionidfield = "&txt_interactionid=";
		var interactionidvalue = KDF.getVal('txt_interactionid');
		var channelfield = "&le_channel=";
		var channelvalue = KDF.getVal('le_channel');
		var associatedobjecttypefield = "&le_associated_obj_type=";
		var associatedobjecttypevalue = KDF.getVal('le_associated_obj_type');
		var associatedobjectidfield = "&le_associated_obj_id=";
		var associatedobjectidvalue = KDF.getVal('le_associated_obj_id');
		var associatewithfield = "&txt_associatewith=";
		var associatewithvalue = KDF.getVal('txt_associatewith');
		var customeridfield = "&txt_customerid=";
		var customeridvalue = KDF.getVal('txt_customerid');
		var titlefield = "&txt_title=";
		var titlevalue = KDF.getVal('txt_title');
		var firstnamefield = "&txt_firstname=";
		var firstnamevalue = KDF.getVal('txt_firstname');
		var surnamefield = "&txt_surname=";
		var surnamevalue = KDF.getVal('txt_surname');
		var fullnamefield = "&txt_fullname=";
		var fullnamevalue = KDF.getVal('txt_fullname');
		var dobfield = "&txt_dob=";
		var dobvalue = KDF.getVal('txt_dob');
		var emailfield = "&txt_email=";
		var emailvalue = KDF.getVal('txt_email');
		var phonefield = "&txt_phone=";
		var phonevalue = KDF.getVal('txt_phone');
		var anonymousfield = "&txt_anonymous=";
		var anonymousvalue = KDF.getVal('txt_anonymous');
		var customerfulladdressfield = "&txt_cusfulladdress=";
		var customerfulladdressvalue = KDF.getVal('txt_cusfulladdress');
		var customeraddressnumberfield = "&txt_cusaddressnumber=";
		var customeraddressnumbervalue = KDF.getVal('txt_cusaddressnumber');
		var customeraddressline1field = "&txt_cusaddressline1=";
		var customeraddressline1value = KDF.getVal('txt_cusaddressline1');
		var customeraddressline2field = "&txt_cusaddressline2=";
		var customeraddressline2value = KDF.getVal('txt_cusaddressline2');
		var customeraddressline3field = "&txt_cusaddressline3=";
		var customeraddressline3value = KDF.getVal('txt_cusaddressline3');
		var customeraddressline4field = "&txt_cusaddressline4=";
		var customeraddressline4value = KDF.getVal('txt_cusaddressline4');
		var customeraddressline5field = "&txt_cusaddressline5=";
		var customeraddressline5value = KDF.getVal('txt_cusaddressline5');
		var customeraddressline6field = "&txt_cusaddressline6=";
		var customeraddressline6value = KDF.getVal('txt_cusaddressline6');
		var customertownfield = "&txt_custown=";
		var customertownvalue = KDF.getVal('txt_custown');
		var customerpostcodefield = "&txt_cuspostcode=";
		var customerpostcodevalue = KDF.getVal('txt_cuspostcode');
		var customeraddressidfield = "&txt_cusaddressid=";
		var customeraddressidvalue = KDF.getVal('txt_cusaddressid');
		var customercodefield = "&txt_customercode=";
		var customercodevalue = KDF.getVal('txt_customercode');
		var cusuprnfield = "&txt_cusuprn=";
		var cusuprnvalue = KDF.getVal('txt_cusuprn');
		var personpinfield = "&txt_personpin=";
		var personpinvalue = KDF.getVal('txt_personpin');
		var neighbourhoodofficerfield = "&txt_nbo=";
		var neighbourhoodofficervalue = KDF.getVal('txt_nbo');
		var neighbourhoodofficercontactfield = "&txt_nbocontact=";
		var neighbourhoodofficercontactvalue = KDF.getVal('txt_nbocontact');
		var managementareacodefield = "&txt_mgntareacode=";
		var managementareacodevalue = KDF.getVal('txt_mgntareacode');
		var propertytypefield = "&txt_propertytype=";
		var propertytypevalue = KDF.getVal('txt_propertytype');
		var branchfield = "&txt_branch=";
		var branchvalue = KDF.getVal('txt_branch');
		var letitlefield = "&le_title=";
		var letitlevalue = KDF.getVal('le_title');
		var eventfield = "&le_eventcode=";
		var eventvalue = KDF.getVal('le_eventcode');
		var queuefield = "&le_queue=";
		var queuevalue = KDF.getVal('le_queue');
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
		
		var customerparamsfunction = (interactionidfield + interactionidvalue + channelfield + channelvalue + associatedobjecttypefield + associatedobjecttypevalue + associatedobjectidfield + associatedobjectidvalue + associatewithfield + associatewithvalue + customeridfield + customeridvalue + titlefield + titlevalue + firstnamefield + firstnamevalue + surnamefield + surnamevalue + fullnamefield + fullnamevalue + dobfield + dobvalue + emailfield + emailvalue + phonefield + phonevalue + anonymousfield + anonymousvalue + customerfulladdressfield + customerfulladdressvalue + customeraddressnumberfield + customeraddressnumbervalue + customeraddressline1field + customeraddressline1value + customeraddressline2field + customeraddressline2value + customeraddressline3field + customeraddressline3value + customeraddressline4field + customeraddressline4value + customeraddressline5field + customeraddressline5value + customeraddressline6field + customeraddressline6value + customertownfield + customertownvalue + customerpostcodefield + customerpostcodevalue + customeraddressidfield + customeraddressidvalue + customercodefield + customercodevalue + cusuprnfield + cusuprnvalue + personpinfield + personpinvalue + neighbourhoodofficerfield + neighbourhoodofficervalue + neighbourhoodofficercontactfield + neighbourhoodofficercontactvalue + managementareacodefield + managementareacodevalue + propertytypefield + propertytypevalue + branchfield + branchvalue + letitlefield + letitlevalue + eventfield + eventvalue + queuefield + queuevalue + propertyidfield + propertyidvalue + addressidfield + addressidvalue + fulladdressfield + fulladdressvalue + addressnumberfield + addressnumbervalue + addressline1field + addressline1value + addressline2field + addressline2value + addressline3field + addressline3value + addressline4field + addressline4value + addressline5field + addressline5value + addressline6field + addressline6value + townfield + townvalue + postcodefield + postcodevalue + postcodeareafield + postcodeareavalue + uprnfield + uprnvalue + ohmsuprnfield + ohmsuprnvalue + nbofield + nbovalue + nbocontactfield + nbocontactvalue + mgntareacodfield + mgntareacodvalue + propertyclassfield + propertyclassvalue)
		return customerparams = customerparamsfunction;
	}

//Finish: Customer Params

//Finish: Params