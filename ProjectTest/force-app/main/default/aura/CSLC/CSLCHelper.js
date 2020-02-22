({
    toggleSearch: function toggleSearch(component) {
        var searchIsOpen = component.get("v.searchIsOpen");
        component.set("v.searchIsOpen", !searchIsOpen);
    },

    hideSearch: function hideSearch(component) {
        component.set("v.searchIsOpen", false);
    },
})