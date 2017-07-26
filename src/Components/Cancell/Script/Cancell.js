import React from 'react'
import ReactDom from 'react-dom'
import { Table,Menu, Dropdown, Icon, message,Button } from 'antd'
import '../Less/style'
import Cancell_DATA from './Cancell_DATA'

var dataSource = dataSource();

const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

export default class Coupon extends React.Component {
  constructor(props) {
    super(props);
    console.log(dataSource)
    this.state = {
      'dataSource': []
    }
  }


  componentDidMount() {
    let { dataSource } = this.state;

    //封装的地方
    // $.ajax({
    //   url:'',
    //   success:function(){

    //   }
    // })

    //GETPOST.getCo

    // (dataSource) => {

    // }
    this.setState({
      'dataSource': dataSource
    })
  }

  render() {
    let { dataSource } = this.state;
    return (
      <div className="content">
        <div className="couponHead clearfix">
          卡券来源：
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              迈外迪卡券 <Icon type="down" />
            </a>
          </Dropdown>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              ABC公司 <Icon type="down" />
            </a>
          </Dropdown>
        </div>
		<div className="coupon">
			<Table dataSource={dataSource} columns={Cancell_DATA} />	
		</div>
	</div>
    );
  }
}

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
      couponStock:'100'
    }
    a.push(obj)
  }
  return a;
}