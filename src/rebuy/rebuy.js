<script>
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
</script>

<!-- Hosted Library script file on CDN for free -->
<script src="https://cdn.finsweet.com/files/cmslibrary-v1.8.js"></script>
<script>
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
</script>




<!--Link + acrtive Filter-->
<script>
$(document).ready(function(){
   if (window.location.hash){
      var hash = window.location.hash.substring(1);
      if (hash == "ankuendigungen"){
         document.getElementById("ankuendigungen").click();
      }
     if (hash == "finanzen"){
       document.getElementById("finanzen").click();
     }
     if (hash == "nachhaltigkeit"){
       document.getElementById("nachhaltigkeit").click();
     }
     if (hash == "technologie"){
       document.getElementById("technologie").click();
     }
     if (hash == "unternehmen"){
       document.getElementById("unternehmen").click();
     }
     
   }
});
</script>


<!--Load More Button-->
<script src="https://cdn.jsdelivr.net/npm/@finsweet/cms-library@1/cms-library.js"></script>

<script>
// immediately/self invoked function. This function executes right away
(function() {
  // create a new Library instance and store it in a variable called "customBlogPosts"
  var fsMagic = new FsLibrary('.c-news-collection')

  // run the loadmore Library component on your instance
  fsMagic.loadmore({
    button: ".c-loadmore-news", // class of Webflow Pagination button
    resetIx: true, // adds Webflow interactions to newly loaded item
    animation: {
      enable: true,
      duration: .3,
      easing: 'ease',
      effects: 'fade'
    }
  })

})();
</script>


<!--show news amount-->
<script>

blogNumber = $('.c-count-all').length;
$('.c-news-amount').text(blogNumber);

</script>
<!-- end show news amount-->