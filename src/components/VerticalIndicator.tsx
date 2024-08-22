interface Props {
  children: React.ReactNode;
  className?: string;
}

export function VerticalIndicator({ children, className }: Props) {
  return (
    <div
      className={`flex flex-col items-center font-black text-slate-600 ${className}`}
    >
      <div className="min-h-20 border border-l-slate-300"></div>
      <div className="w-14 h-14 border bg-white border-slate-300 rounded-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
