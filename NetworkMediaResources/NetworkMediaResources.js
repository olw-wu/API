//获取
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Web Property  Developer Guide for details.
 */

/*
 * This request gets an existing property.
 */
function getProperty() {
  var request = gapi.client.analytics.management.webproperties.get({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
  });
  request.execute(function (response) { // Handle the response. });
  };
//插入
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Web Property Developer Guide for details.
   */

  /*
   * This request creates a new property.
   */
  function insertProperty() {
    var request = gapi.client.analytics.management.webproperties.insert(
      {
        'accountId': '123456',
        'resource': {
          'websiteUrl': 'http://www.examplepetstore.com',
          'name': 'Example Store'
        }
      });
    request.execute(function (response) { // Handle the response. });
    };
//列表
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Web Property Developer Guide for details.
     */

    /*
     * Example 1:
     * Requests a list of all properties for the authorized user.
     */
    function listProperties() {
      var request = gapi.client.analytics.management.webproperties.list({
        'accountId': '123456'
      });
      request.execute(printProperties);
    }

    /*
     * Example 2:
     * The results of the list method are passed as the results object.
     * The following code shows how to iterate through them.
     */
    function printProperties(results) {
      if (results && !results.error) {
        var properties = results.items;
        for (var i = 0, property; property = properties[i]; i++) {
          console.log('Account Id: ' + property.accountId);
          console.log('Property Id: ' + property.id);
          console.log('Property Name: ' + property.name);
          console.log('Property Profile Count: ' + property.profileCount);
          console.log('Property Industry Vertical: ' + property.industryVertical);
          console.log('Property Internal Id: ' + property.internalWebPropertyId);
          console.log('Property Level: ' + property.level);
          if (property.websiteUrl) {
            console.log('Property URL: ' + property.websiteUrl);
          }

          console.log('Created: ' + property.created);
          console.log('Updated: ' + property.updated);
        }
      }
    }
//修正
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Web Property Developer Guide for details.
     */

    /*
     * This request patches an existing property.
     */
    function patchProperty() {
      var request = gapi.client.analytics.management.webproperties.patch(
        {
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'resource': {
            'websiteUrl': 'http://www.examplepetstore.com',
            'name': 'Example Store'
          }
        });
      request.execute(function (response) { // Handle the response. });
      };
//更新
      /*
       * Note: This code assumes you have an authorized Analytics client object.
       * See the Web Property Developer Guide for details.
       */

      /*
       * This request updates an existing property.
       */
      function updateProperty() {
        var request = gapi.client.analytics.management.webproperties.update(
          {
            'accountId': '123456',
            'webPropertyId': 'UA-123456-1',
            'resource': {
              'name': 'Example Store',
              'websiteUrl': 'http://www.examplepetstore.com',
              'industryVertical': 'AUTOMOTIVE'
            }
          });
        request.execute(function (response) { // Handle the response. });
        };
