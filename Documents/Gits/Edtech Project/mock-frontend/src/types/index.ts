export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface Session {
  id: string;
  subject: 'math' | 'it';
  topic: string;
  messages: Message[];
  createdAt: Date;
}

export interface ChatRequest {
  message: string;
  session_id: string;
  subject: string;
  topic: string;
}

export interface CreateSessionRequest {
  session_id: string;
  subject: 'math' | 'it';
  topic: string;
}

export interface ChatResponse {
  response: string;
  correlation_id: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}