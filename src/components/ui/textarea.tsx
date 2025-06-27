import * as React from "react";

import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";

export default TextArea;
