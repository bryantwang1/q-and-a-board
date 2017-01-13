import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        user: this.get('user') || "anonymous",
        question: this.get('question') || "none",
        time: new Date().toString(),
        lastEdit: "none"
      };
      this.set('addNewQuestion', false);
      if(params.question !== "none")
      {
        this.sendAction('saveQuestion', params);
      }
    }
  }
});
