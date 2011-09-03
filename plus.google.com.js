jQuery(document).ready(function() {
	// Hide everything mentioning certain key words from a certain user.
	var hider = function() {
		var el = jQuery('a[href="/102780726906835902473"]').parentsUntil('div.md.gi')
		el.each(function() {
			var t = jQuery(this)
			if(/Hung out|HANGOUT|eBay/i.test(t.text())) t.hide();
		});
	}

	setInterval(hider, 1000);
});
