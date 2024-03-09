import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var App = function () {
    if (!localStorage.getItem('username'))
        return React.createElement(LoginForm, null);
    return (React.createElement(ChatEngine, { height: "100vh", projectID: "f26eb62a-66e2-4693-b3dc-19da6de029d7", userName: localStorage.getItem('username'), userSecret: localStorage.getItem('password'), renderChatFeed: function (chatAppProps) { return React.createElement(ChatFeed, __assign({}, chatAppProps)); } }));
};
export default App;
