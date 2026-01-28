import RootLayout from "@/Layouts/RootLayout";
import React, { useState } from "react";
import {
    MdPayment,
    MdArrowForward,
    MdRoomService,
    MdCheckCircle,
} from "react-icons/md";
import { IconBase } from "react-icons";

export default function BuyNumbers() {
    // États pour gérer les sélections de l'utilisateur
    const [selectedServer, setSelectedServer] = useState("");
    const [selectedService, setSelectedService] = useState("");

    const SERVERS = [
        { id: 1, name: "Royaume-Uni", value: "UK" },
        { id: 2, name: "États-Unis", value: "US" },
        { id: 3, name: "France", value: "FR" },
        { id: 4, name: "Canada", value: "CA" },
    ];
    const SERVICES = [
        { id: 1, name: "Whatsapp", price: 5000 },
        { id: 2, name: "Télégramme", price: 3000 },
        { id: 3, name: "Facebook", price: 3500 },
        { id: 4, name: "Paypal", price: 3000 },
        { id: 5, name: "tIKtok", price: 3000 },
        { id: 6, name: "Potato", price: 3000 },
        { id: 7, name: "Signal", price: 3000 },
    ];

    // Calcul du prix sélectionné
    const servicePrice =
        SERVICES.find((s) => s.name === selectedService)?.price || 0;
    const isFormValid = selectedServer && selectedService;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'achat ici (envoi des données au backend)
        if (isFormValid) {
            console.log("Achat en cours:", {
                server: selectedServer,
                service: selectedService,
                price: servicePrice,
            });
            alert(
                `Vous allez acheter un numéro pour ${selectedService} (${selectedServer}) pour XAF${servicePrice}.`
            );
        } else {
            alert("Veuillez sélectionner un serveur et un service.");
        }
    };

    return (
        <RootLayout>
            <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
                {/* Header / Call to Action */}
                <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <nav className="text-xl text-gray-400 mb-4 sm:mb-0">
                        Vous rencontrez un problème ?
                    </nav>
                    <button className="bg-purple-700 text-gray-100 font-medium px-4 py-2 rounded-xl hover:bg-purple-800 transition duration-300 shadow-lg">
                        Contactez-nous
                    </button>
                </header>

                <hr className="border-gray-700 mb-10" />

                {/* Section Principale d'Achat */}
                <section className="flex justify-center items-center">
                    <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10">
                        <h1 className="text-center text-3xl font-bold text-white mb-8">
                            Achetez votre numéro instantané
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Choix du Serveur / Pays */}
                            <div>
                                <label
                                    htmlFor="server-select"
                                    className="flex items-center text-sm font-medium text-gray-300 mb-2"
                                >
                                    <IconBase className="w-4 h-4 mr-2 text-blue-400" />
                                    Sélectionnez un serveur (Pays)
                                </label>
                                <select
                                    id="server-select"
                                    value={selectedServer}
                                    onChange={(e) =>
                                        setSelectedServer(e.target.value)
                                    }
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                >
                                    <option value="" disabled>
                                        -- Sélectionner un serveur --
                                    </option>
                                    {SERVERS.map((server) => (
                                        <option
                                            key={server.id}
                                            value={server.value}
                                        >
                                            {server.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Choix du Service */}
                            <div>
                                <label
                                    htmlFor="service-select"
                                    className="flex items-center text-sm font-medium text-gray-300 mb-2"
                                >
                                    <MdRoomService className="w-4 h-4 mr-2 text-yellow-400" />
                                    Sélectionnez un service
                                </label>
                                <select
                                    id="service-select"
                                    value={selectedService}
                                    onChange={(e) =>
                                        setSelectedService(e.target.value)
                                    }
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                                >
                                    <option value="" disabled>
                                        -- Sélectionner un service --
                                    </option>
                                    {SERVICES.map((service) => (
                                        <option
                                            key={service.id}
                                            value={service.name}
                                        >
                                            {service.name} -- XAF{" "}
                                            {service.price}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Affichage du prix et bouton d'achat */}
                            <div className="pt-4 space-y-4">
                                <div className="text-center text-lg font-semibold p-3 bg-gray-700 rounded-lg">
                                    Prix Total :{" "}
                                    <span className="text-purple-400 text-2xl ml-2">
                                        XAF{" "}
                                        {servicePrice.toLocaleString("fr-FR")}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={`w-full flex justify-center gap-3 px-5 py-3 items-center text-lg font-semibold rounded-xl transition duration-300 shadow-md ${
                                        isFormValid
                                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    <MdPayment className="w-6 h-6" />
                                    Acheter le numéro
                                </button>
                            </div>

                            {/* Indicateur de succès/disponibilité */}
                            <p className="text-center text-sm text-gray-400 pt-4">
                                <MdCheckCircle className="w-4 h-4 inline mr-1 text-green-400" />
                                Numéros disponibles instantanément.
                            </p>
                        </form>
                    </div>
                </section>

                <section className="bg-gray-800 mt-10 p-10 ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5089/5089767.png"
                        alt="no phone number"
                        className="w-40 mx-auto "
                    />
                    <p className="text-center">Pas de numéro de téléphone.</p>
                </section>
            </div>
        </RootLayout>
    );
}
