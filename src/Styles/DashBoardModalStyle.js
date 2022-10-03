import styled from "styled-components";

export const StyledDashBoardModal= styled.div`
a{
  color:white;
}
.modalss {
  height: 900px;
  width: 320px;
  left: 0px;
  top: 0px;
  border-radius: 5px;
  position: absolute;
  background-color: lightgray;
}
.fahome {
  display: flex;
  justify-content: space-evenly;
  transform: translateY(270px) translateX(-65px);
}
.fahome h2 {
  transform: translateX(-55px);
  font-size: 20px;
}
.fauser {
  display: flex;
  justify-content: space-evenly;
  transform: translateY(330px) translateX(-75px);
}
.fauser h2 {
  transform: translateX(-60px);
  font-size: 20px;
}
.fagift input,
.facart input {
  width: 30px;
  border-radius: 10px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  background-color: #e2b887;
  transform: translateX(-10px);
  color: #00302e;
}
.fagift {
  display: flex;
  justify-content: space-evenly;
  transform: translateY(390px) translateX(-70px);
}
.fagift h2 {
  transform: translateX(-65px);
  font-size: 20px;
}
.fagift input {
  transform: translateX(-48px);
  background-color: limegreen;
}
.facart {
  display: flex;
  justify-content: space-evenly;
  transform: translateY(460px) translateX(-45px);
  gap: 10px;
}
.facart h2 {
  transform: translateX(-35px);
  font-size: 20px;
}
.facart input {
  transform: translateX(-45px);
}

@media screen and (max-width: 992px) {
  .modalss {
    width: 200px;
    background-color: white;
  }
  .modalss {
    display: none;
  }
}




`