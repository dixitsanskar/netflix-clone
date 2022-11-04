import tw, { styled } from "twin.macro";

export const MoviesContainer = styled.div`
  ${tw`
    my-8  //top and bottom margin my with 1 rem.
  `}
`;

export const MoviesTitle = styled.h2`
  ${tw`
      text-2xl  // bigger font size 
      font-bold // weight increase
      uppercase // movie title uppercase
      mx-8 // two rem left, and a right margin
    `}
`;

export const MoviesRow = styled.div`
  ${tw`
      flex //flexbox
      overflow-x-auto //scroll left and right
      mt-4 //one rem top margin
      p-4 //one rem padding
    `}

  &::-webkit-scrollbar {
    display: none;  //hides scroll bar
  }
`;

export const MoviesPoster = styled.img`
  ${tw`
    m-2
    w-40
  `}

  // Scale the movie img when the user hover on it
  transition: all 0.2s;
  &:hover {
    transform: scale(1.09); 
    // hover transition over movie poster
  }
`;
