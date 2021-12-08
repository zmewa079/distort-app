import SearchForm from '../../components/SearchForm/SearchForm'
import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <div>
        <SearchForm />
      </div>
    </main>
  )
}
 
export default Landing