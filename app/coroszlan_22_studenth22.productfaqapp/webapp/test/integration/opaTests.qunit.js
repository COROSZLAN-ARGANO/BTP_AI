sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'coroszlan22studenth22/productfaqapp/test/integration/FirstJourney',
		'coroszlan22studenth22/productfaqapp/test/integration/pages/ProductFAQList',
		'coroszlan22studenth22/productfaqapp/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('coroszlan22studenth22/productfaqapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductFAQList: ProductFAQList,
					onTheProductFAQObjectPage: ProductFAQObjectPage
                }
            },
            opaJourney.run
        );
    }
);