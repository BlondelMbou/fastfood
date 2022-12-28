import React from 'react';

import './footer.css';
import call from '../../assets/images/call.png';
import pin from '../../assets/images/pin.png';
import clock from '../../assets/images/clock.png';
import email from '../../assets/images/email.png';

function Footer() {
	return (
		<footer>
			<div class="services_list">
				<div class="service">
					<img src={clock} alt="" />
					<h2 className="little-title">Ouverture</h2>
					<p className="txt">10h30 à 23h45</p>
					<p className="txt">23h45 à 9h30</p>
				</div>

				<div class="service">
					<img src={pin} alt="" />
					<h2 className="little-title">Adresses</h2>
					<p className="txt">France-Paris</p>
					<p className="txt">Cameroun-Mbouda</p>
				</div>
				<div class="service">
					<img src={email} alt="" />
					<h2 className="little-title">Emails</h2>
					<p className="txt">email@gmail.com</p>
					<p className="txt">your.dish@gmail.com</p>
				</div>
				<div class="service">
					<img src={call} alt="" />
					<h2 className="little-title">Numbers</h2>
					<p className="txt">+33 54454544</p>
					<p className="txt">+33 45687515</p>
				</div>

				<hr />
			</div>
		</footer>
	);
}

export default Footer;
