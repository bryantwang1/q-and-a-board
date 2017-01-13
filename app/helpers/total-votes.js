import Ember from 'ember';

export function totalVotes(params) {
  return params[0] + params[1];
}

export default Ember.Helper.helper(totalVotes);
