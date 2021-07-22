import React,{useState} from 'react';

const Contact = () =>{

      const [data,setData]= useState({
          fullname:"",
          phone:"",
          email:"",
          massage:"",
      });
      const InputEvent =(event) => {
        const { name,value } = event.target;
    
        setData((preVal) => {
        return {
            ...preVal,
            [name ] : value,
        };
     });
    };
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`my name is ${data.fullname}.my phone number is ${data.phone}.my email is ${data.email}.
        here is i want to say ${data.massage}`);

    };
    
    return(
        <>
        <div className="my-5" > 
        <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6col-10 mx-auto">

        <form onSubmit={formSubmit}>

        <div className="mb-3">
        <label for="exampleFormControlInput1" 
      className="form-label">
      FullName</label>
     <input type="text" className="form-control" 
     id="exampleFormControlInput1" 
     name="fullname"
     value={data.fullname }
     onChange={InputEvent}
      placeholder="Enter your namr"/>
       </div>

       <div className="mb-3">
        <label for="exampleFormControlInput1" 
      className="form-label">
     Phone Number</label>
     <input type="number" className="form-control" 
     id="exampleFormControlInput1" 
     name="phone"
     value={ data.phone }
     onChange={InputEvent}
      placeholder="Enter your mobile number"/>
       </div>

       <div className="mb-3">
        <label for="exampleFormControlInput1" 
      className="form-label">
     Email</label>
     <input type="email" className="form-control " 
     id="exampleFormControlInput1" 
     name="email"
     value={ data.email }
     onChange={InputEvent}
      placeholder="Enter your email"/>
       </div>
       
       <div className="mb-3">
       <label for="exampleFormControlTextarea1" 
      className="form-label">
     Massage</label>
     <textarea className="form-control" 
     id="exampleFormControlInput1" rows="3"
     name="massage"
     value={ data.Massage }
     onChange={InputEvent}>
     </textarea>
       </div>

       <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
        </form>
        </div>
        </div>
        </div>
        </>
    );
};
export default Contact;