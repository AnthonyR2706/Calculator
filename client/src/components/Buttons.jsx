import React from 'react'

let prevNum = false
let doubleOp = false
let isDec = false
let isFirst = true
let newEquation = true
let lock = false
let tempVal = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const Buttons = ({getEquation, setEquation, getVal, setVal}) => {
    const handleClear = () => {
        if(lock){return}
        doubleOp = false
        isDec = false
        prevNum = false
        isFirst = true
        setVal("0")
        setEquation("")
        newEquation = true
    }
    const handleDec = (x) => {
        if(lock){return}
        if(!isDec){
            if(!newEquation){
                if (getEquation.slice(-1) != x){
                    setEquation(getEquation+x)
                }
            } else {
                setEquation(x)
            }
            setVal(getVal+x) 
            isDec = true
            doubleOp = false
            prevNum = true
            isFirst = false
            newEquation = false
        }
    }
    const handleNum = (x) => {
        if(lock){return}
        if(getVal.length == 19 && prevNum == true) {
            tempVal = getVal;
            setVal("Number Limit Reached");
            lock = true;
            sleep(2000).then(() => { setVal(tempVal); lock = false; });
            return;
        }
        doubleOp = false
        prevNum = true;
        if(isFirst){
            setVal(x)
            isFirst = false
        } else {
            setVal(getVal+x)
        }
        if(newEquation){
            setEquation(x)
        } else {
            setEquation(getEquation+x)
        }
        newEquation = false
    }
    const handleOperator = (x) => {
        if(lock){return}
        if(!newEquation){
            if(prevNum){
                setEquation(getEquation+x)
            } else {
                // if(getEquation.slice(-1) != x && x == "-"){
                //     setEquation(getEquation+x)
                //     doubleOp = true
                // } else if (getEquation.slice(-1) == x && x == "-"){
                    
                // } else {
                //     if(doubleOp) {
                //         setEquation(getEquation.slice(0, -2) + x)
                //         doubleOp = false
                //     } else if(getEquation.length != 1) {
                //         setEquation(getEquation.slice(0, -1) + x)
                //     } else {
                //         setEquation(getEquation + x)
                //     }
                    
                // }

                if (getEquation.slice(-1) == "-") {
                    if (doubleOp) {
                        setEquation(getEquation.slice(0, -2) + x)
                        doubleOp = false
                    } else {
                        setEquation(getEquation.slice(0, -1) + x)
                    }
                } else {
                    if (doubleOp) {
                        setEquation(getEquation.slice(0, -2) + x)
                        doubleOp = false
                    } else if (x == '-'){
                        setEquation(getEquation+x)
                        doubleOp = true
                    }
                }
            }
        } else {
            if(x == "-"){
                setEquation(x)
            } else {
                if(getEquation == ""){
                    setEquation("0" + x)
                } else {
                    setEquation(getEquation + x)
                }
            }
        }
        isDec = false
        prevNum = false
        isFirst = true
        newEquation = false
    }
    const handleEqual = () => {
        if(lock){return}
        setEquation(Function("return " + getEquation))
        setVal(0)
        prevNum = true
        doubleOp = false
        isDec = false
        isFirst = true
        newEquation = true
        
    }
    return (
        <div className='buttonContainer'>
            <button className='button clear' onClick = {() => {handleClear()}}>
                AC
            </button>
            <button className='button operator buttonide' onClick = {() => {handleOperator("/")}}>
                /
            </button>
            <button className='button operator multiply' onClick = {() => {handleOperator("*")}}>
                X
            </button>
            <button className='button number seven' onClick = {() => {handleNum("7")}}>
                7
            </button>
            <button className='button number eight' onClick = {() => {handleNum("8")}}>
                8
            </button>
            <button className='button number nine' onClick = {() => {handleNum("9")}}>
                9
            </button>
            <button className='button operator minus' onClick = {() => {handleOperator("-")}}>
                -
            </button>
            <button className='button number four' onClick = {() => {handleNum("4")}}>
                4
            </button>
            <button className='button number five' onClick = {() => {handleNum("5")}}>
                5
            </button>
            <button className='button number six' onClick = {() => {handleNum("6")}}>
                6
            </button>
            <button className='button operator plus' onClick = {() => {handleOperator("+")}}>
                +
            </button>
            <button className='button number one' onClick = {() => {handleNum("1")}}>
                1
            </button>
            <button className='button number two' onClick = {() => {handleNum("2")}}>
                2
            </button>
            <button className='button number three' onClick = {() => {handleNum("3")}}>
                3
            </button>
            <button className='button operator equals' onClick = {() => {handleEqual()}}>
                =
            </button>
            <button className='button number zero' onClick = {() => {handleNum("0")}}>
                0
            </button>
            <button className='button number decimal' onClick = {() => {handleDec(".")}}>
                .
            </button>
        </div>
    )
}

export default Buttons