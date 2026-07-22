"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { User, Mail, AlignLeft, PenLine, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import {
  sendContactMessage,
  validateContactForm,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const fieldErrors = validateContactForm(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const result = await sendContactMessage(values);
      if (result.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully. I'll get back to you soon!");
        setValues(initialValues);
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage(result.error);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  const isLoading = status === "loading";

  return (
    <motion.div
      id="send-message"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs font-semibold tracking-widest text-red">
         SEND_MESSAGE
      </span>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative mt-4 rounded-2xl border border-red/30 bg-card/20 p-5 sm:p-6"
      >
        <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-red/60" />
        <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-red/60" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-red/60" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-red/60" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            icon={User}
            placeholder="Your Name"
            value={values.name}
            error={errors.name}
            onChange={(v) => handleChange("name", v)}
          />
          <Field
            icon={Mail}
            type="email"
            placeholder="Your Email"
            value={values.email}
            error={errors.email}
            onChange={(v) => handleChange("email", v)}
          />
        </div>

        <div className="mt-4">
          <Field
            icon={AlignLeft}
            placeholder="Subject"
            value={values.subject}
            error={errors.subject}
            onChange={(v) => handleChange("subject", v)}
          />
        </div>

        <div className="mt-4">
          <div
            className={`flex items-start gap-3 rounded-xl border bg-bg/40 px-4 py-3 transition-colors focus-within:border-blue/60 ${
              errors.message ? "border-red/70" : "border-border"
            }`}
          >
            <PenLine size={16} className="mt-1 shrink-0 text-gray" />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={values.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full resize-none bg-transparent text-sm text-white placeholder:text-gray focus:outline-none"
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-xs text-red">{errors.message}</p>
          )}
        </div>

        <p className="mt-5 font-mono text-xs text-green sm:text-sm">
          <span className="text-gray">diparno@portfolio:</span>~$ send_message --secure
        </p>

        {statusMessage && (
          <p
            className={`mt-3 flex items-center gap-2 text-sm ${
              status === "success" ? "text-green" : "text-red"
            }`}
            role="status"
          >
            {status === "success" ? (
              <CheckCircle2 size={16} />
            ) : (
              <XCircle size={16} />
            )}
            {statusMessage}
          </p>
        )}

        <div className="mt-5 flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 rounded-xl border border-red/50 bg-red/5 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:border-red hover:bg-red/10 hover:shadow-glow-red disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                SENDING...
              </>
            ) : (
              <>
                &gt; SEND MESSAGE
                <Send size={15} />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function Field({
  icon: Icon,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
}: {
  icon: typeof User;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <div
        className={`flex items-center gap-3 rounded-xl border bg-bg/40 px-4 py-3 transition-colors focus-within:border-blue/60 ${
          error ? "border-red/70" : "border-border"
        }`}
      >
        <Icon size={16} className="shrink-0 text-gray" />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm text-white placeholder:text-gray focus:outline-none"
        />
      </div>
      {error && <p className="mt-1 text-xs text-red">{error}</p>}
    </div>
  );
}
