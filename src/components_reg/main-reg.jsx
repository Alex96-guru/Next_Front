import React, { Component } from 'react';
import logo from '../icons/Logo.svg';
import { registerUser } from '../register.js';


class MainReg extends Component {
    componentDidMount() {
        registerUser();
    }

    render() {
        return (
            <main className="register-page">
                <section className="register-card" aria-label="Форма регистрации">
                    <div className="register-logo" aria-label="Логотип">
                        <div className="register-logo__frame">
                            <img className="register-logo__image" src={logo} alt="Логотип" />
                        </div>
                    </div>

                    <header className="register-card__header">
                        <h1>Next</h1>
                        <p>Создайте новый аккаунт</p>
                    </header>

                    <form id='form' className="register-form">
                        <div className="register-form__group">
                            <label htmlFor="name">Имя</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ваше имя"
                            />
                            <span id='name-error' className='name-register-form__hint'></span>
                        </div>

                        <div className="register-form__group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="register-form__group">
                            <label htmlFor="password">Пароль</label>
                            <div className="register-form__password">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="........"
                                />
                                <span id='email-error' className='email-register-form__hint'></span>
                                <button
                                    className="register-form__toggle"
                                    type="button"
                                    aria-label="Показать пароль"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" />
                                        <circle cx="12" cy="12" r="3.2" />
                                    </svg>
                                </button>
                            </div>
                            <span id='password-error' className="register-form__hint"></span>
                        </div>

                        <div className="register-form__group">
                            <label htmlFor="confirmPassword">Подтвердите пароль</label>
                            <div className="register-form__password">
                                <input
                                    id="confirm-password"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="........"
                                />
                                <span id='confirm-error'></span>
                                <button
                                    className="register-form__toggle"
                                    type="button"
                                    aria-label="Показать подтверждение пароля"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" />
                                        <circle cx="12" cy="12" r="3.2" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <label className="register-form__agreement">
                            <input id='terms' type="checkbox" name="agreement" />
                            <span>
                                Я согласен с <a href="/">условиями использования</a> и <a href="/">политикой конфиденциальности</a>
                            </span>
                            <small id='terms-error'></small>
                        </label>

                        <button className="register-form__submit" type="submit">
                            Зарегистрироваться
                        </button>
                    </form>

                    <div className="register-divider" aria-hidden="true">
                        <span>или</span>
                    </div>

                    <p className="register-login">
                        Уже есть аккаунт? <a href="../../Login.html">Войти</a>
                    </p>
                </section>
            </main>
        );
    }
}

export default MainReg;
