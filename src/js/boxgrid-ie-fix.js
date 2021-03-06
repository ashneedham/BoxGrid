/*
----------------------------------
BoxGrid
----------------------------------
@Author: Ashley Needham
@Description: Javascript Fix for IE9
@Version: 1.01
@License: MIT
@URL: http://code.ashneedham.co.uk/boxgrid
*/
var boxgrid_application_number = 0;

function boxgrid_ie_fix ($) {
	var breakpointSizes = ['xs', 'sm', 'md', 'lg', 'xl'], applicableBreakpointSize = 0, browser_width = $(window).width(), colSizeTally = 0, colRow = new Array();
		
	if (browser_width >= 320) {
		applicableBreakpointSize = 0;
	};
	if (browser_width >= 450) {
		applicableBreakpointSize = 1;
	}; 
	if (browser_width >= 690) {
		applicableBreakpointSize = 2;
	};
	if (browser_width >= 999) {
		applicableBreakpointSize = 3;
	};
	if (browser_width >= 1200) {
		applicableBreakpointSize = 4;
	};

	function getColSize (classNames) {
		for (var i = applicableBreakpointSize; i >= 0; i--) {
			var colSize = findClass(classNames, breakpointSizes[i]);
			if (colSize > 0) {
				return parseInt(colSize);
			};
		};
		return 0;
	};

	function findClass (classNames, prefix) {
		var col = new RegExp(prefix + '_([1-9]|1[0-2])', 'i'), pre = new RegExp(prefix + '_pre_([1-9]|1[0-2])', 'i'), post = new RegExp(prefix + '_post_([1-9]|1[0-2])', 'i'), tally = 0;
		colMatch = col.exec(classNames);
		if (colMatch instanceof Array && colMatch.length === 2) {
			tally += parseInt(colMatch[1]);
		};
		preMatch = pre.exec(classNames);
		if (preMatch instanceof Array && preMatch.length === 2) {
			tally += parseInt(preMatch[1]);
		};
		postMatch = post.exec(classNames);
		if (postMatch instanceof Array && postMatch.length === 2) {
			tally += parseInt(postMatch[1]);
		};
		return tally;
	};

	function setColumnHeights() {
		// We have our row of columns. Make heights equal.
		if (colRow.length > 0) {
			var largestHeight = 0;
			for (var i = 0; i <= colRow.length - 1; i++) {
				if ($(colRow[i]).height() > largestHeight) {
					largestHeight = $(colRow[i]).height();
				};
			};
			for (var i = 0; i <= colRow.length - 1; i++) {
				$(colRow[i]).height(largestHeight);
			};
		};

		colRow = [];
		colSizeTally = 0;
	};

	function checkFirstLast(obj) {
		for (var i = applicableBreakpointSize; i >= 0; i--) {
			if (obj.hasClass(breakpointSizes[i] + '_first')) {
				obj.siblings().first().before(obj);
				return;
			};
			if (obj.hasClass(breakpointSizes[i] + '_last')) {
				obj.siblings().last().after(obj);
				return;
			};
		};
	};

	function checkReordering(obj) {
		for (var i = applicableBreakpointSize; i >= 0; i--) {
			var order = obj.attr('data-bg_' + breakpointSizes[i] + '_order');
			if (order !== undefined) {
				if (obj.index() < order - 1) {
					obj.siblings(':eq(' + parseInt(order - 1) + ')').after(obj);
				} else if (obj.index() > order - 1) {
					obj.siblings(':eq(' + parseInt(order - 1) + ')').before(obj);
				};
				return;
			};
		};
	};

	function checkVerticalAlignment(obj) {
		for (var i = applicableBreakpointSize; i >= 0; i--) {
			if (obj.hasClass(breakpointSizes[i] + '_top') || obj.hasClass(breakpointSizes[i] + '_middle') || obj.hasClass(breakpointSizes[i] + '_bottom')) {
				obj.wrapInner('<div class="boxgrid-ie-td"></div>');
				obj.wrapInner('<div class="boxgrid-ie-tr"></div>');
				obj.wrapInner('<div class="boxgrid-ie-table"></div>');
				return;
			};
		};
	};


	$('.boxgrid').each(function () {
		$(this).children('.col').each(function () {
			// Check for first and last
			checkFirstLast($(this));

			// Check for Re-Ordering
			checkReordering($(this));

			// Check for Vertical Alignment
			checkVerticalAlignment($(this));

			// Check for inline styles. Clear if our own
			if ($(this).attr('style') !== undefined) {
				if (boxgrid_application_number > 0) {
					if ($(this).hasClass('boxgrid-has-data')) {
						$(this).attr('style', $(this).data('boxgrid-inline-styles'));
					} else {
						$(this).attr('style', '');
					};
				} else {
					$(this).data('boxgrid-inline-styles', $(this).attr('style')).addClass('boxgrid-has-data');
				};
			};
			var colSize = getColSize($(this).attr('class'));
			// Check if colSizeTally will break after the next column
			if (colSizeTally + colSize > 12) {
				setColumnHeights();
			};
			colRow.push($(this));
			colSizeTally += colSize;
		});

		// do one final time
		setColumnHeights();
	});

	boxgrid_application_number++;

};

jQuery(document).ready(function ($) {
	boxgrid_ie_fix($);
	$(window).resize(function () {
		boxgrid_ie_fix($);
	});
});