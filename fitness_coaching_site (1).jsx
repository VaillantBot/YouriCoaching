import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Hero */}
      <section className="max-w-3xl text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Transforme ton physique, sans bullshit</h1>
        <p className="text-lg text-gray-600 mb-6">
          Coaching musculation + Ebook programme structuré. Résultats visibles en 30 jours pour jeunes actifs occupés.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-6 text-lg" asChild>
          <a href="#offre">Commencer maintenant</a>
        </Button>
      </section>

      {/* Offre */}
      <section id="offre" className="max-w-4xl w-full grid md:grid-cols-2 gap-6 py-12">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Coaching en ligne</h2>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2"/>Programme 100% adapté</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2"/>Suivi collectif & corrections</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2"/>Résultats rapides et mesurables</li>
            </ul>
            <p className="text-3xl font-bold mb-4">149€ / 8 semaines</p>
            <Button className="w-full py-6 text-lg" asChild>
              <a href="https://buy.stripe.com/test_12345">Rejoindre le coaching</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ebook Programme</h2>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2"/>Plan muscu clé en main</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2"/>Nutrition simple incluse</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2"/>Format PDF téléchargeable</li>
            </ul>
            <p className="text-3xl font-bold mb-4">29€</p>
            <Button className="w-full py-6 text-lg" asChild>
              <a href="https://buy.stripe.com/test_67890">Télécharger l’ebook</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Preuve sociale */}
      <section className="max-w-3xl text-center py-12">
        <h2 className="text-2xl font-bold mb-6">Ce que disent mes élèves</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">“J’ai perdu 5kg en 6 semaines, enfin un plan simple qui marche.”</Card>
          <Card className="p-4">“Je stagnais depuis 1 an, en 1 mois j’ai repris des perfs et du muscle.”</Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-gray-500 text-sm">
        © 2025 TonNomCoach. Tous droits réservés.
      </footer>
    </div>
  )
}
