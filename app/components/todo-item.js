import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNameBindings: ['isDone'],
  isDone: computed.alias('todo.isDone'),

  click() {
    const isDone = this.get('isDone');
    this.set('isDone', !isDone);
    this.get('todo').save();
  }
});
