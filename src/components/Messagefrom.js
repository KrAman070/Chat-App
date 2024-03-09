import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
var MessageForm = function (props) {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var chatId = props.chatId, creds = props.creds;
    var handleSubmit = function (event) {
        event.preventDefault();
        var text = value.trim();
        if (text.length > 0)
            sendMessage(creds, chatId, { text: text });
        setValue('');
    };
    var handleChange = function (event) {
        setValue(event.target.value);
        isTyping(creds, chatId);
    };
    var handleUpload = function (event) {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };
    return (React.createElement("form", { className: "message-form", onSubmit: handleSubmit },
        React.createElement("input", { className: "message-input", placeholder: "Send a message...", value: value, onChange: handleChange }),
        React.createElement("label", { htmlFor: "upload-button" },
            React.createElement("span", { className: "image-button" },
                React.createElement(PictureOutlined, { className: "picture-icon" }))),
        React.createElement("input", { type: "file", multiple: false, id: "upload-button", style: { display: 'none' }, onChange: handleUpload }),
        React.createElement("button", { type: "submit", className: "send-button" },
            React.createElement(SendOutlined, { className: "send-icon" }))));
};
export default MessageForm;
