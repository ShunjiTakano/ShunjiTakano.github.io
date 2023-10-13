import "./Contact.scss"
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    //const [message,SetMessage] = useState(false)
    const [state, handleSubmit] = useForm('mvodnzon');

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        id = "email"
                        type = "email"
                        name = "email"
                        placeholder = "Email"
                    />
                    <textarea placeholder="Message" id="message" name="message"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <button type="submit" disabled={state.submitting}>Send</button>
                    {state.submitting && <span>Sending email..</span>}
                    {state.succeeded && <span>Thank you for your message. I will reply as soon as possible.</span>}
                </form>
            </div>
        </div>
    )
}
