hex = 255

function changeBackground () {

	for ( hex = 255; hex > 234; hex-- ) {
		document.body.style.background = "rgb("+hex+","+hex+","+hex+")";
	}
}

<BODY onload="changeBackground();">
