sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";

	return Control.extend("sap.ui.demo.basicTemplate.Custom.Rectangle", {

		metadata: {
			properties: {
				"width": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "300px"
				},
				"height": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "300px"
				},
				"text": {
					type: "string",
				}
				
			},
			aggregations: {},
			events: {
				"hover": {}
			}
		},
		renderer: function (oRm, oControl) {
			// oRm.write("<div>");
			
			oRm.addStyle("width", oControl.getProperty("width"));
			// oRm.addStyle("height", oControl.getProperty("height"));
			// oRm.writeStyles();
			// oRm.write(">");
			oRm.write("<text ");
			oRm.addStyle("width", oControl.getProperty('width'));
			oRm.addStyle("height", oControl.getProperty('height'));
			oRm.writeStyles();
			oRm.write(">");
			oRm.write(oControl.getProperty('text'));
			oRm.write("</text>");
			// oRm.write("</div>");

			
		}
	});
});