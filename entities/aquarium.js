'use strict';

const { makeId } = require('core/makeid');

const states = {
  concept: 'concept',
  online: 'online',
};

const stockOptions = {
  0: '0 - out of stock',
  1: '1 - almost out of stock',
  2: '2 - on stock',
};

module.exports = {
  format: 5,
  author: 'Romein van Buren',
  vendor: 'Smart Yellow',
  purpose: 'Definition of an aquarium.',
  store: 'aquaria',

  forms: ({ settings }) => ({
    default: {
      pages: [
        { label: 'about',
          sections: [
            'id',
            'name',
            'state',
            'channels',
            'visual',
            'video',
          ],
        },
        { label: 'size',
          sections: [
            'size',
            'volume',
          ],
        },
        { label: 'water',
          sections: [
            'watervalues',
          ],
        },
        { label: 'food',
          sections: [
            'food',
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

        name: {
          label: 'name',
          fields: [
            { key: 'name',
              editor: 'string',
              localized: true,
              placeholder: 'Enter the name of this aquarium',
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

        channels: {
          label: 'channels',
          fields: [
            { key: 'channels',
              editor: 'multiselect',
              placeholder: 'Select channels',
              options: settings.channels,
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
              placeholder: 'Enter a description of your aquarium',
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

        size: {
          label: 'size',
          hint: 'in centimeters',
          fields: [
            { key: 'size.length',
              editor: 'number',
              label: 'length (cm)',
              labelPosition: 'right',
            },
            { key: 'size.height',
              editor: 'number',
              label: 'height (cm)',
              labelPosition: 'right',
            },
            { key: 'size.width',
              editor: 'number',
              label: 'width (cm)',
              labelPosition: 'right',
            },
          ],
        },

        volume: {
          label: 'volume',
          hint: 'in litres',
          fields: [
            { key: 'volume',
              editor: 'number',
              readonly: true,
              label: 'litres',
              labelPosition: 'right',
            },
          ],
        },

        food: {
          label: 'food',
          fields: [
            { key: 'food',
              editor: 'array',
              formattedTitle: {
                string: '{0.strong.lang} (stock: {1})',
                keys: [ 'title', 'stock' ],
              },
              fields: [
                { key: 'title',
                  editor: 'string',
                  localized: true,
                  label: 'title',
                },
                { key: 'stock',
                  editor: 'select',
                  options: stockOptions,
                  default: 2,
                  label: 'stock',
                },
                { key: 'description',
                  editor: 'text',
                  markup: true,
                  localized: true,
                  label: 'description',
                },
              ],
              default: [],
            },
          ],
        },
      },
    },
  }),

  schema: () => ({
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
          const r = storage ? await storage.store('smartyellow/aquarium').get(newValues.id) : null;
          return (r == null ? true : 'id already exists');
        }
        else {
          // ID cannot be changed if record was already created
          return (newValues.id == oldValues.id ? true : 'id cannot be changed');
        }
      },
      default: () => makeId(6),
    },

    name: {
      type: 'stringset',
      default: '',
      trim: true,
      required: [ true, 'Aquarium name is missing!' ],
      filter: {
        title: 'name',
        match: '^[a-z]',
        localized: true,
      },
      format: {
        label: 'name',
        type: 'text',
        sortable: 'text',
        sticky: true,
        sorted: 'up',
        align: 'left',
        minWidth: 300,
        enabled: true,
        priority: 1,
      },
    },

    state: {
      type: 'string',
      default: 'concept',
      validate: ({ newValues }) => Object.keys(states).includes(newValues.state),
      format: {
        label: 'state',
        type: 'text',
        aling: 'right',
        minWidth: 150,
        enabled: true,
      },
    },

    description: {
      type: 'stringset',
      skip: true,
      default: '',
    },

    volume: {
      type: 'computed',
      default: 0,
      format: {
        label: 'volume',
        type: 'number',
        align: 'left',
        sortable: 'number',
        minWidth: 100,
        enabled: true,
      },
      generator: ({ values }) => {
        if (!values.size) {
          return 0;
        }
        const { length, height, width } = values.size;
        if (!length || !height || !width) {
          return 0;
        }
        console.log('it works');
        console.log(values);
        console.log(((length * height * width) / 1000));
        return ((length * height * width) / 1000);
      },
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

    watervalues: {
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
