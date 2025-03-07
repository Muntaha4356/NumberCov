import { useState } from "react";
import { convertNumber } from "../Utils/convert.js";
import "../Styles/convertor.css";

const Converter = () => {
    const [input, setInput] = useState("");
    const [fromBase, setFromBase] = useState(10);
    const [result, setResult] = useState({});

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setResult(convertNumber(e.target.value, fromBase));
    };

    const handleBaseChange = (e) => {
        setFromBase(Number(e.target.value));
        setResult(convertNumber(input, Number(e.target.value)));
    };

    return (
        <div className="converter-container">
            <h2>Number System Converter</h2>
            
            {/* Input Field */}
            <input 
                type="text" 
                placeholder="Enter number" 
                value={input} 
                onChange={handleInputChange} 
            />

            {/* Base Selection Dropdown */}
            <select value={fromBase} onChange={handleBaseChange}>
                <option value="2">Binary</option>
                <option value="8">Octal</option>
                <option value="10">Decimal</option>
                <option value="16">Hexadecimal</option>
            </select>

            {/* Output Display */}
            {result && result.error ? (
                <p className="error">{result.error}</p>
            ) : input !== "" && result ? ( 
                <>
                    <p><strong>Binary:</strong> {result.binary}</p>
                    <p><strong>Octal:</strong> {result.octal}</p>
                    <p><strong>Decimal:</strong> {result.decimal}</p>
                    <p><strong>Hexadecimal:</strong> {result.hexadecimal}</p>
                </>
            ) : null}

        </div>
    );
};

export default Converter