import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import Cancell from '../../Cancell/Script/Cancell'
import Coupon from '../../Coupon/Script/Coupon'
import Layout from '../../Common/Script/Layout'

const Routes = () => (
	<Router>
	<div>
		<Layout />
		<Route exact path="/" component={Coupon} />
		<Route path="/cancell" component={Cancell} />
		</div>
	</Router>
)
export default Routes