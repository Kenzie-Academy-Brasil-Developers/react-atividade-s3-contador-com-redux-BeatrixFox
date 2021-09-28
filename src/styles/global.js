import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: 0;
}
:root{

	--background-base: #6495ED;
	--background-section: #7B68EE;
	--color-button:#87CEEB;
	--color-fonts:#FFA500;
	--color-details: #FF4500;
	--color-font-title:#2F4F4F;
}
body{
	font-family: "PT Serif", serif;
	font-size: 1rem;
}

h1,h2,h3,h4{
	font-family: "Wallpoet", monospace;
	font-weight: 400;
}
button{
	cursor: pointer;
}

`;
