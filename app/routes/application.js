import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    /* Faux response with test data */

    return [{
      title: 'Go to store',
      completed: false
    },
    {
      title: 'Read a book',
      completed: false
    },
    {
      title: 'Do stuff',
      completed: true
    }];

    /* Actual response from ember data */
    // return this.get('store').findAll('todo');
  }
});
