import s from './SearchBox.module.css'
import { Formik, Field, Form } from 'formik'

const SearchBox = ({ contactsData, setFilteredContacts }) => {
  
  const handleSearch = (filterValue) => {
    const filtered = contactsData.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()));
    setFilteredContacts(filtered);
  };

  
  return (
    <Formik
      initialValues={{ input: '' }} 
      onSubmit={(values) => handleSearch(values.input)}
    >
      {(values) => (
        <Form>
          <label htmlFor="input">Find contacts by name</label>
          <Field
            className={s.SBinput}
            type="text"
            id="input"
            name="input"
            value={values.input}
            onChange={(e) => {
              handleSearch(e.target.value); 
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;





