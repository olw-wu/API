//删除
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the User Permissions Developer Guide for details.
 */

/*
 * This request deletes an existing View (Profile) User Link.
 */
function deleteProfileUserLink() {
  var request = gapi.client.analytics.management.profileUserLinks.delete(
    {
      'accountId': '123456',
      'webPropertyId': 'UA-123456-1',
      'profileId': '7654321',
      'linkId': '7654321:1111222233334444'
    });
  request.execute(function (response) { // Handle the response. });
  };
//插入
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the User Permissions Developer Guide for details.
   */

  /*
   * This request creates a new View (Profile) User Link.
   */
  function insertProfileUserLink() {
    var request = gapi.client.analytics.management.profileUserLinks.insert(
      {
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1',
        'profileId': '7654321',
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
     * Requests a list of all View (Profile) User links for the authorized user.
     */
    function listProfileUserLinks() {
      var request = gapi.client.analytics.management.profileUserLinks.list({
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1',
        'profileId': '7654321'
      });
      request.execute(printProfileUserLinks);
    }

    /*
     * Example 2:
     * The results of the list method are passed as the results object.
     * The following code shows how to iterate through them.
     */
    function printProfileUserLinks(results) {
      if (results && !results.error) {
        var profileLinks = results.items;
        for (var i = 0, profileUserLink; profileUserLink = profileLinks[i]; i++) {
          var entity = profileUserLink.entity;
          var profileRef = entity.profileRef;
          var userRef = profileUserLink.userRef;
          var permissions = profileUserLink.permissions;

          console.log('Profile User Link Id: ' + profileUserLink.id);
          console.log('Profile User Link Kind: ' + profileUserLink.kind);
          console.log('User Email: ' + userRef.email);
          console.log('Permissions effective: ' + permissions.effective);
          console.log('Permissions local: ' + permissions.local);
          console.log('Profile Id: ' + profileRef.id);
          console.log('Profile Kind: ' + profileRef.kind);
          console.log('Profile Name: ' + profileRef.name);
        }
      }
    }
//更新
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the User Permissions Developer Guide for details.
     */

    /*
     * This request updates an existing View (Profile) User Link.
     */
    function updateProfileUserLink() {
      var request = gapi.client.analytics.management.profileUserLinks.update(
        {
          'accountId': '123456',
          'webPropertyId': 'UA-123456-1',
          'profileId': '7654321',
          'linkId': '7654321:1111222233334444',
          'resource': {
            'permissions': {
              'local': ['READ_AND_ANALYZE']
            }
          }
        });
      request.execute(function (response) { // Handle the response. });
      };
