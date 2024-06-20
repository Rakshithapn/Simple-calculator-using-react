import './Body.css'
import { useState } from 'react';
function Body() {
    var num1 = 10;
    var num2 = 20;
    // var result;
    const [result,setResult] = useState(0)
    function add()
    {
        setResult(num1 + num2)
    }
    function sub()
    {
        setResult(num1 - num2)
    }
    function mul()
    {
        setResult(num1 * num2)
    }
    function div()
    {
        setResult(num1 / num2)
    }
    return(
        <>
        <p>Calculator</p>
        <p>Num1 : {num1}</p>
        <p>Num2 : {num2}</p>
        <button onClick={add}>+</button>&ensp;&ensp;
        <button onClick={sub}>-</button>&ensp;&ensp;
        <button onClick={mul}>*</button>&ensp;&ensp;
        <button onClick={div}>/</button>&ensp;&ensp;
        <p>Result : {result}</p>

        </>
    )
}
export default Body