import { useFormState } from "react-hook-form";
import { ReactNode, isValidElement, cloneElement } from "react";

interface FloatLabelProps {
  label: string;
  name: string;
  children: ReactNode;
}

const FloatLabel = ({ label, name, children }: FloatLabelProps) => {
  const formState = useFormState();
  const error = formState.errors[name] as { message?: string };
  const hasError = !!error;
  const child = isValidElement(children) ? children : null;
  const component = child?.type; // Get the type of the child component (input, textarea, etc.)

  if (!component) {
    throw new Error("FloatLabel component must have a valid child component.");
  }

  const className = {
    textarea: "textarea textarea-bordered resize-none",
    select: "select select-bordered",
    input: "input input-bordered",
  }[component.toString().toLowerCase()];

  return (
    <div className="form-control relative py-1 w-full">
      {cloneElement(child, {
        className: `${className} ${hasError ? "border-red-500" : ""}`,
        placeholder: " ",
        id: name,
      } as React.HTMLAttributes<HTMLElement>)}
      <label
        htmlFor={name}
        className="label absolute left-2 top-2 z-10 origin-[0] text-gray-500 transition-transform transform-gpu"
      >
        {label}
      </label>
      {hasError && (
        <span className="text-red-500 text-sm">{error.message}</span>
      )}
    </div>
  );
};

export default FloatLabel;
