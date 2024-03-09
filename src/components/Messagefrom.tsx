import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

interface MessageFormProps {
  chatId: number;
  creds?: any;
}

const MessageForm: FC<MessageFormProps> = (props) => {
  const [value, setValue] = useState<string>('');
  const { chatId, creds } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    isTyping(creds, chatId);
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />

      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;