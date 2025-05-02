import Contacts from "components/Contacts/Contacts";
import { ContactsForm } from "components/Forms/ContactsForm";

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
