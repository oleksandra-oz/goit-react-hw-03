import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contactsData, setContactsData }) => {

     const handleDelete = (id) => {
    setContactsData(contactsData.filter(contact => contact.id !== id));
    };
    
    return (
        <div>
      <ul>
        {contactsData.map(contact => (
          <Contact 
            key={contact.id} 
            id={contact.id} 
            name={contact.name} 
            number={contact.number}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>

    );

}

export default ContactList;