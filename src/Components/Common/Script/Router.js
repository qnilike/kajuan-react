import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Cancell from '../../Cancell/Script/Cancell'
import Coupon from '../../Coupon/Script/Coupon'
import DataCount from '../../DataCount/Script/DataCount'
import AppOpen from '../../AppOpen/Script/AppOpen'
import Layout from '../../Common/Script/Layout'
import OperateConfig from '../../OperateConfig/Script/OperateConfig'
import CreateCoupon from '../../Coupon/Script/CreateCoupon'


const Routes = () => (
	<Router>
		<div>
			<Layout />
			<Route exact path="/" component={Coupon} />			
			<Route path="/cancell" component={Cancell} />
			<Route path="/datacount" component={DataCount} />
			<Route path="/appopen" component={AppOpen} />	
			<Route path="/createcoupon" component={CreateCoupon} />
			<Route path="/operateconfig" component={OperateConfig} />
		</div>
	</Router>
)
export default Routes