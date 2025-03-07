export function convertNumber(input,fromBase){
    if(!input){
        console.log("weew");
        return;
    }
    try {
        let decimalValue = parseInt(input, fromBase);

        return {
            binary: decimalValue.toString(2),
            octal: decimalValue.toString(8),
            decimal: decimalValue.toString(10),
            hexadecimal: decimalValue.toString(16).toUpperCase()
        };
    } catch (error) {
        return { error: "Invalid Input" };
    }
}