import { FaDochub, FaBook } from 'react-icons/fa'
import styles from '~/styles/Home.module.css'
import HashIcon from '../svgs/hash-icon.svg'
import Layout from '~/components/Layout'
import Form1 from './forms/Form1'
const IndexPage = ({ meta }) => {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Your content goes here */}
        <h1 style={{color: 'red', fontWeight: 'bold', fontSize: 24}}>Lets Learn how to Upload Image from Next JS (frontend) to Node JS (Backend)</h1>
        <Form1 />
      </div>
    </Layout>
  )
}

export default IndexPage

export const getServerSideProps = async () => {
  return {
    props: {
      meta: {
        title: 'Next.js Starter Kit',
      },
    },
  }
}
