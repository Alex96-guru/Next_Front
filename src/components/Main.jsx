import React, {Component} from 'react';
import { FaSearch } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

class Main extends Component {
    render() {
        return (
            <main className='main'>
                <div className='chat-layout'>
                    <div className='chat-sidebar'>
                        <div className='chat-sidebar__content'>
                            <div className='chat-search'>
                                <span className="chat-search__icon"><FaSearch /></span>
                                <input type="search" placeholder='Поиск чатов...' className='chat-search__input' />
                            </div>

                            <div className='chat-list'>
                                <div className='chat-list__item'>
                                    <span className='chat-list__avatar'><FcBusinessman /></span>
                                    <div className='chat-list__content'>
                                        <div className='chat-list__top'>
                                            <h2 className='chat-list__name'>Александра Иванова</h2>
                                            <span className='chat-list__time'>14:32</span>
                                        </div>
                                        <div className='chat-list__bottom'>
                                            <p className='chat-list__preview'>Привет! Как дела?</p>
                                            <span className='chat-list__badge'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='chat-main'>

                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
