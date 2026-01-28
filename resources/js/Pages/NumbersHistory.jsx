import RootLayout from "@/Layouts/RootLayout";
import React from "react";

function NumbersHistory() {
    return (
        <RootLayout>
            <section className="flex flex-col items-center justify-center h-screen bg-gray-900">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
                    alt="empty history"
                    className=""
                />
                <h2 className="text-center text-gray-300">
                    Aucun historique de numéros
                </h2>
            </section>
        </RootLayout>
    );
}

export default NumbersHistory;
