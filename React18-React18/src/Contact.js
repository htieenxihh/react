import { useState } from "react";
import ContactList from "./ContactList";

const Contact = () => {
    let email = 'huynhtien591@gmail.com'
    let addressobj = { address1: 'FPT UNIVERSITY', address2: 'DA NANG CITY' }

    const[techlist,listupdate]=useState([{ id: 1, name: 'React', version: 18.2 },
    { id: 2, name: 'java', version: 12 },
    { id: 3, name: 'Java Web', version: 6.2 }
    ])
    
    const removetech=(id)=>{
        console.log(id);

        const newlist=techlist.filter(item=>item.id!=id);
        listupdate(newlist);
        

    }
    return (
        <div style={{textAlign:'center'}}>
            <ContactList title="Welcome to React FER" email={email} addobj={addressobj} techlist={techlist} removetech={removetech}></ContactList>
        </div>
    );
}

export default Contact;