import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

"email"
"email-input-placeholder"
"signup"

const Signup = () => {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [consfirmPassword, setConsfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const { signup } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (consfirmPassword !== password) {
            alert('password does not match')
            return;
        }
        try {

            await signup(username, password)
            alert('signup successful')
            navigate('/home')


        } catch (error) {
            alert('signup failed' + error.message)

        }
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">{t("signup")}</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t("username")}</label>
                        <input
                            type="text"
                            placeholder={t('username-input-placeholder')}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => {
                                setUsername(e.target.value)

                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t("email")}</label>
                        <input
                            type="email"
                            placeholder={t("email-input-placeholder")}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t("password")}</label>
                        <input
                            type="password"
                            placeholder={t("password-input-placeholder")}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t("confirm-password")}</label>
                        <input
                            type="password"
                            placeholder={t("confirm-password-input-placeholder")}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => {
                                setConsfirmPassword(e.target.value)

                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"

                    >
                        {t("signup-button")}
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    {t("without_account")}{' '}
                    <a href="/login" className="text-orange-500 hover:underline">
                        {t("login-button")}
                    </a>
                </p>
                <div className='flex justify-self-center items-center cursor-pointer text-blue-700 '>

                    <p className={i18n.language === 'fa' ? 'hidden' : ''} onClick={() => changeLanguage('fa')}>fa</p>
                    <p className={i18n.language === 'en' ? 'hidden' : ''} onClick={() => changeLanguage('en')}>en</p>

                </div>
            </div>

        </div>
    );
};

export default Signup;
