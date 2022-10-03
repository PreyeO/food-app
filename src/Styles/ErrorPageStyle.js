import styled from "styled-components";

export const StyledErrorPage= styled.div`
color:white;
.error{
  padding-top:30px;
}
.page-container{
 display: flex;
 justify-content: center;
 transform: translateY(70px);
 gap:20px
 flex-wrap:wrap;
}
.single-food img{
  width:170px;
   height:170px;
   border-radius: 400px;
}
.page-container h2{
  font-size:150px; 
}
p{
  text-align: center;
  
}
.info{
  transform: translateY(100px);
  letter-spacing:2px;
  font-size: 35px;
  word-spacing:2px
}
.infos{
  transform: translateY(130px);
  font-size: 23px;
}
.arrow{
  text-align:center;
  transform: translateY(110px) translateX(250PX);
  
}
.alternatives ul{
  display:flex;
  justify-content:center;
  transform: translateY(150px);
  gap:80px;
  font-size:20px;
  letter-spacing:1px;
  word-spacing:1px;
  flex-wrap:wrap;
}
.info span{
  color: #e2b887;
}
  a {
    text-decoration: none;
    color:white;
    list-style:none;
  }
  a:hover{
  color: #E2B887;
  border: 1px solid white;
  cursor: pointer;
  }
}


@media screen and (max-width: 780px) {
  page-container{
    gap:5px
  }
  .page-container h2{
    font-size:100px; 
  
  }
  .single-food img{
    width:100px;
     height:100px;
  }
  .info{
    font-size: 30px;
     line-height:50px;
   
  }
   
  .infos{
    font-size: 25px;
    line-height:50px;
    transform: translateY(150px)
  }
  .alternatives ul{
    gap:20px;
    transform: translateX(70px) translateY(150px);
    width:250px
  }
  li{
    background-color:transparent;
  }
  .arrow{
    transform: translateY(150px) translateX(120px);
  } 
}

`