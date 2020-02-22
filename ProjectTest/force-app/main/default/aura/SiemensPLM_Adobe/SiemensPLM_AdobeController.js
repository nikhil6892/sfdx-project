({
	handleRouteChange : function(component, event, helper) {
    // component.set('v.routeChangeCounter', component.get('v.routeChangeCounter') + 1);
      console.log('--> routeChangeCounter Before'); 
        component.set('v.routeChangeCounter', component.get('v.routeChangeCounter') + 1);

		console.log('--> window.location.href: '+window.location.href);


	console.log('--> routeChangeCounter After');
}
})