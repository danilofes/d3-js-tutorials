var data = [ 4, 8, 15, 16, 23, 42 ];

var width = 500;
var barHeight = 20;

var xScale = d3.scale.linear().domain([ 0, d3.max(data) ]).range([ 0, width ]);

var chart = d3.select(".chart").attr("width", width).attr("height",
		barHeight * data.length);

function onDataChange(data) {
	var bars = chart.selectAll("g").data(data);

	var newBars = bars.enter().append("g").attr("transform", function(d, i) {
		return "translate(0," + i * barHeight + ")";
	});

	newBars.append("rect").attr("width", xScale).attr("height", barHeight - 1);

	newBars.append("text").attr("x", function(d) {
		return xScale(d) - 3;
	}).attr("y", barHeight / 2).attr("dy", ".35em").text(function(d) {
		return d;
	});
}

onDataChange(data);