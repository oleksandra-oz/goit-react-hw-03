
import { useState } from 'react'
import './App.css'
import ContactList from "./components/ContactList/ContactList.jsx"
import SearchBox from "./components/SearchBox/SearchBox.jsx"


function App() {

  const [contactsData, setContactsData] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);


  return (
    <>
      <div>
  <h1>Phonebook</h1>
  {/* <ContactForm /> */}
  <SearchBox contactsData={contactsData} setFilteredContacts={setContactsData} />
  <ContactList contactsData={contactsData} setContactsData={setContactsData} />
</div>

    </>
  )
}

export default App
