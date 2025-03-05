const Contact = () => {
  return (
    <div class="container3">
      <div class="contactform">
        <div class="Contact"> SEND INQUIRY</div>
        <div>
          <label class="email">Email:</label>
          <input type="Email" placeholder="Enter Email" class="form-control" />
          <label class="email">Message:</label>
          <input
            type="Message"
            placeholder="Enter Message"
            class="form-control"
          />
        </div>
        <button type="submit" class="submit">
          Submit
        </button>
        <br />
      </div>
    </div>
  );
};

export default Contact;
