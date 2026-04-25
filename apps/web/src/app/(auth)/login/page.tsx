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
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:ring-blue-500 outline-none" 
              placeholder="nguyenvana@email.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input 
              type="password" 
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:ring-blue-500 outline-none" 
              placeholder="••••••••" 
            />
          </div>
          <button 
            type="button" 
            className="w-full rounded-md bg-blue-600 py-2.5 text-white font-medium hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
