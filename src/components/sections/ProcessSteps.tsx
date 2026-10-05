import React from "react";

export interface ProcessStepItem {
  stepNumber?: string | number;
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  steps: ProcessStepItem[];
  className?: string;
}

export function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  return (
    <div className={`relative space-y-8 ${className}`}>
      <div className="absolute top-4 bottom-4 left-6 w-px bg-gold/30 hidden md:block" />

      {steps.map((step, index) => {
        const num = step.stepNumber || String(index + 1).padStart(2, "0");

        return (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-start gap-6 bg-charcoal p-6 md:p-8 rounded-md border border-gold/20 shadow-md"
          >
            <div className="w-12 h-12 rounded-sm bg-navy border border-gold/40 flex items-center justify-center font-serif text-gold text-xl font-bold shrink-0 z-10">
              {num}
            </div>

            <div className="space-y-2 flex-1">
              <h3 className="font-serif text-xl font-semibold text-text-dark tracking-wide">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
