import React, { Component } from 'react';
import logo from '../icons/Logo.svg';

class MainLog extends Component {
    render() {
        return (
            <main className="login-page">
                <section className="login-card" aria-label="Форма входа">
                    <div className="login-logo" aria-label="Место для логотипа">
                        <div className="login-logo__frame">
                            <img className="login-logo__image" src={logo} alt="Логотип" />
                        </div>
                    </div>

                    <header className="login-card__header">
                        <h1>Next</h1>
                        <p>Войдите в свой аккаунт</p>
                    </header>

                    <form className="login-form">
                        <div className="login-form__group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="login-form__group">
                            <label htmlFor="password">Пароль</label>
                            <div className="login-form__password">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="........"
                                />
                                <button
                                    className="login-form__toggle"
                                    type="button"
                                    aria-label="Показать пароль"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" />
                                        <circle cx="12" cy="12" r="3.2" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="login-form__row">
                            <label className="login-form__check">
                                <input type="checkbox" name="remember" />
                                <span>Запомнить меня</span>
                            </label>
                            <a href="/">Забыли пароль?</a>
                        </div>

                        <button className="login-form__submit" type="submit">
                            Войти
                        </button>
                    </form>

                    <div className="login-divider" aria-hidden="true">
                        <span>или</span>
                    </div>

                    <p className="login-register">
                        Нет аккаунта? <a href="../register/Register.html">Зарегистрироваться</a>
                    </p>
                </section>
            </main>
        );
    }
}

export default MainLog;
