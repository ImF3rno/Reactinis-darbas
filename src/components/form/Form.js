import {useState} from 'react';

const id=Math.random()
const Form=(props)=>{
    const [formData,setFormData]=useState({
        'name':'',
        'price':'',
        'quantity':''
    })
    const handleSubmit=e=>{
      e.preventDefault();
      console.log('id:',id)
      console.log('pavadinimas:',formData.name);
      console.log('kaina',formData.price);
      console.log('kiekis:',formData.quantity)
      props.add()
    };
    return(
        <div>
        <form onSubmit={handleSubmit}>
          <input
            id="Name"
            type="text"
            placeholder="Product name"
            onChange={event=>setFormData(event.target.value)}
            value={FormData.name}
          />
          <br/>
          <input
            id="Price"
            type="text"
            placeholder="Price"
            value={FormData.price}
            onChange={event=>setFormData(event.target.value)}
          />
          <br/>
          <input
            id="Quantity"
            type="text"
            placeholder="Quantity"
            value={FormData.quantity}
            onChange={event=>setFormData(event.target.value)}
          />
          <br/>
          <button type="submit">Submit form</button>
        </form>
      </div>
    );
}

export default Form;