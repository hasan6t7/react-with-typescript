import type { ApiResponse, User } from "../types/user";

export const fetchUser = async (): Promise<ApiResponse<User[]>> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP Error status: ${res.status}`);
    }
    const data = await res.json();
    return {
      data,
      message: "Data Fetch Successfully",
      status: 200,
    };
  } catch (error) {
    return {
      data: [],
      status: 500,
      message: error instanceof Error ? error.message : "An error Occured",
    };
  }
};
