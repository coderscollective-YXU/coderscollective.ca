import * as React from "react";

import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    value: string;
    title: string;
  }[];
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          className
        )}
        {...props}
      >
        {options.map((option, index) => (
          <option
            key={`${index}-${option.value}`}
            value={option.value}
            className="hover:text-red-400"
          >
            {option.title}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";
export default Select;
