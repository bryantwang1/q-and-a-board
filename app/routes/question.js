import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question) {
      if(confirm("Are you sure you want to delete thie question and all of its answers?")) {
        question.destroyRecord();
        this.transitionTo("index");
      }
    }
  }
});
