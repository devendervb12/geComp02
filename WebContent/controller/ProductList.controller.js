sap.ui.controller("ge.in.splitapp.controller.ProductList",{
	onInit : function(){
		var serviceURL = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_GE02_SRV";
		var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
		this.getView().setModel(oModel);
	},
	onProductDetails : function(){
		//navigate to Product Details	
	this.getOwnerComponent().getRouter().navTo("prodDtl");	
	},
	onItemPress : function(oEvent){
		//debugger;
		var productID = oEvent.getSource().getTitle();
		
		this.getOwnerComponent().getRouter().navTo("prodDtl", {id : productID}
		);
	}
});