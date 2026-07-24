export default function ReplyComposer() {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs flex flex-col space-y-3">
      {/* Input Textarea */}
      <textarea
        rows={4}
        placeholder="Type a reply to Marcus..."
        className="w-full resize-none border border-slate-200/60 rounded-xl p-3.5 text-sm text-txt-primary placeholder:text-txt-muted focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 transition-all"
        readOnly
      />

      {/* Button and Info Row */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-txt-muted font-medium select-none">
          Press Ctrl + Enter to send
        </span>
        <button
          type="button"
          className="flex items-center space-x-2 px-4.5 py-2 bg-brand hover:bg-brand/95 text-white rounded-xl text-sm font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        >
          <span>Send Reply</span>
        </button>
      </div>
    </div>
  );
}
