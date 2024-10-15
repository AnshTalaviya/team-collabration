import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import TaskProvider from './context/TaskContext';
import ChatProvider from './context/ChatContext';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Chat from './components/Chat/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PrivateRoute from './components/Auth/PrivateRoute'; 

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <ChatProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
           <Route
  path="/admin"
  element={
    <PrivateRoute admin>
      <AdminDashboard />
    </PrivateRoute>
  }
/>

            <Route path="/chat" element={<Chat />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </ChatProvider>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
