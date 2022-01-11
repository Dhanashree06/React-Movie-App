import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoColumn=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const MovieInfo=styled.span`
    font-size:16px;
    font-weight:500;
    color:black;
    text-transform:capitalize;

`;

const MovieComponent = (props) => {
    return (  
        <MovieContainer>
            <CoverImage src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/wjnhpz3osrai5aningjl.jpg"/>
            <MovieName>TITANIC</MovieName>
            <InfoColumn>
                <MovieInfo>Year:  2009</MovieInfo>
                <MovieInfo>Type:  Movie</MovieInfo>
            </InfoColumn>
            </MovieContainer> 
       
    );
};
 
export default MovieComponent;