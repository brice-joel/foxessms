// RootLayout.jsx
import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react"; // Si vous utilisez Inertia.js
import {
    MdDashboard,
    MdPhoneIphone,
    MdSync,
    MdFormatListNumbered,
    MdPeople,
    MdHistory,
    MdCreditCard,
    MdCode,
    MdSupportAgent,
    MdGroupAdd,
    MdLightMode,
    MdDarkMode,
    MdMenu,
    MdClose,
    MdLogout,
    MdPerson,
    MdContactPhone,
    MdContactEmergency,
    MdPhone,
    MdMail,
} from "react-icons/md";
import AuthenticatedLayout from "./AuthenticatedLayout";
import toast, { Toaster } from "react-hot-toast";
import ApplicationLogo from "@/Components/ApplicationLogo";

const RootLayout = ({ children, authUser = null }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark"); // 'dark' ou 'light'
    const user = usePage().props.auth.user;

    useEffect(() => {
        // Appliquer le thème au document HTML
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const navItems = [
        { name: "Dashboard", icon: <MdDashboard />, href: "/dashboard" },
        {
            name: "Buy Numbers",
            icon: <MdPhoneIphone />,
            href: "/buy-numbers",
            category: "SERVICES",
        },
        {
            name: "Recharge",
            icon: <MdSync />,
            href: "/recharge",
            category: "SERVICES",
        },
        {
            name: "Otp Format",
            icon: <MdFormatListNumbered />,
            href: "/dashboard",
            category: "SERVICES",
        },
        {
            name: "Refer & Earn",
            icon: <MdPeople />,
            href: "/refer-earn",
            category: "SERVICES",
        },
        {
            name: "Historiques des numéros",
            icon: <MdHistory />,
            href: "/numbers-history",
            category: "Historique",
        },
        {
            name: "Transaction History",
            icon: <MdCreditCard />,
            href: "/transactions-history",
            category: "Historique",
        },
        {
            name: "Api Tools",
            icon: <MdCode />,
            href: "/api-tools",
            category: "DEVELOPER TOOL",
        },
        {
            name: "Contact Us",
            icon: <MdSupportAgent />,
            href: "https://wa.me/237696031156", //redirect in whatsapp phone number (237696031156)
            category: "SUPPORTS",
        },
        {
            name: "Join Channel",
            icon: <MdGroupAdd />,
            href: "/join-channel",
            category: "SUPPORTS",
        },
    ];

    const getProfilePicture = (user) => {
        // Remplacez par la logique réelle pour récupérer l'image de profil
        return (
            user?.profile_picture_url || "https://www.gravatar.com/avatar/?d=mp"
        ); // Gravatar par défaut
    };

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        } else if (flash.error) {
            toast.error(flash.error);
        } else if (flash.message) {
            toast(flash.message); // Pour un message standard
        }
    }, [flash]);

    return (
        <div className="flex h-screen text-gray-200 bg-gray-900 dark:bg-gray-900  dark:text-gray-100 font-sans">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-gray-200 dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
                    {/* Logo de l'entreprise */}
                    <div className="">
                        <ApplicationLogo className="w-full " />
                    </div>
                    {/* Bouton de fermeture pour mobile */}
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden  hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                    >
                        <MdClose className="w-6 h-6" />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.category &&
                                (index === 0 ||
                                    item.category !==
                                        navItems[index - 1]?.category) && (
                                    <h3 className="text-xs font-bold text-purple-400 italic uppercase  mt-4 mb-2 px-3">
                                        {item.category}
                                    </h3>
                                )}
                            <Link
                                href={item.href}
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg  dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                onClick={() => setIsSidebarOpen(false)} // Fermer la sidebar après clic sur mobile
                            >
                                {item.icon}
                                <span className="font-medium text-sm">
                                    {item.name}
                                </span>
                            </Link>
                        </React.Fragment>
                    ))}

                    <span>
                        <a
                            href="https://wa.me/237696031156"
                            target="_blank"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        >
                            <MdSupportAgent /> Contact us
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://wa.me/237696031156"
                            target="_blank"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        >
                            <MdGroupAdd /> Join Channel
                        </a>
                    </span>
                </nav>
            </aside>

            <div className="flex flex-col flex-1 lg:ml-64">
                {/* Header */}
                <header className="flex items-center justify-between h-16 px-6 bg-gray-700 text-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-40">
                    <div className="flex items-center space-x-4">
                        {/* Bouton pour ouvrir la sidebar sur mobile */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                        >
                            <MdMenu className="w-6 h-6" />
                        </button>
                        {/* Titre ou chemin de navigation (vous pouvez l'ajouter ici) */}
                        <h1 className="text-lg font-semibold  dark:text-white">
                            Dashboard
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Solde utilisateur */}
                        <div className="px-3 py-1 bg-indigo-500  rounded-full text-sm font-medium  sm:block">
                            {user.balance + " FCFA"}
                        </div>

                        {/* Bouton Light/Dark Mode */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <MdLightMode className="w-6 h-6" />
                            ) : (
                                <MdDarkMode className="w-6 h-6" />
                            )}
                        </button>

                        {/* Menu de profil */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setIsProfileMenuOpen(!isProfileMenuOpen)
                                }
                                className="flex items-center p-0.5 rounded-full ring-2 ring-indigo-400 dark:ring-indigo-600 focus:outline-none focus:ring-opacity-75 transition-all duration-200"
                                aria-label="Menu utilisateur"
                            >
                                <img
                                    className="h-9 w-9 rounded-full object-cover"
                                    src={getProfilePicture(user)}
                                    alt="Photo de profil"
                                />
                            </button>

                            {isProfileMenuOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl py-1 z-50"
                                    onClick={() => setIsProfileMenuOpen(false)} // Fermer le menu au clic
                                >
                                    {user && (
                                        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-600">
                                            <p className="font-semibold">
                                                {user.name || "Utilisateur"}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {user.email}
                                            </p>
                                        </div>
                                    )}
                                    <Link
                                        href={route("buy-numbers")} // Ajustez votre route de profil
                                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        <MdMail className="w-5 h-5" />
                                        <span>Buy Numbers</span>
                                    </Link>
                                    <Link
                                        href="/profile" // Ajustez votre route de profil
                                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        <MdPerson className="w-5 h-5" />
                                        <span>Profil</span>
                                    </Link>
                                    <Link
                                        href="/logout" // Ajustez votre route de déconnexion
                                        method="post" // Important pour Inertia.js (si déconnexion POST)
                                        as="button"
                                        className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-600 border-t border-gray-100 dark:border-gray-600"
                                    >
                                        <MdLogout className="w-5 h-5" />
                                        <span>Se déconnecter</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Contenu principal */}
                <Toaster position="top-right" />
                <main className="flex-1 p-0 overflow-auto">{children}</main>
            </div>
        </div>
    );
};

export default RootLayout;
