interface Props {
  color: string;
  children: React.ReactNode;
}

export function Button({ color, children }: Props) {
  let bgStyle = "";
  switch (color) {
    case "cyan":
      bgStyle = "bg-cyan-600 hover:bg-[#71C0D4]";
      break;
    case "purple":
    default:
      bgStyle = "bg-purple-600 hover:bg-[#B18BDD]";
      break;
  }

  return (
    <button
      className={`${bgStyle} transition-colors duration-700 ease-in-out py-4 px-10 rounded-[2rem] font-black text-white whitespace-nowrap`}
    >
      {children}
    </button>
  );
}
