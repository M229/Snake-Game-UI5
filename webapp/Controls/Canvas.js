sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";

    return Control.extend("sap.ui.demo.basicTemplate.Controls.Canvas", {
        metadata: {
            properties: {
                "width": {
                    type: "string",
                    defaultValue: "578px"
                },
                "height": {
                    type: "string",
                    defaultValue: "200px"
                }
            },
            aggregations: {},
            events: {}
        },

        onInit: function () {
            
        },

        renderer: {
                render: function (oRm, oControl) {
                oRm.write("<canvas height=" + oControl.getHeight() + " width=" + oControl.getWidth() + " class= canvasClass" + ">");
                oRm.write("</ canvas>");
            }
        }



    });
});