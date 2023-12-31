import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setNext, setPrev } from "../store/slices/list";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.svg`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const NextButton = () => {

  const dispatch = useDispatch()

  const nextClick = () => {
    dispatch(setNext())
  };

  const prevClick = () => {
    dispatch(setPrev())
  };

  return (
    <Container>
      <Icon style={{transform: 'rotate(180deg)'}}
        onClick={prevClick}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.715 6.36694L14.405 10.6669C14.7769 10.9319 14.9977 11.3603 14.9977 11.8169C14.9977 12.2736 14.7769 12.702 14.405 12.9669L8.715 17.6669C8.23425 18.0513 7.58151 18.1412 7.01475 17.9011C6.44799 17.6611 6.05842 17.1297 6 16.5169V7.51694C6.05842 6.90422 6.44799 6.37281 7.01475 6.13275C7.58151 5.89269 8.23425 5.9826 8.715 6.36694Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6.01697V18.017"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Icon>
      <Icon
        onClick={nextClick}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.715 6.36694L14.405 10.6669C14.7769 10.9319 14.9977 11.3603 14.9977 11.8169C14.9977 12.2736 14.7769 12.702 14.405 12.9669L8.715 17.6669C8.23425 18.0513 7.58151 18.1412 7.01475 17.9011C6.44799 17.6611 6.05842 17.1297 6 16.5169V7.51694C6.05842 6.90422 6.44799 6.37281 7.01475 6.13275C7.58151 5.89269 8.23425 5.9826 8.715 6.36694Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6.01697V18.017"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Icon>
    </Container>
  );
};
