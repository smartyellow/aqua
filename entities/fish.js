'use strict';

const { makeId } = require('core/makeid');

const genders =  {
  m: 'male',
  f: 'female',
  u: 'unknown',
  o: 'other',
};

module.exports = {
  format: 5,
  author: 'Romein van Buren',
  vendor: 'Smart Yellow',
  purpose: 'Definition of a fish in an aquarium.',
  store: 'fish',

  forms: () => ({
    default: {
      pages: [
        { label: 'about',
          sections: [
            'id',
            'name',
            'gender',
            'aquarium',
            'visual',
            'video',
          ],
        },
        { label: 'description',
          sections: [
            'description',
            'namedescription',
          ],
        },
        { label: 'appearance',
          sections: [
            'species',
            'colors',
            'length',
            'appearance',
          ],
        },
        { label: 'lifespan',
          sections: [
            'since',
            'isdeceased',
            'deceasedon',
            'inmemoriam',
          ],
        },
        {
          label: 'notes',
          sections: [
            'notes',
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
              placeholder: 'Enter the name of this fish',
            },
          ],
        },

        gender: {
          label: 'gender',
          fields: [
            { key: 'gender',
              editor: 'select',
              default: 'u',
              options: genders,
            },
          ],
        },

        species: {
          label: 'species',
          fields: [
            { key: 'species',
              editor: 'select',
              options: async ({ storage, user }) => await storage({ user })
                .store('smartyellow/species')
                .find()
                .sort({ name: 1 })
                .toObject('id', 'name'),
            },
          ],
        },

        aquarium: {
          label: 'aquarium',
          fields: [
            { key: 'aquarium',
              editor: 'select',
              options: async ({ storage, user }) => await storage({ user })
                .store('smartyellow/aquarium')
                .find()
                .sort({ name: 1 })
                .toObject('id', 'name'),
            },
          ],
        },

        since: {
          label: 'addition date',
          fields: [
            { key: 'since',
              editor: 'date',
            },
          ],
        },

        isdeceased: {
          label: 'deceased',
          fields: [
            { key: 'deceased.is',
              editor: 'checkbox',
            },
            { key: 'deceased.on',
              label: 'deceased on',
              editor: 'date',
              condition: {
                key: 'deceased.is',
                value: true,
              },
            },
            { key: 'deceased.inmemoriam',
              label: 'in memoriam',
              editor: 'text',
              markup: true,
              localized: true,
              condition: {
                key: 'deceased.is',
                value: true,
              },
            },
          ],
        },

        colors: {
          label: 'colors',
          fields: [
            { key: 'colors',
              editor: 'smartyellow/multicolor',
              multiple: true,
            },
          ],
        },

        length: {
          label: 'length',
          hint: 'in centimeters',
          fields: [
            { key: 'length',
              editor: 'number',
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
              placeholder: 'Enter a description of this fish',
            },
          ],
        },

        namedescription: {
          label: 'description of the name',
          fields: [
            { key: 'namedescription',
              editor: 'text',
              localized: true,
              markup: true,
              placeholder: 'Enter a description of its name',
            },
          ],
        },

        appearance: {
          label: 'appearance',
          fields: [
            { key: 'appearance',
              editor: 'text',
              localized: true,
              markup: true,
              placeholder: 'Describe the appearance of this fish',
            },
          ],
        },

        notes: {
          label: 'notes',
          fields: [
            { key: 'notes',
              editor: 'array',
              formattedTitle: {
                string: '{0.strong.lang} ({1.date})',
                keys: [ 'title', 'date' ],
              },
              fields: [
                { key: 'title',
                  editor: 'string',
                  localized: true,
                  label: 'title',
                },
                { key: 'date',
                  editor: 'date',
                  label: 'date',
                },
                { key: 'note',
                  editor: 'text',
                  markup: true,
                  localized: true,
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
          const r = storage ? await storage.store('smartyellow/fish').get(newValues.id) : null;
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

    gender: {
      type: 'string',
      validate: ({ newValues }) => Object.keys(genders).includes(newValues.gender),
      default: 'u',
      format: {
        label: 'gender',
        type: 'text',
        minWidth: 75,
        enabled: true,
      },
      filter: {
        title: 'gender',
        match: '^[mfuo]{1}$',
      },
    },

    since: {
      type: 'date',
      format: {
        label: 'since',
        type: 'date',
        minWidth: 150,
        enabled: true,
        priority: 2,
      },
    },

    deceased: {
      type: 'date',
      format: {
        label: 'deceased',
        type: 'date',
        minWidth: 150,
        enabled: true,
        priority: 3,
      },
    },

    age: {
      type: 'computed',
      generator: async ({ values }) => {
        if (!values.since) {
          return 0;
        }
        const added = new Date(values.since);
        const present = new Date(values.deceased || new Date());
        const time = present.getTime() - added.getTime();
        const days = time / 1000 / 60 / 60 / 24;
        return days;
      },
      format: {
        label: 'age in days',
        type: 'text',
        sortable: 'number',
        minWidth: 70,
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
