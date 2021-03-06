import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  question: DS.attr(),
  time: DS.attr(),
  lastEdit: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
