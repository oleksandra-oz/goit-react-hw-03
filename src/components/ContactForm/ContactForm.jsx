import { nanoid } from 'nanoid'
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';


const ContactForm = ({ add }) => {
    
    const initialValues = {
        name: '',
        number: '',
        
    };
    const onlyLetters = /^[a-zA-Z]*$/;
    const phoneNumberRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    const handleSubmit = (values, actions) => {
        const newContact = {
      id: nanoid(), 
      name: values.name,
      number: values.number,
    };

    add(newContact); 
    actions.resetForm(); 
        
    };

const validationSchema = Yup.object({
    name: Yup.string().min(3,'Too short').max(50, 'Too long'). required('Required').matches(onlyLetters, 'Wrong name'),
    number: Yup.string().min(3,'Too short').max(50, 'Too long'). required('Required').matches(phoneNumberRegex, 'Wrong number')
});




  return (
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {() => (
              <Form className={s.formStyle}> 
                  <label className={s.labelStyle} htmlFor='name'>Name</label>
                  <Field name='name' placeholder="Enter name" />
                  <ErrorMessage className={s.errorMessage} name='name' component='p' />
                  <label className={s.labelStyle} htmlFor='number'>Phone number</label>
                  <Field name='number' placeholder="Enter number" />
                  <ErrorMessage className={s.errorMessage} name='number' component='p' />
                
                  <button className={s.button} type='submit'>Add contact</button>
              </Form>)}
              
      </Formik>
  )
}

export default ContactForm
