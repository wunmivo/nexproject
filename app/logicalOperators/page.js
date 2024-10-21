// && (AND)
// || (OR)
// ! (NOT)

const logicalOperators = () => {
    const a = true;
    const b = false;
    const c = true;

    const andResult = a && b; // false
    const orResult = a || b; // true
    const notResult = !c; // false

    const Result = (a && b) || b || c; // true
    return (
        <div>
            <h1>logical Operators</h1>
            <p>
                a = {a.toString()}, b = {b.toString()} and c = {c.toString()}
            </p>
            <p>AND (a && b): {andResult.toString()}</p>
            <p>OR (a || b): {orResult.toString()}</p>
            <p>NOT(!a): {notResult.toString()}</p>
            <p>
                Complex example ((a && b) || (b || c)):{" "}
                {Result.toString()}
            </p>
        </div>
    );
};

export default logicalOperators;