const loop = () => {
    const iterations = 5;

    // For loop
    let forLoopResult = "";

    for (let i = 0; i < iterations; i++) {
        forLoopResult = forLoopResult + String(i) + " ";
    }

    // While loop
    let whileLoopResult = "";
    let whileCount = 0;

    while (whileCount < iterations) {
        whileLoopResult = whileLoopResult + String(whileCount) + " ";
        whileCount++;
    }

    return (
        <div>
            <h1>loop</h1>
            <p>For loop: {forLoopResult}</p>
            <p>While loop: {whileLoopResult}</p>
        </div>
    );
};

export default loop;


