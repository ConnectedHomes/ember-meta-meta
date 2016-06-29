export default {
  name: 'meta',

  initialize(applicationInstance) {
    const meta = lookup(applicationInstance, 'service:meta');

    meta.storeDefaultTitle();

    // Bind on didTransition
    lookup(applicationInstance, 'router:main').on('didTransition', () => {
      meta.insert();
    });
  }
};

function lookup(applicationInstance, name) {
  // Ember 2.x
  if (applicationInstance.lookup) {
    return applicationInstance.lookup(name);
  }

  // Ember 1.13 compat
  return applicationInstance.container.lookup(name);
}