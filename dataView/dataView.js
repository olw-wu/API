//删除
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the View (Profile) Developer Guide for details.
 */

/*
 * This request deletes an existing view (profile).
 */
function deleteView() {
  var request = gapi.client.analytics.management.profiles.delete({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'profileId': '7654321'
  });
  request.execute(function (response) { // Handle the response. });
  };
//获取
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the View (Profile) Developer Guide for details.
   */

  /*
   * This request gets an existing view (profile).
   */
  function getView() {
    var request = gapi.client.analytics.management.profiles.get({
      'accountId': '123456',
      'webPropertyId': 'UA-123456-1',
      'profileId': '7654321'
    });
    request.execute(function (response) { // Handle the response. });
    };
//插入
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the View (Profiles) Developer Guide for details.
     */

    /*
     * This request creates a new View (Profile).
     */
    function insertView() {
      var request = gapi.client.analytics.management.profiles.insert(
        {
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'resource': {
            'name': 'eCommerce View (Profile)',
            'eCommerceTracking': true
          }
        });
      request.execute(function (response) { // Handle the response. });
      };

      //列表
      /*
       * Note: This code assumes you have an authorized Analytics client object.
       * See the View (Profiles) Developer Guide for details.
       */

      /*
       * This request creates a new View (Profile).
       */
      function insertView() {
        var request = gapi.client.analytics.management.profiles.insert(
          {
            'accountId': '123456',
            'webPropertyId': 'UA-123456-1',
            'resource': {
              'name': 'eCommerce View (Profile)',
              'eCommerceTracking': true
            }
          });
        request.execute(function (response) { // Handle the response. });
        };
//修正
        /*
         * Note: This code assumes you have an authorized Analytics client object.
         * See the View (Profiles) Developer Guide for details.
         */

        /*
         * This request patches an existing view (profile).
         */
        function patchView() {
          var request = gapi.client.analytics.management.profiles.patch(
            {
              'accountId': '123456',
              'webPropertyId': 'UA-123456-1',
              'profileId': '7654321',
              'resource': {
                'eCommerceTracking': true,
                'timezone': 'America/Chicago'
              }
            });
          request.execute(function (response) { // Handle the response. });
          }
//更新
          /*
           * Note: This code assumes you have an authorized Analytics client object.
           * See the View (Profiles) Developer Guide for details.
           */

          /*
           * This request updates an existing view (profile).
           */
          function updateView() {
            var request = gapi.client.analytics.management.profiles.update(
              {
                'accountId': '123456',
                'webPropertyId': 'UA-123456-1',
                'profileId': '7654321',
                'resource': {
                  'name': 'eCommerce Tracking View (Profile)',
                  'currency': 'USD',
                  'eCommerceTracking': true,
                  'websiteUrl': 'http://www.example.com'
                }
              });
            request.execute(function (response) { // Handle the response. });
            };
