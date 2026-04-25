export default function ProfileDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Thông tin cá nhân & Dự án</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: Hồ sơ User */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">Hồ sơ Của Bạn</h3>
          <div className="space-y-3">
            <div><label className="text-sm text-gray-500">Họ và Tên</label><p className="font-medium">Nguyễn Văn A</p></div>
            <div><label className="text-sm text-gray-500">Vai trò</label><span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">STARTUP</span></div>
            <div><label className="text-sm text-gray-500">Trường Đại học</label><p className="font-medium">Đại học Bách Khoa</p></div>
          </div>
          <button className="mt-4 text-sm text-brand-600 border border-brand-600 rounded px-3 py-1 hover:bg-brand-50">Cập nhật hồ sơ</button>
        </div>

        {/* Card: Dự án Startup */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-lg mb-4 border-b pb-2">Dự án đang ươm tạo</h3>
          <div className="space-y-3">
            <div><label className="text-sm text-gray-500">Tên dự án</label><p className="font-bold text-brand-700">EduTech AI Tutor</p></div>
            <div><label className="text-sm text-gray-500">Giai đoạn</label><p className="font-medium">Validating (Xác thực ý tưởng)</p></div>
          </div>
          <button className="mt-4 text-sm bg-brand-600 text-white rounded px-3 py-1 hover:bg-brand-700">Đi tới Workspace</button>
        </div>
      </div>
    </div>
  );
}
