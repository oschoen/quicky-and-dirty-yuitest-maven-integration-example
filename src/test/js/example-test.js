YUI.add('example-test', function (Y) {

  var Assert = Y.Assert,
      suite = new Y.Test.Suite('ExampleTestSuite');

  suite.add(new Y.Test.Case({
    name: "ExampleTestCase",

    'should work': function () {
      Assert.isTrue(true);
    }

  }));

  Y.Test.Runner.add(suite);

}, '@VERSION@', {requires:['test']});

