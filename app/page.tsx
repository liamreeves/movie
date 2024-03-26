"use client"

import Image from "next/image";
import { useState } from "react";
import SearchResultItem from "./components/search/SearchResultItem"

export default function Home() {

const [searchText, updateSearchText] = useState("")
const [imageResult, updateImageResult] = useState("")
const [searchResults, updateSearchResults] = useState([])
 

const search = async (searchParam: string) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/?/${searchParam}?exact=false&titleType=movie`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43dd672cbdmsh9a643a002b508e1p1ffc2djsn48adc29aeaea',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.dir(result.results);
    updateSearchResults(result.results);
    updateImageResult(result.results[0].primaryImage.url)
  } catch (error) {
    console.error(error);
  }
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <input value={searchText} onChange={(event) => updateSearchText(event.target.value)} type="text"></input>
        <button onClick={() => search(searchText)}>Search</button>
      </div>
      <div>
        {
searchResults.map(item => {
  return SearchResultItem(item)
})}
      </div>
    </main>
  );
}
