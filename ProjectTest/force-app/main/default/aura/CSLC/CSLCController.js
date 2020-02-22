({
    doInit : function(component, event, helper) {
        console.log('>>>Theme Init');
    },

   /* goToUrl: function (component, event) {
        var searchIcon = component.find('headerSearchIcon');
        var searchArea = component.find('js-searchArea');
        var searchAreaIsVisible = component.get('v.searchAreaIsVisible');
        var url = event.currentTarget.dataset.url;
        var action = $A.get('e.force:navigateToURL');

        action.setParams({
            'url': url
        });
        action.fire();

        if (searchAreaIsVisible) {
            $A.util.removeClass(searchArea, 'isVisible');
            $A.util.removeClass(searchIcon, 'isActive');
        }
    },*/

   /* handleRouteChangeforAdobe: function(component, event, helper){
        console.log('--> handleRouteChangeforAdobe Before');
        console.log('--> window.location.href: '+window.location.href);


        window.ste_statistic = window.ste_statistic || [];
        window.ste_statistic.push({
            "action" : "page.ready",
            "data" : {}
        });

        console.log('--> handleRouteChangeforAdobe After');
//debugger;
    },*/

    toggleSearch: function toggleSearch(component, event, helper) {
        helper.toggleSearch(component);
    },

    hideSearch: function hideSearch(component, event, helper) {
        helper.hideSearch(component);
    }
})