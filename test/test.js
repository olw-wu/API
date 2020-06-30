//删除
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Experiments Developer Guide for details.
 */

/*
 * This request deletes an existing experiment.
 */
function deleteExperiement() {
  var request = gapi.client.analytics.management.experiments.delete({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'profileId': '7654321',
    'experimentId': '122333444455555'
  });
  request.execute(function (response) { // Handle the response. });
  };
//获取
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Experiments Developer Guide for details.
   */

  /*
   * This request gets an existing experiment.
   */
  function getExperiement() {
    var request = gapi.client.analytics.management.experiments.get({
      'accountId': '123456',
      'webPropertyId': 'UA-123456-1',
      'profileId': '7654321',
      'experimentId': '122333444455555'
    });
    request.execute(function (response) { // Handle the response. });
    };
//插入
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Experiments Developer Guide for details.
     */

    /*
     * This request creates a new Experiment.
     */
    function insertExperiment() {
      var request = gapi.client.analytics.management.experiments.insert(
        {
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'profileId': '7654321',
          'resource': {
            'name': 'Landing Page Test',
            'status': 'DRAFT',
            'variations': [
              {
                'name': 'VariationA',
                'url': 'index.html'
              },
              {
                'name': 'VariationB',
                'url': 'indexB.html'
              }
            ]
          }
        });
      request.execute(function (response) { // Handle the response. });
      };
//列表
      /*
       * Note: This code assumes you have an authorized Analytics client object.
       * See the Experiments Developer Guide for details.
       */

      /*
       * Example 1:
       * Requests a list of all experiments for the authorized user.
       */
      function listExperiements() {
        var request = gapi.client.analytics.management.experiments.list({
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'profileId': '7654321'
        });
        request.execute(printExperiments);
      }

      /*
       * Example 2:
       * The results of the list method are passed as the results object.
       * The following code shows how to iterate through them.
       */
      function printExperiments(results) {
        if (results && !results.error) {
          var experiments = results.items;
          for (var i = 0, experiment; experiment = experiments[i]; i++) {
            console.log('Experiment Id: ' + experiment.id);
            console.log('Experiment Kind: ' + experiment.kind);
            console.log('Experiment Name: ' + experiment.name);

            // Iterate through the variations.
            var variations = experiment.variations;
            if (variations) {
              for (var j = 0, variation; variation = variations[j]; j++) {
                console.log('Variation Name: ' + variation.name);
                console.log('Variation Status: ' + variation.status);
                console.log('Variation URL: ' + variation.url);
                console.log('Variation Won: ' + variation.won);
              }
            }
          }
        }
      }
//修正
      /*
       * Note: This code assumes you have an authorized Analytics client object.
       * See the Experiments Developer Guide for details.
       */

      /*
       * This request patches an existing experiment.
       */
      function patchExperiment() {
        var request = gapi.client.analytics.management.experiments.patch(
          {
            'accountId': '123456',
            'webPropertyId': 'UA-123456-1',
            'profileId': '7654321',
            'experimentId': '122333444455555',
            'resource': {
              'name': 'Landing Page Test',
              'status': 'DRAFT',
              'variations': [
                {
                  'name': 'VariationA',
                  'url': 'index.html'
                },
                {
                  'name': 'VariationB',
                  'url': 'indexB.html'
                }
              ]
            }
          });
        request.execute(function (response) { // Handle the response. });
        };
//更新
        /*
         * Note: This code assumes you have an authorized Analytics client object.
         * See the Experiments Developer Guide for details.
         */

        /*
         * This request updates an existing experiment.
         */
        function updateExperiment() {
          var request = gapi.client.analytics.management.experiments.update(
            {
              'accountId': '123456',
              'webPropertyId': 'UA-123456-1',
              'profileId': '7654321',
              'experimentId': '122333444455555',
              'resource': {
                'name': 'Landing Page Test',
                'status': 'DRAFT',
                'variations': [
                  {
                    'name': 'VariationA',
                    'url': 'index.html'
                  },
                  {
                    'name': 'VariationB',
                    'url': 'indexB.html'
                  }
                ]
              }
            });
          request.execute(function (response) { // Handle the response. });
          };
