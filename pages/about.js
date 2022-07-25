import Head from "next/head";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Robinson Lin | About</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>About</h1>
        <p className={styles.title}>Skills</p>
        <ul className={styles.ulSkill}>
          <li>
            <Image
              src="/html5.png"
              alt="Picture of HTML"
              width={100}
              height={100}
            />
            <p>HTML5</p>
          </li>
          <li>
            <Image
              src="/css3.png"
              alt="Picture of CSS3"
              width={100}
              height={100}
            />
            <p>CSS3</p>
          </li>
          <li>
            <Image
              src="/javascript.png"
              alt="Picture of javascript"
              width={100}
              height={100}
            />
            <p>Javascript</p>
          </li>
          <li>
            <Image
              src="/react.png"
              alt="Picture of React"
              width={100}
              height={100}
            />
            <p>React</p>
          </li>
          <li>
            <Image
              src="/python.png"
              alt="Picture of Python"
              width={100}
              height={100}
            />
            <p>Python</p>
          </li>
          <li>
            <Image
              src="/flask.png"
              alt="Picture of Flask"
              width={100}
              height={100}
            />
            <p>Flask</p>
          </li>
          <li>
            <Image
              src="/nextjs.png"
              alt="Picture of nextjs"
              width={100}
              height={100}
            />
            <p>Next.js</p>
          </li>
          <li>
            <Image
              src="/mysql.png"
              alt="Picture of mysql"
              width={100}
              height={100}
            />
            <p>MySQL</p>
          </li>
          <li>
            <Image
              src="/firebase.png"
              alt="Picture of firebase"
              width={100}
              height={100}
            />
            <p>Firebase</p>
          </li>
          <li>
            <Image
              src="/aws.png"
              alt="Picture of aws"
              width={100}
              height={100}
            />
            <p>AWS</p>
          </li>
          <li>
            <Image
              src="/github.png"
              alt="Picture of github"
              width={100}
              height={100}
            />
            <p>Github</p>
          </li>
        </ul>
        <p className={styles.titleTopBorder}>Work Expreience</p>
        <ul className={styles.ulExpreience}>
          <li>
            <p>
              <span>2022.01-2022.07</span>Web Trainee, WeHelp Bootcamp
            </p>
            <ul>
              <li>
                Acquired web development knowledge 50-60 hours per week for
                24weeks, including 18 weeks focusing on fundamental Full Stack
                development and 6 weeks aiming at Frontend specialization.
              </li>
              <li>
                Developed a Full Stack e-commerce project&nbsp;
                <Link href="http://35.153.147.80:3000/">
                  <a target="_blank">Taipei Day Trip Website</a>
                </Link>
                .
              </li>
              <li>
                Collaborated with three classmates, developed a weather forecast
                project through Git flow.
              </li>
              <li>
                Developed an individual project&nbsp;
                <Link href="https://theselfie-59eaf.web.app/">
                  <a target="_blank">Selfie</a>
                </Link>
                &nbsp;focusing on Frontend technique.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <span>2020.08-2022.01</span>
              Clinical Sales Representative, HI-Clearance INC.
            </p>
            <ul>
              <li>
                Assist doctors operate Renaissance robotics, effectively
                reducing operative complication.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <span>2018.09-2020.06</span>
              Management Trainee, Hung-Yuang Co.
            </p>
            <ul>
              <li>Control ingredients cost within 30% of total revenue. </li>
            </ul>
          </li>
          <li>
            <p>
              <span>2017.09-2018.06</span>
              Pharmacist assistant, HealthMed Pharmacy
            </p>
            <ul>
              <li>Achieve headquarters revenue target.</li>
            </ul>
          </li>
        </ul>
        <p className={styles.titleTopBorder}>Education</p>
        <p className={styles.ulEducation}>
          <span>2022.01-2022.07</span>
          Health and Nutrition, Taipei Medical University.
        </p>
      </div>
    </>
  );
};

export default About;
