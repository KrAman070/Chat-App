import React, { FC } from "react";
import MessageFrom from "./Messagefrom";
import Mymessage from "./Mymessage";
import Othermessage from "./Othermessage";

interface Person {
  last_read: string;
  person: {
    username: string;
    avatar?: string;
  };
}

interface Chat {
  title: string;
  people: Person[];
}

interface Message {
  id: string;
//   sender: {
//     username: string;
//     avatar:string;
//   };
//   attachments?: { length: number; file: string; }[];
//   text: string;
sender: {
    username: string;
    avatar: string;
  };
  attachments: {
    file: string;
    length: number;
  }[];
  text: string;
}


interface Props {
  chats: Chat[];
  activeChat: number;
  userName: string;
  messages: Record<string, Message>;
}

const ChatFeed: FC<Props> = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message: Message, isMyMessage: boolean): JSX.Element[] | null => {
    return (
      chat &&
      chat.people.map((person: Person, index: number) =>
        person.last_read === message.id ? (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url(${person.person.avatar})`,
            }}
          />
        ) : null
      )
    );
  };

  const renderMessages = (): JSX.Element[] => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <Mymessage message={message} />
            ) : (
              <Othermessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {chat && renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div>Loading......</div>;

  return (
    <div className="chat-feed">
      <div className="chat-titile-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageFrom {...props} chatId={activeChat}  />
      </div>
    </div>
  );
};

export default ChatFeed;