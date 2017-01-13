import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        user: this.get('user') || "anonymous",
        answer: this.get('answer') || "none",
        time: new Date().toString(),
        upvotes: 0,
        downvotes: 0,
        question: this.get('question')
      };
      this.set('user', '');
      this.set('answer', '');
      this.set('addNewAnswer', false);
      if(params.answer !== "none")
      {
        this.sendAction('saveAnswer', params);
      }
    }
  }
});
