import './Messenger.css'

export default function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    const contato = {        
        width: '100px',
        padding: '10px',
        marginRight: '10px',

    }
    
    return ( 
        <section className="contact-list">
            <ul>
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button 
                            style={contato}
                            onClick={() => {
                            onSelect(contact)
                        }}>
                            {contact.name}
                        </button>
                    </li>
                    )}
            </ul>
        </section>
     );
}
