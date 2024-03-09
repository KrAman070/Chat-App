import React, { useState } from "react";
import axios from 'axios';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const authObject = {'project-ID': "f26eb62a-66e2-4693-b3dc-19da6de029d7",'User-Name': username,'User-Secret': password};
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError('Oops, incorrect credentials..');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="input" placeholder="username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="input" placeholder="password" required/>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" className="button">
                            <span>Start conversation !</span>
                        </button>
                    </div>
                    <div style={{marginLeft:'35px', marginTop:'15px',color:'white'}}>
                        <h2 className="error" style={{}}>{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;