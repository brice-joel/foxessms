import RootLayout from "@/Layouts/RootLayout";
import React, { useState } from "react";
import { MdContentCopy, MdPeople, MdAttachMoney } from "react-icons/md"; // Icônes de react-icons/md
import img from "@/assets/img/refer-earn.png";

// Composant pour les cartes de données de référence
const ReferDataCard = ({ icon: Icon, title, value, iconBgClass }) => (
    <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
        <div className={`p-3 rounded-full ${iconBgClass}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="ml-4">
            <p className="text-sm font-medium text-gray-400">{title}</p>
            <p className="text-xl font-semibold text-white">{value}</p>
        </div>
    </div>
);

function ReferEarn() {
    // URL de référence statique pour l'exemple
    const referralLink =
        "https://foxessms.com/register?ref_id=axj1mq8snq149obkiow3kbk44q8";

    // Données réelles
    const totalReferredUser = "0";
    const totalTransferAmount = "XAF0";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        alert("Lien copié dans le presse-papiers !");
    };

    return (
        <RootLayout>
            <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
                {/* Header / Breadcrumb */}
                <header className="mb-6">
                    <nav className="text-sm text-gray-400">
                        Dashboard /{" "}
                        <span className="text-white font-medium">
                            Refer & Earn
                        </span>
                    </nav>
                </header>

                <h1 className="text-3xl font-bold text-white mb-8">
                    Refer & Earn
                </h1>

                {/* Section du Lien de Parrainage et Image */}
                <section className="bg-gray-800 rounded-xl p-6 mb-8 shadow-2xl flex flex-col items-center">
                    {/* Image de promotion (simulée par une balise img) */}
                    <div className="mb-6 w-full max-w-xs h-auto">
                        {/* Remplacez ceci par votre image réelle si elle est servie depuis le web */}
                        <img
                            src={img}
                            alt="Refer a Friend Banner"
                            className="w-48 h-48  object-contain"
                        />
                    </div>

                    {/* Champ du lien de parrainage */}
                    <div className="w-full flex bg-gray-900 border border-gray-700 rounded-lg overflow-hidden max-w-xl">
                        <input
                            type="text"
                            value={referralLink}
                            readOnly
                            className="flex-grow p-3 bg-transparent text-gray-300 truncate outline-none"
                        />
                        <button
                            onClick={handleCopy}
                            className="flex-shrink-0 p-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-150"
                            title="Copier le lien"
                        >
                            <MdContentCopy className="w-6 h-6 text-gray-300" />
                        </button>
                    </div>
                </section>

                {/* Section Instructions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                        Instructions
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                        <li>Copiez et partagez votre lien.</li>
                        <li>
                            Chaque fois que votre ami s'inscrit en utilisant
                            votre lien et dépose de l'argent...
                        </li>
                        <li>
                            Vous recevrez **2%** du montant déposé dans votre
                            portefeuille de référence.
                        </li>
                        <li>
                            Vous pouvez utiliser directement ce solde pour
                            acheter des numéros.
                        </li>
                    </ul>
                </section>

                {/* Section Données de Référence */}
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                        Refer Data
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Carte 1: Utilisateurs Référencés */}
                        <ReferDataCard
                            icon={MdPeople}
                            title="Total Referred User"
                            value={totalReferredUser}
                            iconBgClass="bg-indigo-600"
                        />

                        {/* Carte 2: Montant Transféré */}
                        <ReferDataCard
                            icon={MdAttachMoney}
                            title="Total Transfer Amount"
                            value={totalTransferAmount}
                            iconBgClass="bg-blue-600"
                        />
                    </div>
                </section>
            </div>
        </RootLayout>
    );
}

export default ReferEarn;
