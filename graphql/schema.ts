import { schema, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';

use(prisma());

schema.objectType({
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

schema.queryType({
  definition(t) {
    t.crud.user();
    t.crud.users({
      filtering: true,
      ordering: true,
      pagination: true,
    });
    t.crud.log();
    t.crud.logs({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

schema.mutationType({
  definition(t) {
    // User
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.updateManyUser();
    t.crud.deleteOneUser();
    t.crud.deleteManyUser();

    // Log
    t.crud.createOneLog();
    t.crud.updateOneLog();
    t.crud.updateManyLog();
    t.crud.deleteOneLog();
    t.crud.deleteManyLog();
  },
});

schema.objectType({
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
