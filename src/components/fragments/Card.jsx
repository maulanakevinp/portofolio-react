export default function Card({ children }) {
  return (
    <div className="group relative bg-sky-900/30 border border-teal-900 p-6 transition-all duration-300 ease-out hover:bg-teal-700/30 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-600 hover:-translate-y-1.5 overflow-hidden">
      <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-teal-300/80 transition-all duration-300 group-hover:border-teal-200"></div>
      <div className="absolute bottom-0 right-0 h-3 w-3 border-r border-b border-teal-300/80 transition-all duration-300 group-hover:border-teal-200"></div>
      {children}
    </div>
  );
}
