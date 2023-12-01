// "use client";
// import { t } from "@18f/identity-i18n";

import React, { type HTMLAttributes, type ReactNode } from "react";

import type StepIndicatorElement from "./step-indicator-element";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "lg-step-indicator": HTMLAttributes<StepIndicatorElement> & {
        class?: string;
      };
    }
  }
}

interface StepIndicatorProps {
  /**
   * Extra CSS classes to apply to wrapper.
   */
  className?: string;

  /**
   * Step indicator children, expected to be provided as StepIndicatorStep elements.
   */
  children?: ReactNode;
}

function StepIndicator({ className, children }: StepIndicatorProps) {
  return (
    <lg-step-indicator
      role="region"
      // aria-label={t("step_indicator.accessible_label")}
      aria-label={"Step progress"}
      class={className}
    >
      <ol className="step-indicator__scroller">{children}</ol>
    </lg-step-indicator>
  );
}

export default StepIndicator;
