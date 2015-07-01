var root = {
	"name" : "danilo",
	"children" : [ {
		"name" : "laranja",
		"value" : 5
	}, {
		"name" : "banana",
		"value" : 1
	}, {
		"name" : "tomate",
		"children" : [ {
			"name" : "pera",
			"value" : 2
		} ]
	} ]
};

var width = 600;
var height = 600;

var treemap = d3.layout.treemap().size([ width, height ]).padding(5);

var selection = d3.select(".treemap").attr("width", width + "px").attr(
		"height", height + "px").selectAll("rect.treemap-rect").data(
		treemap.nodes(root));

selection.enter().append("rect").attr("class", "treemap-rect").attr("x",
		function(d) {
			return d.x;
		}).attr("y", function(d) {
	return d.y;
}).attr("width", function(d) {
	return d.dx;
}).attr("height", function(d) {
	return d.dy;
});