import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUser } from "../services/userServices";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const res = await fetchUser();
        if (res.status === 200) {
          setUsers(res.data);
        } else {
          setError(res.message);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An Error Occured");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        loading...
      </div>
    );
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }
  return (
    <div>
      <p className="text-3xl font-bold mb-10">All User</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 border border-indigo-300 rounded-2xl bg-linear-to-r/decreasing from-indigo-200 to-teal-200"
          >
            <p>Name: {user.name}</p>
            <p>Email : {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
