const Contact = ({ name, number, handleDelete
 }) => {
    
    return (
        <div>
      <ul>
        <li>Name: {name}</li>
        <li>Number: {number}</li>
          <button
            type='button'
            onClick={() => handleDelete(Contact.id)}>Delete</button>
      </ul>
    </div>
    );
};

export default Contact;