import type { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

export const metadata: Metadata = {
	title: 'Politique de confidentialité | CM360',
	description: "Politique de confidentialité de CM360 – informations sur la collecte, l'utilisation et la protection des données personnelles.",
}

export default function PrivacyPage() {
    return <PrivacyClient />
}


