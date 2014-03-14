$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("prashanth\\sams\\test.feature");
formatter.feature({
  "id": "test",
  "description": "",
  "name": "test",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "test;google-search",
  "tags": [
    {
      "name": "@foo",
      "line": 3
    }
  ],
  "description": "",
  "name": "google search",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "Google page \"http://www.google.com\"",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I enter \"Prashanth Sams\" in search box",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I press enter key",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I should get the results of \"Prashanth Sams\"",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 13
    }
  ],
  "location": "Googlesearch.i_open_google_page_as(String)"
});
formatter.result({
  "duration": 33359127925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prashanth Sams",
      "offset": 9
    }
  ],
  "location": "Googlesearch.i_enter_in_search_box(String)"
});
formatter.result({
  "duration": 10620278975,
  "status": "passed"
});
formatter.match({
  "location": "Googlesearch.i_press_enter_key()"
});
formatter.result({
  "duration": 1369018772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prashanth Sams",
      "offset": 29
    }
  ],
  "location": "Googlesearch.i_should_see_results_of(String)"
});
formatter.result({
  "duration": 6692974821,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat prashanth.sams.Googlesearch.i_should_see_results_of(Googlesearch.java:69)\r\n\tat ✽.Then I should get the results of \"Prashanth Sams\"(prashanth\\sams\\test.feature:9)\r\n"
});
});