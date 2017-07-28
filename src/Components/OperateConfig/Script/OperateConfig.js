import React from 'react'
import ReactDom from 'react-dom'
import { Radio,Select,Upload, Icon, Modal,Table } from 'antd'
import columns from './OperateConfig_DATA'
import '../Less/style'
const RadioGroup = Radio.Group;
const Option = Select.Option;

const data = [{
  key: '1',
  couponType: "团购券",
  couponName: "美团团购券",
  couponVaild: '领券后当天有效，有效期30天',
  applyStore: "肯德基十里河店、肯德基四惠店",
  couponStock: '19',
}, {
  key: '2',
  couponType: "团购券",
  couponName: "美团团购券",
  couponVaild: '领券后当天有效，有效期30天',
  applyStore: "肯德基十里河店、肯德基四惠店",
  couponStock: '19',
}, {
  key: '3',
  couponType: "团购券",
  couponName: "美团团购券",
  couponVaild: '领券后当天有效，有效期30天',
  applyStore: "肯德基十里河店、肯德基四惠店",
  couponStock: '19',
}];

// 弹框选中之后，触发的发生
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

export default class Coupon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//运营位数量  单选按钮默认值
		    opreateCount: 1,
		    //投放卡券弹出
		    visible: false,
		    //设置模态框的确定按钮文字
		    save:"保存",
		    //设置模态框的宽Modal
		    width:730,
		    //单选选择展示不同的运营位
		    operate2:false,
		    operate3:false,
		    //select展示下边的配置卡券
		    select1:false,
		    select2:false,
		    select3:false,
		}
	}

	render() {
		return (
			<div className="content">
                <div className="content-head">
                    <h2>卡券管理</h2>
                    <p className="subtit">&nbsp;&nbsp;&nbsp;卡券配置 > 运营位配置</p>
                </div>
                <div className="content-body clearfix operate-config">
                    <div className="operate-left fl">
						<div className="operate-show">
							<div className="operate-img">
								<div className="counpon-list">
									<div className="counpon-simple clearfix">
										<div className="counpon-money fl">
											<sup>￥</sup><span>15</span>
										</div>
										<div className="counpon-explain fl">
											<p>全品折扣券</p>
											<p>满100元可用</p>
										</div>					
									</div>
									<div className="counpon-simple clearfix">
										<div className="counpon-money fl">
											<sup>￥</sup><span>15</span>
										</div>
										<div className="counpon-explain fl">
											<p>全品折扣券</p>
											<p>满100元可用</p>
										</div>					
									</div>
									<div className="counpon-simple clearfix">
										<div className="counpon-money fl">
											<sup>￥</sup><span>15</span>
										</div>
										<div className="counpon-explain fl">
											<p>全品折扣券</p>
											<p>满100元可用</p>
										</div>					
									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div className="operate-right fl">
                    	<div className="operate-bgImg">
                    		<span className="operate-rtit mb"><i>*</i>背景图</span> 
                    		
						     <div className="operate-explain">
						     	<p>1.你可以上传：JPG、JPEG、PNG、GIF格式图片</p>
						     	<p>2.推荐尺寸：888 x 528 px</p>
						     	<p>3.至少上传一张照片</p>
						     </div>
                    	</div>
						<div className="operate-count">
							<span className="operate-rtit"><i>*</i>运营位数量</span> 
							<RadioGroup onChange={this.onChange} value={this.state.opreateCount}>
						        <Radio value={1}>1</Radio>
						        <Radio value={2}>2</Radio>
						        <Radio value={3}>3</Radio>
						    </RadioGroup>
						</div>
						<div className="yyw-count">
							<div className="operate-first" style={{ display:"block" }}>
								<span className="operate-rtit"><i>*</i>运营位1类型</span> 
								<Select defaultValue="待选择" style={{ width: 120 }} onChange={this.select1Change}>
							      <Option value="待选择">待选择</Option>
							      <Option value="优惠券">优惠券</Option>
							    </Select>
							    <div>
							    	<h3 className={this.state.select1 ? "" : "none"+" " +"add-conpun"} onClick={this.showModal}>点击配置卡券</h3>
							    	<div className="counpon-name none">
							    		<h2>卡券信息：</h2>
							    		<p>优惠券名称：99元代金券</p>
							    		<p>优惠券金额：99</p>
							    		<p>有效期：领取后当天生效，30天内有效</p>
							    		<p>库存：19</p>
									</div>
							    </div>
						    </div>
							<div className={this.state.operate2 ? "" : "none"+" " +"operate-second"}>
							    <span className="operate-rtit"><i>*</i>运营位2类型</span> 
								<Select defaultValue="待选择" style={{ width: 120 }} onChange={this.select2Change}>
							      <Option value="待选择">待选择</Option>
							      <Option value="优惠券">优惠券</Option>
							    </Select>
							    <div>
							    	<h3 className={this.state.select2 ? "" : "none"+" " +"add-conpun"} onClick={this.showModal}>点击配置卡券</h3>
							    	<div className="counpon-name none">
							    		<h2>卡券信息：</h2>
							    		<p>优惠券名称：99元代金券</p>
							    		<p>优惠券金额：99</p>
							    		<p>有效期：领取后当天生效，30天内有效</p>
							    		<p>库存：19</p>
									</div>
							    </div>
						    </div>
						    <div className={this.state.operate3 ? "" : "none"+" " +"operate-third"}>
							    <span className="operate-rtit"><i>*</i>运营位3类型</span> 
								<Select defaultValue="待选择" style={{ width: 120 }} onChange={this.select3Change}>
							      <Option value="待选择">待选择</Option>
							      <Option value="优惠券">优惠券</Option>
							    </Select>
							    <div>
							    	<h3 className={this.state.select3 ? "" : "none"+" " +"add-conpun"} onClick={this.showModal}>点击配置卡券</h3>
							    	<div className="counpon-name none">
							    		<h2>卡券信息：</h2>
							    		<p>优惠券名称：99元代金券</p>
							    		<p>优惠券金额：99</p>
							    		<p>有效期：领取后当天生效，30天内有效</p>
							    		<p>库存：19</p>
									</div>
							    </div>
						    </div>
						</div>
                    </div>
                </div>
                <Modal title="选择要投放的卡券"  visible={this.state.visible} onOk={this.handleOk}  onCancel={this.handleCancel} okText={this.state.save} width={this.state.width}>
		            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
		        </Modal>
    		</div>
		);
	}
	//运营位单选按钮 选择
	onChange = (e) => {
	    this.setState({
	      'opreateCount': e.target.value,
	    });
	    switch(e.target.value){
	    	case 1:
	    		this.setState({
	    			'operate2':false,
	    			'operate3':false
	    		});
	    		break;
	    	case 2:
	    		this.setState({
	    			'operate2':true,
	    			'operate3':false
	    		});
	    		break;
	    	case 3:
	    		this.setState({
	    			'operate2':true,
	    			'operate3':true
	    		});
	    		break;
	    	default:break;
	    }
	}
	//运营位数量1 select
	select1Change = (value) =>{
		if(value!="待选择"){
			this.setState({
    			'select1':true
    		});
		}
	}
	//运营位数量2 select
	select2Change = (value) =>{
		if(value!="待选择"){
			this.setState({
    			'select2':true
    		});
		}
	}
	//运营位数量3 select
	select3Change = (value) =>{
		if(value!="待选择"){
			this.setState({
    			'select3':true
    		});
		}
	}
	//投放卡券表格展示
	showModal = () => {
	    this.setState({
	      visible:true,
	    });
	}
	//投放卡券表格点击保存
	handleOk = () => {
	    this.setState({
	      visible: false,
	    });
	}
	//投放卡券表格点击取消
	handleCancel = () => {
	    this.setState({
	      visible: false,
	    });
	}
}