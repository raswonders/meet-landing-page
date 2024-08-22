interface Props {
  children: React.ReactNode;
}

export function VerticalIndicator({ children }: Props) {
  return (
    <div className="flex flex-col items-center font-black text-slate-600">
      <div className="min-h-20 border border-l-slate-300"></div>
      <div className="w-14 h-14 border border-slate-300 rounded-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
