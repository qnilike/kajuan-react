import React from 'react'
import ReactDom from 'react-dom'
import {
	Radio,
	Select,
	Upload,
	Icon,
	Modal,
	Table
} from 'antd'
import Op_DATA from './OperateConfig_DATA'
import '../Less/style'
const RadioGroup = Radio.Group;
const Option = Select.Option;

const data = [{
	key: '1',
	couponType: "团购券1",
	couponName: "美团团购券1",
	couponVaild: '领券后当天有效，有效期30天',
	applyStore: ['肯德基十里河店','肯德基四惠店','肯德基十里河店','肯德基十里河店'],
	couponStock: '19',
	price: 3
}, {
	key: '2',
	couponType: "团购券2",
	couponName: "美团团购券2",
	couponVaild: '领券后当天有效，有效期30天',
	applyStore: ['肯德基十里河店','肯德基四惠店','肯德基十里河店','肯德基十里河店'],
	couponStock: '19',
	price: 4
}, {
	key: '3',
	couponType: "团购券3",
	couponName: "美团团购券3",
	couponVaild: '领券后当天有效，有效期30天',
	applyStore: ['肯德基十里河店','肯德基四惠店','肯德基十里河店','肯德基十里河店'],
	couponStock: '19',
	price: 5
}];
var selectInfo;
// 弹框选中之后，触发的发生
const rowSelection = {
	type: 'radio',
	onChange: (selectedRowKeys, selectedRows) => {
		selectInfo = selectedRows;
		//console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
			//设置模态框的宽Modal
			width: 730,
			//单选选择展示不同的运营位
			operate2: false,
			operate3: false,
			//select展示下边的配置卡券
			select1: false,
			select2: false,
			select3: false,
			select1Info: false,
			select2Info: false,
			select3Info: false,
			selectData: [],
			selectData2: [],
			selectData3: [],
			defaultValue:'待选择'

		}
	}

	render() {
		let {
			select1,
			select2,
			select3,
			select1Info,
			select2Info,
			select3Info,
			selectData,
			selectData2,
			selectData3,
			defaultValue
		} = this.state;

		return (
			<div className="content">
				{/*卡券头部--START*/}
                <div className="content-head">
                    <h2>卡券管理</h2>
                    <p className="subtit">&nbsp;&nbsp;&nbsp;卡券配置 > 运营位配置</p>
                </div>
            	{/*卡券头部--END*/}
            	{/*卡券内容--START*/}
                <div className="content-body clearfix operate-config">
                	{/*卡券内容左--START*/}
                    <div className="operate-left fl">
						<div className="operate-show">
								<div className="counpon-list">
									{
							        selectData.map((item,index) => {
							            return (
										<div style={{background:'red'}} className="counpon-simple clearfix" key={index} >
												<div className="counpon-money fl">
												<sup>￥</sup> <span > {
													item.price
												} </span> </div>
												<div className="counpon-explain fl">
													<p>{item.couponName}</p>
													<p>{item.couponVaild}</p>
												</div>					
											</div>
							            )})
							    	}
							    	{
							        selectData2.map((item,index) => {
							            return (
											<div style={{background:'green'}} className="counpon-simple clearfix" key={index} >
												<div className="counpon-money fl">
												<sup>￥</sup> <span > {
													item.price
												} </span> </div>
												<div className="counpon-explain fl">
													<p>{item.couponName}</p>
													<p>{item.couponVaild}</p>
												</div>					
											</div>
							            )})
							    	}
							    	{
							        selectData3.map((item,index) => {
							            return (
											<div style={{background:'blue'}} className="counpon-simple clearfix" key={index} >
												<div className="counpon-money fl">
												<sup>￥</sup> <span > {
													item.price
												} </span> </div>
												<div className="counpon-explain fl">
													<p>{item.couponName}</p>
													<p>{item.couponVaild}</p>
												</div>					
											</div>
							            )})
							    	}
								</div>
						</div>
                    </div>
                	{/*卡券内容左--END*/}
                	{/*卡券内容右--START*/}
                    <div className="operate-right fl">
                    	<div className="operate-bgImg">
                    		<span className="operate-rtit mb"><i>*</i>背景图</span> 
							<div className='upload'>
                    			上传
                    		</div>
						     <div className="operate-explain">
						     	<p>1.你可以上传：JPG、JPEG、PNG、GIF格式图片</p>
						     	<p>2.推荐尺寸：888 x 528 px</p>
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
								<Select defaultValue={this.state.defaultValue} style={{ width: 120 }} onChange={this.select1Change}>
							      <Option value="待选择">待选择</Option>
							      <Option value="优惠券">优惠券</Option>
							    </Select>
							    <div className="ml100">
							    	<h3 className={select1 ? "add-conpun" : "none"} onClick={this.showModal.bind(this,1)}>点击配置卡券</h3>
							    	<div className= {select1Info?"counpon-name":'none'}   >
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
								<Select defaultValue={this.state.defaultValue} style={{ width: 120 }} onChange={this.select2Change}>
							      <Option value="待选择">待选择</Option>
							      <Option value="优惠券">优惠券</Option>
							    </Select>
							    <div className="ml100">
							    	<h3 className={select2 ? "add-conpun" : "none"} onClick={this.showModal.bind(this,2)}>点击配置卡券</h3>
							    	<div className= {select2Info?"counpon-name":'none'}>
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
								<Select defaultValue={this.state.defaultValue} style={{ width: 120 }} onChange={this.select3Change}>
							      <Option value="待选择">待选择</Option>
							      <Option value="优惠券">优惠券</Option>
							    </Select>
							    <div className="ml100">
							    	<h3 className={select3 ? "add-conpun" : "none"} onClick={this.showModal.bind(this,3)}>点击配置卡券</h3>
							    	<div className= {select3Info?"counpon-name":'none'}>
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
                	{/*卡券内容右--END*/}
                </div>
				{/*卡券内容--END*/}
				{/*卡券弹出--START*/}
                <Modal title="选择要投放的卡券"  visible={this.state.visible} onOk={this.handleOk}  onCancel={this.handleCancel} okText='保存' width={this.state.width}>
					<Table  rowSelection={rowSelection} columns={Op_DATA.columns} dataSource={data} />
		        </Modal>
				{/*卡券弹出--END*/}

				
    		</div>
		);
	}

	//运营位单选按钮 选择
	onChange = (e) => {
			this.setState({
				'opreateCount': e.target.value,
			});
			switch (e.target.value) {
				case 1:
					this.setState({
						'operate2': false,
						'operate3': false,
						selectData: [],
						selectData2: [],
						selectData3: [],
						select1: false,
						select2: false,
						select3: false,
						select1Info: false,
						select2Info: false,
						select3Info: false
					});
					break;
				case 2:
					this.setState({
						'operate2': true,
						'operate3': false,
						selectData: [],
						selectData2: [],
						selectData3: [],
						select1: false,
						select2: false,
						select3: false,
						select1Info: false,
						select2Info: false,
						select3Info: false
					});
					break;
				case 3:
					this.setState({
						'operate2': true,
						'operate3': true,
						'select3': false,
						selectData: [],
						selectData2: [],
						selectData3: [],
						select1: false,
						select2: false,
						select3: false,
						select1Info: false,
						select2Info: false,
						select3Info: false
					});
					break;
				default:
					break;
			}
		}
		//运营位数量1 select
	select1Change = (value) => {

			if (value != "待选择") {
				this.setState({
					'select1': true
				});

			} else {
				this.setState({
					'select1': false
				});
			}
		}
		//运营位数量2 select
	select2Change = (value) => {
			if (value != "待选择") {
				this.setState({
					'select2': true
				});
			} else {
				this.setState({
					'select2': false
				});
			}
		}
		//运营位数量3 select
	select3Change = (value) => {

			if (value != "待选择") {
				this.setState({
					'select3': true
				});
			} else {
				this.setState({
					'select3': false
				});
			}
		}
		//投放卡券表格展示
	showModal = (index) => {
			this.setState({
				visible: true,
				index: index
			});
		}
		//投放卡券表格点击保存
	handleOk = () => {
			let {
				index,
				selectData,
				selectData2,
				selectData3,
				select1Info,			
				select2Info,
				select3Info

			} = this.state;

			switch (index) {
				case 1:
					selectData = selectInfo,
					this.setState({
						select1Info:true
					});
					break;
				case 2:
					selectData2 = selectInfo,
					this.setState({
						select2Info:true
					});
					break;
				case 3:
					selectData3 = selectInfo,
					this.setState({
						select3Info:true
					});
					break;
			}

			this.setState({
				visible: false,
				selectData: selectData,
				selectData2: selectData2,
				selectData3: selectData3
			});

		}
		//投放卡券表格点击取消
	handleCancel = () => {
		this.setState({
			visible: false,
		});
	}
}