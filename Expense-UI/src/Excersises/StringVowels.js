import { useState } from "react"
export default function StringVowels(){

  const [Output,setOutput]=useState('')
  const [str,setStr]=useState('')
  const [rev,setRev]=useState('')
  const [swap,setSwap]=useState('')
  const handleCount=()=>{
    const vowels='aeiouAEIOU'
    let result=0
    for(let char of str){
      if(vowels.includes(char)){
        result++
      }
    }
    setOutput(`There are ${result} vowels`)
  }
  const handleInp=()=>{
    const str=prompt('enter string')
    setStr(str)

  }
  const handleReverse=()=>{
    let rev=''
    for(let char of str){
      rev=char+rev
    }
    setRev(`reversed ${rev}`)
  }
  const handleSwap=()=>{
    let swap=''
    for(let char of str){
      if(char===char.toUpperCase()){
        swap=swap+char.toLowerCase()
      }else{
        swap=swap+char.toUpperCase()
      }
    }
    setSwap(`swaped ${swap}`)

  }
  return (
    <div>
   
      <h1>{str}</h1>
      <button onClick={handleInp}>Enter string</button><br/>
      <button onClick={handleCount}>vowel count</button><br/>
      <p>{Output}</p>
      <button onClick={handleReverse}>Reverse string</button><br/>
      <p>{rev}</p>
      <button onClick={handleSwap}>Swap</button><br/>
      <p>{swap}</p>
    
     
    </div>
  )
}