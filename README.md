# BoxGrid
BoxGrid is a flexbox based grid system. Using flexbox we can gain several advantages over older grids. We can include features such as equal height columns, and column re-ordering.
The grid has been tested in the lastest Firefox, Chrome, Safari, IE11, 10 and 9 (although JS is required for IE9)

---

##The Grid

The grid is based on a maximum of 12 columns. A containing element must be placed around the columns with a class of boxgrid.

###Responsive Break-points

The grid uses 5 break-points to allow for varying layouts at different screen sizes. Apply the prefix followed by the number of column span required, to each column.

Styles for each break-point override the previous.

`Extra small | >= 300px | xs_`

`Small | >= 450px | sm_`

`Medium | >= 750px | md_`

`Large | >= 1200px | lg_`

`Extra large | >= 1600px | xl_`

##Usage

For all modern browsers (IE 10+, Firefox 28+, Chrome 21+, Safari 6.1+, Opera 12.1+) just include the boxgrid.min.css stylesheet.

For IE9 (and possibly below, although it hasn't been tested), include the boxgrid-ie.min.css stylesheet, the boxgrid-ie-fix.min.js file and a copy of jQuery (we use 1.11.2 although others should be fine) inside a conditional tag
```
<link href="../css/boxgrid.min.css" rel="stylesheet" type="text/css">
<!--[if IE 9]>
  <link href="../css/boxgrid-ie.min.css" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script type="text/javascript" src="../js/boxgrid-ie-fix.min.js"></script>
<![endif]--> 
```

##Documentation

For more information on how to use this grid, refer to the [documentation](http://code.ashneedham.co.uk/boxgrid)


## License
```
The MIT License (MIT)

Copyright (c) 2016 Ashley Needham, code.ashneedham.co.uk/boxgrid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
