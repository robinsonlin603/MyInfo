import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Robinson Lin</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Image
            src="/myphoto.png"
            alt="Picture of author"
            width={480}
            height={480}
          />
        </div>
        <div className={styles.content}>
          <h1>Hello</h1>
          <h2>A Bit About Me</h2>
          <p>
            I’m passionate about Frontend development because it can immediately
            reflect in the website whatever I do. With my background as a sales
            representative, it helps me develop good communication and patience.
            When I encounter problems, I’ll try to simplify the problem, then
            solve it.
          </p>
          <ul>
            <li>
              <Link href="https://github.com/robinsonlin603">
                <a target="_blank">
                  <Image
                    src="/git.png"
                    alt="git connect"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/%E5%8E%9A%E5%AE%89-%E6%9E%97-123342222/">
                <a target="_blank">
                  <Image
                    src="/linkedin.png"
                    alt=" linkenin connect"
                    width={60}
                    height={60}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1yHWsb0P0mC8GZ4G3XY4Sctunijag5VXt/view?usp=sharing">
                <a target="_blank">
                  <button>Resume</button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
