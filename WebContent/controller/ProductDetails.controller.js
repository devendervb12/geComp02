sap.ui.controller("ge.in.splitapp.controller.ProductDetails", {
	
	
	onInit : function(){
		var oRouter = this.getOwnerComponent().getRouter(this);
	/*	
		oRouter.getRoute("prodDtl").attachPatternMatched(function(oEvent){
			debugger;
			var productID = oEvent.getParameters().arguments.id;
			
			var oModel = new sap.ui.model.odata.v2.ODataModel("proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_GE02_SRV");
		     this.getView().setModel(oModel);
		            
		      // Odata read  
		     this.getView().byId("ObjectHeader").bindElement("/ProductSet('"+productID+"')");
		 
		},this);*/
		//this
	},
	onCreate : function(){
		
		var oDialog = new sap.m.Dialog({
			title : "Add Product",
			content : [
				new sap.m.Label({ text : "ProductID"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Category"}),
				new sap.m.Input()
			],
			endButton : new sap.m.Button({ text : "save and Close",
			press : function(oEvent){
				//grab the data from fields
				var data = {
						ProductID : oEvent.getSource().getParent().getContent()[1].getValue(),
						Name : oEvent.getSource().getParent().getContent()[3].getValue(),
						Category : oEvent.getSource().getParent().getContent()[5].getValue()
						
				}
				//debugger;
				var serviceURL="proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_GE02_SRV/";
				var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL); 
				oModel.setSizeLimit(255);
				oModel.create("/ProductSet", data, {
					success : function(){
						sap.m.MessageToast.show("Data Created");
						oDialog.close();
					},
					error : function(){
						sap.m.MessageToast.show("Data not created");
					}
				})
			}	
			})
			
		});
		
		this.getView().addDependent(oDialog);
		oDialog.open();
	}
})
















