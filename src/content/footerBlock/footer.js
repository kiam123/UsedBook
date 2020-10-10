import React, { Component } from 'react';
import { FooterBlock, Block, FooterListBlock, FooterListItem } from './style';
import buy from '../../images/pic/buy.jpg';
import help from '../../images/pic/help.jpg';
import like from '../../images/pic/like.jpg';
import right from '../../images/pic/right.jpg';

export default class Footer extends Component {


    render() {
        return (
            <FooterBlock>
                <Block>
                    {/* <div style={{backgroundColor:"orange", height:"100px", width:"100%", display:"inline-block"}}></div>
                    <div style={{backgroundColor:"red", height:"100px", width:"100%"}}></div> */}
                    <FooterListBlock>
                        <FooterListItem>
                            <img src={right} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">正品保證</font>
                        </FooterListItem>
                        <FooterListItem>
                            <img src={like} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">售後無憂</font>
                        </FooterListItem>
                        <FooterListItem>
                            <img src={help} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">幫助中心</font>
                        </FooterListItem>
                        <FooterListItem>
                            <img src={buy} alt="" style={{height:"25px", width:"25px"}}></img>
                            <font color="white" size="5">省心購</font>
                        </FooterListItem>
                    </FooterListBlock>
                    <FooterListBlock>
                        <FooterListItem>
                            <font color="white" size="5">購物指南</font>
                        </FooterListItem>
                        <FooterListItem>
                            <font color="white" size="5">商家服務</font>
                        </FooterListItem>
                        <FooterListItem>
                            <font color="white" size="5">商家服務</font>
                        </FooterListItem>
                        <FooterListItem>
                            <font color="white" size="5">商家服務</font>
                        </FooterListItem>
                    </FooterListBlock>
                </Block>
            </FooterBlock>
        );
    }
}