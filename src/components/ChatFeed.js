import React from "react";
import MessageFrom from "./Messagefrom";
import Mymessage from "./Mymessage";
import Othermessage from "./Othermessage";
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

var ChatFeed = function (props) {
    var chats = props.chats, activeChat = props.activeChat, userName = props.userName, messages = props.messages;
    var chat = chats && chats[activeChat];
    var renderReadReceipts = function (message, isMyMessage) {
        return (chat &&
            chat.people.map(function (person, index) {
                return person.last_read === message.id ? (React.createElement("div", { key: "read_".concat(index), className: "read-receipt", style: {
                        float: isMyMessage ? "right" : "left",
                        backgroundImage: "url(".concat(person.person.avatar, ")"),
                    } })) : null;
            }));
    };
    var renderMessages = function () {
        var keys = Object.keys(messages);
        return keys.map(function (key, index) {
            var message = messages[key];
            var lastMessageKey = index === 0 ? null : keys[index - 1];
            var isMyMessage = userName === message.sender.username;
            return (React.createElement("div", { key: "msg_".concat(index), style: { width: "100%" } },
                React.createElement("div", { className: "message-block" }, isMyMessage ? (React.createElement(Mymessage, { message: message })) : (React.createElement(Othermessage, { message: message, lastMessage: messages[lastMessageKey] }))),
                React.createElement("div", { className: "read-receipts", style: {
                        marginRight: isMyMessage ? "18px" : "0px",
                        marginLeft: isMyMessage ? "0px" : "68px",
                    } }, chat && renderReadReceipts(message, isMyMessage))));
        });
    };
    if (!chat)
        return React.createElement("div", null, "Loading......");
    return (React.createElement("div", { className: "chat-feed" },
        React.createElement("div", { className: "chat-titile-container" },
            React.createElement("div", { className: "chat-title" }, chat.title),
            React.createElement("div", { className: "chat-subtitle" }, chat.people.map(function (person) { return " ".concat(person.person.username); }))),
        renderMessages(),
        React.createElement("div", { style: { height: "100px" } }),
        React.createElement("div", { className: "message-form-container" },
            React.createElement(MessageFrom, __assign({}, props, { chatId: activeChat })))));
};
export default ChatFeed;
