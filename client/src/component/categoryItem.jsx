import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
flex:1;
margin:2px; 
height:70vh;
position: relative;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"20vh"})};

`;
const ProductInfo = styled.div`
position:absolute;
top:0;
left:0;
width: 100%;
height:100%;
display:flex;
flex-directon:column;
align-items:center;
justify-center:center;
`;
const Title = styled.h1`
color:#FFFEF7;
margin-bottom:70px;
`;
const Button = styled.button`
border:none;
padding:10px;
border-radius: 5px; 
border-color:#CCAE88;
color:#3C2218;
cursor: pointer;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.image} key={item.id}/>
            <ProductInfo>
                <Title>{item.heading}</Title>
                <Button>SHOP NOW</Button>
            </ProductInfo>
        </Container>
    )
}

export default CategoryItem