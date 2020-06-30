/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Data Import Developer Guide for details.
 */

/*
 * Example 1:
 * Requests a list of all data sets for the authorized user.
 */
function listCustomDataSources() {
  var request = gapi.client.analytics.management.customDataSources.list({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1'
  });
  request.execute(printCustomDataSources);
}

/*
 * Example 2:
 * The results of the list method are passed as the results object.
 * The following code shows how to iterate through them.
 */
function printCustomDataSources(results) {
  if (results && !results.error) {
    var datasets = results.items;
    for (var i = 0, dataset; dataset = datasets[i]; i++) {
      console.log('Account Id: ' + dataset.accountId);
      console.log('Property Id: ' + dataset.webPropertyId);
      console.log('Dataset Id: ' + dataset.id);
      console.log('Dataset Kind: ' + dataset.kind);
      console.log('Dataset Name: ' + dataset.name);
      console.log('Dataset Description: ' + dataset.description);
      console.log('Dataset uploadType: ' + dataset.uploadType);

      // Iterate through the linked views (profiles).
      var profiles = dataset.profilesLinked;
      if (profiles) {
        for (var j = 0, profile; profile = profiles[j]; j++) {
          console.log('Linked view (profile) Id: ' + profile);
        }
      }
    }
  }
}
