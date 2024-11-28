import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation, } from 'react-i18next';
import i18n from '../../i18n';

const Login = () => {
    const { t } = useTranslation()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password)
            navigate('/')

        } catch (error) {
            alert('login failed' + error.message)
        }
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }







    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">{t("login")}</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t("username")}</label>
                        <input
                            type="text"
                            placeholder={t("username-input-placeholder")}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => setUsername(e.target.value)}
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
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-orange-400 rounded-lg hover:bg-orange-500"
                    >
                        {t('login-button')}
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    {t("with-accoutn")}{' '}
                    <a href="/signup" className="text-orange-500 hover:underline">
                        {t("signup-button")}
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

export default Login;
