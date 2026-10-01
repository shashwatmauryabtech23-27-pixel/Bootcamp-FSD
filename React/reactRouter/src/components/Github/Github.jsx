import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-center m-4 p-6 text-white rounded-lg">
      <h1 className="text-2xl font-bold">
        GitHub Followers: {data.length}
      </h1>

      {data.length > 0 && (
        <img
          src={data[0].avatar_url}
          alt="GitHub Avatar"
          className="mx-auto mt-4 rounded-full w-24 h-24"
        />
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/shashwatmauryabtech23-27-pixel/followers"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub followers");
  }

  return response.json();
};