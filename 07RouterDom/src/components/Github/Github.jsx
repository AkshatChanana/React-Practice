import React from 'react'
import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AkshatChanana')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div>Github Followers: {data.followers}</div>
    <img src={data.avatar_url}></img>
    </>
  )
}

export default Github
export const githubInfoLoader = async () =>{
   const response = await fetch('https://api.github.com/users/AkshatChanana')
   return response.json()
}