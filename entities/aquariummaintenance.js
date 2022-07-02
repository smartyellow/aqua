'use strict';

const { makeId } = require('core/makeid');

const states = {
  planned: 'planned',
  inProgress: 'in progress',
  done: 'done',
};

const importance = {
  major: 'major maintenance',
  minor: 'minor maintenance',
  small: 'small maintenance',
};

module.exports = {
  format: 5,
  author: 'Romein van Buren',
  vendor: 'Smart Yellow',
  purpose: 'Definition of aquarium maintenance.',
  store: 'aquariummaintenance',

  forms: ({ settings }) => ({
    default: {
      pages: [
        { label: 'about',
          sections: [
            'id',
            'aquarium',
            'state',
            'importance',
            'types',
          ],
        },
        { label: 'description',
          sections: [
            'visual',
            'video',
            'description',
          ],
        },
        { label: 'notes',
          sections: [
            'notes',
          ],
        },
        { label: 'water values',
          sections: [
            'watervalues',
          ],
        },
      ],
      sections: {
        id: {
          label: 'id',
          fields: [
            { key: 'id',
              editor: 'string',
              readonly: true,
            },
          ],
        },

        aquarium: {
          label: 'aquarium',
          fields: [
            { key: 'aquarium',
              editor: 'select',
              options: async ({ storage, user }) => await storage({ user })
                .store('aquaria')
                .find()
                .sort({ name: 1 })
                .toObject('id', 'name'),
            },
          ],
        },

        date: {
          label: 'date',
          fields: [
            { key: 'date',
              editor: 'date',
            },
          ],
        },

        state: {
          label: 'state',
          fields: [
            { key: 'state',
              editor: 'select',
              required: true,
              options: states,
            },
          ],
        },

        importance: {
          label: 'importance',
          fields: [
            { key: 'importance',
              editor: 'select',
              required: true,
              options: importance,
            },
          ],
        },

        types: {
          label: 'types',
          fields: [
            { key: 'types',
              editor: 'multiselect',
              placeholder: 'Select types',
              options: settings.maintenanceTypes,
            },
          ],
        },

        description: {
          label: 'description',
          fields: [
            { key: 'description',
              editor: 'text',
              localized: true,
              markup: true,
              placeholder: 'Enter a description of this maintenance',
            },
          ],
        },

        watervalues: {
          label: 'water values',
          fields: [
            { key: 'watervalues.no3',
              label: 'NO3',
              placeholder: 'nitrate',
              editor: 'number',
              minWidth: 40,
            },
            { key: 'watervalues.no2',
              label: 'NO2',
              placeholder: 'nitrite',
              editor: 'number',
              minWidth: 40,
            },
            { key: 'watervalues.gh',
              label: 'GH',
              placeholder: 'hardness',
              editor: 'number',
              minWidth: 40,
            },
            { key: 'watervalues.kh',
              label: 'KH',
              placeholder: 'hardness',
              editor: 'number',
              minWidth: 40,
            },
            { key: 'watervalues.ph',
              label: 'pH',
              placeholder: 'acidity',
              editor: 'number',
              minWidth: 40,
            },
            { key: 'watervalues.chlorine',
              label: 'chlorine',
              placeholder: 'chlorine',
              editor: 'number',
              minWidth: 40,
            },
          ],
        },

        notes: {
          label: 'notes',
          fields: [
            { key: 'notes',
              editor: 'array',
              formattedTitle: {
                string: '{0.date.strong}',
                keys: [ 'date' ],
              },
              fields: [
                { key: 'date',
                  editor: 'date',
                  format: 'datetime',
                  label: 'date and time',
                },
                { key: 'note',
                  editor: 'text',
                  localized: true,
                  markup: true,
                  label: 'note',
                },
              ],
              default: [],
            },
          ],
        },

        visual: {
          label: 'visual',
          fields: [
            { key: 'visual',
              editor: 'file',
              min: 0,
              max: 1,
              accept: [ 'image/*' ],
            },
          ],
        },

        video: {
          label: 'video',
          fields: [
            { key: 'video',
              editor: 'video',
            },
          ],
        },
      },
    },
  }),

  schema: ({ settings }) => ({
    id: {
      type: 'string',
      required: ({ newEntity }) => newEntity,
      lowercase: true,
      trim: true,
      filter: {
        title: 'id',
        match: '^[a-zA-Z0-9]{6}',
        order: 999,
      },
      validate: async ({ newValues, oldValues, newEntity, storage }) => {
        if (newEntity) {
          // For new records, any value is ok
          const r = storage ? await storage.store('smartyellow/aquariummaintenance').get(newValues.id) : null;
          return (r == null ? true : 'id already exists');
        }
        else {
          // ID cannot be changed if record was already created
          return (newValues.id == oldValues.id ? true : 'id cannot be changed');
        }
      },
      default: () => makeId(6),
    },

    importance: {
      type: 'string',
      default: 'small',
      validate: ({ newValues }) => Object.keys(importance).includes(newValues.importance),
      format: {
        label: 'importance',
        type: 'text',
        minWidth: 150,
        enabled: true,
      },
    },

    state: {
      type: 'string',
      default: 'concept',
      validate: ({ newValues }) => Object.keys(states).includes(newValues.state),
      format: {
        label: 'state',
        type: 'text',
        minWidth: 150,
        enabled: true,
      },
    },

    types: {
      type: 'array',
      default: [],
      validate: ({ newValues }) => {
        if (!settings.maintenanceTypes) {
          return true;
        }
        if (!Array.isArray(newValues.types)) {
          return false;
        }
        return newValues.types.every(
          t => Object.keys(settings.maintenanceTypes).includes(t)
        );
      },
    },

    date: {
      type: 'date',
      default: () => new Date(),
      required: true,
      format: {
        label: 'date',
        type: 'date',
        sortable: 'date',
        minWidth: 150,
        enabled: true,
      },
    },

    description: {
      type: 'stringset',
      skip: true,
      default: '',
    },

    video: {
      type: 'array',
      of: {
        id: {
          type: 'string',
        },
        host: {
          type: 'string',
        },
        thumb: {
          type: 'string',
        },
      },
      default: [],
    },

    visual: {
      type: 'array',
      of: [ 'string' ],
      default: [],
      skip: true,
      onDataValid: async ({ newValues, storage, user }) => {
        newValues.visual = newValues.visual || [];
        if (!Array.isArray(newValues.visual)) {
          newValues.visual = [ newValues.visual ];
        }
        for (let i = 0; i < newValues.visual.length; i++) {
          if (newValues.visual[i].data) {
            //
            if (storage) {
              // If storage is available, insert the new file into storage and collect id
              const result = await storage({ user }).bucket('webdesq/media').insert({
                id: makeId(6),
                filename: newValues.visual[i].name,
                metadata: {
                  contentType: newValues.visual[i].type,
                },
              }, newValues.visual[i].data)
                .catch(error => {
                  if (error.code !== 'DUPLICATE_FILE') {
                    throw error;
                  }
                  newValues.visual[i] = error.file.id;
                });
              if (result) {
                newValues.visual[i] = result.id;
              }
            }
            else {
              // If no storage is available, remove slot by setting it to null
              newValues.visual[i] = null;
            }
          }
          // remove empty slots in pictures array
          newValues.visual = newValues.visual.filter(i => i != null);
          newValues.visual = [ ...new Set(newValues.visual) ];
        }
      },
    },
  }),
};
