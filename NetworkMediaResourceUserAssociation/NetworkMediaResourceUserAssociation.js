//删除
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the User Permissions Developer Guide for details.
 */

/*
 * This request deletes an existing Property User Link.
 */
function deletePropertyUserLink() {
  var request = gapi.client.analytics.management.webpropertyUserLinks.delete(
    {
      'accountId': '123456',
      'webPropertyId': 'UA-123456-1',
      'linkId': 'UA-123456-1:1111222233334444'
    });
  request.execute(function (response) { // Handle the response. });
  };
//插入
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the User Permissions Developer Guide for details.
   */

  /*
   * This request creates a new Property User Link.
   */
  function insertPropertyUserLink() {
    var request = gapi.client.analytics.management.webpropertyUserLinks.insert(
      {
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1',
        'resource': {
          'permissions': {
            'local': [
              'EDIT',
              'MANAGE_USERS'
            ]
          },
          'userRef': {
            'email': 'liz@gmail.com'
          }
        }
      });
    request.execute(function (response) { // Handle the response. });
    };
//列表
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the User Permissions Developer Guide for details.
     */

    /*
     * Example 1:
     * Requests a list of all Property User links for the authorized user.
     */
    function listProfileUserLinks() {
      var request = gapi.client.analytics.management.webpropertyUserLinks.list({
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1'
      });
      request.execute(printPropertyUserLinks);
    }

    /*
     * Example 2:
     * The results of the list method are passed as the results object.
     * The following code shows how to iterate through them.
     */
    function printPropertyUserLinks(results) {
      if (results && !results.error) {
        var propertyLinks = results.items;
        for (var i = 0, userLink; userLink = propertyLinks[i]; i++) {
          var entity = userLink.entity;
          var propertyRef = entity.webPropertyRef;
          var userRef = userLink.userRef;
          var permissions = userLink.permissions;

          console.log('Property User Link Id: ' + userLink.id);
          console.log('Property User Link Kind: ' + userLink.kind);
          console.log('User Email: ' + userRef.email);
          console.log('Permissions effective: ' + permissions.effective);
          console.log('Permissions local: ' + permissions.local);
          console.log('Property Id: ' + propertyRef.id);
          console.log('Property Kind: ' + propertyRef.kind);
          console.log('Property Name: ' + propertyRef.name);
        }
      }
    }
//更新
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the User Permissions Developer Guide for details.
     */

    /*
     * This request updates an existing Property User Link.
     */
    function updatePropertyUserLink() {
      var request = gapi.client.analytics.management.webpropertyUserLinks.update(
        {
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'linkId': 'UA-123456-1:1111222233334444',
          'resource': {
            'permissions': {
              'local': ['READ_AND_ANALYZE']
            }
          }
        });
      request.execute(function (response) { // Handle the response. });
      };
