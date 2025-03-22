const Contact = () => {
  return (
    <div className="px-32 py-4">
      <h1 className="font-bold text-3xl"> Contact Us</h1>
      <form className="py-4">
        <input
          type="text"
          className="border border-gray-400 px-1 h-10 rounded-md"
          placeholder="Name"
        ></input>
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 px-1 h-10 rounded-md mx-4"
        ></input>

        <button
          type="submit"
          className="bg-orange-500 px-6 py-2 rounded-md text-stone-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
