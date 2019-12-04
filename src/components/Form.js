import React, { useState, useEffect } from 'react';

function Form() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // 2. Use an effect for persisting the form
    useEffect(function persistForm() {
        localStorage.setItem('formData', name);
    });

    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });

    function onChangeName(e) {
        setName(e.target.value);
    }

    function onChangeSurName(e) {
        setSurname(e.target.value);
    }

    return (
        <div>
            <h3>Form</h3>
            <p><input value={name} onChange={onChangeName} /> | Name: {name}   </p>
            <p><input value={surname} onChange={onChangeSurName} /> | Surname: {surname}</p>
        </div>
    )
}

export default Form;
