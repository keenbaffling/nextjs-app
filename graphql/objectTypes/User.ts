import { schema } from 'nexus';

export const User = schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.role();
    t.model.logs();
  },
});
