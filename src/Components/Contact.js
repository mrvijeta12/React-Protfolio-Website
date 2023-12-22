const Contact = () => {
    return (
        <div className="contact-container">

            <div className="contact">

                <h1>Contact Me</h1>
                <div className="star-container">
                    <span>__________</span>
                    <span className="star">&#9733;</span>
                    <span>__________</span>
                </div>
            </div>



            <form>
                <label for="">Full Name</label>
                <input type="text" required></input>
                <label for="">Email</label>
                <input type="email" required></input>
                <label for="">Phone No</label>
                <input type="telephone" required></input>
                <label for="">Message</label>
                <textarea></textarea>
            </form>

            <button className="btn">Send</button>

        </div>
    )
}

export default Contact