import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'urql';

const AllUsersQuery = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;

type AllUsersData = {
  allUsers: {
    id: string;
    name: string;
  }[];
};

const AllUsers: React.FC = () => {
  const [result] = useQuery<AllUsersData>({ query: AllUsersQuery });
  const { fetching, data, error } = result;

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oh no... {error.message}</div>;
  }

  return (
    <div>
      <p>There are {data?.allUsers.length} user(s) in the database:</p>
      <ul>
        {data?.allUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
