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