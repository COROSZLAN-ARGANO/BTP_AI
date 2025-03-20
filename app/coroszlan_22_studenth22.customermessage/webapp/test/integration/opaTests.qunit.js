sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'coroszlan22studenth22/customermessage/test/integration/FirstJourney',
		'coroszlan22studenth22/customermessage/test/integration/pages/CustomerMessagesList',
		'coroszlan22studenth22/customermessage/test/integration/pages/CustomerMessagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessagesList, CustomerMessagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('coroszlan22studenth22/customermessage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessagesList: CustomerMessagesList,
					onTheCustomerMessagesObjectPage: CustomerMessagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);