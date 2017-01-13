import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    questionFormShow() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        user: this.get('user'),
        question: this.get('user-question'),
        time: undefined,
        lastEdit: new Date().toString()
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
