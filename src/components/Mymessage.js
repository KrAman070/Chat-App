import React from 'react';
var Mymessage = function (_a) {
    var _b;
    var message = _a.message;
    if (((_b = message === null || message === void 0 ? void 0 : message.attachments) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        return (React.createElement("img", { src: message.attachments[0].file, alt: "message-attach", className: "message-image", style: { float: 'right' } }));
    }
    return (React.createElement("div", { className: "message", style: {
            float: 'right',
            marginRight: '18px',
            color: 'white',
            backgroundColor: '#3B2A50',
        } }, message.text));
};
export default Mymessage;
