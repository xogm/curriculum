"use client";
import {
  ChangeEventHandler,
  ReactElement,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import {
  useController,
  FieldValues,
  FieldPath,
  Control,
} from "react-hook-form";

interface FloatLabelFieldProps<TFieldValues extends FieldValues> {
  label: string;
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  onChange?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  [key: string]: any;
}

const getClassName = (error: any, as: string) => {
  const baseClassNames: Record<string, string> = {
    textarea: "textarea textarea-bordered resize-none",
    select: "select select-bordered",
    default: "input input-bordered",
  };

  const baseClassName = baseClassNames[as] || baseClassNames.default;
  const errorClass = error ? "border-red-500" : "";
  const focusClass = "focus:outline-none focus:border-primary";

  return `${baseClassName} ${errorClass} ${focusClass}`;
};

const renderElement = (
  as: string,
  type: string,
  fieldProps: any,
  fieldRef: any,
  value: any,
  fieldOnChange: any,
  className: string,
  options: { value: string; label: string }[],
  props: any
): ReactElement => {
  switch (as) {
    case "textarea":
      return (
        <textarea
          {...fieldProps}
          ref={fieldRef}
          value={value}
          onChange={fieldOnChange}
          className={className}
          placeholder=""
          {...props}
        />
      );
    case "select":
      return (
        <select
          {...fieldProps}
          ref={fieldRef}
          value={value}
          onChange={fieldOnChange}
          className={className}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    default:
      return (
        <input
          type={type}
          {...fieldProps}
          ref={fieldRef}
          value={value}
          onChange={fieldOnChange}
          className={className}
          placeholder=""
          {...props}
        />
      );
  }
};

const FloatLabelField: ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FloatLabelFieldProps<any>
> = (
  {
    label,
    name,
    control,
    type = "text",
    as = "input",
    options = [],
    onChange,
    ...props
  },
  ref
) => {
  const {
    field: { ref: fieldRef, value, onChange: fieldOnChange, ...fieldProps },
    fieldState: { error },
  } = useController({ name, control });

  const className = getClassName(error, as);

  return (
    <div className="form-control relative py-1 w-full">
      {renderElement(
        as,
        type,
        fieldProps,
        fieldRef,
        value,
        fieldOnChange,
        className,
        options,
        props
      )}
      <label
        htmlFor={props.id || props.name}
        className="label absolute left-2 top-2 z-10 origin-[0] text-gray-500 transition-transform transform-gpu"
      >
        {label}
      </label>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default forwardRef(FloatLabelField);
