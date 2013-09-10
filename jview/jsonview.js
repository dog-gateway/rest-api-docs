/**
 * @author Benjamin Hollis
 * 
 * This component provides a stream converter that can translate from JSON to
 * HTML. It is compatible with Firefox 3 and up, since it uses many components
 * that are new to Firefox 3.
 */

/*
 * The JSONFormatter helper object. This contains two major functions,
 * jsonToHTML and errorPage, each of which returns an HTML document.
 */
function JSONFormatter() {
}

JSONFormatter.prototype = {
	htmlEncode : function(t) {
		return t != null ? t.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
	},

	// Completely escape strings, taking care to return common escape codes to
	// their short forms
	jsString : function(s) {
		// the JSON serializer escapes everything to the long-form \uXXXX
// escape code. This is a map of characters to return to the short-escaped
		// form after escaping.
		var has = {
			'\b' : 'b',
			'\f' : 'f',
			'\r' : 'r',
			'\n' : 'n',
			'\t' : 't'
		}, ws;
		for (ws in has) {
			if (-1 === s.indexOf(ws)) {
				delete has[ws];
			}
		}

		// The old nsIJSON can't encode just a string...
		s = JSON.stringify({
			a : s
		});
		s = s.slice(6, -2);

		for (ws in has) {
			s = s.replace(new RegExp('\\\\u000' + (ws.charCodeAt().toString(16)), 'ig'), '\\' + has[ws]);
		}

		return this.htmlEncode(s);
	},

	decorateWithSpan : function(value, className) {
		return '<span class="' + className + '">' + this.htmlEncode(value) + '</span>';
	},

	// Convert a basic JSON datatype (number, string, boolean, null, object,
	// array) into an HTML fragment.
	valueToHTML : function(value) {
		var valueType = typeof value;

		var output = "";
		if (value == null) {
			output += this.decorateWithSpan('null', 'null');
		} else if (value && value.constructor == Array) {
			output += this.arrayToHTML(value);
		} else if (valueType == 'object') {
			output += this.objectToHTML(value);
		} else if (valueType == 'number') {
			output += this.decorateWithSpan(value, 'num');
		} else if (valueType == 'string') {
			if (/^(http|https|file):\/\/[^\s]+$/i.test(value)) {
				output += '<a href="' + value + '"><span class="q">"</span>' + this.jsString(value) + '<span class="q">"</span></a>';
			} else {
				output += '<span class="string">"' + this.jsString(value) + '"</span>';
			}
		} else if (valueType == 'boolean') {
			output += this.decorateWithSpan(value, 'bool');
		}

		return output;
	},

	// Convert an array into an HTML fragment
	arrayToHTML : function(json) {
		var hasContents = false;
		var output = '';
		var numProps = 0;
		for ( var prop in json) {
			numProps++;
		}

		for ( var prop in json) {
			hasContents = true;
			output += '<li>' + this.valueToHTML(json[prop]);
			if (numProps > 1) {
				output += ',';
			}
			output += '</li>';
			numProps--;
		}

		if (hasContents) {
			output = '[<ul class="array collapsible">' + output + '</ul>]';
		} else {
			output = '[ ]';
		}

		return output;
	},

	// Convert a JSON object to an HTML fragment
	objectToHTML : function(json) {
		var hasContents = false;
		var output = '';
		var numProps = 0;
		for ( var prop in json) {
			numProps++;
		}

		for ( var prop in json) {
			hasContents = true;
			output += '<li><span class="prop"><span class="q">"</span>' + this.jsString(prop) + '<span class="q">"</span></span>: '
					+ this.valueToHTML(json[prop]);
			if (numProps > 1) {
				output += ',';
			}
			output += '</li>';
			numProps--;
		}

		if (hasContents) {
			output = '{<ul class="obj collapsible">' + output + '</ul>}';
		} else {
			output = '{ }';
		}

		return output;
	},

	// Convert a whole JSON value / JSONP response into a formatted HTML
	// document
	jsonToHTML : function(json, callback, uri) {
		var output = this.valueToHTML(json);

		if (callback) {
			output = '<div class="callback">' + callback + '(</div>' + output + '<div class="callback">)</div>';
		}
		return output;
	}
};

// work on json

function displayJson(elid, data) {
	formatter = new JSONFormatter();
	$('#' + elid).html(formatter.jsonToHTML(data, null));

	function collapse(evt) {
		var collapser = evt.target;

		var target = collapser.parentNode.getElementsByClassName('collapsible');

		if (!target.length) {
			return;
		}

		target = target[0];

		if (target.style.display == 'none') {
			var ellipsis = target.parentNode.getElementsByClassName('ellipsis')[0];
			target.parentNode.removeChild(ellipsis);
			target.style.display = '';
			collapser.innerHTML = '-';
		} else {
			target.style.display = 'none';

			var ellipsis = document.createElement('span');
			ellipsis.className = 'ellipsis';
			ellipsis.innerHTML = ' &hellip; ';
			target.parentNode.insertBefore(ellipsis, target);
			collapser.innerHTML = '+';
		}
	}

	function addCollapser(item) {
		// This mainly filters out the root object (which shouldn't be
		// collapsible)
		if (item.nodeName != 'LI') {
			return;
		}

		var collapser = document.createElement('div');
		collapser.className = 'collapser';
		collapser.innerHTML = '-';
		collapser.addEventListener('click', collapse, false);
		item.insertBefore(collapser, item.firstChild);
	}

	$('#' + elid + ' .collapsible').each(function(i, el) {
		addCollapser(el.parentNode);
	});
	// var items = document.getElementsByClassName('collapsible');
	// for ( var i = 0; i < items.length; i++) {
	// addCollapser(items[i].parentNode);
	// }

};

// This used to use jQuery, but was rewritten in plan DOM for speed and to get
// rid of the jQuery dependency.
document.addEventListener('DOMContentLoaded', function() {
	// Click handler for collapsing and expanding objects and arrays
	function collapse(evt) {
		var collapser = evt.target;

		var target = collapser.parentNode.getElementsByClassName('collapsible');

		if (!target.length) {
			return;
		}

		target = target[0];

		if (target.style.display == 'none') {
			var ellipsis = target.parentNode.getElementsByClassName('ellipsis')[0];
			target.parentNode.removeChild(ellipsis);
			target.style.display = '';
			collapser.innerHTML = '-';
		} else {
			target.style.display = 'none';

			var ellipsis = document.createElement('span');
			ellipsis.className = 'ellipsis';
			ellipsis.innerHTML = ' &hellip; ';
			target.parentNode.insertBefore(ellipsis, target);
			collapser.innerHTML = '+';
		}
	}

	function addCollapser(item) {
		// This mainly filters out the root object (which shouldn't be
		// collapsible)
		if (item.nodeName != 'LI') {
			return;
		}

		var collapser = document.createElement('div');
		collapser.className = 'collapser';
		collapser.innerHTML = '-';
		collapser.addEventListener('click', collapse, false);
		item.insertBefore(collapser, item.firstChild);
	}

	var items = document.getElementsByClassName('collapsible');
	for ( var i = 0; i < items.length; i++) {
		addCollapser(items[i].parentNode);
	}
}, false);