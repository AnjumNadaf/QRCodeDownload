sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("qrcodedownload.controller.View1", {
			onInit: function () {
				var SCAC = "A1";
				var TRAILER = "11";
				var SHIPMENT = "12";
				var SHIPPER = "abc1";
				var SHIPTO = "abc2";
				var ORDDATE = "20-01-2018";
				var BOL = "Bold";
				var PRODBATCH = "value";
				var SHIPQTY = "10";
				var qrurl = 'http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=SCAC:' + SCAC + '/TRAILER:' + TRAILER + '/SHIPMENT:' +
					SHIPMENT + '/SHIPPER:' + SHIPPER + '/SHIPTO:' + SHIPTO + '/ORDDATE:' + ORDDATE + '/BOL:' + BOL + '/PRODBATCH:' + PRODBATCH +
					'/SHIPQTY:' + SHIPQTY + '';
	
				this.byId("qrImageId").setSrc(qrurl);
			},



			showhide: function(){
				debugger;
				 
			// 	var fcid = this.getView().byId("FC7");
			// 	//fcid.visibility = "hidden";
			// 	$('#FC7').css("visibility","hidden");
			// 	fcid.addStyleClass("hiddenObject");
			// 	var GenricTile = this.getView().byId("genericTile");
			// 	GenricTile.addStyleClass("setbgcolor");
			$(document).ready(function() {
				$("#FC7").css("font-size","35px");
			  });
			 },
            


			onButtonPress: function() {
				debugger;
				
				var qrurl = this.getView().byId("qrImageId").getSrc();
				var Spliturl = qrurl;
			var split = Spliturl.slice(0, 169);
			var Parameters = Spliturl.split("chl=");
			var values = Parameters[1];
			var Fianlvalues = values.split("/");
	
	/* ------- URL converstion to base64_data ------*/
			
				var convertImgToDataURLviaCanvas = function(url, callback) {
				  var img = new Image();
					   img.crossOrigin = 'Anonymous';
					   img.onload = function() {
				
				var canvas = document.createElement('CANVAS');
			  var ctx = canvas.getContext('2d');
			  var dataURL;
			  canvas.height = this.height;
			  canvas.width = this.width;
			  ctx.drawImage(this, 0, 0);
			  dataURL = canvas.toDataURL();
			  callback(dataURL);
			  canvas = null;
			};
			img.src = url;
			};
	
	convertImgToDataURLviaCanvas(split, function(base64_data) {
			console.log(base64_data);
			var sometext1 = "QRCode and it's Veriables";
			var sometext = Fianlvalues;
			var pdf = new jsPDF();
	
			pdf.addImage(base64_data, 'JPEG', 2, 90, 70, 70);
			pdf.text(70, 10, sometext1);
			pdf.text(5, 30, sometext);
	
			pdf.save('Test.pdf');
				});
	
			}
			
               


		});
	});
