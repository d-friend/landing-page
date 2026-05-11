import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Log correlation_id for debugging
api.interceptors.response.use(
  (response) => {
    const correlationId = response.headers['x-correlation-id'];
    if (correlationId) {
      console.log('[API] Correlation ID:', correlationId);
    }
    return response;
  },
  (error) => {
    const correlationId = error.response?.headers?.['x-correlation-id'];
    if (correlationId) {
      console.log('[API] Error Correlation ID:', correlationId);
    }
    return Promise.reject(error);
  }
);
