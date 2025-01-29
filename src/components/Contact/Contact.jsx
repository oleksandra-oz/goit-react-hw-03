const Contact = ({ id, name, number, handleDelete
 }) => {
    
    return (
        <div>
      <ul>
        <li>Name: {name}</li>
        <li>Number: {number}</li>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </ul>
    </div>
    );
};

export default Contact;