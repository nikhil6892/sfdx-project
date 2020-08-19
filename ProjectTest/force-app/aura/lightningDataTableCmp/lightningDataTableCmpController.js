({
    /*
     * This finction defined column header
     * and calls getAccounts helper method for column data
     * editable:'true' will make the column editable
     * */
doInit : function(component, event, helper) {        
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', editable:'true', type: 'text', sortable: true},
            {label: 'TestNumber ', fieldName: 'TestNumber__c', editable:'true', type: 'text', sortable: true},
            {label: 'Website', fieldName: 'Website', editable:'true', type: 'url'},
            {label: 'Phone', fieldName: 'Phone', editable:'true', type: 'text', sortable: true},
            {label: 'Industry', fieldName: 'Industry', editable:'true', type: 'picklist', sortable: true}
        ]);        
        helper.getAccounts(component, helper);
    },

    /*
     * This function is calling saveDataTable helper function
     * to save modified records
     * */
    onSave : function (component, event, helper) {
        helper.saveDataTable(component, event, helper);
    },
    updateColumnSorting: function (cmp, event, helper) {
        /*var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        console.log("Here1");
        helper.sortData(cmp, fieldName, sortDirection);*/
    },
    getSelectedRecord: function(component, event, helper){ 
        var selectedRows = event.getParam('selectedRows');
        console.log("Selected Rows: "+selectedRows);
        var allRows = component.get("v.acctList");
        var setSelectedRows = component.get("v.selectedAcctList");
        var selectedRow = selectedRows[0];
		
		console.log("***************** From OnRowSelection Of Lightning Data Table ***********************");        
        console.log("Selected Row:"); 
        console.log(selectedRow);
        console.log("All Row: ");
        console.log(allRows);
        console.log("includes func result: "+allRows.includes(selectedRow));
		console.log("indexOf func result: "+allRows.indexOf(selectedRow));
        
        const index = allRows.indexOf(selectedRow);
        if(allRows[index])
        	setSelectedRows.push(allRows[index]);
        //console.log(setSelectedRows);
		if (index > -1) {
  			allRows.splice(index, 1);
		}
        //component.set("v.acctList",allRows);
        //component.set("v.selectedAcctList",setSelectedRows);
    }
})