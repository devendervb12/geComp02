
sap.ui.core.UIComponent.extend("ge.in.splitapp.Component", {
   metadata : {
	   manifest : "json"
   },
   init : function(){
	   sap.ui.core.UIComponent.prototype.init.apply(this);
	   
		var oRouter = this.getRouter().initialize();
	   
   }
});