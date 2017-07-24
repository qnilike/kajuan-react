import React from 'react'
import ReactDom from 'react-dom'
import {
	Table,
	Popconfirm,
	Button
} from 'antd';
export default class Coupon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div>
			<Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
		</div>);
	}
}