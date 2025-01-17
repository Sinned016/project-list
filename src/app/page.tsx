import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nemo a iure voluptatem eveniet, molestiae minus
        dolore sunt nesciunt, corrupti inventore voluptates quae optio aut eius soluta iste quis eum.
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nemo a iure voluptatem eveniet, molestiae minus
        dolore sunt nesciunt, corrupti inventore voluptates quae optio aut eius soluta iste quis eum.
      </p>

      <Link className={styles.btn} href="/ninjas">
        See Ninja Listing
      </Link>
    </div>
  );
}
