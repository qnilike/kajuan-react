import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import { Table, Select, Icon, Button, Modal } from 'antd'
import '../Less/style'
import Coupon_DATA from './Coupon_DATA'
import CreateCoupon from './CreateCoupon'
const Option = Select.Option;

var a;

function getData() {
  var a = [],
    obj = {};
  for (var i = 0; i < 11; i++) {
    obj = {
      key: i,
      couponType: '胡彦斌' + i,
      couponName: 32,
      couponMoeny: '西湖区湖底公园1号',
      couponVaild: 'ddddd',
      couponStock: '100',
    }
    a.push(obj)
  }
  return a;
}

const menuClick = function(value) {
  console.log(value)
};

export default class Coupon extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      'dataSource': [],
      'couponSource': '星巴克卡券',
      'couponSubSource': '星巴克十里河分店'
    }
  }

  componentDidMount() {
    let { dataSource } = this.state;
    a = getData();

    this.setState({
      'dataSource': a
    })
  }

  render() {
    let { dataSource,couponSource,couponSubSource } = this.state;
    return (
      <div className="content">
        <div className="couponHead clearfix">
          卡券来源：
          <Select defaultValue="jack" style={{ width: 120 }} onChange={menuClick}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>  
          <Button className="fr" type="primary" style={{marginTop:12}}><Link to="./CreateCoupon">创建卡券</Link></Button>
        </div>
				<div className="coupon">
					<Table dataSource={dataSource} columns={Coupon_DATA} />	
				</div>
			</div>
    );
  }

}