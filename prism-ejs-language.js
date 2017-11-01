(function () {
	'use strict';

	if (typeof Prism === 'undefined') {
		console.log('Prism is not defined');
		return false;
	}

	if (!Prism.languages.markup || !Prism.languages.javascript) {
		console.log('prism-ejs-language required markup and javascript languages');
		return false;
	}

	Prism.languages.ejs = Prism.languages.extend('markup', {
		'comment': /(<%%?#)[\s\S]*?([-]?%%?>)/g,
		'punctuation': /(<%%?[-|=|_]?|[-|_]?%%?>)/g
	});

	Prism.languages.insertBefore('ejs', 'tag', {
		script: {
			pattern: /(<%%?[-|=|_]?)[\s\S]*?(?=[-|_]?%%?>)/i,
			lookbehind: !0,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}());
