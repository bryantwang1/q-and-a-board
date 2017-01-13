import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  answer: DS.attr(),
  time: DS.attr(),
  upvotes: DS.attr(),
  downvotes: DS.attr()
});
