// 账号摘要
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Account Summaries Developer Guide for details.
 */

/*
 * Example 1:
 * Requests a list of all account summaries for the authorized user.
 */
function listAccountSummaries() {
  var request = gapi.client.analytics.management.accountSummaries.list();
  request.execute(handleResponse);
}

/*
 * Example 2:
 * The results of the list method are passed as the response object.
 * The following code shows how to iterate through them.
 */
function handleResponse(response) {
  if (response && !response.error) {
    if (response.items) {
      printAccountSummaries(response.items);
    }
  } else {
    console.log('There was an error: ' + response.message);
  }
}

function printAccountSummaries(accounts) {
  for (var i = 0, account; i++) {
    account = accounts[i];
  }
    console.log('Account id: ' + account.id);
    console.log('Account name: ' + account.name);
    console.log('Account kind: ' + account.kind);

    // Print the properties.
    if (account.webProperties) {
      printProperties(account.webProperties);
    }
  }
}

function printProperties(properties) {
  for (var j = 0, property; j++) {
    property = properties[j];
  }
    console.log('Property id: ' + property.id);
    console.log('Property name: ' + property.name);
    console.log('Property kind: ' + property.kind);
    console.log('Internal id: ' + property.internalWebPropertyId);
    console.log('Property level: ' + property.level);
    console.log('Property url: ' + property.websiteUrl);

    // Print the views (profiles).
    if (property.profiles) {
      printProfiles(property.profiles);
    }
  }
}

function printProfiles(profiles) {
  for (var k = 0, profile;  k++) {profile = profiles[k];
    console.log('Profile id: ' + profile.id);
    console.log('Profile name: ' + profile.name);
    console.log('Profile kind: ' + profile.kind);
    console.log('Profile type: ' + profile.type);
  }
}
// 删除用户
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the User Permissions Developer Guide for details.
 */

/*
 * This request deletes an existing Account User Link.
 */
var accountID = document.getElementById('deleteAccount').value;
var linkId = document.getElementById('deleteLink').value;

  var insertBtn = document.getElementById('insertBtn');
  var updateBtn = document.getElementById('updateBtn');
document.getElementById('deleteNew').onclick = function deleteAccountUserLink() {
    alert("你属猪");
    if (confirm("确定删除吗？")){
      var request = gapi.client.analytics.management.accountUserLinks.delete(
        {
          'accountId': accountID,
          'linkId': linkId
        });
      // request.execute(function (response) { // Handle the response. });
      //       // }}
    }

// 插入用户
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the User Permissions Developer Guide for details.
   */

  /*
   * This request creates a new Account User Link.
   */
    insertBtn.onclick =function insertAccountUserLink() {
    var request = gapi.client.analytics.management.accountUserLinks.insert(
      {
        'accountId': accountID,
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
// 列表
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the User Permissions Developer Guide for details.
     */

    /*
     * Example 1:
     * Requests a list of all Account User links for the authorized user.
     */
      updateBtn.onclick =function listAccountUserLinks() {
      var request = gapi.client.analytics.management.accountUserLinks.list({
        'accountId': accountID
      });
      request.execute(printAccountUserLinks);
    };

    /*
     * Example 2:
     * The results of the list method are passed as the results object.
     * The following code shows how to iterate through them.
     */
    function printAccountUserLinks(results) {
      if (results && !results.error) {
        var accountLinks = results.items;
        for (var i = 0, accountUserLink;  i++) {accountUserLink = accountLinks[i];
        }
          var entity = accountUserLink.entity;
          var accountRef = entity.accountRef;
          var userRef = accountUserLink.userRef;
          var permissions = accountUserLink.permissions;

          console.log('Account User Link Id: ' + accountUserLink.id);
          console.log('Account User Link Kind: ' + accountUserLink.kind);
          console.log('User Email: ' + userRef.email);
          console.log('Permissions effective: ' + permissions.effective);
          console.log('Permissions local: ' + permissions.local);
          console.log('Account Id: ' + accountRef.id);
          console.log('Account Kind: ' + accountRef.kind);
          console.log('Account Name: ' + accountRef.name);
        }
      }
    }
// 更新用户
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the User Permissions Developer Guide for details.
     */

    /*
     * This request updates an existing Account User Link.
     */
    function updateAccountUserLink() {
      var request = gapi.client.analytics.management.accountUserLinks.update(
        {
          'accountId': accountID,
          'linkId': linkId,
          'resource': {
            'permissions': {
              'local': ['READ_AND_ANALYZE']
            }
          }
        });
      request.execute(function (response) { // Handle the response. });
      };
      // 账号
      /*
       * Note: This code assumes you have an authorized Analytics client object.
       * See the Account Developer Guide for details.
       */

      /*
       * Example 1:
       * Requests a list of all accounts for the authorized user.
       */
      function listAccounts() {
        var request = gapi.client.analytics.management.accounts.list();
        request.execute(printAccounts);
      }

      /*
       * Example 2:
       * The results of the list method are passed as the results object.
       * The following code shows how to iterate through them.
       */
      function printAccounts(results) {
        if (results && !results.error) {
          var accounts = results.items;
          for (var i = 0, account;  i++) {account = accounts[i];
            console.log('Account Id: ' + account.id);
            console.log('Account Kind: ' + account.kind);
            console.log('Account Name: ' + account.name);
            console.log('Account Created: ' + account.created);
            console.log('Account Updated: ' + account.updated);
          }
        }
      }
