import React, { useEffect, useState } from 'react';
import { Form, Icon, Input, Button, Row, Col} from 'antd';
import io from 'socket.io-client';

const ChatPage = () => {

    const [chatMessage, setChatMessage]= useState('');
    useEffect(()=>{

        let server = 'https://localhost:5000';

        const socket = io(server)

    },[])

    const messagesEnd = () => {
        
    }
    const handleChatMessage = (e) => {
        e.preventDefault();

        setChatMessage(e.target.value)
    }
    return (
        <>
        <div>
            <p style={{fontSize:2, textAlign:'center', }}>Chatty</p>
        </div>

        <div style={{maxWidth: '800px', margin:'0 auto'}}>
            <div className="infinite-container">

                <div
               // ref={el =>{
                //    messagesEnd = el;
               // }}
                style={{float: 'left', clear: 'both'}} />
            </div>

            <Row>
                <Form layout="inline">
                    <Col span={18}>
                        <Input
                            id='message'
                            prefix={<Icon type='message' style={{color:'rgba(0,0,0,.25'}}/>}
                            placeholder='lets chat'
                            type='text'
                            value={chatMessage}
                            onChange={handleChatMessage}
                            />

                    </Col>

                    <Col span={2}>

                    </Col>

                    <Col span={4}>
                        <Button type='primary' style={{width: '100%'}} htmlType="submit">
                            <Icon type='enter' />
                        </Button>
                    </Col>

                </Form>
            </Row>
        </div>
        </>
    )
}

export default ChatPage

