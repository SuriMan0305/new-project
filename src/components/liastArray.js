import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #696969;
  padding: 20px 0px;
  list-style: none;
`;

const ListItem = styled.div`
  background-color: aliceblue;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
  &:active {
    background-color: lightgreen;
  }
`;

export const MassiveData = () => {

  const listData = useSelector((state) => state.list.data)
  
  console.log(listData);
  return (
    <div>
      <Container>
        {listData.map((data) => {
          return (
            <li key={data.id}>
              <ListItem style={{backgroundColor: data.status ? 'green' : 'aliceblue'}}>
                {data.id}. {data.content}
              </ListItem>
            </li>
          );
        })}
      </Container>
    </div>
  );
};
