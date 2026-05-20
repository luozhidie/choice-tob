import { Bell, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header
      className="h-16 border-b flex items-center justify-between px-6"
      style={{
        background: 'oklch(0.2 0.02 295 / 0.9)',
        backdropFilter: 'blur(12px)',
        borderColor: 'oklch(1 0 0 / 0.1)',
      }}
    >
      <div />
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg" style={{ color: 'oklch(0.6 0.03 295)' }}>
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center"
            style={{ background: 'oklch(0.62 0.18 295 / 0.2)' }}
          >
            <User size={16} style={{ color: 'oklch(0.75 0.15 295)' }} />
          </div>
          <span className="text-sm">管理员</span>
        </div>
      </div>
    </header>
  );
}
