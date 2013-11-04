var games = new Meteor.Collection("games");

if (Meteor.isClient) {
  var findHelpers = {
      games : function() {
          return games.find();
      }
  };
  
  Template.findWithNoCount.helpers(findHelpers);
  Template.findWithCount.helpers(findHelpers);
  Template.findWithFetch.helpers({
      games : function() {
          return games.find().fetch();
      }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
      games.insert({name : Math.random() * 10000, date : new Date()});
  });
}
