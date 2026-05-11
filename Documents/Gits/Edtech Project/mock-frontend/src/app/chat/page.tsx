'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import { Session, Message, CreateSessionRequest } from '@/types';
import SessionSidebar from '@/components/SessionSidebar';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import LoadingIndicator from '@/components/LoadingIndicator';
import NewSessionModal from '@/components/NewSessionModal';
import { LogOut, Lightbulb } from 'lucide-react';

export default function ChatPage() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [sessions, currentSessionId, isLoading]);

  const currentSession = sessions.find(s => s.id === currentSessionId);

  const handleCreateSession = async (subject: 'math' | 'it', topic: string) => {
    const sessionId = uuidv4();
    const payload: CreateSessionRequest = {
      session_id: sessionId,
      subject,
      topic,
    };

    await api.post('/chat/session', payload);

    const newSession: Session = {
      id: sessionId,
      subject,
      topic,
      messages: [],
      createdAt: new Date(),
    };
    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(sessionId);
  };

  const handleSendMessage = async (message: string) => {
    if (!currentSessionId || !message.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    setSessions(prev => prev.map(session =>
      session.id === currentSessionId
        ? { ...session, messages: [...session.messages, userMessage] }
        : session
    ));

    setIsLoading(true);

    try {
      const session = sessions.find(s => s.id === currentSessionId);
    
      const requestPayload = {
        message,
        session_id: currentSessionId,
        subject: session?.subject?.toLowerCase() || 'math', 
        topic: session?.topic || '',
        user_id: 'test-user-001', 
      };

      console.log('[Chat] Sending request with correlation_id:', currentSessionId);

      const response = await api.post('/chat/send', requestPayload);

      const aiMessage: Message = {
        id: uuidv4(),
        role: 'ai',
        content: response.data.content,
        timestamp: new Date(),
      };

      setSessions(prev => prev.map(session =>
        session.id === currentSessionId
          ? { ...session, messages: [...session.messages, aiMessage] }
          : session
      ));

      console.log('[Chat] Received response with correlation_id:', response.headers['x-correlation-id']);

    } catch (error: any) {
      console.error('[Chat] Error sending message:', error.response?.data);

      const errorMessage: Message = {
        id: uuidv4(),
        role: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };

      setSessions(prev => prev.map(session =>
        session.id === currentSessionId
          ? { ...session, messages: [...session.messages, errorMessage] }
          : session
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="h-screen flex bg-slate-50">
      <SessionSidebar
        sessions={sessions}
        currentSessionId={currentSessionId}
        onSelectSession={setCurrentSessionId}
        onNewSession={() => setIsModalOpen(true)}
      />

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div>
            {currentSession ? (
              <div>
                <h1 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  {currentSession.topic}
                </h1>
                <p className="text-sm text-slate-500">{currentSession.subject}</p>
              </div>
            ) : (
              <h1 className="text-lg font-semibold text-slate-800">Socratic AI Tutor</h1>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {currentSession ? (
            <div className="max-w-4xl mx-auto space-y-4">
              {currentSession.messages.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800 mb-2">
                    Let us start learning
                  </h2>
                  <p className="text-slate-500 max-w-md mx-auto">
                    Ask me a question about {currentSession.topic} ({currentSession.subject}), and I will guide you through the answer using the Socratic method.
                  </p>
                </div>
              )}

              {currentSession.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && <LoadingIndicator />}

              <div ref={messagesEndRef} />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                  Welcome to Socratic AI Tutor
                </h2>
                <p className="text-slate-500 mb-4">
                  Select a session or create a new one to start learning
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Create New Session
                </button>
              </div>
            </div>
          )}
        </div>

        {currentSession && (
          <ChatInput
            onSend={handleSendMessage}
            disabled={isLoading}
          />
        )}
      </div>

      <NewSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateSession}
      />
    </div>
  );
}
