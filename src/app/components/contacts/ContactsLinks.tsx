import contacts from "./Contacts";

const ContactsLinks = () => {
  return contacts.map((contact) => (
    <a
      key={contact.key}
      href={contact.href}
      className="transition-all duration-150 ease-in-out hover:text-[--color-btn-active]"
    >
      {contact.icon}
    </a>
  ));
};

export default ContactsLinks;
