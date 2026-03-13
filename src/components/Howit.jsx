import '../css/howit.css'

/* ── Icons ── */
const SparkIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="howit-icon" aria-hidden="true">
		<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
	</svg>
)

const PulseIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="howit-icon" aria-hidden="true">
		<path d="M22 12h-4l-3 7-4-14-3 7H2" />
	</svg>
)

const TargetIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="howit-icon" aria-hidden="true">
		<circle cx="12" cy="12" r="9" />
		<circle cx="12" cy="12" r="5" />
		<circle cx="12" cy="12" r="1.5" fill="currentColor" />
	</svg>
)

/* ── Data ── */
const steps = [
	{
		id: 'activate-pathway',
		number: '01',
		title: 'Activates Metabolic Pathway',
		description: 'Berberine triggers AMPK, your cellular energy sensor that regulates glucose uptake and keeps metabolism running efficiently.',
		icon: <SparkIcon />,
		iconColor: 'teal',
	},
	{
		id: 'liver-regulation',
		number: '02',
		title: 'Supports Liver Glucose Regulation',
		description: 'Reduces excess glucose production in the liver while improving insulin receptor sensitivity for balanced blood sugar.',
		icon: <PulseIcon />,
		iconColor: 'emerald',
	},
	{
		id: 'cellular-utilization',
		number: '03',
		title: 'Enhances Cellular Glucose Utilization',
		description: 'Increases glucose transport into cells, helping maintain healthy blood sugar levels throughout the day.',
		icon: <TargetIcon />,
		iconColor: 'cyan',
	},
]

function StepConnector() {
	return <div className="howit-connector" />
}

function HowItWorks() {
	return (
		<section className="howit-section" aria-labelledby="howit-title">
			<div className="howit-inner">
				<div className="howit-header">
					<span className="howit-badge">The Science</span>
					<h2 id="howit-title" className="howit-title">How It Works</h2>
					<p className="howit-subtitle">
						A clinically validated 3-step metabolic mechanism — backed by over 200 peer-reviewed studies.
					</p>
				</div>

				<div className="howit-steps">
					{steps.map((step, idx) => (
						<div key={step.id}>
							<article className="howit-step">
								<div className="howit-step-number">{step.number}</div>

								<div className="howit-step-content">
									<div className="howit-step-header">
										<div className={`howit-step-icon howit-icon-${step.iconColor}`}>
											{step.icon}
										</div>
										<h3 className="howit-step-title">{step.title}</h3>
									</div>
									<p className="howit-step-description">{step.description}</p>
								</div>
							</article>
							{idx < steps.length - 1 && <StepConnector />}
						</div>
					))}
				</div>

				<div className="howit-footer">
					<p className="howit-footer-text">
						Backed by <strong>200+ peer-reviewed studies</strong> on berberine's metabolic effects
					</p>
					<a href="#" className="howit-btn">
						Get Started
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
