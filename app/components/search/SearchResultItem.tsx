import React from "react"

interface SearchResultProps {
        _id: string,
        id: string,
        primaryImage: {
          id: string,
          width: number,
          height: number,
          url: string,
          caption: {
            plainText: string,
            __typename: string
          },
          __typename: string
        },
        titleType: {
          text: string,
          id: string,
          isSeries: false,
          isEpisode: false,
          __typename: string
        },
        titleText: {
          text: string,
          __typename: string
        },
        originalTitleText: {
          text: string,
          __typename: string
        },
        releaseYear: {
          year: 2005,
          endYear: null,
          __typename: string
        },
        releaseDate: {
          day: 10,
          month: 3,
          year: 2005,
          __typename: string
        }
      
}

const SearchResultItem = (item: SearchResultProps) => {
    return (
        <div key={item._id}>
            <h1>{item?.originalTitleText.text}</h1>
        </div>
    )
}

export default SearchResultItem
