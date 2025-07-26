import { Metadata } from "next";

import Contacts from "components/Contacts/Contacts";
import { ContactsForm } from "components/Forms/ContactsForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with professional accordion teacher Ostap Konashuk. Book lessons, request custom sheet music, or ask any questions about accordion classes.",
  keywords: [
    "accordion teacher contact",
    "online accordion teacher",
    "book accordion lessons",
    "contact accordionist",
    "accordion lessons support",
    "accordion inquiries",
    "Ostap Konashuk contact",
    "accordion lessons via Zoom",
    "accordion music questions",
  ],
};

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  return (
    <>
      <Contacts />
      <ContactsForm plan={plan} />
    </>
  );
}
