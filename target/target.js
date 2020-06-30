//获取
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Goals Developer Guide for details.
 */

/*
 * This request gets an existing goal.
 */
function getGoal() {
  var request = gapi.client.analytics.management.goals.get({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'profileId': '7654321',
    'goalId': '5'
  });
  request.execute(function (response) { // Handle the response. });
  };
//插入
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Goals Developer Guide for details.
   */

  /*
   * This request creates a new goal.
   */
  function insertGoal() {
    var request = gapi.client.analytics.management.goals.insert(
      {
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1',
        'profileId': '7654321',
        'resource': {
          'id': '7',
          'active': false,
          'name': 'My Goal',
          'type': 'VISIT_TIME_ON_SITE',
          'visitTimeOnSiteDetails': {
            'comparisonType': 'GREATER_THAN',
            'comparisonValue': 300
          }
        }
      });
    request.execute(function (response) { // Handle the response. });
    };
//列表
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Goals Developer Guide for details.
     */

    /*
     * Example 1:
     * Requests a list of all goals for the authorized user.
     */
    function listGoals() {
      var request = gapi.client.analytics.management.goals.list({
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1',
        'profileId': '7654321'
      });
      request.execute(printGoals);
    }

    /*
     * Example 2:
     * The results of the list method are passed as the results object.
     * The following code shows how to iterate through them.
     */
    function printGoals(results) {
      if (results && !results.error) {
        var goals = results.items;
        for (var i = 0, goal; goal = goals[i]; i++) {
          console.log('Account Id: ' + goal.accountId);
          console.log('Property Id: ' + goal.webPropertyId);
          console.log('Internal Property Id: ' + goal.internalWebPropertyId);
          console.log('View (Profile) Id: ' + goal.profileId);

          console.log('Goal Id: ' + goal.id);
          console.log('Goal Name: ' + goal.name);
          console.log('Goal Value: ' + goal.value);
          console.log('Goal Active: ' + goal.active);
          console.log('Goal Type: ' + goal.type);

          console.log('Created: ' + goal.created);
          console.log('Updated: ' + goal.updated);

          // Print the goal details depending on the type of goal.
          if (goal.urlDestinationDetails) {
            printDestinationDetails(goal.urlDestinationDetails);
          } else if (goal.visitTimeOnSiteDetails) {
            printComparisonDetails(goal.visitTimeOnSiteDetails);
          } else if (goal.visitNumPagesDetails) {
            printComparisonDetails(goal.visitNumPagesDetails);
          } else if (goal.eventDetails) {
            printEventDetails(goal.eventDetails);
          }
        }
      }
    }

    function printDestinationDetails(details) {
      console.log('Goal URL: ' + details.url);
      console.log('Case Sensitive: ' + details.caseSensitive);
      console.log('Match Type: ' + details.matchType);
      console.log('First Step Required: ' + details.firstStepRequired);

      // Iterate through the steps.
      var steps = details.steps;
      if (steps) {
        for (var i = 0, step; step = steps[i]; i++) {
          console.log('Step Number: ' + step.number);
          console.log('Step Name: ' + step.name);
          console.log('Step URL: ' + step.url);
        }
      } else {
        console.log('No Steps Configured.');
      }
    }

    function printComparisonDetails(details) {
      console.log('Comparison Type: ' + details.comparisonType);
      console.log('Comparison Value: ' + details.comparisonValue);
    }

    function printEventDetails(details) {
      var conditions = details.eventContitions;
      if (conditions) {
        for (var i = 0, condition; condition = conditions[i]; i++) {
          console.log('Condition Type: ' + condition.type);
          if (condition.type == 'VALUE') {
            console.log('Comparison Type: ' + condition.comparisonType);
            console.log('Comparison Value: ' + condition.comparisonValue);
          } else {
            console.log('Match Type: ' + condition.matchType);
            console.log('Expression: ' + condition.expression);
          }
        }
      }
    }
//修正
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Goals Developer Guide for details.
     */

    /*
     * This request patches an existing goal.
     */
    function patchGoal() {
      var request = gapi.client.analytics.management.goals.patch(
        {
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'profileId': '7654321',
          'goalId': '5',
          'resource': {
            'id': '2',
            'active': true,
            'name': 'My Goal',
            'type': 'VISIT_TIME_ON_SITE',
            'visitTimeOnSiteDetails': {
              'comparissonType': 'GREATER_THAN',
              'comparisonValue': 300
            }
          }
        });
      request.execute(function (response) { // Handle the response. });
      };
//更新
      /*
       * Note: This code assumes you have an authorized Analytics client object.
       * See the Goals Developer Guide for details.
       */

      /*
       * This request updates an existing goal.
       */
      function updateGoal() {
        var request = gapi.client.analytics.management.goals.update(
          {
            'accountId': '123456',
            'webPropertyId': 'UA-123456-1',
            'profileId': '7654321',
            'goalId': '5',
            'resource': {
              'active': true,
              'name': 'My Goal',
              'type': 'VISIT_TIME_ON_SITE',
              'visitTimeOnSiteDetails': {
                'comparissonType': 'GREATER_THAN',
                'comparisonValue': 300
              }
            }
          });
        request.execute(function (response) { // Handle the response. });
        };
