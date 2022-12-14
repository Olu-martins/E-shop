import { useState } from 'react'
import styles from './auth.module.scss'
import registerImg from '../../assets/register.png'
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'



const Register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const navigate = useNavigate()

    const registerUser = e => {
        e.preventDefault()
        console.log(email, password, confirmPassword)
        if (password !== confirmPassword) {
            toast.error('password do not match.')
        }
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setIsLoading(false)
                toast.success('Registration Successfully...')
                navigate('/login')
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false)
            })
    }

    return (
        <>
            <ToastContainer />
            {isLoading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <Card >
                    <div className={styles.form}>
                        <h2>Register</h2>
                        <form action="" onSubmit={registerUser}>
                            <input type="text" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)} required/>
                            <input type="password" placeholder='Choose a new password'  value={password} onChange={e => setPassword(e.target.value)} required/>
                            <input type="password" placeholder='Confirm password'  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                            <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
                        </form>
                        <span className={styles.register}>
                            <p>Already have an account?</p>
                            <Link to="/login">Login</Link>
                        </span>
                    </div>
                </Card>
                <div className={styles.img}>
                    <img src={registerImg} alt="register" width="400px" />
                </div>
            </section >
        </>
    )
}

export default Register