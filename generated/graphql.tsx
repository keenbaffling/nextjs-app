import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type Log = {
  __typename?: 'Log';
  id: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type LogCreateInput = {
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateOneWithoutLogsInput;
};

export type LogCreateManyWithoutUserInput = {
  create?: Maybe<Array<LogCreateWithoutUserInput>>;
  connect?: Maybe<Array<LogWhereUniqueInput>>;
};

export type LogCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogFilter = {
  every?: Maybe<LogWhereInput>;
  some?: Maybe<LogWhereInput>;
  none?: Maybe<LogWhereInput>;
};

export type LogScalarWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  AND?: Maybe<Array<LogScalarWhereInput>>;
  OR?: Maybe<Array<LogScalarWhereInput>>;
  NOT?: Maybe<Array<LogScalarWhereInput>>;
};

export type LogUpdateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserUpdateOneRequiredWithoutLogsInput>;
};

export type LogUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogUpdateManyWithoutUserInput = {
  create?: Maybe<Array<LogCreateWithoutUserInput>>;
  connect?: Maybe<Array<LogWhereUniqueInput>>;
  set?: Maybe<Array<LogWhereUniqueInput>>;
  disconnect?: Maybe<Array<LogWhereUniqueInput>>;
  delete?: Maybe<Array<LogWhereUniqueInput>>;
  update?: Maybe<Array<LogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<LogUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<LogScalarWhereInput>>;
  upsert?: Maybe<Array<LogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LogUpdateManyWithWhereNestedInput = {
  where: LogScalarWhereInput;
  data: LogUpdateManyDataInput;
};

export type LogUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogUpdateWithWhereUniqueWithoutUserInput = {
  where: LogWhereUniqueInput;
  data: LogUpdateWithoutUserDataInput;
};

export type LogUpsertWithWhereUniqueWithoutUserInput = {
  where: LogWhereUniqueInput;
  update: LogUpdateWithoutUserDataInput;
  create: LogCreateWithoutUserInput;
};

export type LogWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  AND?: Maybe<Array<LogWhereInput>>;
  OR?: Maybe<Array<LogWhereInput>>;
  NOT?: Maybe<Array<LogWhereInput>>;
  user?: Maybe<UserWhereInput>;
};

export type LogWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  updateOneUser?: Maybe<User>;
  updateManyUser: BatchPayload;
  deleteOneUser?: Maybe<User>;
  deleteManyUser: BatchPayload;
  createOneLog: Log;
  updateOneLog?: Maybe<Log>;
  updateManyLog: BatchPayload;
  deleteOneLog?: Maybe<Log>;
  deleteManyLog: BatchPayload;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationCreateOneLogArgs = {
  data: LogCreateInput;
};


export type MutationUpdateOneLogArgs = {
  data: LogUpdateInput;
  where: LogWhereUniqueInput;
};


export type MutationUpdateManyLogArgs = {
  data: LogUpdateManyMutationInput;
  where?: Maybe<LogWhereInput>;
};


export type MutationDeleteOneLogArgs = {
  where: LogWhereUniqueInput;
};


export type MutationDeleteManyLogArgs = {
  where?: Maybe<LogWhereInput>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  log?: Maybe<Log>;
  logs: Array<Log>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<QueryUsersWhereInput>;
  orderBy?: Maybe<QueryUsersOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryLogsArgs = {
  where?: Maybe<QueryLogsWhereInput>;
  orderBy?: Maybe<QueryLogsOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LogWhereUniqueInput>;
  before?: Maybe<LogWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryLogsOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
};

export type QueryLogsWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
};

export type QueryUsersOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
};

export type QueryUsersWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  role: Role;
  logs: Array<Log>;
};


export type UserLogsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<LogWhereUniqueInput>;
  before?: Maybe<LogWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
  logs?: Maybe<LogCreateManyWithoutUserInput>;
};

export type UserCreateOneWithoutLogsInput = {
  create?: Maybe<UserCreateWithoutLogsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutLogsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
  logs?: Maybe<LogUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
};

export type UserUpdateOneRequiredWithoutLogsInput = {
  create?: Maybe<UserCreateWithoutLogsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutLogsDataInput>;
  upsert?: Maybe<UserUpsertWithoutLogsInput>;
};

export type UserUpdateWithoutLogsDataInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
};

export type UserUpsertWithoutLogsInput = {
  update: UserUpdateWithoutLogsDataInput;
  create: UserCreateWithoutLogsInput;
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  logs?: Maybe<LogFilter>;
  role?: Maybe<Role>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);


export const UsersDocument = gql`
    query users {
  users {
    id
    name
  }
}
    `;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};