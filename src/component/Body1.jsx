import './Body.css'
import { useState } from 'react';
function Body1() {
    const [result,setResult] = useState(0)

    const [num1,setnum1] = useState()
    const [num2,setnum2] = useState()
    function funnum1(e)
    {
        setnum1(e.target.value)
    }
    function funnum2(e)
    {
        setnum2(e.target.value)
    }
    function add()
    {
        setResult(parseInt(num1) + parseInt(num2))
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
        <p>Num1 : <input type="text" value={num1} onChange={funnum1}></input></p>
        <p>Num2 : <input type="text" value={num2} onChange={funnum2}></input></p>
        <button onClick={add}>+</button>&ensp;&ensp;
        <button onClick={sub}>-</button>&ensp;&ensp;
        <button onClick={mul}>*</button>&ensp;&ensp;
        <button onClick={div}>/</button>&ensp;&ensp;
        <p>Result : {result}</p>

        </>
    )
}
export default Body1