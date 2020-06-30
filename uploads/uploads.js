//删除更新数据
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Data Import Developer Guide for details.
 */

/*
 * This request deletes a list of existing uploads.
 */
function deleteUploads() {
  var request = gapi.client.analytics.management.uploads.deleteUploadData({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'customDataSourceId': 'ABCDEFG123abcDEF123',
    'resource': {
      'customDataImportUids': ['AAABBBCCCDDD111222',
        'xLh4wXtzQT6uxe-_OWelog']
    }
  });
  request.execute(function (response) { // Handle the response. });
  };
//获取
  /*
   * Note: This code assumes you have an authorized Analytics client object.
   * See the Data Import Developer Guide for details.
   */

  /*
   * This request gets an existing upload.
   */
  function getUpload() {
    var request = gapi.client.analytics.management.uploads.get({
      'accountId': '123456',
      'webPropertyId': 'UA-123456-1',
      'customDataSourceId': 'ABCDEFG123abcDEF123',
      'uploadId': 'AAABBBCCCDDD111222'
    });
    request.execute(function (response) { // Handle the response. });
    };
//列表
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Data Import Developer Guide for details.
     */

    /*
     * Example 1:
     * Requests a list of all Uploads for the authorized user.
     */
    function listUploads() {
      var request = gapi.client.analytics.management.uploads.list({
        'accountId': '123456',
        'webPropertyId': 'UA-123456-1',
        'customDataSourceId': 'ABCDEFG123abcDEF123',
      });
      request.execute(printUploads);
    }

    /*
     * Example 2:
     * The results of the list method are passed as the results object.
     * The following code shows how to iterate through them.
     */
    function printUploads(results) {
      if (results && !results.error) {
        var uploads = results.items;
        for (var i = 0, upload; upload = uploads[i]; i++) {
          console.log('Upload Id: ' + upload.id);
          console.log('Upload Kind: ' + upload.kind);
          console.log('Account Id: ' + upload.accountId);
          console.log('Data Set Id: ' + upload.customDataSourceId);
          console.log('Upload Status: ' + upload.status);
        }
      }
    }
//更新数据
    /*
     * Note: This code assumes you have an authorized Analytics client object.
     * See the Data Import Developer Guide for details.
     */

    /*
     * This request uploads a file for the authorized user.
     */
    function uploadData(fileData) {
      const boundary = '-------314159265358979323846';
      const delimiter = "\r\n--" + boundary + "\r\n";
      const close_delim = "\r\n--" + boundary + "--";

      var contentType = 'application/octet-stream'

      var reader = new FileReader();
      reader.readAsBinaryString(fileData);
      reader.onload = function(e) {
        var contentType = 'application/octet-stream';
        var metadata = {
          'title': fileData.name,
          'mimeType': contentType
        };

        var base64Data = btoa(reader.result);
        var multipartRequestBody =
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n' +
          'Content-Transfer-Encoding: base64\r\n' +
          '\r\n' +
          base64Data +
          close_delim;

        var request = gapi.client.request({
          'path': 'upload/analytics/v3/management/accounts/123456/webproperties/UA-123456-1/customDataSources/ABCDEFG123abcDEF123/uploads',
          'method': 'POST',
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody
        });
        request.execute(function (response) { // Handle the response. });
        }
      };
