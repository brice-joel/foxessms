import ApplicationLogo from "@/Components/ApplicationLogo";
import React from "react";
import {
    MdDashboard,
    MdCall,
    MdLocationOn,
    MdEmail,
    MdPeople,
    MdPhoneIphone,
    MdLanguage,
    MdAttachMoney,
} from "react-icons/md";

// Définition des données
const COMPANY_NAME = "FOXESSMS"; // J'utilise un nom fictif cohérent
const PARTNERS = [
    { name: "Orange", logo: "bg-orange-600", icon: MdPhoneIphone },
    { name: "MTN", logo: "bg-yellow-500", icon: MdPhoneIphone },
    { name: "Mesomb", logo: "bg-blue-600", icon: MdAttachMoney },
];

const SERVICES = [
    {
        name: "Numéros USA",
        description: "Accès immédiat aux numéros virtuels des États-Unis.",
        icon: MdLanguage,
        color: "text-blue-400",
    },
    {
        name: "Numéros France",
        description: "Numéros français pour vérifications et inscriptions.",
        icon: MdLanguage,
        color: "text-red-400",
    },
    {
        name: "Numéros UK",
        description: "Numéros du Royaume-Uni disponibles instantanément.",
        icon: MdLanguage,
        color: "text-purple-400",
    },
    {
        name: "Autres Pays",
        description:
            "Des numéros pour de nombreux autres pays disponibles sur demande.",
        icon: MdLanguage,
        color: "text-green-400",
    },
];

// --- Composant Principal ---

function Welcome() {
    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            {/* 1. Entête & Navigation (Responsive) */}
            <header className="bg-gray-800 shadow-md sticky top-0 z-50">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center flex-wrap ">
                    <ApplicationLogo className=" mx-auto w-48 mb-5" />
                    <nav>
                        <a
                            href="/dashboard"
                            className="flex items-center w-max bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 shadow-lg"
                        >
                            <MdDashboard className="mr-2 w-5 h-5" />
                            Se connecter au Dashboard
                        </a>
                    </nav>
                </div>
            </header>

            {/* 2. Section de Bienvenue (Hero) */}
            <section className="bg-gray-900 py-16 sm:py-24 text-center border-b border-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-lg text-gray-400 mb-3">
                        Bienvenue chez {COMPANY_NAME}
                    </p>
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
                        Votre Portail pour les{" "}
                        <span className="text-purple-500">
                            Numéros Virtuels
                        </span>{" "}
                        Simples et Rapides
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Obtenez des numéros de téléphone virtuels instantanément
                        pour les vérifications, inscriptions ou communications
                        internationales.
                    </p>
                    <a
                        href="/buy-numbers"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Acheter un Numéro Maintenant
                    </a>
                </div>
            </section>

            {/* 3. Section des Services (Responsive Grid) */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Nos Services de Numéros Virtuels
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-purple-500"
                            >
                                <div className={`${service.color} mb-4`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {service.name}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Section Partenaires (Responsive) */}
            <section className="py-16 bg-gray-800 border-t border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Nos Partenaires de Confiance
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                        {PARTNERS.map((partner, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 sm:p-6 rounded-xl hover:bg-gray-700 transition duration-300 w-32 sm:w-40"
                            >
                                <div
                                    className={`p-4 rounded-full ${partner.logo}`}
                                >
                                    <partner.icon className="w-8 h-8 text-white" />
                                </div>
                                <p className="mt-3 text-lg font-medium text-gray-300">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Section Contact (Footer) */}
            <footer className="py-12 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Contactez-nous
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <MdLocationOn className="w-8 h-8 text-purple-500 mb-2" />
                            <p className="font-semibold text-white">
                                Localisation
                            </p>
                            <p className="text-gray-400">Yaoundé, Cameroun</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <MdCall className="w-8 h-8 text-purple-500 mb-2" />
                            <p className="font-semibold text-white">
                                Téléphone
                            </p>
                            <p className="text-gray-400">+237 XXX XXX XXX</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <MdEmail className="w-8 h-8 text-purple-500 mb-2" />
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-gray-400">
                                contact@
                                {COMPANY_NAME.toLowerCase().replace(" ", "")}
                                .com
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500">
                        © {new Date().getFullYear()} {COMPANY_NAME}. Tous droits
                        réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Welcome;
