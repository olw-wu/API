//删除
/**
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/**
 * This request deletes an existing Remarketing Audience.
 */
function deleteRemarketingAudience(accountId, propertyId, audienceId) {
  let request = gapi.client.analytics.management.remarketingAudience.delete(
    {
      'accountId': accountId,
      'webPropertyId': propertyId,
      'remarketingAudienceId': audienceId
    });
  request.execute(function (response) { /* Handle the response. */ });
}
//获取
/**
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/**
 * This request gets an existing Remarketing Audience.
 */
function getRemarketingAudience(accountId, propertyId, audienceId) {
  let request = gapi.client.analytics.management.remarketingAudience.get(
    {
      'accountId': accountId,
      'webPropertyId': propertyId,
      'remarketingAudienceId': audienceId
    });
  request.execute(function (response) { /* Handle the response. */ });
}
//插入
/**
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/**
 * This request creates a new STATE_BASED Remarketing Audience.
 */
function insertRemarketingAudience(accountId, propertyId) {
  let request = gapi.client.analytics.management.remarketingAudience.insert(
    {
      'accountId': accountId,
      'webPropertyId': propertyId,
      'resource': {
        'name': 'State Based Audience',
        'linkedViews': [viewId],
        'linkedAdAccounts': [{
          'type': 'ADWORDS_LINKS',
          'linkedAccountId': linkedAccountId
        }],
        'audienceType': 'STATE_BASED',
        'stateBasedAudienceDefinition': {
          'includeConditions': {
            'daysToLookBack': 30,
            'segment': 'users::condition::ga:browser==Chrome',
            'membershipDurationDays': 30,
            'isSmartList': False
          },
          'excludeConditions': {
            'exclusionDuration': 'PERMANENT',
            'segment': 'sessions::condition::ga:city==London'
          }
        }
      }
    });
  request.execute(function (response) { /* Handle the response. */ });
}

// This request creates a new SIMPLE Remarketing Audience.
function insertSIMPLEAudience(accountId, propertyId) {
  let request = gapi.client.analytics.management.remarketingAudience.insert(
    {
      'accountId': accountId,
      'webPropertyId': propertyId,
      'resource': {
        'name': 'Simple Audience',
        'linkedViews': [viewId],
        'linkedAdAccounts': [{
          'type': 'ADWORDS_LINKS',
          'linkedAccountId': linkedAccountId
        }],
        'audienceType': 'SIMPLE',
        'audienceDefinition': {
          'includeConditions': {
            'isSmartList': False,
            'daysToLookBack': 7,
            'membershipDurationDays': 30,
            'segment': 'users::condition::ga:browser==Chrome'
          }
        }
      }
    });
  request.execute(function (response) { // Handle the response. });
  };
//列表
  /**
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Unsampled Reports Developer Guide for details.
   */

  /**
   * This request lists existing Remarketing Audiences.
   */
  function listRemarketingAudiences(accountId, propertyId) {
    let request = gapi.client.analytics.management.remarketingAudience.list(
      {
        'accountId': accountId,
        'webPropertyId': propertyId,
      }
    ).then(printResults);
  }

  /**
   * The results of the list method are passed as the results object.
   * The following code shows how to iterate through them.
   */
  function printResults(results) {
    if (results && !results.error) {
      let audiences = results.items;
      for (let i = 0, audience; audience = audiences[i]; i++) {
        console.log('Audience Id ' + audience.id);
        console.log('Audience name ' + audience.name);
      }
      for (let j = 0, view; audience.linkedViews[j]; j++) {
        console.log('linkedView ' + view);
      }

      // Get the linked accounts.
      let linkedAccounts = audience.linkedAdAccounts;
      for (let j = 0, link; link = linkedAccounts[i]; i++) {
        console.log('Link type ' + link.type);
        console.log('Link linkedAccountId ' + link.linkedAccountId);
      }

      // Get the audience type.
      let audienceType = audience.type;
      console.log('Audience type ' + audienceType);

      // Get the audience definition.
      if (audienceType == 'SIMPLE') {
        let definition = audience.audienceDefinition;

        // Get the include conditions.
        let condition = definition.includeConditions;
        console.log('Condition daysToLookBack ' + condition.daysToLookBack);
        console.log('Condition membershipDurationDays ' +
          condition.membershipDurationDays);
        console.log('Condition segment ' + condition.segment);
      } else if (audienceType == 'STATE_BASED') {
        let definition = audience.stateBasedAudienceDefinition;

        // Get the include conditions.
        let condition = definition.includeConditions;
        console.log('Condition daysToLookBack ' +
          condition.daysToLookBack);
        console.log('Condition membershipDurationDays ' + condition.membershipDurationDays);
        console.log('Condition segment ' + condition.segment);

        // Get the exclude condition
        let excludeCondition = definition.excludeConditions;
        console.log('Condition exclusionDuration ' +
          excludeCondition.exclusionDuration);
        console.log('Condition segment ' + excludeCondition.segment);
      }
    }
  }
//修正
  /**
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Unsampled Reports Developer Guide for details.
   */

  /**
   * This request patches an existing Remarketing Audience.
   */
  function patchRemarketingAudience(accountId, propertyId, audienceId, viewId) {
    let request = gapi.client.analytics.management.remarketingAudience.patch(
      {
        'accountId': accountId,
        'webPropertyId': propertyId,
        'remarketingAudienceId': audienceId
        'resource': {
          'name': 'Patch Simple Audience',
          'linkedViews': [viewId],
          'linkedAdAccounts': [{
            'type': 'ADWORDS_LINKS',
            'linkedAccountId': '202-867-5309'
          }],
          'audienceType': 'SIMPLE',
          'audienceDefinition': {
            'includeConditions': {
              'isSmartList': False,
              'daysToLookBack': 7,
              'membershipDurationDays': 30,
              'segment': 'users::condition::ga:browser==Chrome'
            }
          }
        }
      });
    request.execute(function (response) { /* Handle the response. */ });
  }
//更新
  /**
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Unsampled Reports Developer Guide for details.
   */

  /**
   * This request updates an existing Remarketing Audience.
   */
  function updateRemarketingAudience(accountId, propertyId, viewId, audienceId) {
    let request = gapi.client.analytics.management.remarketingAudience.update(
      {
        'accountId': accountId,
        'webPropertyId': propertyId,
        'remarketingAudienceId': audienceId
        'resource': {
          'name': 'Update Simple Audience',
          'linkedViews': [viewId],
          'linkedAdAccounts': [{
            'type': 'ADWORDS_LINKS',
            'linkedAccountId': '202-867-5309'
          }],
          'audienceType': 'SIMPLE',
          'audienceDefinition': {
            'includeConditions': {
              'isSmartList': False,
              'daysToLookBack': 7,
              'membershipDurationDays': 30,
              'segment': 'users::condition::ga:browser==Chrome'
            }
          }
        }
      });
    request.execute(function (response) { /* handle the response */ });
  }


