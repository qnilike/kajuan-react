import React from 'react'
import ReactDom from 'react-dom'
import { Table } from 'antd'
import '../Less/style'

const dataSource = [{
  key: '1',
  name: '胡彦斌111',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名3333',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

export default class Coupon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content">
				<div className="coupon">
					<Table dataSource={dataSource} columns={columns} />	
				</div>
			</div>
		);
	}
}