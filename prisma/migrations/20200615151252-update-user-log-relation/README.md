# Migration `20200615151252-update-user-log-relation`

This migration has been generated by Klinton Ballecer at 6/15/2020, 3:12:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Log" DROP CONSTRAINT IF EXiSTS "Log_userId_fkey",
DROP COLUMN "userId",
ADD COLUMN "userId" text  NOT NULL ;

ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'USER';

ALTER TABLE "public"."Log" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200615144058-add-user-role-and-logs..20200615151252-update-user-log-relation
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -29,5 +29,7 @@
   name String
   description String
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
+  user User @relation(fields: [userId], references: [id])
+  userId String
 }
```

