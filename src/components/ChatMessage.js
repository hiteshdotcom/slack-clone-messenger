import React from 'react'
import styled from 'styled-components';

function ChatMessage({text,name,image,timestamp}) {

    return (
        <Container>
            <UseAvatar>
                <img src={image} alt=""/>
            </UseAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}

                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding:8px 20px;
    display:flex;
    align-items:center;
    transition:0.3s;
    :hover{
        background:#EDE6FE;
        transition:0.3s;
    }
`
const UseAvatar = styled.div`
    width:36px;
    height:36px;
    border-radius:50%;
    overflow:hidden;
    margin-right:8px;
    img{
        width:100%;
        
    }
`
const MessageContent = styled.div`
    display:flex;
    flex-direction:column;
`
const Name = styled.span`
    font-weight:900;
    font-size:15px;
    line-height:1.4;
    span{
        font-weight:400;
        color:rgb(97,96,97);
        margin-left:8px;
        font-size:13px;
    }
`
const Text = styled.span``