import React from 'react'
import ReactDom from 'react-dom'
import { Table, Menu, Dropdown, Icon, message, Button, Modal } from 'antd'
import '../Less/style'

export default class Coupon extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render(){
    	return (
    		<div className="content">
    			<div className="couponAdd">
                    <div className="coupon-type">
                        <div className="coupon-head">
                            <h2>卡券管理</h2>
                            <p className="subtit">&nbsp;&nbsp;&nbsp;创建卡券 > 选择卡券类型</p>
                        </div>
                        <div className="coupon-body">
                             <div className="coupon-choose clearfix">
                                <div className="fl djq" onMouseOver={this.djqLayout}>
                                    <div className="couponLayout coupondjq">
                                        <p>可提供抵扣现金服务</p>
                                        <span className="createBtn">创建</span>
                                    </div>
                                </div>
                                <div className="fl lpq">
                                    <div className="couponLayout none couponlpq">
                                        <p>可提供服务或商品的兑换</p>
                                        <span className="createBtn">创建</span>
                                    </div>
                                </div>
                                <div className="fl zkq">
                                    <div className="couponLayout none couponzkq">
                                        <p>可提供消费折扣</p>
                                        <span className="createBtn">创建</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
    		</div>
    	);
    }
    djqLayout(){
        
    }
}