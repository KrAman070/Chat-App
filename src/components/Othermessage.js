import React from 'react';
var Othermeassage = function (_a) {
    var _b, _c;
    var lastMessage = _a.lastMessage, message = _a.message;
    var isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (React.createElement("div", { className: "message-row" },
        isFirstMessageByUser && (React.createElement("div", { className: "message-avatar", style: { backgroundImage: "url(".concat((_b = message === null || message === void 0 ? void 0 : message.sender) === null || _b === void 0 ? void 0 : _b.avatar, ")") } })),
        ((_c = message === null || message === void 0 ? void 0 : message.attachments) === null || _c === void 0 ? void 0 : _c.length) > 0 ? (React.createElement("img", { src: message.attachments[0].file, alt: "message-attach", className: "message-image", style: { marginLeft: isFirstMessageByUser ? '4px' : '48px' } })) : (React.createElement("div", { className: "message", style: {
                float: 'left',
                backgroundColor: '#CABCDC',
                marginLeft: isFirstMessageByUser ? '4px' : '48px',
            } }, message.text))));
};
export default Othermeassage;
