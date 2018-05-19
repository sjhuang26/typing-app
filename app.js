(function() {
	var keys = {
		leftHand: "qwertasdfgzxcvb",
		rightHand: "yuiophjklnm"
	};
	var getHand = x => {
		for (var i = 0; i < keys.leftHand.length; i++)
			if (x == keys.leftHand.charAt(i)) return "left";
		for (var i = 0; i < keys.rightHand.length; i++)
			if (x == keys.rightHand.charAt(i)) return "right";
		return "none";
	};

	var $ = a => document.getElementById(a);
	var page = new Property("set-text");
	var text = "";

	page.enterListener = v => {
		$("page__set-text").style.display = (v == "set-text" ? "block" : "none");
		$("page__type").style.display = (v == "type" ? "block" : "none");
		if (v == "set-text") {
			$("set-text-input").value = text;
		}
		if (v == "type") {
			var $e = $("typing-text");
			while ($e.firstChild) {
				$e.removeChild($e.firstChild);
			}
			for (var i = 0; i < text.length; i++) {
				var c = text.charAt(i);
				var $x = document.createElement("span");
				var hand = getHand(c);
				if (hand == "left") $x.classList.add("char--red");
				if (hand == "right") $x.classList.add("char--blue");
				$x.appendChild(document.createTextNode(c));
				$e.appendChild($x);
			}
		}
	};
	$("nav__set-text").addEventListener("click", () => {
		page.setValue("set-text");
	});
	$("nav__type").addEventListener("click", () => {
		text = $("set-text-input").value;
		page.setValue("type");
	});

	page.init();
})();