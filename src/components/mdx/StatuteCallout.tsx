import React from "react";

interface StatuteCalloutProps {
  title?: string;
  citation?: string;
  children: React.ReactNode;
  note?: string;
}

export function StatuteCallout({
  title = "Statute at a Glance",
  citation,
  children,
  note,
}: StatuteCalloutProps) {
  return (
    <div className="my-space-xl p-space-lg rounded-DEFAULT bg-surface-container-low border-l-4 border-tertiary relative shadow-md">
      <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/30 mb-space-sm">
        <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[15px]">balance</span>
          {title}
        </span>
        {citation && (
          <span className="font-legal-disclaimer text-[11px] text-tertiary-fixed-dim uppercase">
            {citation}
          </span>
        )}
      </div>
      <div className="font-serif italic text-on-surface text-body-md space-y-space-sm leading-relaxed">
        {children}
      </div>
      {note && (
        <p className="text-legal-disclaimer font-legal-disclaimer text-on-surface-variant mt-space-sm pt-space-xs border-t border-outline-variant/20">
          {note}
        </p>
      )}
    </div>
  );
}
