/*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Segment Developer Guide for details.
 */

/*
 * Example 1:
 * Requests a list of all Segments for the authorized user.
 */
function listSegments() {
  var request = gapi.client.analytics.management.segments.list();
  request.execute(printSegments);
}

/*
 * Example 2:
 * The results of the list method are passed as the results object.
 * The following code shows how to iterate through them.
 */
function printSegments(results) {
  if (results && !results.error) {
    var segments = results.items;
    for (var i = 0, segment; segment = segments[i]; i++) {
      console.log('Segment Id: ' + segment.id);
      console.log('Segment Kind: ' + segment.kind);
      console.log('Segment Name: ' + segment.name);
      console.log('Segment Definition: ' + segment.definition);

      // These fields are only set for custom segments and not default segments.
      if (segment.created) {
        console.log('Created: ' + segment.created);
        console.log('Updated: ' + segment.updated);
      }
    }
  }
}
