import React, { FC } from 'react';

interface MessageProps {
  lastMessage: {
    sender: {
      username: string;
    };
  };
  message: {
    sender: {
      username: string;
      avatar: string;
    };
    attachments: {
      file: string;
    }[];
    text: string;
  };
}

const Othermeassage: FC<MessageProps> = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attach"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default Othermeassage;