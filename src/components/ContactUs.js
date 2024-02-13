const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl ">This is the contact us Page</h1>
      <form>
        <input type="text" className="border-2 border-black rounded p-2 m-2" placeholder="name"/>
        <input type="text" className="border-2 border-black rounded p-2 m-2" placeholder="value"/>
        <button className="border-2 border-green-700 rounded-lg p-2 m-2">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs
