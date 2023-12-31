const addCss = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

const mainCss = '@import url(https://fonts.googleapis.com/css2?family=Linefont:wght@300&family=Wavefont&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair:ital,opsz,wght@0,5..1200,300;0,5..1200,400;0,5..1200,500;0,5..1200,600;0,5..1200,700;0,5..1200,800;0,5..1200,900;1,5..1200,300;1,5..1200,400;1,5..1200,500;1,5..1200,600;1,5..1200,700;1,5..1200,800;1,5..1200,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);body,ol ol,ol ul,ul ol,ul ul{margin:0}blockquote,th{background-color:var(--citat-1)}body{font-family:Poppins;background-color:var(--pozadi);padding:12.5%;color:var(--main);font-size:1.2em;text-align:justify}@keyframes skok{from{bottom:0}to{bottom:.25em}}a[href]{color:var(--odkaz);text-decoration-thickness:2px}a[href]:hover{position:relative;animation:.1s cubic-bezier(.45,.05,.55,.95) 2 alternate skok}blockquote{border-left:var(--citat-2) 10px solid;margin-left:0;margin-right:0;padding:30px;text-align:left}h1{text-align:center}ul{list-style-type:"– "}ol ul,ul ul{list-style-type:"» "}ol{list-style-type:decimal}ol ol,ul ol{list-style-type:lower-latin}ol ol ol,ol ul ol,ul ol ol,ul ul ol{list-style-type:lower-roman}hr{border:0;border-bottom:2px dashed var(--odkaz);margin:0 12.5%}em code,i code{font-family:Linefont;font-style:normal}b code,strong code{font-family:Wavefont;font-weight:400}table{border-collapse:collapse;width:100%;margin:1em 0}td,th{border:1px var(--main) solid;padding:10px;vertical-align:top;text-align:left;max-width:50%;}@media print{:root{--main:black;--odkaz:black;--citat-1:silver;--citat-2:gray;--pozadi:white}img{filter:grayscale(100%)}body{margin:0;font-family:Playfair;font-size:12pt}h1{page-break-before:always;page-break-after:avoid}h1:first-of-type{page-break-before:auto}h1,h2,h3,h4{font-family:"Playfair Display"}blockquote{background-color:initial;border:1px solid var(--citat-2);border-left:var(--citat-2) 10px solid}table{page-break-inside:avoid}}@page{margin:1.5cm}'

addCss(mainCss)

const sepia = "@media screen{:root {--main: #000; --odkaz: #9A641E; --citat-1: #D9A956; --citat-2: var(--odkaz); --pozadi: oldlace;}";
const yellow = "@media screen{:root{--main: black; --odkaz: goldenrod; --citat-1: #FCEFB4; --citat-2: #F9DC5C; --pozadi: #FDF8E1;} a{text-shadow: 0.5px 0.5px 1px #0003;}";
const bw = ":root {--main: black; --odkaz: black; --citat-1: silver; --citat-2: gray; --pozadi: white;}";

const sepia_filter = "img{filter: sepia(100%);}}";
const yellow_filter = "img{filter: sepia(100%) saturate(175%) hue-rotate(5deg);}}";
const bw_filter = "img{filter: grayscale(100%);}";


const searchParams = new URLSearchParams(document.location.search);
const theme = searchParams.get("theme")

if ( theme == "sepia" ) {
	addCss(sepia)
}
else if ( theme == "yellow" ) {
	addCss(yellow)
}
else {
	addCss(bw)
}

if ( searchParams.has("filter") ) {
	if ( theme == "sepia" ) {
		addCss(sepia_filter)
	}
	else if ( theme == "yellow" ) {
		addCss(yellow_filter)
	}
	else {
		addCss(bw_filter)
	}
}
