'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ email: '', name: '', password: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'info', message: 'Đang xử lý...' });

    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: '🎉 Đăng ký thành công! Hãy chuyển sang Đăng nhập.' });
        setFormData({ email: '', name: '', password: '' }); // Xóa form
      } else {
        setStatus({ type: 'error', message: data.message || 'Đăng ký thất bại' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Lỗi kết nối đến máy chủ!' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Nửa trái: Hình ảnh Branding (Sẽ ẩn trên mobile) */}
      <div className="hidden w-1/2 bg-slate-900 lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="flex h-full flex-col justify-center p-12 text-white relative z-10">
          <h1 className="text-4xl font-bold font-display leading-tight mb-6">
            Khởi tạo Startup <br/> của riêng bạn.
          </h1>
          <p className="text-lg text-slate-300 max-w-md">
            Tham gia Vườn ươm số hóa ngay hôm nay để nhận được lộ trình chuẩn và sự đồng hành từ AI Mentor 24/7.
          </p>
        </div>
      </div>

      {/* Nửa phải: Form Đăng ký */}
      <div className="flex w-full items-center justify-center lg:w-1/2 p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tạo tài khoản</h2>
            <p className="text-gray-500">Bắt đầu hành trình khởi nghiệp của bạn</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
              <input 
                required
                type="text" 
                value={formData.name}
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500 transition-colors" 
                placeholder="VD: Nguyễn Văn A"
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                required
                type="email" 
                value={formData.email}
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500 transition-colors" 
                placeholder="name@example.com"
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
              <input 
                required
                type="password" 
                value={formData.password}
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500 transition-colors" 
                placeholder="Tối thiểu 6 ký tự"
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Đang tạo...' : 'Tạo tài khoản'}
            </button>
          </form>

          {/* Thông báo kết quả */}
          {status.message && (
            <div className={`mt-6 p-4 rounded-lg text-sm font-medium text-center ${
              status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 
              status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 
              'bg-blue-50 text-blue-700'
            }`}>
              {status.message}
            </div>
          )}

          <p className="mt-8 text-center text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
