import RootLayout from "@/Layouts/RootLayout";
// Assurez-vous que ces imports fonctionnent et que vos utilitaires sont bien définis.
import { formatAmount, formatDateTime } from "@/utils/utils";
import React from "react";
import {
    MdCheckCircle,
    MdCancel,
    MdOutlineAccountBalanceWallet,
    MdPhoneIphone,
    MdCalendarToday,
    MdAttachMoney,
    MdReceiptLong, // Nouvelle icône pour la référence
} from "react-icons/md";

// Composant pour afficher une transaction en mode Card (Mobile)
const TransactionCard = ({ transaction }) => {
    let type = "RECHARGE";

    const StatusBadge =
        transaction.status === 1 ? (
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full bg-green-900 text-green-300">
                <MdCheckCircle className="mr-1 text-lg" />
                Payé
            </span>
        ) : (
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full bg-red-900 text-red-300">
                <MdCancel className="mr-1 text-lg" />
                Non Payé
            </span>
        );

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border-l-4 border-indigo-500 mb-4 transition duration-150 hover:bg-gray-700">
            <div className="flex justify-between items-start mb-2">
                {/* Type et Montant (ligne principale) */}
                <div>
                    <div
                        className={`text-lg font-bold capitalize ${
                            type === "RECHARGE"
                                ? "text-green-400"
                                : "text-yellow-400"
                        }`}
                    >
                        {type}
                    </div>
                    <div className="text-2xl font-extrabold text-gray-100 flex items-center mt-1">
                        {formatAmount(transaction.amount)}
                    </div>
                </div>
                {/* Statut */}
                <div className="flex-shrink-0">{StatusBadge}</div>
            </div>

            {/* Référence */}
            <div className="text-sm text-gray-400 flex items-center mt-3 border-t border-gray-700 pt-2">
                <MdReceiptLong className="mr-2 text-indigo-500" />
                <span className="font-semibold text-gray-300">Réf:</span>{" "}
                {transaction.reference}
            </div>

            {/* Téléphone et Date */}
            <div className="grid grid-cols-2 gap-4 text-xs mt-2">
                <div className="text-gray-400 flex items-center">
                    <MdPhoneIphone className="mr-1 text-indigo-500" />
                    <span className="font-semibold text-gray-300 mr-1">
                        Tél:
                    </span>{" "}
                    {transaction.phone}
                </div>
                <div className="text-gray-400 flex items-center">
                    <MdCalendarToday className="mr-1 text-indigo-500" />
                    {formatDateTime(transaction.created_at)}
                </div>
            </div>
        </div>
    );
};

export default function TransactionsHistory({ transactions }) {
    const isEmpty = transactions.length === 0;
    let type = "RECHARGE";

    return (
        <RootLayout>
            <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-100 flex items-center">
                        <MdOutlineAccountBalanceWallet className="mr-3 text-indigo-400" />
                        Historique des Transactions
                    </h1>
                </header>

                {/* --- Gestion de l'état vide --- */}
                {isEmpty && (
                    <section className="flex flex-col items-center justify-center py-20 bg-gray-800 rounded-lg shadow-xl">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
                            alt="empty history"
                            className="w-24 h-24 mb-4 opacity-75"
                        />
                        <h2 className="text-center text-xl font-semibold text-gray-300">
                            Aucun historique de Transactions
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Vos transactions récentes apparaîtront ici.
                        </p>
                    </section>
                )}

                {!isEmpty && (
                    <>
                        {/* 1. Vue Mobile (<= sm) : Liste de Cartes */}
                        <div className="sm:hidden">
                            {transactions.map((transaction) => (
                                <TransactionCard
                                    key={transaction.id}
                                    transaction={transaction}
                                />
                            ))}
                        </div>

                        {/* 2. Vue Tablette/Desktop (>= sm) : Tableau */}
                        <div className="hidden sm:block overflow-x-auto shadow-2xl rounded-lg bg-gray-800">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead className="bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                            Type / Référence
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                            Montant / Téléphone
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                                            Statut
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-800 divide-y divide-gray-700">
                                    {transactions.map((transaction) => {
                                        return (
                                            <tr
                                                key={transaction.id}
                                                className="hover:bg-gray-700 transition duration-150"
                                            >
                                                {/* Type / Référence */}
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col">
                                                        <div
                                                            className={`text-sm font-semibold capitalize ${(type =
                                                                "RECHARGE"
                                                                    ? "text-green-400"
                                                                    : "text-yellow-400")}`}
                                                        >
                                                            {type}{" "}
                                                            {/* Utiliser transaction.type */}
                                                        </div>
                                                        <div className="text-xs text-gray-400 mt-1">
                                                            Réf: **
                                                            {
                                                                transaction.reference
                                                            }
                                                            **
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* Montant / Téléphone */}
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col">
                                                        <div className="text-sm font-bold text-gray-100 flex items-center">
                                                            <MdAttachMoney className="text-lg mr-1 text-indigo-400" />
                                                            {formatAmount(
                                                                transaction.amount
                                                            )}
                                                        </div>
                                                        <div className="text-xs text-gray-400 mt-1 flex items-center">
                                                            <MdPhoneIphone className="mr-1" />
                                                            {transaction.phone}
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* Date */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                                    <div className="flex items-center">
                                                        <MdCalendarToday className="mr-2 text-indigo-400" />
                                                        {formatDateTime(
                                                            transaction.created_at
                                                        )}
                                                    </div>
                                                </td>
                                                {/* Statut */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                                    {transaction.status ===
                                                    1 ? (
                                                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full bg-green-900 text-green-300">
                                                            <MdCheckCircle className="mr-1 text-lg" />
                                                            Payé
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full bg-red-900 text-red-300">
                                                            <MdCancel className="mr-1 text-lg" />
                                                            Non Payé
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </RootLayout>
    );
}
