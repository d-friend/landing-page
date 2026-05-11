'use client';

import { Plus, MessageSquare, BookOpen } from 'lucide-react';
import { Session } from '@/types';

interface SessionSidebarProps {
  sessions: Session[];
  currentSessionId: string | null;
  onSelectSession: (sessionId: string) => void;
  onNewSession: () => void;
}

export default function SessionSidebar({
  sessions,
  currentSessionId,
  onSelectSession,
  onNewSession,
}: SessionSidebarProps) {
  return (
    <div className="w-72 bg-white border-r border-slate-200 flex flex-col h-full">
      <div className="p-4 border-b border-slate-100">
        <button
          onClick={onNewSession}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Session
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {sessions.length === 0 ? (
          <div className="text-center py-8">
            <MessageSquare className="w-12 h-12 text-slate-200 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No sessions yet</p>
            <p className="text-slate-400 text-xs mt-1">Create a new session to start learning</p>
          </div>
        ) : (
          sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => onSelectSession(session.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                currentSessionId === session.id
                  ? 'bg-blue-50 border border-blue-200'
                  : 'hover:bg-slate-50 border border-transparent'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    session.subject === 'math'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800 text-sm truncate">
                    {session.topic}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {session.subject}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {session.messages.length} messages
                  </p>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}