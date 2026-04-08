import React, { Component } from 'react';
import logo from '../icons/Logo.svg';
import { setupCodeVerification } from '../code.js';

class MainCode extends Component {
    componentDidMount() {
        setupCodeVerification();
    }

    render() {
        return (
            <main className="code-page">
                <section className="code-card" aria-label="Подтверждение входа">
                    <div className="code-logo" aria-label="Логотип">
                        <div className="code-logo__frame">
                            <img className="code-logo__image" src={logo} alt="Логотип" />
                        </div>
                    </div>

                    <header className="code-card__header">
                        <h1>Next</h1>
                        <p>Введите 6-значный код из сообщения</p>
                    </header>

                    <form id="code-form" className="code-form">
                        <input id="code-value" name="code" type="hidden" />

                        <div className="code-form__digits" aria-label="Код подтверждения">
                            <input className="code-form__digit" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="1" data-code-digit />
                            <input className="code-form__digit" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="1" data-code-digit />
                            <input className="code-form__digit" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="1" data-code-digit />
                            <input className="code-form__digit" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="1" data-code-digit />
                            <input className="code-form__digit" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="1" data-code-digit />
                            <input className="code-form__digit" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength="1" data-code-digit />
                        </div>

                        <small id="code-error" className="code-form__error"></small>

                        <button className="code-form__submit" type="submit">
                            Подтвердить
                        </button>
                    </form>

                    <div className="code-divider" aria-hidden="true">
                        <span>или</span>
                    </div>

                    <div className="code-actions">
                        <p className="code-actions__text">Не пришёл код? <a href="/">Отправить ещё раз</a></p>
                        <p className="code-actions__text">Неверный номер? <a href="../login/Login.html">Вернуться ко входу</a></p>
                    </div>
                </section>
            </main>
        );
    }
}

export default MainCode;
