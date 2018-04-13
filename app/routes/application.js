import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    /* Faux response with test data */

    return [{
      title: 'Go to store',
      isDone: false
    },
    {
      title: 'Read a book',
      isDone: false
    },
    {
      title: 'Do stuff',
      isDone: true
    }];

    /* Actual response from ember data */
    // return this.get('store').findAll('todo');
  }
});
