"use client"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/i18n/useI18n'

export default function PrivacyClient() {
	const { t } = useI18n()
	const emailLink = '<a href="mailto:info@conseilcm360.com" class="text-darkgreen underline">info@conseilcm360.com</a>'
	const splitItems = (key: string) => String(t(key)).split('\n')
    const renderTitle = (rawTitle: string, index: number) => {
		const clean = String(rawTitle).replace(/^[0-9]+\.\s*/, '')
		const num = String(index).padStart(2, '0')
		return (
			<div className="mb-2">
				<div className="text-xs uppercase tracking-widest text-gray-400">{num}</div>
                <h2 className="text-2xl font-serif font-semibold text-darkgreen privacy-underline pb-2">{clean}</h2>
			</div>
		)
	}

	return (
		<main className="font-sans text-gray-800">
			<Header />
			<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h1 className="text-4xl font-serif font-bold text-darkgreen mb-2">{t('privacy.title')}</h1>
				<p className="text-sm text-gray-500 mb-10">{t('privacy.updated')}</p>

				<p className="mb-8">{t('privacy.intro')}</p>

				<div className="space-y-10">
					<section>
					{renderTitle(t('privacy.sections.controller.title'), 1)}
						<ul className="list-disc pl-6 space-y-1">
							{splitItems('privacy.sections.controller.items').map((item, idx) => (
								<li key={`controller-${idx}`}>{item}</li>
							))}
						</ul>
					</section>

					<section>
					{renderTitle(t('privacy.sections.collected.title'), 2)}
						<ul className="list-disc pl-6 space-y-1">
							{splitItems('privacy.sections.collected.items').map((item, idx) => (
								<li key={`collected-${idx}`}>{item}</li>
							))}
						</ul>
					</section>

					<section>
					{renderTitle(t('privacy.sections.purposes.title'), 3)}
						<ul className="list-disc pl-6 space-y-1">
							{splitItems('privacy.sections.purposes.items').map((item, idx) => (
								<li key={`purposes-${idx}`}>{item}</li>
							))}
						</ul>
					</section>

					<section>
					{renderTitle(t('privacy.sections.legalBasis.title'), 4)}
						<ul className="list-disc pl-6 space-y-1">
							{splitItems('privacy.sections.legalBasis.items').map((item, idx) => (
								<li key={`legal-${idx}`}>{item}</li>
							))}
						</ul>
					</section>

					<section>
					{renderTitle(t('privacy.sections.sharing.title'), 5)}
						<p className="mb-3">{t('privacy.sections.sharing.intro')}</p>
						<ul className="list-disc pl-6 space-y-1">
							{splitItems('privacy.sections.sharing.items').map((item, idx) => (
								<li key={`sharing-${idx}`}>{item}</li>
							))}
						</ul>
					</section>

					<section>
					{renderTitle(t('privacy.sections.retention.title'), 6)}
						<ul className="list-disc pl-6 space-y-1">
							{splitItems('privacy.sections.retention.items').map((item, idx) => (
								<li key={`retention-${idx}`}>{item}</li>
							))}
						</ul>
					</section>

					<section>
					{renderTitle(t('privacy.sections.cookies.title'), 7)}
						<p>{t('privacy.sections.cookies.text')}</p>
					</section>

					<section>
					{renderTitle(t('privacy.sections.rights.title'), 8)}
						<p className="mb-3" dangerouslySetInnerHTML={{ __html: t('privacy.sections.rights.p1', { email: emailLink }) }} />
						<p>{t('privacy.sections.rights.p2')}</p>
					</section>

					<section>
					{renderTitle(t('privacy.sections.security.title'), 9)}
						<p>{t('privacy.sections.security.text')}</p>
					</section>

					<section>
					{renderTitle(t('privacy.sections.contact.title'), 10)}
						<p dangerouslySetInnerHTML={{ __html: t('privacy.sections.contact.text', { email: emailLink }) }} />
					</section>

					<section>
					{renderTitle(t('privacy.sections.changes.title'), 11)}
						<p>{t('privacy.sections.changes.text')}</p>
					</section>
				</div>
			</section>
			<Footer />
		</main>
	)
}


