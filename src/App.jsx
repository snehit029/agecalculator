
function App() {
  return (
    <>
      <div className="max-w-lg mx-auto bg-white rounded shadow-md p-8">
        <div className="flex flex-row">
        <form className=" gap-4">
          <article>
            <label htmlFor="day" className="block uppercase font-bold mb-4">Day</label>
            <input type="number" name="day"
            id="day" placeholder="DD" min="1"
            max="31"
            className="bg-tarnsparent border border-purple
            w-full py-3 px-4 rounded text-3xl 
            placeholder-lightgrey focus:ring-4
            focus:ring-purple transition-all
            duration-150 focus:border-purple
            outline-none"/>

<label htmlFor="month" className="block uppercase font-bold mb-4">Month</label>
            <input type="number" name="month"
            id="month" placeholder="MM" min="1"
            max="12"
            className="bg-tarnsparent border border-purple
            w-full py-3 px-4 rounded text-3xl 
            placeholder-lightgrey focus:ring-4
            focus:ring-purple transition-all
            duration-150 focus:border-purple
            outline-none"/>

<label htmlFor="year" className="block uppercase font-bold mb-4">Year</label>
            <input type="number" name="year"
            id="year" placeholder="DD" min="1900"
            max="2024"
            className="bg-tarnsparent border border-purple
            w-full py-3 px-4 rounded text-3xl 
            placeholder-lightgrey focus:ring-4
            focus:ring-purple transition-all
            duration-150 focus:border-purple
            outline-none"/>
          </article>
        </form>
       </div>
      </div>
    </>
  )
}

export default App
