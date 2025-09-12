'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Простой пароль для демонстрации
    if (password === 'admin123') {
      // Ставим cookie, которую проверяет middleware
      const expires = new Date(Date.now() + 7*24*60*60*1000).toUTCString();
      document.cookie = `admin_auth=1; Path=/; Expires=${expires}; SameSite=Lax`;
      router.push('/admin');
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Вход в админ-панель
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите пароль"
            />
          </div>

          {error && (
            <div className="mb-4 text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Войти
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Пароль для демонстрации: <code className="bg-gray-100 px-1 rounded">admin123</code></p>
        </div>
      </div>
    </div>
  );
}
