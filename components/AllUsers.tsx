import React from 'react';
import { useAllUsersQuery } from '../generated/graphql';

type AllUsersData = {
  allUsers: {
    id: string;
    name: string;
  }[];
};

const AllUsers: React.FC = () => {
  const [result] = useAllUsersQuery();
  const { fetching, data, error } = result;

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oh no... {error.message}</div>;
  }

  return (
    <div>
      <p>There are {data?.allUsers?.length} user(s) in the database:</p>
      <ul>
        {data?.allUsers?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
