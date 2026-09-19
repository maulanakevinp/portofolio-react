export default function Badge({text}) {
  return (
    <div className="flex">
      <div className=" flex flex-row items-center gap-3 border border-dashed border-teal-300 bg-teal-500/8 p-2">
        <span className="rounded-full size-2 bg-teal-300 animate-pulse" />
        <span className="text-xs text-teal-300 tracking-widest">{text}</span>
      </div>
    </div>
  )
}