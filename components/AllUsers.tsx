import React from 'react';
import { useAllUsersQuery } from '../generated/graphql';

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
      <p>There are {data?.users?.length} user(s) in the database:</p>
      <ul>
        {data?.users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
