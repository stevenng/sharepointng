/** ================================================================
	*	sharepointng.js v0.3 - Steve Ng
	*	============================================================ **/

(function(){

	/**
		*	Setup
		*/
	var el = document.documentElement; // <html> element

	var sitesObj = [
		{
			'class': 'ng-blog',
			'path':  '/blog/'
		},
		{
			'class': 'ng-collaborate',
			'path':  '/collaborate/'
		},
		{
			'class': 'ng-communityportal',
			'path':  '/communityportal/'
		},
		{
			'class': 'ng-department',
			'path':  '/department/'
		},		
		{
			'class': 'ng-knowledgecenter',
			'path':  '/knowledgecenter/'
		},
		{
			'class': 'ng-personal',
			'path':  '/personal/'
		},
		{
			'class': 'ng-search',
			'path':  '/search/'
		}
	]; 

	var sectionsObj = [
		{
			'class': 'ng-lists',
			'path':  '/lists/'
		},
		{
			'class': 'ng-pages',
			'path':  '/pages/'
		},
		{
			'class': 'ng-system',
			'path':  '/_layouts/'
		}
	];

	var pagesObj = [
		{
			'class': 'ng-allitems',
			'path':  '/allitems.aspx'
		},
		{
			'class': 'ng-default',
			'path':  '/default.aspx'
		},
		{
			'class': 'ng-lists',
			'path':  '/viewlsts.aspx'
		},
		{
			'class': 'ng-person',
			'path':  '/person.aspx'
		},
		{
			'class': 'ng-settings',
			'path':  '/settings.aspx'
		},
		{
			'class': 'ng-404',
			'path':  '/pagenotfounderror.aspx'
		}
	];

	/**
		* URL variables
		*/
	var url  			 = window.location.href.toLowerCase();
	var protocol 	 = window.location.protocol;
	var host			 = window.location.host;
	var pathname	 = window.location.pathname.toLowerCase();
	var className  = '';
	var classArray = [];

	/**
		* Detection functions
		*/
	function modeType(){
		// Determine if page is in edit mode
		var displayModeName = document.getElementById('MSOSPWebPartManager_DisplayModeName').value; // Browse or Design

		var inDesignMode = document.getElementById('MSOLayout_InDesignMode').value; // 1 or blank
		if (inDesignMode == '1') {
			// edit mode
			className = 'ng-edit-mode';
		} else {
			// not in edit mode
			className = 'ng-browse-mode';
		}
		
		var wikiEditMode = document.getElementById('_wikiPageMode');
		if (wikiEditMode != null) {
			if (wikiEditMode.value == 'Edit') {
				// edit mode
				className = 'ng-wiki-edit-mode';
			} else {
				// not in edit mode
				className = 'ng-wiki-browse-mode';
			}
		}

		classArray.push(className);
	}

	function browserType(){
		// Determine landing page and assign class names
		if(navigator.userAgent.indexOf("MSIE 10.0") != -1) {
			className = 'ng-ie10';
		}
		else if (navigator.userAgent.indexOf("Chrome") != -1) {
			className = 'ng-chrome';
		}

		classArray.push(className);
	}

	function deviceType(){

		// Determine landing page and assign class names
		if(navigator.userAgent.indexOf("iPhone") != -1) {
			className = 'ng-iPhone';
		}
		else if (navigator.userAgent.indexOf("Android") != -1) {
			className = 'ng-android';
		}

		classArray.push(className);
	}

	function siteType(){
		for(var i=0; i<sitesObj.length; i++) {
			var classname = sitesObj[i].class;
			var pathfile 	= sitesObj[i].path;

			addClassToArray(classname, pathfile);
		}
	}

	function sectionType(){
		for(var i=0; i<sectionsObj.length; i++) {
			var classname = sectionsObj[i].class;
			var pathfile 	= sectionsObj[i].path;

			addClassToArray(classname, pathfile);
		}
	}

	function pageType(){
		for(var i=0; i<pagesObj.length; i++) {
			var classname = pagesObj[i].class;
			var pathfile 	= pagesObj[i].path;

			addClassToArray(classname, pathfile);
		}
	}

	/**
		* Helper functions
		*/
	function addClassToArray(classname, pathfile){
		if(pathname.indexOf(pathfile) != -1) {
			classArray.push(classname);
		}
	}

	function addClassName(className){
		// Add Class Identifiers
		if(el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	function run(){
		// Types
		modeType();
		browserType();
		deviceType();
		siteType();
		sectionType();
		pageType();

		for(var i=0; i<classArray.length; i++){
			addClassName(classArray[i]);
		}
	}

	/**
		*	Execute
		*/
	run();

})();
