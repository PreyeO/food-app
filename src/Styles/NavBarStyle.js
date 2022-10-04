import styled from "styled-components";

export const StyledNavBar= styled.nav`
  padding-top: 60px;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  height: 10vh;
  justify-content: flex-end;
  padding-right: 40px;
  width: 100%;
  
ul{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}
li:hover{
color: #E2B887;
border: 1px solid white;
cursor: pointer;
}

span{
  display:block;
}
@keyframes move{
  0%{
    transform: translateX(20px) ;
    background-color:#E2B887;
  }
  50%{
    transform: scaleX(0.7);
    background-color:red;
    
  }
}
#signup{
  background-color:#E2B887;
  animation-name: move;
  animation-duration:10s;
  animation-iteration-count:infinite;
  border-radius: 10px;
  padding: 5px;
  transform:translateY(-6px);
}
nav{
  position: fixed;
  left:0;
  bottom:0;
 }
@media screen and (max-width: 780px) {
span{
  display:none;
}
}

`