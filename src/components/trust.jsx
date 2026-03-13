
import '../css/trust.css'
import whoGmp from '../assets/WHO-GMP.svg'
import iso from '../assets/ISO.svg'
import haccp from '../assets/HACCP.svg'
import gmo from '../assets/GMO.svg'

const certifications = [
	{
		id: 'who-gmp',
		imageSrc: whoGmp,
		imageAlt: 'WHO-GMP certification',
	},
	{
		id: 'iso',
		imageSrc: iso,
		imageAlt: 'ISO certification',
	},
	{
		id: 'haccp',
		imageSrc: haccp,
		imageAlt: 'HACCP certification',
	},
	{
		id: 'non-gmo',
		imageSrc: gmo,
		imageAlt: 'Non-GMO certified',
	},
]

function TrustStandards() {
	return (
		<section className="trust-section" aria-labelledby="trust-title">
			<div className="trust-inner">
				<div className="trust-header">
					<span className="trust-label">Certified Quality</span>
					<h2 id="trust-title" className="trust-title">Trusted Standards, Premium Results</h2>
				</div>

				<div className="trust-grid" role="list">
					{certifications.map((cert) => (
						<div key={cert.id} className="trust-card" role="listitem">
							<img
								src={cert.imageSrc}
								alt={cert.imageAlt}
								className="trust-icon"
								loading="lazy"
								decoding="async"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TrustStandards
