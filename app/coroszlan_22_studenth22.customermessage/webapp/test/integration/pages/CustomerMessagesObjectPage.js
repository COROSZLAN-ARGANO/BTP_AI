sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'coroszlan22studenth22.customermessage',
            componentId: 'CustomerMessagesObjectPage',
            contextPath: '/CustomerMessages'
        },
        CustomPageDefinitions
    );
});