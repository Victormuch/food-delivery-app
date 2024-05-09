import React, { useState } from 'react'


const Contact = () => {
    const [formInfo, setFormInfo] = useState ({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInfo(prevState => ({
            ...prevState,
            [name] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault ();

        console.log(formInfo)

        setFormInfo({
            name: '',
            email: '',
            message: ''
        });
    };


  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            value={formInfo.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formInfo.email}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea
            id="message"
            name="message"
            value={formInfo.message}
            onChange={handleChange}
            required
            ></textarea>
            <button type='submit'>Submit</button>
        </div> 
    </form>
  )
}

export default Contact;