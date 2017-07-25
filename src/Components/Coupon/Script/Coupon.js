import React from 'react'
import ReactDom from 'react-dom'
import {
  Table
} from 'antd'
import '../Less/style'
import Coupon_DATA from './Coupon_DATA'

function dataSource() {
  var a = [],
    obj = {};
  for (var i = 0; i < 11; i++) {
    obj = {
      key: i,
      name: '胡彦斌' + i,
      age: 32,
      address: '西湖区湖底公园1号'

    }
    a.push(obj)
  }
  return a;
}

var dataSource = dataSource();

export default class Coupon extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      'dataSource': []
    }
  }


  componentDidMount() {
    let {
      dataSource
    } = this.state;
    //ajax

    //封装的地方
    // $.ajax({
    //   url:'',
    //   success:function(){

    //   }
    // })


    //GETPOST.getCo


    // (dataSource) => {

    // }
    // this.setState({
    //   dataSource: dataSource;
    // })

    console.log(dataSource)
  }

  render() {
    let {
      dataSource
    } = this.state;
    return (
      <div className="content">
				<div className="coupon">
					<Table dataSource={dataSource} columns={Coupon_DATA} />	
				</div>
			</div>
    );
  }
}