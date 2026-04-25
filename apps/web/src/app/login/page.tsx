import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg border border-gray-100">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Đăng nhập</h1>
          <p className="text-sm text-gray-500">Chào mừng trở lại Digital Incubator</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 w-full rounded-md border p-2 focus:border-brand-500 focus:ring-brand-500" 
              placeholder="nguyenvana@email.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input 
              type="password" 
              className="mt-1 w-full rounded-md border p-2 focus:border-brand-500 focus:ring-brand-500" 
              placeholder="••••••••" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full rounded-md bg-brand-600 py-2.5 text-white font-medium hover:bg-brand-700 transition"
          >
            Đăng nhập
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Chưa có tài khoản? <Link href="/register" className="text-brand-600 hover:underline">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}
