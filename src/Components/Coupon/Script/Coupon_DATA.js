import React from 'react'
import ReactDom from 'react-dom'
import { Table,Menu, Dropdown, Icon, message,Button,Modal } from 'antd'
const Coupon_DATA = [{
	title: '卡券类型',
	dataIndex: 'couponType',
	key: 'couponType',
}, {
	title: '卡券名称',
	dataIndex: 'couponName',
	key: 'couponName',
}, {
	title: '卡券面额',
	dataIndex: 'couponMoeny',
	key: 'couponMoeny',
},{
	title: '卡券有效期',
	dataIndex: 'couponVaild',
	key: 'couponVaild',
},{
	title: '库存',
	dataIndex: 'couponStock',
	key: 'couponStock',
},{
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
    	<a href="#">详情</a>
    	<span className="ant-divider" />
      	<a href="#" onClick={() => this.delete(index)}>删除</a>
    </span>
  ),
}];

export default Coupon_DATA;