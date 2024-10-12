//Task Number 1

const conversionAndCoercion = () => {

    const numberAndString = 3 + "28";
    const numberAndTrueBoolean = 3 + true;
    const numberAndFalseBoolean = 7 + false;
    const stringAndTrueBoolean = "hi" + true;
    const stringAndFalseBoolean = "14" + false;

        // Task 3
   
        const name = 'Wunmi';
        const city = 'Lagos';
        const gender = 'Female';
        const complexion = 'Dark';
        const hobbies = ['Reading', 'Swimming', 'Skydiving'];


        //Task 4
        const school = {
            name: "Bolly college",
            color: "blue",
            location: undefined
        }


  return (
    <div>conversionAndCoercion

        <section>
            <p>3 + "28" = {numberAndString} (type: {typeof numberAndString}) </p>
            <p>3 + true = {numberAndTrueBoolean} (type: {typeof numberAndTrueBoolean}) </p>
            <p>7 + false = {numberAndFalseBoolean} (type: {typeof numberAndFalseBoolean}) </p>
            <p>"hi" + true = {stringAndTrueBoolean} (type: {typeof stringAndTrueBoolean}) </p>
            <p>"14" + false = {stringAndFalseBoolean} (type: {typeof stringAndFalseBoolean}) </p>
        </section>

        <br />
        <br />

        {/* Task 3 */}

        <section>
        <h1>My Personal Details</h1>
        <p>name: {name}</p>
        <p>city: {city}</p>
        <p>gender: {gender}</p>
        <p>complexion: {complexion}</p>
        <p>hobbies: {hobbies}</p>
        
        </section>


        <br />
        <br />

        {/* Task 4 */}
        <h2>Optional chaining operator or nullish coalescing operator</h2>
        {school?.location?? "The school has no location"}  <br />
        {school?.name?? "The school has no name"} <br />
        {school?.color?? "The school has no color"} <br />


    </div>
  )
}

export default conversionAndCoercion



