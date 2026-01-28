import Modal from "@/Components/modal/index";
import RootLayout from "@/Layouts/RootLayout";
import { Link, router } from "@inertiajs/react";
import axios from "axios";
import React, { useState } from "react";
import { MdArrowForward, MdArrowBack, MdMoney, MdHelp } from "react-icons/md";
import mobileMoneyImg from "@/assets/img/mobile-money.jpg";
import visaMastercardImg from "@/assets/img/visa-mastercard.png";

// Composant pour la carte de sélection du mode de paiement
const PaymentMethodCard = ({ title, description, iconSrc, link }) => (
    <Link
        href={link}
        target="_blank"
        className="flex items-center justify-between w-full p-4 sm:p-6 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 transition duration-300 border border-gray-600 hover:border-purple-500 cursor-pointer text-left"
    >
        <div className="flex items-center">
            {/* Image/Icône du mode de paiement */}
            <div className="w-16 h-16 mr-4 flex-shrink-0">
                <img
                    src={iconSrc}
                    alt={title}
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>

            {/* Détails du mode de paiement */}
            <div>
                <p className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {title}
                </p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>

        {/* Flèche d'action */}
        <MdArrowForward className="w-6 h-6 text-purple-400 flex-shrink-0 ml-4" />
    </Link>
);

function Recharge() {
    return (
        <RootLayout>
            <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
                {/* Header / Call to Action */}
                <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <button
                            onClick={() => alert("Retour...")}
                            className="mr-3 p-2 rounded-full hover:bg-gray-800 transition duration-150"
                        >
                            <MdArrowBack className="w-6 h-6 text-gray-400" />
                        </button>
                        <h1 className="text-2xl font-bold text-white flex items-center">
                            <MdMoney className="w-6 h-6 mr-2 text-green-400" />
                            Recharge de Compte
                        </h1>
                    </div>

                    <button className="flex items-center bg-purple-700 text-gray-100 font-medium px-4 py-2 rounded-xl hover:bg-purple-800 transition duration-300 shadow-lg">
                        <MdHelp className="w-4 h-4 mr-2" />
                        Contactez-nous
                    </button>
                </header>

                <hr className="border-gray-700 mb-10" />

                {/* Section de Sélection de Paiement */}
                <section className="flex justify-center">
                    <div className="w-full max-w-xl">
                        <h2 className="text-center text-xl sm:text-2xl font-semibold text-white mb-8">
                            Sélectionnez un moyen de paiement
                        </h2>

                        {/* Conteneur des cartes de paiement */}
                        <div className="space-y-6">
                            <PaymentMethodCard
                                title="Mobile Money (Orange & MTN)"
                                description="Paiement instantané via Orange Money et MTN Mobile Money."
                                iconSrc={mobileMoneyImg} // Utilisez l'URL fournie
                                link={route("payment.recharge.mobile-money")}
                            />

                            {/* Exemple d'un autre mode de paiement */}
                            <PaymentMethodCard
                                title="Carte Bancaire (Visa/Mastercard)"
                                description="Paiement sécurisé par carte de crédit ou de débit."
                                iconSrc={visaMastercardImg}
                                link={"#"}
                            />

                            {/* Vous pouvez ajouter d'autres modes ici... */}
                        </div>
                    </div>
                </section>
            </div>
        </RootLayout>
    );
}

export default Recharge;
