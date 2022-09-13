import styles from './index.module.scss'

const ErrorPage =(props) => {
	console.log(props);
	return props.status === 404 ? <div className={styles.error}> Pagina non trovata</div>  : 'Error!';
  }

export default ErrorPage;