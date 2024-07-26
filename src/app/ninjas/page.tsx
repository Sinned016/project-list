import React from "react";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
import { UserData } from "@/types/user";

async function fetchNinjas(): Promise<UserData> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    const data: UserData = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function Ninjas() {
  const ninjas: UserData = await fetchNinjas();

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <div className={styles.single}>
            <h3>{ninja.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
