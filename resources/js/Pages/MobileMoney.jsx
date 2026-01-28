// resources/js/Pages/PaymentPage.jsx

import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import axios from "axios";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { MdArrowBack } from "react-icons/md";

export default function MobileMoney() {
    const [statusMessage, setStatusMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    // Initialisation des données du formulaire
    const { data, setData, post } = useForm({
        amount: "",
        phone: "",
    });

    const handleCampayPayment = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setStatusMessage("Initiation du paiement...");

        try {
            // Appel à l'endpoint Laravel pour initier le paiement
            const response = await axios.post(
                route("api.campay.initiate"),
                data
            );
            console.log(response.data);

            if (response.data.success) {
                setStatusMessage(response.data.message);
                // Le Webhook est attendu pour la mise à jour finale du statut.
            } else {
                setStatusMessage(`❌ Erreur: ${response.data.error}`);
            }
        } catch (error) {
            setStatusMessage("❌ Erreur de connexion au serveur.");
        } finally {
            setIsProcessing(false);
        }
    };

    // Détermination de la couleur du message de statut
    const statusClasses = statusMessage.startsWith("✅")
        ? "text-green-600 font-semibold"
        : statusMessage.startsWith("❌")
        ? "text-red-600 font-semibold"
        : "text-gray-600";

    return (
        <section className="bg-gray-100 mt-32 ">
            <Link
                href="/"
                className="bg-gray-800 text-gray-200 p-2 flex items-center rounded-lg mx-auto w-max hover:bg-gray-700 cursor-pointer "
            >
                <MdArrowBack className="w-6 h-6 mr-2" />
                retour au tableau de bord
            </Link>
            <div className=" flex items-center justify-center p-4">
                <form
                    onSubmit={handleCampayPayment}
                    className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200"
                >
                    <ApplicationLogo className=" w-56 mx-auto" />

                    <p className="text-xl font-bold text-indigo-600 my-6 p-3 bg-indigo-50 rounded-lg text-center">
                        Montant de recharge : {data.amount} XAF
                    </p>

                    {/* --- Champ Montant de Recharge --- */}
                    <div className="mb-6">
                        <label
                            htmlFor="amount"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Montant de Recharge
                        </label>
                        <input
                            id="amount"
                            type="number"
                            value={data.amount}
                            onChange={(e) => setData("amount", e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Ex: 5000"
                            min="5"
                            required
                        />
                    </div>

                    {/* --- Champ Numéro de Téléphone --- */}
                    <div className="mb-6">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Numéro de Téléphone (MTN / Orange)
                        </label>
                        <input
                            id="phone"
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            pattern="[0-9]{9}" //bloqueer les caractères speciaux
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Ex: 677xxxxxx"
                            required
                        />
                    </div>

                    {/* --- Bouton de Soumission --- */}
                    <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition duration-200 ${
                            isProcessing
                                ? "bg-indigo-400 cursor-not-allowed"
                                : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }`}
                    >
                        {isProcessing ? (
                            <div className="flex items-center">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                En attente de confirmation...
                            </div>
                        ) : (
                            "Payer via Mobile Money"
                        )}
                    </button>

                    {/* --- Message de Statut --- */}
                    <p className={`mt-6 text-center text-md ${statusClasses}`}>
                        {statusMessage}
                    </p>
                </form>
            </div>
        </section>
    );
}
