import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "../../lib/cn";

export function FieldLabel({
  children,
  required,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div className="text-xs font-semibold text-zinc-800">
      {children} {required ? <span className="text-red-500">*</span> : null}
    </div>
  );
}

export function FieldHint({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "error";
}) {
  return (
    <div
      className={cn(
        "mt-1 text-xs",
        tone === "muted" && "text-zinc-500",
        tone === "error" && "text-red-500"
      )}
    >
      {children}
    </div>
  );
}

export function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "mt-2 h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none",
        "placeholder:text-zinc-400",
        "focus:border-brand/60 focus:ring-4 focus:ring-brand/15",
        className
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select
      className={cn(
        "mt-2 h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none",
        "focus:border-brand/60 focus:ring-4 focus:ring-brand/15",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "mt-2 min-h-28 w-full resize-y rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none",
        "placeholder:text-zinc-400",
        "focus:border-brand/60 focus:ring-4 focus:ring-brand/15",
        className
      )}
      {...props}
    />
  );
}

export function RadioRow({ children }: { children: ReactNode }) {
  return <div className="mt-3 grid gap-3 sm:grid-cols-2">{children}</div>;
}

export function RadioItem({
  label,
  description,
  checked,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  description?: string;
  checked?: boolean;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3",
        checked && "border-brand/50 ring-4 ring-brand/10"
      )}
    >
      <input type="radio" className="mt-1 h-4 w-4 accent-brand" {...props} />
      <span className="min-w-0">
        <span className="block text-sm font-medium text-zinc-900">{label}</span>
        {description ? (
          <span className="mt-0.5 block text-xs text-zinc-600">
            {description}
          </span>
        ) : null}
      </span>
    </label>
  );
}

export function CheckboxItem({
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-700">
      <input type="checkbox" className="mt-1 h-4 w-4 accent-brand" {...props} />
      <span className="leading-6">{label}</span>
    </label>
  );
}

export function SubmitBar({ children }: { children: ReactNode }) {
  return <div className="mt-8">{children}</div>;
}
