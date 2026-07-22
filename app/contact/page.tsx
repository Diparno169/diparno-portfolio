import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialCards from "@/components/contact/SocialCards";
import StatusBanner from "@/components/contact/StatusBanner";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact | Diparno Chatterjee",
  description:
    "Get in touch with Diparno Chatterjee — Full Stack Developer. Open for new projects and opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="grid grid-cols-1 gap-10 border-b border-border px-6 py-10 md:px-10 lg:grid-cols-2 lg:gap-8">
        <ContactForm />
        <div className="flex flex-col gap-8">
          <ContactInfo />
          <SocialCards />
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <StatusBanner />
      </section>

      <ContactCTA />
    </>
  );
}
