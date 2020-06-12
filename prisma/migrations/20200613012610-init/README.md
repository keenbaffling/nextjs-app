# Migration `20200613012610-init`

This migration has been generated by Klinton Ballecer at 6/13/2020, 1:26:10 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text  NOT NULL ,"name" text  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200613012610-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,13 @@
+datasource db {
+  provider = "postgresql"
+  url = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id String @default(cuid()) @id
+  name String
+}
```

