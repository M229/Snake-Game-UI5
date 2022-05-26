sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"./model/models",
	"sap/ui/commons/layout/AbsoluteLayout"
	
], function(UIComponent, Device, models, AbsoluteLayout) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.basicTemplate.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// create the views based on the url/hash
			this.getRouter().initialize();

			var oImage = new sap.m.Image("id_image", {
				src: "images/Circle.jpg"
			});
			var oLayout = new AbsoluteLayout({
				width: "200px", //Adjust width
				height: "200px" //and height for container
			});
			console.log(oLayout);
			oLayout.addContent(oImage, { top: "0px", left: "0px" });
		}
	});
});