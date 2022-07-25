import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Robinson Lin | Projects</title>
        <meta name="description" content="Project's list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.background}></div>
            <div className={styles.content}>
              <h1>Selfie</h1>
              <p>Selfie is a free photo sharing website.</p>
              <ul>
                tech:
                <li>
                  <Image
                    src="/javascript.png"
                    alt="Picture of javascript"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/react.png"
                    alt="Picture of react"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/react-router.png"
                    alt="Picture of react-router"
                    width={36}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/firebase.png"
                    alt="Picture of firebase"
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="https://theselfie-59eaf.web.app/">
                    <a target="_blank">
                      <Image
                        src="/link.png"
                        alt="Picture of link"
                        width={48}
                        height={48}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/robinsonlin603/selfie">
                    <a target="_blank">
                      <Image
                        src="/github_blue.png"
                        alt="Picture of github_blue"
                        width={48}
                        height={48}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.photo}>
              <Image
                src="/selfie_rwd.png"
                alt="selfie rwd"
                width={400}
                height={268}
              />
              <p>Selfie</p>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.background}></div>
            <div className={styles.content}>
              <h1 className={styles.taipei}>Taipei-Day-Trip-Website</h1>
              <p>An E-Commerce for booking tour in Taipei.</p>
              <ul>
                tech:
                <li>
                  <Image
                    src="/html5.png"
                    alt="Picture of html5"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/css3.png"
                    alt="Picture of css3"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/javascript.png"
                    alt="Picture of javascript"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/python.png"
                    alt="Picture of python"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/Flask.png"
                    alt="Picture of flask"
                    width={36}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/mysql.png"
                    alt="Picture of mysql"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src="/aws.png"
                    alt="Picture of aws"
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="http://35.153.147.80:3000/">
                    <a target="_blank">
                      <Image
                        src="/link.png"
                        alt="Picture of link"
                        width={48}
                        height={48}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/robinsonlin603/taipei-day-trip-website">
                    <a target="_blank">
                      <Image
                        src="/github_blue.png"
                        alt="Picture of github_blue"
                        width={48}
                        height={48}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.photo}>
              <Image
                src="/taipei_rwd.png"
                alt="TDTW rwd"
                width={400}
                height={268}
              />
              <p> Taipei-Day-Trip-Website</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
