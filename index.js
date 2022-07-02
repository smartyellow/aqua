'use strict';

const icons = {
  aquarium: '<path d="M579.563 53.27A25.62 25.62 0 0 0 566.5 49.69H201.312a25.61 25.61 0 0 0-13.062 3.579c-250.484 148.496-251.508 512.359-.016 661.457a25.624 25.624 0 0 0 13.063 3.582h365.219c4.597 0 9.109-1.239 13.062-3.582 253.293-150.16 249.16-513.747-.015-661.457Zm-371.086 47.656h350.859c40.59 25.222 75.355 59.07 101.754 98.562-45.102-7.66-91.156 4.27-126.188 31.563-39.343 30.457-94.398 30.765-134.066.93-.414-.313-.836-.606-1.246-.926-58.098-44.98-139.637-45.223-198.035-.004-33.782 26.137-79.766 30.52-117.926 11.031-.281-.144-.563-.281-.84-.43 27.36-57.629 71.29-106.918 125.688-140.726Zm360.418 380.578c-48.02 87.246-198.93 99.887-269.606 23.328l-62.871 45.672c-11.441 8.312-27.465 5.781-35.781-5.668-8.317-11.45-5.778-27.469 5.668-35.781l54.933-39.903-54.933-39.906c-11.446-8.312-13.985-24.332-5.668-35.781 8.312-11.445 24.332-13.98 35.781-5.668l62.875 45.672c70.781-76.676 221.656-63.785 269.602 23.328a25.615 25.615 0 0 1 0 24.707Zm0 0"/>',
  fish: '<path d="M558.078 593.922c-15.36-30.723-15.36-117.762 0-143.363 20.48-30.72 174.082 71.68 174.082 71.68 46.078 20.48 46.078-312.317 0-291.84 0 0-158.719 107.523-174.082 71.68-15.36-35.84-15.36-107.52 0-143.36C573.441 128 768 122.879 768 122.879c0-35.84-148.48-71.68-209.922-71.68-61.437 0-128 5.121-209.918 40.961-81.922 30.719-148.48 81.918-209.922 143.36C76.801 296.96 0 419.84 0 455.68S76.8 599.04 189.441 645.12c112.637 46.078 168.957 56.32 230.399 66.559 56.32 5.12 133.12 0 199.68-15.36C670.719 686.078 768 660.48 768 640c0-10.238-194.559-15.36-209.922-46.078ZM230.398 476.16c-40.957 0-76.796-35.84-76.796-76.8 0-40.962 35.84-76.801 76.796-76.801 40.961 0 76.801 35.84 76.801 76.8 0 40.961-35.84 76.801-76.8 76.801Zm0 0"/>',
  tool: '<path d="m474.11 307.16-13.5 62.85-1.56 7.22-6.55 3.43c-27.74 14.5-44.83 33.7-50.9 57.08L674 379.18c81.57-17.53 94-135.2 94-135.2Zm-159.63 57.85c.62-10.74-.27-21.42-2.48-31.69-12.27-57.08-59.41-91.16-126.1-91.16-16.64 0-34.7 2.07-53.69 6.15-52.78 11.35-88.97 30.42-110.62 58.32-19.93 25.68-26.1 57-18.35 93.07 12.74 59.26 55.78 91.9 121.18 91.9 17.37 0 36.8-2.26 57.76-6.72l1-.19 110.68-23.8Zm-143.26 64.75c-17.42 3.74-33.16 5.64-46.8 5.64-49.36 0-61.18-24.02-66.22-47.52-5.55-25.79 1.79-39.05 7.8-46.79 12.83-16.53 39.8-29.61 78.02-37.83 15.12-3.25 29.2-4.9 41.87-4.9 27.88 0 62.84 8.12 71.15 46.78 11.83 55.03-48.7 76.63-85.82 84.62Zm0 0"/><path d="M434.7 456.02a120.36 120.36 0 0 0-25.26-2.74 109.31 109.31 0 0 0-28.21 3.78l4.2-19.54c7.44-34.62 32.92-56.78 59.78-70.82L524.03.02s-117.65 12.44-135.2 94l-105.5 490.82-.19.98c-5 23.5-7.22 44.62-6.68 63.57.67 23.29 5.5 43.3 14.56 60.41 15.22 28.73 41.23 47.22 77.3 54.98 9.9 2.13 19.58 3.2 28.8 3.2 42.96 0 99.1-22.93 122.6-132.17 24.46-113.82-27.88-167.5-85.02-179.79Zm-35.34-116.4a13.5 13.5 0 1 1 19.08 19.1 13.5 13.5 0 0 1-19.08-19.1ZM464.76 624c-18.87 87.77-55.58 87.77-67.64 87.77a81 81 0 0 1-16.98-1.95c-25.8-5.54-34.87-17.68-39.45-26.33-9.8-18.5-10.64-48.47-2.42-86.69 7-32.6 25.57-87.31 71.17-87.31 4.34 0 8.86.5 13.44 1.48 55.03 11.83 49.86 75.9 41.88 113.03Zm0 0"/>',
};

module.exports = {

  name: 'Aqua',
  purpose: 'A logbook for your aquaria',
  version: '1.0.0',
  author: 'Romein van Buren',
  vendor: 'Smart Yellow',
  icon: icons.aquarium,

  requires: [
    'webdesq/storage',
    'smartyellow/species',
    'smartyellow/multicolor',
  ],

  features: {
    seeAllAquaria: {
      description: 'See all aquaria',
    },
    editAquaria: {
      description: 'Edit aquaria',
      requires: [ 'seeAllAquaria' ],
    },
    createAquaria: {
      description: 'Create aquaria',
      requires: 'editAquaria',
    },
    deleteAquaria: {
      description: 'Delete aquaria',
      requires: 'createAquaria',
    },

    seeAllFish: {
      description: 'See all fish',
    },
    editFish: {
      description: 'Edit fish',
      requires: [ 'seeAllFish' ],
    },
    createFish: {
      description: 'Create fish',
      requires: 'editFish',
    },
    deleteFish: {
      description: 'Delete fish',
      requires: 'createFish',
    },

    seeAllMaintenance: {
      description: 'See all maintenance',
    },
    editMaintenance: {
      description: 'Edit maintenance',
      requires: [ 'seeAllMaintenance' ],
    },
    createMaintenance: {
      description: 'Create maintenance',
      requires: 'editMaintenance',
    },
    deleteMaintenance: {
      description: 'Delete maintenance',
      requires: 'createMaintenance',
    },
  },

  settings: {
    channels: {
      type: 'keys',
      label: 'channels',
      default: {},
    },
    maintenanceTypes: {
      type: 'keys',
      label: 'maintenance types',
      default: {
        food: 'food',
        plants: 'plants',
        waterTest: 'water test',
        waterReplaced: 'water replaced',
        filterCleaned: 'filter cleaned',
        glassCleaned: 'glass cleaned',
      },
    },
    languages: {
      type: 'multiselect',
      label: 'supported languages',
      options: [ 'frontend', 'backend', 'nl', 'en', 'de', 'fr', 'es', 'pt', 'it', 'se', 'dk', 'no' ],
      default: [ 'frontend' ],
    },
  },

  entities: {
    aquarium: 'aquarium.js',
    aquariummaintenance: 'aquariummaintenance.js',
    fish: 'fish.js',
  },

  gui: {
    modules: () => ([
      { path: 'aquaria.svelte',
        requires: [ 'seeAllAquaria' ],
        menu: {
          cluster: 'aquaria',
          icon: icons.aquarium,
          title: 'aquaria',
        },
      },
      { path: 'fish.svelte',
        requires: [ 'seeAllFish' ],
        menu: {
          cluster: 'aquaria',
          icon: icons.fish,
          title: 'fish',
        },
      },
      { path: 'aquariummaintenance.svelte',
        requires: [ 'seeAllMaintenance' ],
        menu: {
          cluster: 'aquaria',
          icon: icons.tool,
          title: 'maintenance',
        },
      },
    ]),
    components: [],
  },

  routes: ({ server, settings }) => [

    // Get all aquaria I'm allowed to see
    { route: '/aqua/aquaria',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllAquaria',
      handler: async (req, res, user) => {
        const q = server.storage({ user }).store('smartyellow/aquarium').find().sort({ 'log.created.on': -1 });
        const result = await (req.headers['format'] == 'object' ? q.toObject() : q.toArray());
        res.json(result);
      },
    },

    { route: '/aqua/aquaria/settings',
      method: 'get',
      purpose: 'Receive all predefined settings for aquaria',
      requires: 'smartyellow/aqua/seeAllAquaria',
      handler: async (req, res) => {
        res.json({
          previewUrl: settings.preview,
        });
      },
    },

    // Get specific aquarium
    { route: '/aqua/aquaria/:id',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllAquaria',
      handler: async (req, res, user) => {
        const doc = await server.storage({ user }).store('smartyellow/aquarium').get(req.params[0]);
        if (!doc) {
          res.error(404);
          return;
        }
        if (user.cannot('smartyellow/aqua/seeAllAquaria')) {
          const set = [ user.id, ...(user.coworkers || []) ];
          if (!set.includes(doc.log.created.by)) {
            // no access to this aquarium, send 'not authorized' error
            res.error(401);
            return;
          }
        }
        // validate item
        const result = await server.validateEntity({
          entity: 'smartyellow/aquarium',
          id: req.params[0],
          data: doc,
          validateOnly: true,
          user: user,
          isNew: false,
        });
        res.json(result);
      },
    },

    // Create new aquarium
    { route: '/aqua/aquaria',
      method: 'post',
      requires: 'smartyellow/aqua/createAquaria',
      handler: async (req, res, user) => {

        let result = await server.validateEntity({
          validateOnly: req.headers['init'],
          isNew: true,
          entity: 'smartyellow/aquarium',
          user: user,
          data: req.body,
        });

        // If validation was OK and we're not in initMode, store the new values
        if (result.store) {
          result = await result.store();
          delete result.store;
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }

        res.json(result);
      },
    },

    // Update existing aquarium
    { route: '/aqua/aquaria/:id',
      method: 'put',
      requires: 'smartyellow/aqua/editAquaria',
      handler: async (req, res, user) => {

        const result = await server.validateEntity({
          entity: 'smartyellow/aquarium',
          id: req.params[0],
          data: req.body,
          isNew: false,
          storeIfValid: true,
          validateOnly: req.headers['init'],
          user: user,
        });

        if (!result.errors) {
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }

        res.json(result);
      },
    },

    // Delete specific aquarium
    { route: '/aqua/aquaria/:id',
      method: 'delete',
      requires: 'smartyellow/aqua/deleteAquaria',
      handler: async (req, res, user) => {
        // Check if user is allowed to see aquarium to be deleted
        const aquaria = await server.storage({ user }).store('smartyellow/aquarium').find().toObject();
        if (aquaria[req.params[0]]) {
          // User is allowed to see the aquarium to be deleted, continue
          await server.storage({ user }).store('smartyellow/aquarium').delete({ id: req.params[0] });
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }
        else {
          // Not authorized
          res.error(401);
        }
      },
    },

    { route: '/aqua/aquaria/filters',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllAquaria',
      handler: async (req, res, user) => {
        const filters = await server.getFilters({
          entity: 'smartyellow/aquarium',
          user: user,
        });
        res.json(filters);
      },
    },

    { route: '/aqua/aquaria/formats',
      method: 'get',
      purpose: 'Get columns defined for entity smartyellow/aquarium',
      handler: async (req, res, user) => {
        const formats = await server.getFormats({
          entity: 'smartyellow/aquarium',
          user: user,
        });
        res.json(formats);
      },
    },

    { route: '/aqua/aquaria/search',
      method: 'post',
      requires: 'smartyellow/aqua/seeAllAquaria',
      handler: async (req, res, user) => {
        // Get query and language from posted data
        const { query } = req.body;
        const filters = await server.getFilters({
          entity: 'smartyellow/aquarium',
          user: user,
        });
        const storageQuery = server.storage({ user }).prepareQuery(filters, query, req.body.languages || false);
        const find = server.storage({ user }).store('smartyellow/aquarium').find(storageQuery);
        const result = await (req.headers['format'] == 'object' ? find.toObject() : find.toArray());
        res.json(result);
      },
    },

    // Get all fish I'm allowed to see
    { route: '/aqua/fish',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllFish',
      handler: async (req, res, user) => {
        const q = server.storage({ user }).store('smartyellow/fish').find().sort({ 'log.created.on': -1 });
        const result = await (req.headers['format'] == 'object' ? q.toObject() : q.toArray());
        res.json(result);
      },
    },

    { route: '/aqua/fish/settings',
      method: 'get',
      purpose: 'Receive all predefined settings for fish',
      requires: 'smartyellow/aqua/seeAllFish',
      handler: async (req, res) => {
        res.json({
          previewUrl: settings.preview,
        });
      },
    },

    // Get specific fish
    { route: '/aqua/fish/:id',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllFish',
      handler: async (req, res, user) => {
        const doc = await server.storage({ user }).store('smartyellow/fish').get(req.params[0]);
        if (!doc) {
          res.error(404);
          return;
        }
        if (user.cannot('smartyellow/aqua/seeAllFish')) {
          const set = [ user.id, ...(user.coworkers || []) ];
          if (!set.includes(doc.log.created.by)) {
            // no access to this fish, send 'not authorized' error
            res.error(401);
            return;
          }
        }
        // validate item
        const result = await server.validateEntity({
          entity: 'smartyellow/fish',
          id: req.params[0],
          data: doc,
          validateOnly: true,
          user: user,
          isNew: false,
        });
        res.json(result);
      },
    },

    // Create new fish
    { route: '/aqua/fish',
      method: 'post',
      requires: 'smartyellow/aqua/createFish',
      handler: async (req, res, user) => {

        let result = await server.validateEntity({
          validateOnly: req.headers['init'],
          isNew: true,
          entity: 'smartyellow/fish',
          user: user,
          data: req.body,
        });

        // If validation was OK and we're not in initMode, store the new values
        if (result.store) {
          result = await result.store();
          delete result.store;
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }

        res.json(result);
      },
    },

    // Update existing fish
    { route: '/aqua/fish/:id',
      method: 'put',
      requires: 'smartyellow/aqua/editFish',
      handler: async (req, res, user) => {

        const result = await server.validateEntity({
          entity: 'smartyellow/fish',
          id: req.params[0],
          data: req.body,
          isNew: false,
          storeIfValid: true,
          validateOnly: req.headers['init'],
          user: user,
        });

        if (!result.errors) {
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }

        res.json(result);
      },
    },

    // Delete specific fish
    { route: '/aqua/fish/:id',
      method: 'delete',
      requires: 'smartyellow/aqua/deleteFish',
      handler: async (req, res, user) => {
        // Check if user is allowed to see fish to be deleted
        const fish = await server.storage({ user }).store('smartyellow/fish').find().toObject();
        if (fish[req.params[0]]) {
          // User is allowed to see the fish to be deleted, continue
          await server.storage({ user }).store('smartyellow/fish').delete({ id: req.params[0] });
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }
        else {
          // Not authorized
          res.error(401);
        }
      },
    },

    { route: '/aqua/fish/filters',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllFish',
      handler: async (req, res, user) => {
        const filters = await server.getFilters({
          entity: 'smartyellow/fish',
          user: user,
        });
        res.json(filters);
      },
    },

    { route: '/aqua/fish/formats',
      method: 'get',
      purpose: 'Get columns defined for entity smartyellow/fish',
      handler: async (req, res, user) => {
        const formats = await server.getFormats({
          entity: 'smartyellow/fish',
          user: user,
        });
        res.json(formats);
      },
    },

    { route: '/aqua/fish/search',
      method: 'post',
      requires: 'smartyellow/aqua/seeAllFish',
      handler: async (req, res, user) => {
        // Get query and language from posted data
        const { query } = req.body;
        const filters = await server.getFilters({
          entity: 'smartyellow/fish',
          user: user,
        });
        const storageQuery = server.storage({ user }).prepareQuery(filters, query, req.body.languages || false);
        const find = server.storage({ user }).store('smartyellow/fish').find(storageQuery);
        const result = await (req.headers['format'] == 'object' ? find.toObject() : find.toArray());
        res.json(result);
      },
    },

    // Get all maintenance I'm allowed to see
    { route: '/aqua/maintenance',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllMaintenance',
      handler: async (req, res, user) => {
        const q = server.storage({ user }).store('smartyellow/aquariummaintenance').find().sort({ 'log.created.on': -1 });
        const result = await (req.headers['format'] == 'object' ? q.toObject() : q.toArray());
        res.json(result);
      },
    },

    { route: '/aqua/maintenance/settings',
      method: 'get',
      purpose: 'Receive all predefined settings for maintenance',
      requires: 'smartyellow/aqua/seeAllMaintenance',
      handler: async (req, res) => {
        res.json({
          previewUrl: settings.preview,
        });
      },
    },

    // Get specific maintenance
    { route: '/aqua/maintenance/:id',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllMaintenance',
      handler: async (req, res, user) => {
        const doc = await server.storage({ user }).store('smartyellow/aquariummaintenance').get(req.params[0]);
        if (!doc) {
          res.error(404);
          return;
        }
        if (user.cannot('smartyellow/aqua/seeAllMaintenance')) {
          const set = [ user.id, ...(user.coworkers || []) ];
          if (!set.includes(doc.log.created.by)) {
            // no access to this maintenance, send 'not authorized' error
            res.error(401);
            return;
          }
        }
        // validate item
        const result = await server.validateEntity({
          entity: 'smartyellow/aquariummaintenance',
          id: req.params[0],
          data: doc,
          validateOnly: true,
          user: user,
          isNew: false,
        });
        res.json(result);
      },
    },

    // Create new maintenance
    { route: '/aqua/maintenance',
      method: 'post',
      requires: 'smartyellow/aqua/createMaintenance',
      handler: async (req, res, user) => {

        let result = await server.validateEntity({
          validateOnly: req.headers['init'],
          isNew: true,
          entity: 'smartyellow/aquariummaintenance',
          user: user,
          data: req.body,
        });

        // If validation was OK and we're not in initMode, store the new values
        if (result.store) {
          result = await result.store();
          delete result.store;
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }

        res.json(result);
      },
    },

    // Update existing maintenance
    { route: '/aqua/maintenance/:id',
      method: 'put',
      requires: 'smartyellow/aqua/editMaintenance',
      handler: async (req, res, user) => {

        const result = await server.validateEntity({
          entity: 'smartyellow/aquariummaintenance',
          id: req.params[0],
          data: req.body,
          isNew: false,
          storeIfValid: true,
          validateOnly: req.headers['init'],
          user: user,
        });

        if (!result.errors) {
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }

        res.json(result);
      },
    },

    // Delete specific maintenance
    { route: '/aqua/maintenance/:id',
      method: 'delete',
      requires: 'smartyellow/aqua/deleteMaintenance',
      handler: async (req, res, user) => {
        // Check if user is allowed to see maintenance to be deleted
        const maintenance = await server.storage({ user }).store('smartyellow/aquariummaintenance').find().toObject();
        if (maintenance[req.params[0]]) {
          // User is allowed to see the maintenance to be deleted, continue
          await server.storage({ user }).store('smartyellow/aquariummaintenance').delete({ id: req.params[0] });
          // broadcast reload trigger
          server.publish('cms', 'smartyellow/aqua/reload');
        }
        else {
          // Not authorized
          res.error(401);
        }
      },
    },

    { route: '/aqua/maintenance/filters',
      method: 'get',
      requires: 'smartyellow/aqua/seeAllMaintenance',
      handler: async (req, res, user) => {
        const filters = await server.getFilters({
          entity: 'smartyellow/aquariummaintenance',
          user: user,
        });
        res.json(filters);
      },
    },

    { route: '/aqua/maintenance/formats',
      method: 'get',
      purpose: 'Get columns defined for entity smartyellow/aquariummaintenance',
      handler: async (req, res, user) => {
        const formats = await server.getFormats({
          entity: 'smartyellow/aquariummaintenance',
          user: user,
        });
        res.json(formats);
      },
    },

    { route: '/aqua/maintenance/search',
      method: 'post',
      requires: 'smartyellow/aqua/seeAllMaintenance',
      handler: async (req, res, user) => {
        // Get query and language from posted data
        const { query } = req.body;
        const filters = await server.getFilters({
          entity: 'smartyellow/aquariummaintenance',
          user: user,
        });
        const storageQuery = server.storage({ user }).prepareQuery(filters, query, req.body.languages || false);
        const find = server.storage({ user }).store('smartyellow/aquariummaintenance').find(storageQuery);
        const result = await (req.headers['format'] == 'object' ? find.toObject() : find.toArray());
        res.json(result);
      },
    },
  ],

};
