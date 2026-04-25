'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'info', message: 'Đang kiểm tra...' });

    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Đăng nhập thành công! Đang chuyển hướng...' });
        // Trong thực tế sẽ lưu data.access_token vào localStorage hoặc Cookie ở đây
        console.log('Token nhận được:', data.access_token);
        
        // Mô phỏng chuyển hướng
        setTimeout(() => {
          window.location.href = '/profile'; // Hoặc đường dẫn Dashboard của bạn
        }, 1500);
      } else {
        setStatus({ type: 'error', message: data.message || 'Sai tài khoản hoặc mật khẩu' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Lỗi kết nối đến máy chủ!' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Chào mừng trở lại</h2>
            <p className="text-gray-500 mt-2">Đăng nhập vào không gian làm việc của bạn</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                required
                type="email" 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="name@example.com"
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                {/* Demo UI cho quên mật khẩu */}
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Quên mật khẩu?</a>
              </div>
              <input 
                required
                type="password" 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500" 
                placeholder="••••••••"
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full rounded-lg bg-slate-900 py-3 text-white font-semibold hover:bg-slate-800 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
          </form>

          {/* Thông báo kết quả */}
          {status.message && (
            <div className={`mt-6 p-3 rounded-lg text-sm text-center font-medium ${
              status.type === 'success' ? 'bg-green-50 text-green-700' : 
              status.type === 'error' ? 'bg-red-50 text-red-700' : 
              'bg-blue-50 text-blue-700'
            }`}>
              {status.message}
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
