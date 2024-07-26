import { User, UserData } from "@/types/user";
import React from "react";

// Function to fetch user data by ID
async function fetchDetails(id: string): Promise<User | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    const data: User = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Details({ params }: { params: { id: string } }) {
  const { id } = params;
  const ninja: User | null = await fetchDetails(id);

  if (!ninja) {
    // Return a not-found page or a custom message if data is null
    return (
      <div>
        <h1>404 - User Not Found</h1>
        <p>The user with ID {id} does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      {ninja && (
        <>
          <h1>{ninja.name}</h1>
          <p>{ninja.email}</p>
          <p>{ninja.website}</p>
          <p>{ninja.address.city}</p>
        </>
      )}
    </div>
  );
}
