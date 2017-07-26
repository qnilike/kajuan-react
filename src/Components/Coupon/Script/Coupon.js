import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import { Table,Menu, Dropdown, Icon, message,Button,Modal } from 'antd'
import '../Less/style'
import Coupon_DATA from './Coupon_DATA'
import CreateCoupon from './CreateCoupon'

var dataSource = dataSource();

function dataSource() {
  var a = [],
    obj = {};
  for (var i = 0; i < 11; i++) {
    obj = {
      key: i,
      couponType: '胡彦斌' + i,
      couponName: 32,
      couponMoeny: '西湖区湖底公园1号',
      couponVaild:'ddddd',
      couponStock:'100',
    }
    a.push(obj)
  }
  return a;
}
var couponSource,couponSubSource;
const menuClick = function ({ key }) {
  this.setState({
      'couponSource':key
  })
};

const menu = (
  <Menu onClick={menuClick}>
    <Menu.Item key="星巴克卡券">星巴克卡券</Menu.Item>
    <Menu.Item key="上岛卡券">上岛卡券</Menu.Item>
    <Menu.Item key="屈臣氏卡券">屈臣氏卡券</Menu.Item>
  </Menu>
);

const submenuClick = function (key) {
  this.setState({
      'couponSubSource':key
  })
};
const submenu = (
  <Menu onClick={submenuClick}>
    <Menu.Item key="星巴克十里河分店">星巴克十里河分店</Menu.Item>
    <Menu.Item key="上岛大望路分店">上岛大望路分店</Menu.Item>
    <Menu.Item key="屈臣氏国贸分店">屈臣氏国贸分店</Menu.Item>
  </Menu>
);

export default class Coupon extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      'dataSource': [],
      'couponSource':couponSource,
      'couponSubSource':couponSubSource
    }
  }

  componentDidMount() {
    //let { dataSource, couponSource, couponSubSource} = this.state;
    this.setState({
      'dataSource': dataSource,
      'couponSource':couponSource,
      'couponSubSource':couponSubSource
    })
  }

  render() {
    let { dataSource, couponSource, couponSubSource} = this.state;
    return (
      <div className="content">
        <div className="couponHead clearfix">
          卡券来源：
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              {couponSource} <Icon type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={submenu}>
            <a className="ant-dropdown-link" href="#">
              {couponSubSource} <Icon type="down" />
            </a>
          </Dropdown>
          <Button className="fr" type="primary" style={{marginTop:12}}><Link to="./CreateCoupon">创建卡券</Link></Button>
        </div>
				<div className="coupon">
					<Table dataSource={dataSource} columns={Coupon_DATA} />	
				</div>
			</div>
    );
  }
  deleteT (){
    alert('1111');
  }
}