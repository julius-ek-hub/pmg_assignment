const completeHTML = (results, length) => `
<!DOCTYPE html>
<style>
:root{
	---default: #cccccc;
	---dark: #1e1e1e;
	---string: #CE9178;
	---notstring: yellow;
	---watch: #707070;
}
*{
	box-sizing: border-box;
}
body, html{
	height: 100%;
	margin: 0;
	background-color:var(---dark);
	overflow: hidden;
}
.result-container{
	width:100%;
	height: 100%;
	padding-left:10px;
	overflow:auto;
	color: var(---default);
	font-family: monospace;
}
.arrow{
  width: 0; 
  height: 0; 
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid var(---default);
  transition: 200ms transform;
}

.document-container{
	margin-left:20px;
}

.document-container.showing .arrow{
	transform: rotate(90deg);
}
.document-container>div:not(:first-child){
	display: none;
}
.document-container.showing>div:not(:first-child){
	display: flex;
}
.arrow-button{
	background-color: unset;
	margin-top: 10px;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	color: var(---default);
	cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
}
.arrow-button .arrow[showing="true"]{
	transform: rotate(90deg);
}
.line {
	white-space: nowrap;
}

</style>
<body>
<div class="result-container">
	<h2>${text(`Showing ${length} results</h2>`)}
	${line("[") + results + line("]")}
</div>;
<script>
function toggleVisibility(arrow){
	const parent = arrow.parentElement;

	if(parent.classList.contains('showing'))
		parent.classList.remove('showing');
	else 
	   parent.classList.add('showing')
}
</script>
</body>
</html>
`;

const line = (value, bg, ml = 0, p = "0px") => {
	return `<div class="line" style="background-color:${bg};margin-left:${ml};padding:${p}">${value}</div>`;
};

const text = (value, color = "var(---default)") => {
	return `<span style="color:${color}">${value}</span>`;
};

const documentContainer = (value, index) => {
	return `<div class="document-container ${
		index === 0 ? "showing" : ""
	}">${value}</div>`;
};

const toggleButton = (index) => {
	return `<button class='arrow-button' onclick='toggleVisibility(this)'>${index}<div class='arrow'></div></button>`;
};

module.exports = (results, highlight) => {
	const keyValueToHTML = ([key, value]) => {
		const isSortValue = key === highlight;
		return line(
			text(key + ":&nbsp;") +
				(typeof value === "string"
					? text(`'${value}'`, "var(---string)")
					: text(value, "var(---notstring)")) +
				"," +
				(isSortValue ? text("&nbsp;&nbsp;// <--- Watch", "var(---watch)") : ""),
			isSortValue ? "black" : "",
			"45px",
		);
	};

	const documentToHTML = (result, index) => {
		return documentContainer(
			toggleButton(index) +
				line("{", undefined, "30px") +
				Object.entries(result).map(keyValueToHTML).join("") +
				line("},", undefined, "30px"),
			index,
		);
	};

	return completeHTML(results.map(documentToHTML).join(""), results.length);
};
