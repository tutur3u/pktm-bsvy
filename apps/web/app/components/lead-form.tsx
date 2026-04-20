"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  id?: string;
  title: string;
  description?: string;
  submitLabel: string;
  hotlineHref: string;
  theme: "light" | "blue";
};

type FormState = {
  name: string;
  phone: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
};

export function LeadForm({
  id,
  title,
  description,
  submitLabel,
  hotlineHref,
  theme,
}: LeadFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<FormState> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Vui lòng nhập họ tên.";
    }

    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 9) {
      nextErrors.phone = "Vui lòng nhập số điện thoại hợp lệ.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    window.location.href = hotlineHref;
  };

  const isBlue = theme === "blue";
  const surfaceClass = isBlue
    ? "bg-[#1da6e6] text-white"
    : "bg-transparent text-[#123450]";
  const inputClass = isBlue
    ? "border-white/65 bg-white text-[#24374d] placeholder:text-[#556476] focus:border-white focus:ring-[#9ee3ff]"
    : "border-[#249fdc] bg-white text-[#24374d] placeholder:text-[#617386] focus:border-[#0b5ea6] focus:ring-[#b7ebff]";
  const titleClass = isBlue ? "text-white" : "text-[#0b5ea6]";
  const descriptionClass = isBlue ? "text-white/92" : "text-[#4a6077]";
  const errorClass = isBlue ? "text-white/90" : "text-[#c43d38]";

  return (
    <form
      id={id}
      noValidate
      onSubmit={handleSubmit}
      className={`w-full rounded-[28px] p-0 ${surfaceClass}`}
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <h3
            className={`text-center text-[1.65rem] font-black uppercase leading-tight md:text-[2.3rem] ${titleClass}`}
          >
            {title}
          </h3>
          {description ? (
            <p
              className={`text-center text-base leading-relaxed md:text-lg ${descriptionClass}`}
            >
              {description}
            </p>
          ) : null}
        </div>

        <label className="block">
          <span className="sr-only">Họ tên</span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Họ tên*:"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            className={`h-16 w-full rounded-[16px] border px-5 text-lg outline-none ring-0 transition focus:ring-4 ${inputClass}`}
          />
          {errors.name ? (
            <em className={`mt-2 block px-2 text-sm not-italic ${errorClass}`}>
              {errors.name}
            </em>
          ) : null}
        </label>

        <label className="block">
          <span className="sr-only">Số điện thoại</span>
          <input
            autoComplete="tel"
            inputMode="tel"
            name="phone"
            placeholder="Số điện thoại*:"
            value={values.phone}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                phone: event.target.value,
              }))
            }
            className={`h-16 w-full rounded-[16px] border px-5 text-lg outline-none ring-0 transition focus:ring-4 ${inputClass}`}
          />
          {errors.phone ? (
            <em className={`mt-2 block px-2 text-sm not-italic ${errorClass}`}>
              {errors.phone}
            </em>
          ) : null}
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-[18px] bg-[#0aa75c] px-6 py-4 text-center text-lg font-black uppercase tracking-[0.02em] text-white shadow-[0_14px_28px_rgba(10,167,92,0.35)] transition hover:-translate-y-0.5 hover:bg-[#099651]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
