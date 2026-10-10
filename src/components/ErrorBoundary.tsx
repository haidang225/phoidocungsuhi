import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[App Crash Protected by ErrorBoundary]:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('vietphuc_custom_outfits_v4');
      localStorage.removeItem('vietphuc_costumes_v1');
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#1A1918] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white border border-[#DDD6CA] rounded-2xl p-8 shadow-xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-[#9E2A2B] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#1A1918]">
                Đã khôi phục trạng thái an toàn
              </h2>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Hệ thống phát hiện một sự cố hiển thị và đã ngăn chặn thành công việc trắng màn hình. Bạn có thể tải lại trang ngay bây giờ.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full py-2.5 px-4 bg-[#9E2A2B] hover:bg-[#831F20] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Tải Lại Ứng Dụng</span>
              </button>
              <button
                onClick={this.handleReset}
                className="w-full py-2 px-4 text-[#78716C] hover:text-[#1A1918] hover:bg-[#FAF8F5] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Làm mới bộ nhớ đệm trình duyệt
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
