import styled from 'styled-components';
import MovieComponent from './components/MovieComponent';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header= styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:black;
color:white;
padding:10px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 6px 0 #555;
`;

const SearchBox=styled.div`
  display:flex;
  flex-direction:row;
  padding:10px 10px;
  background-color:white;
  border-radius:6px;
  margin-left:20px;
  width:50%;
  background-color:white;
  align-items:center;

`;
const SearchIcon= styled.img`
  width:32px;
  height:32px;

`;

const SearchInput=styled.input`
  color:black;
  font-size:16px;
  font-weight:bold;
  border:none;
  outline:none;
  margin-left:15px;
`;

const MovieListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
justify-content:space-evenly;


`;
function App() {
  return (
    <Container>
      <Header>React Movie App
    <SearchBox>
        <SearchIcon src="search-icon.svg" />
        <SearchInput placeholder= "Search Movie"/>
    </SearchBox>

      </Header>
      <MovieListContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </MovieListContainer>
      Hello World
    </Container>
  );
}

export default App;
