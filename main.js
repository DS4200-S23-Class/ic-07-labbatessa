const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const data1 = [55000, 48000, 27000, 66000, 90000];

const FRAME1 = d3.select("#vis1")
                  .append("svg")
	                .attr("height", FRAME_HEIGHT)
	                .attr("width", FRAME_WIDTH)
	                .attr("class", "frame");

FRAME1.selectAll("points")
	  .data(data1)
	  .enter()
	  .append("circle")
	    .attr("cx", MARGINS.left)
	    .attr("cy", (d) => { return (d + MARGINS.top); })
	    .attr("r", 20)
	    .attr("class", "point");
