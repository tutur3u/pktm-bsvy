"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
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

  return (
    <form className={`leadForm leadForm--${theme}`} noValidate onSubmit={handleSubmit}>
      <div className="leadForm__header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>

      <label className="leadForm__field">
        <span>Họ tên*</span>
        <input
          autoComplete="name"
          name="name"
          placeholder="Họ tên*:"
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
        />
        {errors.name ? <em>{errors.name}</em> : null}
      </label>

      <label className="leadForm__field">
        <span>Số điện thoại*</span>
        <input
          autoComplete="tel"
          inputMode="tel"
          name="phone"
          placeholder="Số điện thoại*:"
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
        />
        {errors.phone ? <em>{errors.phone}</em> : null}
      </label>

      <button type="submit" className="primaryButton leadForm__submit">
        {submitLabel}
      </button>
    </form>
  );
}
