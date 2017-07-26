import React from 'react'
import ReactDom from 'react-dom'
import { Table } from 'antd'
import '../Less/style'


export default class Coupon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content">
				<div className="no-open">
					应用开通，暂未开通，敬请期待！
				</div>
			</div>
		);
	}
}