import { schema } from 'nexus';

export const Log = schema.objectType({
  name: 'Log',
  definition(t) {
    t.model.id();
    t.model.type();
    t.model.name();
    t.model.description();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
