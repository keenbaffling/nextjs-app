import { schema, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import './features/objectTypes';

use(prisma());

schema.addToContext((req) => {
  console.log(req);
  return {
    req
  }
})

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
