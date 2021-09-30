

var MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = "200px";
function menutoggle() {
	if (MenuItems.style.maxHeight == "200px") {
		MenuItems.style.maxHeight = "0px";
	}
	else {
		MenuItems.style.maxHeight = "200px";
	}
};

menutoggle();