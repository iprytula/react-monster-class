import { useEffect, useState } from "react";
import type { User } from "../interfaces";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async (): Promise<User[]> => {
    try {
      const resultUsers: User[] = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ).then((response) => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      });

      return resultUsers;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(String(error));
      }

      throw error;
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="border-b border-slate-200 px-6 py-5">
            <h1 className="text-2xl font-semibold text-slate-900">Users</h1>
          </div>
          <div className="overflow-x-auto px-6 pb-6">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                        {user.id}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                        {user.username}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                        {user.phone}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-sm text-slate-500">
                      Loading users...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
