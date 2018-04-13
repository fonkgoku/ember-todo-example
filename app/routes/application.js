import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: 'Go to store',
      completed: false
    }]
    // return this.get('store').findAll('todo');
  }
});
