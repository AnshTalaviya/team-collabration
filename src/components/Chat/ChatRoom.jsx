import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
     
      setMessages((prev) => [...prev, newMessage]);
      toast.success("Message sent!"); 
      setNewMessage('');
    }
  };

  const deleteMessage = (index) => {
    const messageToDelete = messages[index];
    setMessages((prev) => prev.filter((_, i) => i !== index));
    toast.error(`Deleted message: "${messageToDelete}"`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Chat Room</h2>
      <div className="border rounded p-3 mb-3" style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.length === 0 ? (
          <div className="text-center text-muted">No messages yet. Start chatting!</div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="alert alert-secondary mb-2 d-flex justify-content-between align-items-center">
              <span>{msg}</span>
              <button 
                className="btn btn-danger btn-sm" 
                onClick={() => deleteMessage(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-dark">Send</button>
      </form>
      <ToastContainer
      autoClose={1000}
      /> 
    </div>
  );
};

export default ChatRoom;
