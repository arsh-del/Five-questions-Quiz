import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [startDate, setStartDate] = useState(new Date());




return (
<div className="form">
<div>
<h1>User Registration by Arshdeep Singh</h1>
</div>


<form>
{/* Labels and inputs for form data */}
<div class="left1"> 
<label className="label">Your full given name:</label>
</div>
<input  className="input"
value={"John Doe"} type="text" />

<div class="container">

<div class="container1">   

<div class="left2"> 
<label className="label">Date of Birth</label>
</div>

{/* <input onChange={handleEmail} className="input"
value={email} type="email" /> */}

<DatePicker selected={startDate} wrapperClassName="datePicker" dateFormat="dd/MM/yyyy" onChange={(date:Date) => setStartDate(date)} />

</div>

<div class="container1"> 
<label className="label">Country of residence or citizenship:</label>
<input  className="input1"  wrapperClassName="input1"
value={"Canada"} type="text" />

</div>

</div>


<div class="left1"> 
<label className="label">What school do you plan to attend?</label>
</div>
<input  className="input"
value={"University of British Columbia"} type="email" />
<div class="left1"> 
<label className="label">Please take a moment to describe your intended area of study:</label>
</div>
<input  className="input"
value={"Enter details here"} type="text" />

{/* <button onClick={handleSubmit} className="btn" type="submit">
Submit
</button> */}
</form>
</div>
);
}





 