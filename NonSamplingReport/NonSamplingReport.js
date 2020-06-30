//删除
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/*
 * This request deletes an existing unsampled report.
 */
function getUnsampledReport() {
  var request = gapi.client.analytics.management.unsampledReports.delete({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'profileId': '7654321',
    'unsampledReportId': '1112223334111222333411'
  });
  request.execute(function (response) { /* Handle the response. */ });
}
//获取
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/*
 * This request gets an existing unsampled report.
 */
function getUnsampledReport() {
  var request = gapi.client.analytics.management.unsampledReports.get({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'profileId': '7654321',
    'unsampledReportId': '1112223334111222333411'
  });
  request.execute(function (response) { /* Handle the response. */ });
}
//插入
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/*
 * This request creates an new unsampled report.
 */
function insertView() {
  var request = gapi.client.analytics.management.unsampledReports.insert(
    {
      'accountId': '123456',
      'webPropertyId': 'UA-123456-1',
      'profileId': '7654321',
      'resource': {
        'title': 'A test Report',
        'start-date': '2013-01-01',
        'end-date': '2013-01-31',
        'metrics': 'ga:pageviews,ga:bounces',
        'dimensions': 'ga:browser',
        'filters': 'ga:bounces>=100',
        'segment': 'gaid::-1'
      }
    });
  request.execute(function (response) { /* Handle the response. */ });
}
//列表
/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Unsampled Reports Developer Guide for details.
 */

/*
 * Example 1:
 * Requests a list of all unsampled reports for the authorized user.
 */
function listUnsampledReports() {
  var request = gapi.client.analytics.management.unsampledReports.list({
    'accountId': '123456',
    'webPropertyId': 'UA-123456-1',
    'profileId': '7654321'
  });
  request.execute(printViews);
}

/*
 * Example 2:
 * The results of the list method are passed as the results object.
 * The following code shows how to iterate through them.
 */
function printUnsampledReports(results) {
  if (results && !results.error) {
    var reports = results.items;
    for (var i = 0, report; report = reports[i]; i++) {
      console.log('Account Id: ' + report.accountId);
      console.log('Property Id: ' + report.webPropertyId);
      console.log('Report Id: ' + report.id);
      console.log('Report Title: ' + report.title);
      console.log('Report Kind: ' + report.kind);
      console.log('Report start-date:' + report.start-date);
      console.log('Report end-date:' + report.end-date);
      console.log('Report metrics: ' + report.metrics);
      console.log('Report dimensions:' + report.dimensions);
      console.log('Report filters: ' + report.filters);
      console.log('Report Status: ' + report.status);
      console.log('Report downloadType: ' + report.downloadType);

      // Drive document details.
      if (report.driveDownloadDetails) {
        var details = report.driveDownloadDetails;
        console.log('Drive doc id: ' + details.documentId);
      }

      // Cloud storage download details.
      if (report.cloudStorageDownloadDetails) {
        var details = report.cloudStorageDownloadDetails;
        console.log('Cloud bucket id: ' + details.bucketId);
        console.log('Cloud object id: ' + details.objectId);
      }

      console.log('Report Created: ' + report.created);
      console.log('Report Updated: ' + report.updated);
    }
  }
}
