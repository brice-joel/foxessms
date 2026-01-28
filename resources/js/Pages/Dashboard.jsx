import RootLayout from "@/Layouts/RootLayout";
import { Link } from "@inertiajs/react";
import { MdCreditCard, MdTag, MdPlusOne, MdBarChart } from "react-icons/md";
import Test from "./Test";
export default function Dashboard({ balance }) {
    // Les données réelles proviendraient généralement d'un état ou d'une API
    const $currency = "XAF";
    const availableBalance = $currency + balance;
    const rechargeLifeTime = "XAF0";
    const numberPurchasedLifeTime = "0";
    const referBalance = "XAF0";

    // Composant pour les cartes de résumé
    const SummaryCard = ({ icon: Icon, title, value, colorClass }) => (
        <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`p-3 rounded-full ${colorClass}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">{title}</p>
                <p className="text-xl font-semibold text-white">{value}</p>
            </div>
        </div>
    );
    return (
        <RootLayout>
            <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
                {/* Header / Breadcrumb */}
                <header className="mb-6">
                    <nav className="text-sm text-gray-400">
                        Test /{" "}
                        <span className="text-white font-medium">Main</span>
                    </nav>
                </header>

                {/* Section de la Balance Disponible */}
                <section className="bg-blue-600/80 rounded-xl p-6 mb-8 shadow-xl relative overflow-hidden">
                    {/* Forme circulaire décorative (comme sur l'image) */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-blue-700/50 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                    <div className="relative z-10">
                        <h2 className="text-sm font-light text-blue-200 mb-2">
                            Available Balance :
                        </h2>
                        <p className="text-4xl font-bold text-white mb-6">
                            {availableBalance}
                        </p>

                        <div className="flex items-center space-x-3 mb-4">
                            {/* Bouton pour ajouter (représenté par le plus et le carré) */}
                            <button className="flex items-center justify-center w-10 h-10 border border-white/50 rounded-md hover:bg-white/10 transition-colors">
                                <MdPlusOne className="w-5 h-5 text-white" />
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 border border-white/50 rounded-md hover:bg-white/10 transition-colors">
                                {/* Un carré pour la deuxième icône non spécifiée */}
                                <div className="w-3 h-3 border border-white"></div>
                            </button>
                        </div>

                        {/* Bouton "Buy Number" */}
                        <Link
                            href={route("buy-numbers")}
                            className="absolute top-6 right-6 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors shadow-lg"
                        >
                            Acheter un numéro
                        </Link>
                    </div>
                </section>

                {/* Section Sommaire */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-200 mb-4">
                        Summary
                    </h3>
                    <div className="space-y-4">
                        {/* Carte 1: Recharge - Life Time */}
                        <SummaryCard
                            icon={MdBarChart}
                            title="Recharge - Life Time"
                            value={rechargeLifeTime}
                            colorClass="bg-purple-600"
                        />

                        {/* Carte 2: Number Purchased - Life Time */}
                        <SummaryCard
                            icon={MdCreditCard}
                            title="Number Purchased - Life Time"
                            value={numberPurchasedLifeTime}
                            colorClass="bg-blue-500"
                        />

                        {/* Carte 3: Refer Balance */}
                        <SummaryCard
                            icon={MdTag}
                            title="Refer Balance"
                            value={referBalance}
                            colorClass="bg-yellow-600"
                        />
                    </div>
                </section>
            </div>
        </RootLayout>
    );
}
