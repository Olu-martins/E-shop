import { useState, React } from 'react'
import resetImg from '../../assets/forgot.png'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'


const Password = () => {

    const [ email, setEmail ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const handleResetPasswordInput = e => {
        setEmail(e.target.value)
    }

    const resetPassword = e => {
        e.preventDefault()
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setIsLoading(false)
                toast.success('Check your inbox for a reset link...')
            })
            .catch((error) => {
                setIsLoading(false)
                toast.error(error.message)
            });

    }

    return (
        <>
            {isLoading && <Loader/>}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={resetImg} alt="resetpassword" width="400px" />
                </div>
                <Card >
                    <div className={styles.form}>
                        <h2>Reset Password</h2>
                        <form action="" onSubmit={resetPassword}>
                            <input type="text" placeholder='Email' value={email} onChange={handleResetPasswordInput} required />
                            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
                            <div className={styles.links}>
                                <p>
                                    <Link to='/login'>-Login</Link>
                                </p>
                                <p>
                                    <Link to='/register'>-Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </Card>
            </section >
        </>
    )
}

export default Password