console.log(items)

var items = document.querySelectorAll('.date');
  var dateNum = document.querySelectorAll('.dateNum');
  const dates = [];
  
  for (var i = 0; i < items.length; i++) {
    dates.push(new Date(items[i].innerText));
    dateNum[i].textContent = dates[i].getTime();
	}
  
  
$('.c-filter-reset').on('click', function() {

	var inputStart = document.getElementById('startdate')
  var inputEnd = document.getElementById('enddate')

  inputStart.type='text';
  inputEnd.type ='text';
  inputStart.value ='Von';
  inputEnd.value = 'Bis';
	

});

//$(".c-range-filter_form").click(function() {
 // $("#datefilter")[0].click();
//});

function SetInputType() {
  var inputStart = document.getElementById('startdate')
  var inputEnd = document.getElementById('enddate')

  inputStart.type='date';
  inputEnd.type ='date';
}

function setRangeFilter() {
  var startdate = document.getElementById('startdate');
  var enddate = document.getElementById('enddate');
	var startdateNum = startdate.valueAsNumber;
  var enddateNum = enddate.valueAsNumber;
  var rangeFilter = $('#datefilter')
  var items = document.querySelectorAll('.date');
  
  var maxDate=new Date();
  //var minDate=new Date(Math.min.apply(null,dates));
  var maxDateNum = maxDate.getTime();
  var minDateNum = 0;
  console.log(maxDateNum)
  //console.log(minDateNum)
  
  //console.log(enddate)
  //console.log(startdate)
  //console.log(enddate.value)
  //console.log(startdate.value)
  //var filter = startdateNum + '-' + enddateNum;

   if (startdate.value == "") {
   
    console.log("nur startdate fehlt")
   	var filter = minDateNum + '-' + enddateNum;

    rangeFilter.text(filter);
    rangeFilter.attr("filter-by", filter);
    $("#datefilter")[0].click();
    //console.log(filter)
    //console.log($("#datefilter")[0])
    
 	}
    
  else if (enddate.value == "") {
    console.log("nur enddate fehlt")
   	var filter = startdateNum + '-' + maxDateNum;

    rangeFilter.text(filter);
    rangeFilter.attr("filter-by", filter);
    $("#datefilter")[0].click();
    console.log(filter)
    console.log($("#datefilter")[0])
    
 	}
    
  else if (enddate.value != "" && startdate.value != ""){
  	console.log("beide dates vorhanden")
  	var filter = startdateNum + '-' + enddateNum;

    rangeFilter.text(filter);
    rangeFilter.attr("filter-by", filter);
    $("#datefilter")[0].click();
    console.log(filter)
    console.log($("#datefilter")[0])
	}
  
  else if (enddate.value == "" && startdate.value == ""){
  	console.log("kein date")
  	var filter = minDateNum + '-' + maxDateNum;

    rangeFilter.text(filter);
    rangeFilter.attr("filter-by", filter);
    $("#datefilter")[0].click();
    console.log(filter)
    console.log($("#datefilter")[0])
	}
  
}

<script src="https://cdn.finsweet.com/files/cmslibrary-v1.8.js"></script>

(function() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	var projectsGrid = new FsLibrary('.c-news-collection')
  
	// define our filter group(s)
	var myFilters = [
  {
  	filterWrapper: ".c-search-parent-multi",
		filterType: "multi"
	},
  {
		filterWrapper: ".c-filter-wrapper",
		filterType: "exclusive",
    filterByClass:".dateNum",
    filterRange: true
	}
	]

 // run filter on our instance
	projectsGrid.filter({
		filterArray: myFilters, // the filter group name we defined
    activeClass: 'fltr-active', // the active class we give to our buttons
    filterReset:'.c-filter-reset', // reset all active filter button  
		animation: {
			enable: true,
			duration: 200,
			easing: 'ease-out',
			effects: 'fade translate(0px,20px)'
			}
  })
})();