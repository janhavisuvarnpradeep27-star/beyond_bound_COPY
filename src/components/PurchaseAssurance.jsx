import '../css/purchaseAssurance.css'

const assurances = [
	{
		id: 'rating',
		title: '4.8/5 Rating',
		subtitle: '10,000+ Customers',
		copyWidth: '188.53px',
		icon: (
			<svg viewBox="0 0 32 32" className="pas-icon pas-icon--star" aria-hidden="true">
				<path d="M16 4.6l3.56 7.22 7.97 1.16-5.77 5.62 1.36 7.93L16 22.8 8.88 26.53l1.36-7.93-5.77-5.62 7.97-1.16L16 4.6z" />
			</svg>
		),
	},
	{
		id: 'checkout',
		title: 'Secure Checkout',
		subtitle: '256-bit SSL Encrypted',
		copyWidth: '218.7px',
		icon: (
			<svg viewBox="0 0 32 32" className="pas-icon pas-icon--shield" aria-hidden="true">
				<path d="M16 4.3 24.2 7v8.1c0 5-3.36 9.54-8.2 11-4.84-1.46-8.2-6-8.2-11V7L16 4.3z" />
			</svg>
		),
	},
	{
		id: 'shipping',
		title: 'Fast Shipping',
		subtitle: 'Delivered in 3-5 Days',
		copyWidth: '207.63px',
		icon: (
			<svg viewBox="0 0 32 32" className="pas-icon pas-icon--truck" aria-hidden="true">
				<path d="M3.8 8.2h15.8v14.3H3.8z" />
				<path d="M19.6 11.8h6.3l2.3 3v7.7h-8.6z" />
				<circle cx="10.4" cy="24.1" r="2.8" />
				<circle cx="22.8" cy="24.1" r="2.8" />
			</svg>
		),
	},
	{
		id: 'promise',
		title: '30-Day Promise',
		subtitle: 'Full Satisfaction Guarantee',
		copyWidth: '258.18px',
		icon: (
			<svg viewBox="0 0 32 32" className="pas-icon pas-icon--promise" aria-hidden="true">
				<path d="M7.4 8.7V4.9M7.4 4.9 3.8 8.5M7.4 4.9h4" />
				<path d="M24.6 23.3v3.8m0 0 3.6-3.6m-3.6 3.6h-4" />
				<path d="M7.3 16c0-4.8 3.9-8.7 8.7-8.7 3.2 0 6.14 1.76 7.66 4.54" />
				<path d="M24.7 16c0 4.8-3.9 8.7-8.7 8.7-3.2 0-6.14-1.76-7.66-4.54" />
			</svg>
		),
	},
]

function PurchaseAssurance() {
	return (
		<section className="pas-section" aria-label="Customer assurance highlights">
			<div className="pas-container" role="list">
				{assurances.map((item) => (
					<div key={item.id} className="pas-item" role="listitem">
						<div className="pas-icon-wrap">{item.icon}</div>
						<div className="pas-copy" style={{ width: item.copyWidth }}>
							<p className="pas-title">{item.title}</p>
							<p className="pas-subtitle">{item.subtitle}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default PurchaseAssurance
